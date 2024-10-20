import './globals.css';
import { Roboto } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { headers } from 'next/headers';
import { Toaster } from '../components/ui/toaster';

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
