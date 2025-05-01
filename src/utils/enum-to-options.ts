import { LucideIcon } from 'lucide-react';
import { z } from 'zod';

export function enumToOptions<T extends { [K in keyof T]: string }>(e: T): { label: keyof T; value: T[keyof T] }[] {
    return (Object.entries(e) as [keyof T, T[keyof T]][]).map(([label, value]) => ({ label, value }));
}

export function buildEnumOptions<E extends Record<string, string>, V extends E[keyof E]>(
    gqlEnum: E,
    labelMap?: Partial<Record<V, string>>,
    iconMap?: Partial<Record<V, LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>>>
) {
    return enumToOptions(gqlEnum).map((opt) => ({
        value: opt.value as V,
        label: labelMap?.[opt.value as V] ?? opt.label,
        icon: iconMap?.[opt.value as V]
    }));
}

export function createOptionSchema<E extends { [k: string]: string }>(enumObj: E) {
    return z.object({
        value: z.nativeEnum(enumObj),
        label: z.string()
    });
}
