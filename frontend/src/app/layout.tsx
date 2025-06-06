import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { Container } from '@/components/ui/container';
import CommandPanel from '@/features/command-panel/components/command-panel';
import EditDialogManager from '@/features/edit-dailog/components/edit-dialog-manager';
import { SettingsDialog } from '@/features/settings/components/settings-dialog';
import ShortcutManager from '@/features/shortcuts/components/shortcut-manager';
import CustomNhostProvider from '@/providers/nhost-provider';
import QueryProvider from '@/providers/query-provider';
import StoreProvider from '@/providers/store-provider';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';
import { TooltipProvider } from '@/registry/new-york-v4/ui/tooltip';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], preload: true });
// const geistSans = localFont({
//     src: './fonts/GeistVF.woff',
//     variable: '--font-geist-sans',
//     weight: '100 900',
// });
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Metabase',
    description: 'An all-in-one media database platform.'
};

dayjs.extend(advancedFormat);

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${spaceGrotesk.className} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <CustomNhostProvider>
                    <QueryProvider>
                        <StoreProvider>
                            <ShortcutManager />
                            <ThemeProvider attribute='class'>
                                <TooltipProvider>
                                    <Navbar />
                                    <Container>
                                        <EditDialogManager />
                                        <CommandPanel />
                                        <SettingsDialog />
                                        {children}
                                        <Footer />
                                    </Container>
                                    <Toaster position='top-center' richColors />
                                </TooltipProvider>
                            </ThemeProvider>
                        </StoreProvider>
                    </QueryProvider>
                </CustomNhostProvider>
            </body>
        </html>
    );
};

export default Layout;
