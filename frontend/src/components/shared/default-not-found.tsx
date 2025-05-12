interface DefaultNotFoundProps {
    title?: string;
    description?: string;
}

export default function NotFound({ title, description }: DefaultNotFoundProps) {
    return (
        <div className='flex flex-col items-center justify-center p-6'>
            <h1 className='text-2xl font-bold'>{title || 'Not Found'}</h1>
            <p className='text-muted-foreground'>{description || 'The page you are looking for does not exist.'}</p>
        </div>
    );
}
