import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/registry/new-york-v4/ui/table';
import { AwardType } from '@/types/award.type';

interface AwardTableProps {
    awards: AwardType[];
}

export default function AwardTable({ awards }: AwardTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Award</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Type</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {awards.map((award) => (
                    <TableRow key={award.id}>
                        <TableCell className='font-medium'>{award.title}</TableCell>
                        <TableCell>{award.award}</TableCell>
                        <TableCell>{award.year}</TableCell>
                        <TableCell>{award.event}</TableCell>
                        <TableCell>{award.type.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
