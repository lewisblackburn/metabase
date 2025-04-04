import { NextResponse } from 'next/server';

import { ExampleUser, allUsers } from '@/lib/data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    // Parse query parameters for pagination, sorting, filtering
    const page = parseInt(searchParams.get('page') || '1', 10); // 1-based page index
    const pageSize = parseInt(searchParams.get('size') || '10', 10); // page size
    const sortBy = searchParams.get('sortBy') || ''; // field to sort by
    const sortDesc = searchParams.get('sortDesc') === 'true'; // sort direction
    const query = searchParams.get('query')?.toLowerCase() || ''; // search filter (case-insensitive substring match)

    // Copy the full data and apply filtering
    let filteredData: ExampleUser[] = [...allUsers];
    if (query) {
        filteredData = filteredData.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.email.toLowerCase().includes(query) ||
                item.role.toLowerCase().includes(query)
        );
    }

    const total = filteredData.length;

    // Apply sorting if specified
    if (sortBy) {
        filteredData.sort((a, b) => {
            const aValue = (a as any)[sortBy];
            const bValue = (b as any)[sortBy];
            if (aValue === bValue) return 0;
            if (sortDesc) {
                // Descending order
                return aValue < bValue ? 1 : -1;
            } else {
                // Ascending order
                return aValue < bValue ? -1 : 1;
            }
        });
    }

    // Apply pagination
    const pageIndex = Math.max(page, 1) - 1; // convert to 0-based index
    const start = pageIndex * pageSize;
    const pagedData = filteredData.slice(start, start + pageSize);

    // Respond with current page data and total count
    return NextResponse.json({ data: pagedData, total });
}
