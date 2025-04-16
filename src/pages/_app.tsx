import type { AppProps } from 'next/app';

import { NhostClient, NhostProvider } from '@nhost/nextjs';

const nhost = new NhostClient({
    subdomain: '<your-subdomain>',
    region: '<your-region>'
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
            <Component {...pageProps} />
        </NhostProvider>
    );
}

export default MyApp;
