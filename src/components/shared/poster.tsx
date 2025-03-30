import NextImage from 'next/image';

type PosterProps = {
    title: string;
    image: string;
};

export default function Poster({ title, image }: PosterProps) {
    return <NextImage src={image} alt={title} width={300} height={450} className='rounded-md' />;
}
