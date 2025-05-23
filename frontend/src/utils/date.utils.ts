export function formatReleaseDate(date: string): string {
    const parts = date.split('-');
    const year = parts[0];
    const month = parts[1] || '01';
    const day = parts[2] || '01';
    return `${year}-${month}-${day}`;
}
