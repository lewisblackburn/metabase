import { useForm } from '@tanstack/react-form'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import { Media_Types_Enum } from '@/generated/graphql'
import { importMedia } from '@/lib/actions/import'
import { searchMedia, SearchResult } from '@/lib/actions/search'
import { importSchema } from '@/lib/validations/import.schema'

export default function useImportForm(onSuccess: () => void) {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const debounceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

    const form = useForm({
        defaultValues: {
            mediaType: Media_Types_Enum.Movie,
            searchQuery: '',
            externalId: '',
        },
        validators: {
            onSubmit: importSchema,
        },
        onSubmit: async ({ value }) => {
            await importMedia(value)
                .then(result => {
                    toast.success('Import successful', {
                        description: result.message,
                    })
                    onSuccess()
                })
                .catch(error => {
                    toast.error('Failed to import', {
                        description: error instanceof Error ? error.message : 'Unknown error',
                    })
                })
        },
    })

    const performSearch = async (searchQuery: string, mediaType: Media_Types_Enum) => {
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
                const results = await searchMedia(searchQuery.trim(), mediaType)
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

    return { form, searchResults, isSearching, performSearch }
}
