import { useEffect } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Cover from '@/components/shared/cover';
import Grid from '@/components/shared/grid';
import { MAX_LIMIT } from '@/constants/api.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import BooksSkeleton from '@/features/books/components/books-skeleton';
import { useInfiniteGetBooksQuery } from '@/generated/graphql';
import { User_Book_Status_Types_Enum } from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

import { useInView } from 'react-intersection-observer';

interface UserBooksListProps {
    status: User_Book_Status_Types_Enum | 'all';
}

export default function UserBooksList({ status }: UserBooksListProps) {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const { ref, inView } = useInView();

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteGetBooksQuery(
        {
            where: {
                user_book_statuses: {
                    user_id: { _eq: userId },
                    ...(status !== 'all' && { status: { _eq: status } })
                }
            },
            limit: MAX_LIMIT
        },
        {
            enabled: !!userId,
            initialPageParam: 0,
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.books.length < MAX_LIMIT) return undefined;
                return pages.length * MAX_LIMIT;
            }
        }
    );

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isLoading) return <BooksSkeleton />;

    const books = data?.pages.flatMap((page) => page.books) || [];

    if (books.length === 0) {
        return <div>No books found</div>;
    }

    return (
        <>
            <Grid>
                {books.map((book) => (
                    <Link key={book.id} href={`/dashboard/${OBJECT_TYPE.BOOK.path}/${book.id}`} scroll={false}>
                        <Cover image={book.cover} title={book.title} />
                    </Link>
                ))}
            </Grid>
            <div ref={ref} className='h-4 w-full' />
            {isFetchingNextPage && <BooksSkeleton />}
        </>
    );
}
