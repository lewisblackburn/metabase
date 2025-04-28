export function enumToOptions<T extends { [K in keyof T]: string }>(e: T): { label: keyof T; value: T[keyof T] }[] {
    return (Object.entries(e) as [keyof T, T[keyof T]][]).map(([label, value]) => ({ label, value }));
}
