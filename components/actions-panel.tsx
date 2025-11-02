import { EllipsisIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { matchRoute } from '@/lib/helpers/strings/strings'
import { useAuthStore } from '@/lib/stores/auth.store'

const ENABLED_ROUTES = ['/:route/:id']

export default function ActionsPanel() {
    const pathname = usePathname()
    const user = useAuthStore(s => s.user)
    const isAdmin = user?.roles.includes('admin')

    if (!matchRoute(pathname, ENABLED_ROUTES)) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm">
                    <EllipsisIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-66">
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href={`${pathname}/edit`}>
                            Edit<DropdownMenuShortcut>⌘ + E</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                        <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => {}}>
                                Delete <DropdownMenuShortcut>⌘ + D</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
