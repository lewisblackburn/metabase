import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing author ID' }, { status: 400 });
    }

    const response = await fetch(`https://openlibrary.org/authors/${id}.json`);
    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch author' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
}
