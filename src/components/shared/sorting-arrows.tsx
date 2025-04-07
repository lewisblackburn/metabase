import { Column } from '@tanstack/react-table';

import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

interface SortingArrowsProps {
    column: Column<any>;
}

export default function SortingArrows({ column }: SortingArrowsProps) {
    return (
        <span className='ml-1'>
            {column.getIsSorted() === 'asc' ? (
                <ArrowUp className='size-4' />
            ) : column.getIsSorted() === 'desc' ? (
                <ArrowDown className='size-4' />
            ) : (
                <ArrowUpDown className='size-4 opacity-50' />
            )}
        </span>
    );
}
