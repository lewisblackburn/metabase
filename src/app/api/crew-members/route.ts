import { NextResponse } from 'next/server';

import { CrewMember, allCrewMembers } from '@/lib/data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('size') || '10', 10);
    const sortBy = searchParams.get('sortBy') || '';
    const sortDesc = searchParams.get('sortDesc') === 'true';
    const query = searchParams.get('query')?.toLowerCase() || '';

    let filteredData: CrewMember[] = [...allCrewMembers];
    if (query) {
        filteredData = filteredData.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.job.toLowerCase().includes(query) ||
                item.role.toLowerCase().includes(query)
        );
    }

    const total = filteredData.length;

    if (sortBy) {
        filteredData.sort((a, b) => {
            const aValue = (a as any)[sortBy];
            const bValue = (b as any)[sortBy];
            if (aValue === bValue) return 0;
            if (sortDesc) {
                return aValue < bValue ? 1 : -1;
            } else {
                return aValue < bValue ? -1 : 1;
            }
        });
    }

    const pageIndex = Math.max(page, 1) - 1;
    const start = pageIndex * pageSize;
    const pagedData = filteredData.slice(start, start + pageSize);

    return NextResponse.json({ data: pagedData, total });
}
