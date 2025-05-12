import React, { useState } from 'react';

import { useGetPersonQuery } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { importPersonFromTmdb } from '@/services/tmdb/tmdb-import-person.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Loader2, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface ImportPersonFromTMDBProps {
    personId: string;
}

export default function ImportPersonFromTMDB({ personId }: ImportPersonFromTMDBProps) {
    const [isImporting, setIsImporting] = useState(false);
    const queryClient = useQueryClient();

    const { data } = useGetPersonQuery(
        { id: personId },
        {
            queryKey: ['person', personId]
        }
    );

    const tmdbPersonId = data?.people_by_pk?.tmdb_id;

    if (!tmdbPersonId) return null;

    const importMutation = useMutation({
        mutationFn: (id: number) => importPersonFromTmdb(id, true),
        onSuccess: (response) => {
            if (!response) {
                toast.error('No response received from import');
                return;
            }

            if ('message' in response) {
                if (response.message.includes('already exists')) {
                    toast.success('Person already exists');
                } else {
                    toast.error(response.message);
                }
            } else if ('name' in response) {
                toast.success(`${response.name} Imported`);
            }

            queryClient.invalidateQueries({ queryKey: ['person', personId] });
        },
        onError: (error: any) => toast.error(error.message)
    });

    const handleImport = async () => {
        setIsImporting(true);
        try {
            await importMutation.mutateAsync(parseInt(tmdbPersonId));
        } finally {
            setIsImporting(false);
        }
    };

    return (
        <Button variant='outline' size='sm' onClick={handleImport} disabled={importMutation.isPending || isImporting}>
            {importMutation.isPending || isImporting ? (
                <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
                <Plus className='h-4 w-4' />
            )}
            {importMutation.isPending || isImporting ? 'Importing...' : 'Import Person'}
        </Button>
    );
}
