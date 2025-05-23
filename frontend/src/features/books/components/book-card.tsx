'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Cover from '@/components/shared/cover';
import { useIncrementBookViews } from '@/features/books/hooks/use-increment-book-views';
import { GetBooksQuery } from '@/generated/graphql';

export function BookCard({ book }: { book: GetBooksQuery['books'][number] }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementBookViews(book.id);

    if (!book) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: book.id });
        router.push(`/dashboard/books/${book.id}`);
    };

    return (
        <Link href={`/dashboard/books/${book.id}`} scroll={false} onClick={handleClick}>
            <Cover title={book.title} image={book.cover} />
        </Link>
    );
}
