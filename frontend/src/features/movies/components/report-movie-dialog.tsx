import ReportDialog, { ReportFormValues } from '@/components/shared/report-dialog';
import { Object_Types_Enum, Reports_Constraint, useInsertReportMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { useMovie } from './movie-provider';
import { toast } from 'sonner';

export default function ReportMovieDialog() {
    const queryClient = useQueryClient();
    const { movie } = useMovie();

    const { mutateAsync: insertMovieReport } = useInsertReportMutation({
        onSuccess: () => {
            toast.success('Movie reported successfully');
            queryClient.invalidateQueries({ queryKey: ['GetReports', movie?.id] });
        },
        onError: (error: Error) => toast.error(error.message)
    });

    if (!movie) return null;

    const handleSubmitReport = async (reportData: ReportFormValues) => {
        await insertMovieReport({
            object: {
                object_id: movie.id,
                object_type: Object_Types_Enum.Movie,
                reason: reportData.reason,
                details: reportData.details,
                report_votes: {
                    data: [
                        {
                            vote: 1
                        }
                    ]
                }
            },
            on_conflict: {
                constraint: Reports_Constraint.ReportsPkey
            }
        });
    };

    return <ReportDialog onSubmitReport={handleSubmitReport} />;
}
