'use client';

import { Fragment, useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Cover from '@/components/shared/cover';
import Grid from '@/components/shared/grid';
import { MAX_LIMIT } from '@/constants/api.constant';
import BooksSidebar from '@/features/books/components/books-sidebar';
import BooksSkeleton from '@/features/books/components/books-skeleton';
import { useBookFilters } from '@/features/books/hooks/use-book-filters';
import { useIncrementBookViews } from '@/features/books/hooks/use-increment-book-views';
import { GetBooksQuery, useInfiniteGetBooksQuery } from '@/generated/graphql';

import { useInView } from 'react-intersection-observer';

function BookCard({ book }: { book: GetBooksQuery['books'][number] }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementBookViews(book.id);

    if (!book) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: book.id });
        router.push(`books/${book.id}`);
    };

    return (
        <Link href={`books/${book.id}`} scroll={false} onClick={handleClick}>
            <Cover title={book.title} image={book.cover} />
        </Link>
    );
}

export default function BooksPage() {
    const { where, order_by } = useBookFilters();

    const vars = useMemo(() => ({ where, order_by, limit: MAX_LIMIT }), [where, order_by]);

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetBooksQuery(vars, {
        initialPageParam: { offset: 0 },
        getPreviousPageParam: (_firstPage, pages) => {
            const prevPage = pages.length - 1;
            return prevPage > 0 ? { offset: prevPage * MAX_LIMIT } : undefined;
        },
        getNextPageParam: (lastPage, pages) => {
            const nextOffset = pages.length * MAX_LIMIT;
            return lastPage.books.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
        }
    });

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    const allBooks = useMemo(() => {
        return data?.pages.flatMap((page) => page.books) || [];
    }, [data]);

    if (isLoading) return <BooksSkeleton />;

    return (
        <Fragment>
            <div className='mb-5 flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>Discover</h2>
                    <p>Explore a wide-range of books with filters and sorting options.</p>
                </div>
                <BooksSidebar />
            </div>

            <Grid>
                {allBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </Grid>
            <div ref={loadMoreRef} />
        </Fragment>
    );
}
