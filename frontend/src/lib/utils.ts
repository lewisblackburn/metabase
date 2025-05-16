import { type ClassValue, clsx } from 'clsx';
import { findBestMatch } from 'string-similarity';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type StringEnum = { [key: string]: string };

interface FuzzyOptions<V> {
    fallback?: V;
    threshold?: number;
}

export function fuzzyEnumMap<T extends StringEnum, V extends T[keyof T] = T[keyof T]>(
    input: string,
    enumObj: T,
    options: FuzzyOptions<V> = {}
): V {
    const values = Object.values(enumObj) as V[];
    const lowerInput = input.trim().toLowerCase();
    const lowerValues = values.map((v) => v.toLowerCase());

    const { ratings, bestMatchIndex } = findBestMatch(lowerInput, lowerValues);
    const bestRating = ratings[bestMatchIndex].rating;
    const bestValue = values[bestMatchIndex];

    if (options.threshold !== undefined && bestRating < options.threshold) {
        if (options.fallback !== undefined) {
            return options.fallback;
        }
        throw new Error(`No fuzzy match for "${input}" above threshold ${options.threshold}`);
    }

    return bestValue;
}
