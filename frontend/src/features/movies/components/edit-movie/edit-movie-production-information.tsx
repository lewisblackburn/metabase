'use client';

import React, { useEffect } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import { COUNTRIES } from '@/constants/countries.constant';
import {
    Movie_Production_Companies_Constraint,
    Movie_Production_Companies_Update_Column,
    Movie_Production_Countries_Constraint,
    Movie_Production_Countries_Update_Column,
    useDeleteMovieProductionCompaniesMutation,
    useDeleteMovieProductionCountriesMutation,
    useGetMovieProductionInformationQuery,
    useInsertMovieProductionCompanyMutation,
    useInsertMovieProductionCountryMutation
} from '@/generated/graphql';
import useHydratedForm from '@/hooks/use-hydrated-form';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';

import { EditMovieProductionInformationSchemaType } from '../../schemas/movie-production-information.schema';
import { editMovieProductionInformationSchema } from '../../schemas/movie-production-information.schema';
import { toast } from 'sonner';

interface EditMovieProductionInformationProps {
    movieId: string;
}

export default function EditMovieProductionInformation({ movieId }: EditMovieProductionInformationProps) {
    const { data, isLoading } = useGetMovieProductionInformationQuery(
        { id: movieId },
        { queryKey: ['movie-production-information', movieId] }
    );

    const form = useHydratedForm(editMovieProductionInformationSchema, data, (d) => ({
        productionCompanies: d.movie_production_companies.map((c) => ({
            value: c.company_name,
            label: c.company_name
        })),
        productionCountries: d.movie_production_countries.map((c) => ({
            value: c.country,
            label: COUNTRIES.find((x) => x.code === c.country)?.englishLabel ?? c.country
        }))
    }));

    const { handleSubmit, control, reset } = form;

    const { mutateAsync: insertMovieProductionCompany } = useInsertMovieProductionCompanyMutation({
        onError: (error: Error) => toast.error(error.message)
    });

    const { mutateAsync: insertMovieProductionCountry } = useInsertMovieProductionCountryMutation({
        onError: (error: Error) => toast.error(error.message)
    });

    const { mutateAsync: deleteMovieProductionCompanies } = useDeleteMovieProductionCompaniesMutation({
        onError: (error: Error) => toast.error(error.message)
    });

    const { mutateAsync: deleteMovieProductionCountries } = useDeleteMovieProductionCountriesMutation({
        onError: (error: Error) => toast.error(error.message)
    });

    if (isLoading || !data) {
        return null;
    }

    async function onSubmit(values: EditMovieProductionInformationSchemaType) {
        const currentCompanies = data?.movie_production_companies.map((c) => c.company_name);
        const newCompanies = values.productionCompanies?.map((c) => c.value) ?? [];

        const currentCountries = data?.movie_production_countries.map((c) => c.country);
        const newCountries = values.productionCountries?.map((c) => c.value) ?? [];

        if (JSON.stringify(currentCompanies) !== JSON.stringify(newCompanies)) {
            await deleteMovieProductionCompanies({
                where: { movie_id: { _eq: movieId } }
            });
            await Promise.all(
                newCompanies.map((company) =>
                    insertMovieProductionCompany({
                        object: { movie_id: movieId, company_name: company },
                        on_conflict: {
                            constraint:
                                Movie_Production_Companies_Constraint.MovieProductionCompaniesMovieIdCompanyNameKey,
                            update_columns: [Movie_Production_Companies_Update_Column.CompanyName]
                        }
                    })
                )
            );
        }

        if (JSON.stringify(currentCountries) !== JSON.stringify(newCountries)) {
            await deleteMovieProductionCountries({
                where: { movie_id: { _eq: movieId } }
            });
            await Promise.all(
                newCountries.map((country) =>
                    insertMovieProductionCountry({
                        object: { movie_id: movieId, country },
                        on_conflict: {
                            constraint: Movie_Production_Countries_Constraint.MovieProductionCountriesMovieIdCountryKey,
                            update_columns: [Movie_Production_Countries_Update_Column.Country]
                        }
                    })
                )
            );
        }

        await queryClient.invalidateQueries({
            queryKey: ['movie-production-information', movieId]
        });
        toast.success('Production information updated successfully');
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className='space-y-8'>
                <FormField
                    control={control}
                    name='productionCompanies'
                    render={({ field }) => (
                        <BaseFormLayout label='Production Companies' description='Edit the production companies'>
                            <MultipleSelector
                                creatable
                                commandProps={{ label: 'Select Production Companies' }}
                                defaultOptions={data.movie_production_companies.map((company) => ({
                                    value: company.company_name,
                                    label: company.company_name
                                }))}
                                options={data.movie_production_companies.map((company) => ({
                                    value: company.company_name,
                                    label: company.company_name
                                }))}
                                placeholder='Select Production Companies'
                                emptyIndicator='No production companies found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='productionCountries'
                    render={({ field }) => (
                        <BaseFormLayout label='Production Countries' description='Edit the production countries'>
                            <MultipleSelector
                                commandProps={{ label: 'Select Production Countries' }}
                                defaultOptions={data.movie_production_countries.map((country) => ({
                                    value: country.country,
                                    label:
                                        COUNTRIES.find((c) => c.code === country.country)?.englishLabel ??
                                        country.country
                                }))}
                                options={COUNTRIES.map((country) => ({
                                    value: country.code,
                                    label: country.englishLabel
                                }))}
                                placeholder='Select Production Countries'
                                emptyIndicator='No production countries found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end gap-2'>
                    <Button type='reset' variant='outline' size='sm'>
                        Reset
                    </Button>
                    <Button type='submit' size='sm'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </Form>
    );
}
