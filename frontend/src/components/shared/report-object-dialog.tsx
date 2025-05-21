import ReportDialog, { ReportFormValues } from '@/components/shared/report-dialog';
import { Object_Types_Enum, Reports_Constraint, useInsertReportMutation } from '@/generated/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

interface ReportObjectDialogProps {
    objectId: string;
    objectType: Object_Types_Enum;
    queryKey?: string[];
}

export default function ReportObjectDialog({ objectId, objectType, queryKey }: ReportObjectDialogProps) {
    const queryClient = useQueryClient();

    const { mutateAsync: insertReport } = useInsertReportMutation({
        onSuccess: () => {
            toast.success('Content reported successfully');
            if (queryKey) {
                queryClient.invalidateQueries({ queryKey });
            }
        },
        onError: (error: Error) => toast.error(error.message)
    });

    const handleSubmitReport = async (reportData: ReportFormValues) => {
        await insertReport({
            object: {
                object_id: objectId,
                object_type: objectType,
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
