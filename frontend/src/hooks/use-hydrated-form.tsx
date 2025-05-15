import { useEffect, useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { FieldValues, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

export default function useHydratedForm<TSchema extends FieldValues, TData>(
    schema: ZodType<TSchema>,
    data: TData | undefined,
    mapDataToDefaultValues: (d: TData) => TSchema
) {
    const form = useForm<TSchema>({ resolver: zodResolver(schema) });
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (data && !hasInitialized.current) {
            form.reset(mapDataToDefaultValues(data));
            hasInitialized.current = true;
        }
    }, [data, mapDataToDefaultValues]);

    return form;
}
