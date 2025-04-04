import { siSpotify } from 'simple-icons/icons';

export default function SpotifyIcon({ className }: { className?: string }) {
    return (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={className}>
            <title>{siSpotify.title}</title>
            <path d={siSpotify.path} fill='currentColor' />
        </svg>
    );
}
