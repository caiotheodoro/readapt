import './globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
