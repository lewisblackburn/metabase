'use client';

import { useState } from 'react';

import MultiSelectField, { MultiSelectOption } from '@/components/form/multi-select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

export default function MultiSelectExample() {
    const [selectedFruits, setSelectedFruits] = useState<MultiSelectOption[]>([]);
    const [selectedColors, setSelectedColors] = useState<MultiSelectOption[]>([
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' }
    ]);

    const fruitOptions: MultiSelectOption[] = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'mango', label: 'Mango' },
        { value: 'pineapple', label: 'Pineapple' },
        { value: 'grape', label: 'Grape' }
    ];

    const colorOptions: MultiSelectOption[] = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
        { value: 'orange', label: 'Orange' },
        { value: 'pink', label: 'Pink' },
        { value: 'black', label: 'Black' }
    ];

    return (
        <div className='container py-10'>
            <h1 className='mb-8 text-3xl font-bold'>Multi-Select Examples</h1>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Multi-Select</CardTitle>
                        <CardDescription>Select multiple fruits from the dropdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <MultiSelectField
                            value={selectedFruits}
                            onChange={setSelectedFruits}
                            options={fruitOptions}
                            placeholder='Select fruits...'
                            createable
                        />

                        <div className='mt-4'>
                            <h4 className='mb-2 text-sm font-medium'>Selected fruits:</h4>
                            <div className='flex flex-wrap gap-2'>
                                {selectedFruits.length === 0 ? (
                                    <span className='text-muted-foreground text-sm'>No fruits selected</span>
                                ) : (
                                    selectedFruits.map((fruit) => {
                                        return (
                                            <div
                                                key={fruit.value}
                                                className='bg-primary/10 text-primary rounded-full px-3 py-1 text-sm'>
                                                {fruit.label}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Multi-Select with Preselected Values</CardTitle>
                        <CardDescription>Multi-select with search and preselected values</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <MultiSelectField
                            value={selectedColors}
                            onChange={setSelectedColors}
                            options={colorOptions}
                            placeholder='Select colors...'
                            searchPlaceholder='Find a color...'
                            maxDisplayValues={3}
                        />

                        <div className='mt-4'>
                            <h4 className='mb-2 text-sm font-medium'>Selected colors:</h4>
                            <div className='flex flex-wrap gap-2'>
                                {selectedColors.length === 0 ? (
                                    <span className='text-muted-foreground text-sm'>No colors selected</span>
                                ) : (
                                    selectedColors.map((color) => {
                                        return (
                                            <div
                                                key={color.value}
                                                className='rounded-full px-3 py-1 text-sm text-white'
                                                style={{
                                                    backgroundColor: color.value,
                                                    color: ['yellow', 'pink'].includes(color.value) ? 'black' : 'white'
                                                }}>
                                                {color.label}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
