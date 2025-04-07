import NextImage from 'next/image';

type ArtworkProps = {
    title: string;
    image: string;
};

export default function Artwork({ title, image }: ArtworkProps) {
    return <NextImage src={image} alt={title} width={300} height={300} className='rounded-md' />;
}
