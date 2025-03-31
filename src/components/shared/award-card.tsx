import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

import { Award, Calendar, Hash, Star, Tag } from 'lucide-react';

// NOTE: This will be fetched from a generated GraphQL type in the future
type Award = {
    id: string;
    title: string;
    award: string;
    year: number;
    event: string;
    type: (typeof OBJECT_TYPE)[keyof typeof OBJECT_TYPE];
};

interface AwardCardProps {
    award: Award;
}

export function AwardCard({ award }: AwardCardProps) {
    return (
        <Card className='rounded-md'>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <Award className='h-5 w-5 text-yellow-500' />
                    {award.title}
                </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-1'>
                <div className='flex items-center gap-2'>
                    <Star className='h-4 w-4' />
                    <span className='text-foreground'>{award.award}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Calendar className='h-4 w-4' />
                    <span>{award.year}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Hash className='h-4 w-4' />
                    <span>{award.event}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Tag className='h-4 w-4' />
                    <span className='capitalize'>{award.type.name}</span>
                </div>
            </CardContent>
        </Card>
    );
}
