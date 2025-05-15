import { useState } from 'react';

import { useParams } from 'next/navigation';

import { DataTable } from '@/components/ui/data-table';
import {
    Report_Votes_Constraint,
    Report_Votes_Update_Column,
    useDeleteReportMutation,
    useGetReportsQuery,
    useInsertReportVoteMutation
} from '@/generated/graphql';
import { Object_Types_Enum, Order_By } from '@/generated/graphql';
import { useIsModerator } from '@/hooks/use-is-moderator';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import { useNhostClient } from '@nhost/nextjs';
import { ColumnDef, SortingState } from '@tanstack/react-table';

import dayjs from 'dayjs';
import { ThumbsDown, ThumbsUp, Trash } from 'lucide-react';
import { toast } from 'sonner';

export default function MovieReports() {
    const params = useParams<{ id: string }>();
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sorting, setSorting] = useState<SortingState>([]);
    const isModerator = useIsModerator();
    const nhost = useNhostClient();

    const { data, isLoading, refetch } = useGetReportsQuery(
        {
            where: {
                object_id: {
                    _eq: params?.id
                },
                object_type: {
                    _eq: Object_Types_Enum.Movie
                }
            },
            limit: pageSize,
            offset: pageIndex * pageSize,
            order_by: [
                {
                    report_votes_aggregate: {
                        sum: {
                            vote: Order_By.Desc
                        }
                    }
                }
            ]
        },
        {
            queryKey: ['GetReports', params?.id],
            enabled: !!params?.id
        }
    );

    const insertVoteMutation = useInsertReportVoteMutation();
    const deleteReportMutation = useDeleteReportMutation({
        onMutate: () => {
            nhost.setRole('moderator');
        },
        onSuccess: () => {
            toast.success('Report deleted successfully');
            nhost.setRole('user');
            refetch();
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to delete report');
        },
        onSettled: () => {
            nhost.setRole('user');
        }
    });

    const handleVote = async (reportId: string, vote: number) => {
        try {
            await insertVoteMutation.mutateAsync({
                object: {
                    report_id: reportId,
                    vote
                },
                on_conflict: {
                    constraint: Report_Votes_Constraint.ReportVotesReportIdUserIdKey,
                    update_columns: [Report_Votes_Update_Column.Vote]
                }
            });

            await refetch();
        } catch (error) {
            console.error('Error voting on report:', error);
        }
    };

    const handleDeleteReport = async (reportId: string) => {
        try {
            await deleteReportMutation.mutateAsync({
                where: {
                    id: {
                        _eq: reportId
                    }
                }
            });
        } catch (error) {
            console.error('Error deleting report:', error);
        }
    };

    const reports = data?.reports || [];
    const totalCount = data?.reports_aggregate?.aggregate?.count || 0;

    const columns: ColumnDef<(typeof reports)[number]>[] = [
        {
            accessorKey: 'reason',
            header: 'Reason',
            cell: ({ row }) => <div className='font-medium'>{row.original.reason}</div>
        },
        {
            accessorKey: 'details',
            header: 'Details',
            cell: ({ row }) => (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div>{row.original.details}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{row.original.details}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )
        },
        {
            accessorKey: 'created_at',
            header: 'Reported At',
            cell: ({ row }) => (
                <div className='text-muted-foreground'>
                    {row.original.created_at ? dayjs(row.original.created_at).format('MMM D, YYYY') : 'Unknown date'}
                </div>
            )
        },
        {
            accessorKey: 'report_votes',
            header: 'Votes',
            cell: ({ row }) => {
                const votes = row.original.report_votes.reduce((acc, curr) => acc + curr.vote, 0);
                return <Badge variant={votes > 0 ? 'destructive' : 'secondary'}>{votes} votes</Badge>;
            }
        }
    ];

    const renderRowActions = (row: (typeof reports)[number]) => {
        return (
            <div className='flex items-center gap-2'>
                <Button variant='ghost' size='icon' onClick={() => handleVote(row.id, 1)} className='h-8 w-8'>
                    <ThumbsUp className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='icon' onClick={() => handleVote(row.id, -1)} className='h-8 w-8'>
                    <ThumbsDown className='h-4 w-4' />
                </Button>
                {isModerator && (
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this report? This action cannot be undone.')) {
                                handleDeleteReport(row.id);
                            }
                        }}
                        className='text-destructive hover:text-destructive h-8 w-8'>
                        <Trash className='h-4 w-4' />
                    </Button>
                )}
            </div>
        );
    };

    if (isLoading) {
        return <div>Loading reports...</div>;
    }

    if (reports.length === 0) {
        return <div>No reports for this movie</div>;
    }

    return (
        <div className='space-y-4'>
            <DataTable
                columns={columns}
                data={reports}
                pageIndex={pageIndex}
                pageSize={pageSize}
                totalRows={totalCount}
                sorting={sorting}
                isLoading={isLoading}
                onSortingChange={setSorting}
                onPageChange={setPageIndex}
                onPageSizeChange={setPageSize}
                renderRowActions={renderRowActions}
            />
        </div>
    );
}
