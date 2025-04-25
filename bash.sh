#!/usr/bin/env bash
set -euo pipefail

echo "2️⃣  Deleting zero-byte/corrupt object files"
find .git/objects/ -type f -empty -delete -print

echo "3️⃣  Removing broken refs"
rm -f .git/refs/heads/main
rm -f .git/HEAD

echo "4️⃣  Recreating HEAD → refs/heads/main (unborn branch)"
echo 'ref: refs/heads/main' > .git/HEAD

echo "5️⃣  Rediscovering dangling commits via fsck --lost-found"
# fsck --lost-found prints "dangling commit <hash>" lines
mapfile -t dangling < <(git fsck --full --lost-found \
  2>/dev/null | awk '/dangling commit/ {print $3}')

if [ ${#dangling[@]} -eq 0 ]; then
  echo "⚠️  No dangling commits found! Exiting."
  exit 1
fi

echo "   Found ${#dangling[@]} dangling commits:"
printf "    %s\n" "${dangling[@]}"

echo "   Building parent list…"
parents=()
for c in "${dangling[@]}"; do
  while read -r parent; do
    parents+=("$parent")
  done < <(git cat-file -p "$c" 2>/dev/null \
             | awk '/^parent/ {print $2}')
done

echo "   Identifying the tip commit (one that is no one's parent)…"
TIP=""
for c in "${dangling[@]}"; do
  if ! printf '%s\n' "${parents[@]}" | grep -qx "$c"; then
    TIP=$c
    break
  fi
done

if [ -z "$TIP" ]; then
  echo "❌  Couldn't locate a tip commit. Exiting."
  exit 1
fi
echo "   ⇒ Will restore main at: $TIP"

echo "6️⃣  Pointing main at $TIP"
git update-ref refs/heads/main "$TIP"

echo "7️⃣  Checking out main"
git checkout main

echo "8️⃣  Committing your current working tree as a new child"
git add -A
git commit -m "🛠️ Restore working state after corruption"

echo "9️⃣  Final integrity check"
git fsck --full

echo
echo "✅ All done! Here’s your full history:"
git log --oneline --graph --decorate --all
