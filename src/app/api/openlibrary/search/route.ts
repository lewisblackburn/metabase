import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    const page = searchParams.get('page') || '1';

    const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query || '')}&page=${page}`
    );

    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
}
