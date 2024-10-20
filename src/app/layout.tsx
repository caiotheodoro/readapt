import './globals.css';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { headers } from 'next/headers';
import { Toaster } from '../components/ui/toaster';
import { Metadata, Viewport } from 'next';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Accessible E-book Reader",
  description: "An accessible e-book reader for everyone",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '/';

  return (
    <html lang="en">
      <body className={`${inter.className} noise-bg-grayscale min-h-screen`}>
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
