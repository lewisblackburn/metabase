/**
 * Converts a union type to an enum-like object
 * @example
 * type Colors = 'RED' | 'BLUE' | 'GREEN'
 * const ColorEnum = typeToEnum<Colors>()(['RED', 'BLUE', 'GREEN'])
 * // Result: { RED: 'RED', BLUE: 'BLUE', GREEN: 'GREEN' }
 */
export function typeToEnum<T extends string>() {
    return <K extends T>(values: readonly K[]): { [P in K]: P } => {
        return values.reduce(
            (acc, value) => {
                acc[value] = value
                return acc
            },
            {} as { [P in K]: P },
        )
    }
}

/**
 * Creates an enum object from a readonly array of values
 * @example
 * const ColorEnum = createEnum(['RED', 'BLUE', 'GREEN'] as const)
 * // Result: { RED: 'RED', BLUE: 'BLUE', GREEN: 'GREEN' }
 */
export function createEnum<T extends string>(values: readonly T[]): { [K in T]: K } {
    return values.reduce(
        (acc, value) => {
            acc[value] = value
            return acc
        },
        {} as { [K in T]: K },
    )
}
