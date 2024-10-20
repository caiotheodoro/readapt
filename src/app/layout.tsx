import './globals.css';
import { Roboto } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { headers } from 'next/headers';
import { Toaster } from '../components/ui/toaster';
import { Metadata, Viewport } from 'next';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '/';

  return (
    <html lang="en">
      <body className={roboto.className}>
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname} >
            {children}
          </div>
          <Toaster />
        </AnimatePresence>
      </body>
    </html>
  );
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  metadataBase: new URL('https://readapt.vercel.app/'),
  robots: {
    follow: true,
    index: true,
  },

  title: {
    default: 'Readapt',
    template: '%s | Readapt',
  },
  description: 'Readapt is a ePub reader that helps you!',
  openGraph: {
    title: {
      template: `%s — Readapt`,
      default: 'Readapt',
    },
    description: 'Readapt is a ePub reader that helps you!',
    type: 'website',
    url: '/',
    siteName: 'Readapt',
  },
  alternates: {
    canonical: '/',
  },
};