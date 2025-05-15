import { selectSchema } from '@/schemas/select.schema';

import { z } from 'zod';

export const editMovieProductionInformationSchema = z.object({
    productionCompanies: z.array(selectSchema),
    productionCountries: z.array(selectSchema)
});

export type EditMovieProductionInformationSchemaType = z.infer<typeof editMovieProductionInformationSchema>;
