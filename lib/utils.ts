import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// merge class values
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// capitalize first letter of string
export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// construct path from array of strings
export function constructPath(path: string[]) {
    return path.join('/')
}
