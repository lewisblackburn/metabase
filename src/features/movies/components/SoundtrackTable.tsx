import Link from 'next/link';

import { MOVIE_DATA } from '@/app/dashboard/movies/[id]/layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';

import { Music } from 'lucide-react';

export default function SoundtrackTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='font-bold'>Track</TableHead>
                    <TableHead className='font-bold'>Description</TableHead>
                    <TableHead className='font-bold'>Timestamp</TableHead>
                    <TableHead className='font-bold'>Listen on</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {MOVIE_DATA.soundtrack.map((song) => (
                    <TableRow key={song.id}>
                        <TableCell>
                            <p className='text-primary font-semibold'>{song.title}</p>
                            <p className='text-muted-foreground'>{song.artists}</p>
                        </TableCell>
                        <TableCell>{song.description}</TableCell>
                        <TableCell>{song.timestamps.join(', ')}</TableCell>
                        <TableCell>
                            <Link href={song.spotifyId}>
                                {/* TODO: Change to Spotify Logo */}
                                <Music className='!size-4' />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
