import { SearchResult } from '@/lib/actions/import/search'
import { MediaType } from '@/lib/helpers/graphql-enums'
import { TMDBMovieSearchResult } from '@/lib/types/tmdb'

import {
    Combobox,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxPopup,
} from '../ui/combobox'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from '../ui/select'
import useImportForm from './use-import-form'

interface ImportFormFieldsProps {
    form: ReturnType<typeof useImportForm>['form']
    performSearch: ReturnType<typeof useImportForm>['performSearch']
    searchResults: ReturnType<typeof useImportForm>['searchResults']
    isSearching: ReturnType<typeof useImportForm>['isSearching']
}

function isMovieResult(result: SearchResult): result is TMDBMovieSearchResult {
    return 'title' in result
}

export default function ImportFormFields({
    form,
    performSearch,
    searchResults,
    isSearching,
}: ImportFormFieldsProps) {
    return (
        <FieldGroup>
            <form.Field name="mediaType">
                {field => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                    const mediaTypeValues = Object.values(MediaType).map(mediaType => ({
                        label: mediaType,
                        value: mediaType,
                    }))

                    return (
                        <Field data-invalid={isInvalid}>
                            <FieldLabel>Media Type</FieldLabel>
                            <Select
                                aria-invalid={isInvalid}
                                aria-label="Select a media type"
                                id={field.name}
                                items={mediaTypeValues}
                                name={field.name}
                                value={field.state.value}
                                onValueChange={value => {
                                    if (!value) return
                                    field.handleChange(value)
                                    if (form.state.values.searchQuery?.trim().length >= 2) {
                                        performSearch(form.state.values.searchQuery, value)
                                    }
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectPopup>
                                    {mediaTypeValues.map(({ label, value }) => (
                                        <SelectItem key={value} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectPopup>
                            </Select>
                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </Field>
                    )
                }}
            </form.Field>

            <form.Field name="searchQuery">
                {field => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                    const items = searchResults.map(result => ({
                        label: isMovieResult(result) ? result.title : result.name,
                        value: String(result.id),
                    }))

                    return (
                        <Field data-invalid={isInvalid}>
                            <FieldLabel>Search</FieldLabel>
                            <Combobox
                                autoHighlight
                                aria-invalid={isInvalid}
                                aria-label="Search for media"
                                id={field.name}
                                items={items}
                                name={field.name}
                                value={field.state.value}
                                onValueChange={value => {
                                    if (!value) return

                                    // Find the selected item from the results
                                    const selectedItem = items.find(item => item.value === value)

                                    if (selectedItem) {
                                        // User selected an item from the list
                                        field.handleChange(selectedItem.label)
                                        form.setFieldValue('externalId', selectedItem.value)
                                    } else {
                                        // User is typing (value is the search query string)
                                        field.handleChange(value)
                                    }
                                }}
                            >
                                <ComboboxInput
                                    aria-label="Search for media"
                                    placeholder="Search for media..."
                                    value={field.state.value}
                                    onChange={e => {
                                        const value = e.target.value
                                        field.handleChange(value)
                                        if (value?.trim().length >= 2) {
                                            performSearch(value, form.state.values.mediaType)
                                        }
                                    }}
                                />
                                <ComboboxPopup>
                                    <ComboboxEmpty>No results found.</ComboboxEmpty>
                                    <ComboboxList>
                                        {item => (
                                            <ComboboxItem key={item.value} value={item.value}>
                                                {item.label}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxPopup>
                            </Combobox>
                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </Field>
                    )
                }}
            </form.Field>
            <form.Field name="externalId">
                {field => {
                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                    return (
                        <Field
                            data-invalid={isInvalid}
                            className="sr-only"
                            aria-hidden={!isInvalid}
                        >
                            <input
                                type="hidden"
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                            />
                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                        </Field>
                    )
                }}
            </form.Field>
        </FieldGroup>
    )
}
