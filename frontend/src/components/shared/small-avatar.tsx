import ImageWithSkeleton from './image-with-skeleton';

export default function SmallAvatar({ image, alt }: { image: string; alt: string }) {
    return (
        <div className='relative aspect-square h-8 w-8'>
            <ImageWithSkeleton
                src={image}
                alt={alt}
                fill
                wrapperClassName='absolute inset-0'
                imageClassName='object-cover object-center border-2 border-white rounded-md'
            />
        </div>
    );
}
