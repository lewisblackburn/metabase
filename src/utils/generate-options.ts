export function createOptions(
    items: string[],
    { valueKey = 'value', labelKey = 'label', transform = (item: string) => item } = {}
): Array<Record<string, string>> {
    return items.map((item) => ({
        [valueKey]: transform(item),
        [labelKey]: transform(item)
    }));
}

export function mergeCommonInAll(obj: Record<string, string[]>): Record<string, string[]> {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key] = [...obj[key], ...obj.common];

            return acc;
        },
        {} as Record<string, string[]>
    );
}

export function generateOptions(obj: Record<string, string[]>): Record<string, Array<Record<string, string>>> {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key] = createOptions(obj[key]);

            return acc;
        },
        {} as Record<string, Array<Record<string, string>>>
    );
}
