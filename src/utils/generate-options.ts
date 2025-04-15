// NOTE: Transform key, value to value, label
export function createOptions(items: Record<string, string>) {
    return Object.entries(items).map(([value, label]) => ({ value, label }));
}

export function mergeCommonInAll(obj: Record<string, Record<string, string>>) {
    const { common = {}, ...rest } = obj;

    // NOTE: Get all the keys except "common" and merge them with the "common" object
    return Object.fromEntries(
        Object.entries(rest)
            .map(([key, value]) => [key, { ...value, ...common }])
            .concat([['common', { ...common }]])
    );
}

// NOTE: Convert record into array of options
export function generateOptions(obj: Record<string, Record<string, string>>) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, createOptions(value)]));
}
