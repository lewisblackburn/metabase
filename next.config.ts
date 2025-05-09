import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        turbo: {}
    },
    images: {
        domains: [
            'image.tmdb.org',
            'www.themoviedb.org',
            'media.themoviedb.org',
            'i.scdn.co',
            'placehold.co',
            'lwmecktyyhputyqkdigy.storage.eu-west-2.nhost.run',
            'www.gravatar.com',
            'books.google.com'
        ]
    }
};

export default withBundleAnalyzer(nextConfig);
