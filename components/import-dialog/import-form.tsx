'use client'

import { useForm } from '@tanstack/react-form'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import LoadingButton from '@/components/loading-button'
import { Media_Types_Enum, Sources_Enum } from '@/generated/graphql'
import { importMedia } from '@/lib/actions/import/import'
import { searchMedia } from '@/lib/actions/import/search'
import { SearchResult } from '@/lib/actions/import/search'
import { MediaType, Source } from '@/lib/helpers/graphql-enums'
import { importSchema } from '@/lib/validations/import.schema'

import { Button } from '../ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { MediaTypeRadioGroup } from './media-type-radio-group'
import { SearchResults } from './search-results'
import { SourceRadioGroup } from './source-radio-group'

export function ImportForm({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const debounceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

    const form = useForm({
        defaultValues: {
            source: Source.TMDB as Sources_Enum,
            mediaType: MediaType.MOVIE as Media_Types_Enum,
            searchQuery: '',
            externalId: '',
        },
        validators: {
            onSubmit: importSchema,
        },
        onSubmit: async ({ value }) => {
            await importMedia(value)
                .then(() => {
                    toast.success('Import successful', {
                        description: `Successfully imported ${value.mediaType} from ${value.source}`,
                    })
                    onOpenChange(false)
                })
                .catch(error => {
                    toast.error('Failed to import', {
                        description: error instanceof Error ? error.message : 'Unknown error',
                    })
                })
        },
    })

    const performSearch = async (
        searchQuery: string,
        source: Sources_Enum,
        mediaType: Media_Types_Enum,
    ) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current)
        }

        if (!searchQuery?.trim() || searchQuery.trim().length < 2) {
            setSearchResults([])
            setIsSearching(false)
            return
        }

        setIsSearching(true)
        debounceTimeoutRef.current = setTimeout(async () => {
            try {
                const results = await searchMedia(searchQuery.trim(), source, mediaType)
                setSearchResults(Array.isArray(results) ? results : [])
            } catch (error) {
                toast.error('Search failed', {
                    description: error instanceof Error ? error.message : 'Unknown error',
                })
                setSearchResults([])
            } finally {
                setIsSearching(false)
            }
        }, 500)
    }

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current)
            }
        }
    }, [])

    return (
        <form
            id="import-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
            className="flex flex-col gap-4"
        >
            <FieldGroup>
                <form.Field name="source">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <SourceRadioGroup
                                value={field.state.value}
                                onChange={value => {
                                    field.handleChange(value)
                                    if (form.state.values.searchQuery?.trim().length >= 2) {
                                        performSearch(
                                            form.state.values.searchQuery,
                                            value,
                                            form.state.values.mediaType,
                                        )
                                    }
                                }}
                                errors={field.state.meta.errors}
                                isInvalid={isInvalid}
                            />
                        )
                    }}
                </form.Field>

                <form.Field name="mediaType">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <MediaTypeRadioGroup
                                value={field.state.value}
                                onChange={value => {
                                    field.handleChange(value)
                                    form.setFieldValue('searchQuery', '')
                                    form.setFieldValue('externalId', '')
                                    setSearchResults([])
                                    setIsSearching(false)
                                    if (debounceTimeoutRef.current) {
                                        clearTimeout(debounceTimeoutRef.current)
                                    }
                                }}
                                errors={field.state.meta.errors}
                                isInvalid={isInvalid}
                            />
                        )
                    }}
                </form.Field>

                <form.Field name="searchQuery">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Search</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e => {
                                        const value = e.target.value
                                        field.handleChange(value)
                                        form.setFieldValue('externalId', '')
                                        performSearch(
                                            value,
                                            form.state.values.source,
                                            form.state.values.mediaType,
                                        )
                                    }}
                                    onBlur={field.handleBlur}
                                    aria-invalid={isInvalid}
                                    placeholder="Enter the name of the media to search..."
                                    autoComplete="off"
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>

                <form.Field name="externalId">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <>
                                {form.state.values.searchQuery?.trim().length >= 2 && (
                                    <div className="max-h-64 overflow-y-auto rounded-md border">
                                        <SearchResults
                                            results={searchResults}
                                            onSelect={id => {
                                                form.setFieldValue('externalId', id)
                                                field.handleBlur()
                                            }}
                                            isLoading={isSearching}
                                        />
                                    </div>
                                )}
                                {form.state.values.externalId && (
                                    <div className="rounded-md border bg-accent/50 p-2 text-sm">
                                        <p className="font-medium">Selected:</p>
                                        <p className="text-muted-foreground">
                                            {(() => {
                                                const result = searchResults.find(
                                                    r =>
                                                        String(r.id) ===
                                                        form.state.values.externalId,
                                                )
                                                if (!result) return 'Media selected'
                                                return 'title' in result
                                                    ? result.title
                                                    : result.name
                                            })()}
                                        </p>
                                    </div>
                                )}
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </>
                        )
                    }}
                </form.Field>
            </FieldGroup>

            <form.Subscribe selector={state => [state.isSubmitting]}>
                {([isSubmitting]) => (
                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <LoadingButton loading={isSubmitting}>
                            {isSubmitting ? 'Importing...' : 'Import'}
                        </LoadingButton>
                    </div>
                )}
            </form.Subscribe>
        </form>
    )
}
