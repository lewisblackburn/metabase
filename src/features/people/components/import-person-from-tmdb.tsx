// 'use client';

// import { Button } from '@/registry/new-york-v4/ui/button';
// import { tmdbPersonImporterService } from '@/services/tmdb/tmdb-person-import.service';
// import { TMDBPerson } from '@/types/tmdb.type';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

// import { PersonProvider, usePerson } from './person-provider';
// import { toast } from 'sonner';

// export default function ImportPerson() {
//     return (
//         <PersonProvider>
//             <ImportPersonContent />
//         </PersonProvider>
//     );
// }

// export function ImportPersonContent() {
//     const queryClient = useQueryClient();
//     const { person } = usePerson();
//     if (!person) return null;

//     const importPersonFromTMDBMutation = useMutation({
//         mutationFn: (tmdbPersonId: TMDBPerson['id']) => tmdbPersonImporterService.import(tmdbPersonId, true),
//         onSuccess: (response) => {
//             if (response === true) toast.success('Person already exists');
//             else if (response === false) toast.error('Person not found');
//             else toast.success(`${response.insert_people_one?.name} imported`);

//             queryClient.invalidateQueries({ queryKey: ['person', person.id] });
//         },
//         onError: (error: any) => toast.error(error.message)
//     });

//     const handleImportPersonFromTMDB = async () => {
//         if (person?.tmdb_id) await importPersonFromTMDBMutation.mutate(parseInt(person.tmdb_id));
//         else toast.error('This person does not have a TMDB ID');
//     };

//     return (
//         <div className='flex flex-col gap-4'>
//             <Button onClick={handleImportPersonFromTMDB}>Import Person from TMDB</Button>
//         </div>
//     );
// }
