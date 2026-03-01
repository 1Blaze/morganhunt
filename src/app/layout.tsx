import { Playfair, Raleway } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const playfair = Playfair({
  subsets: ['latin'],
});

const raleway = Raleway({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Morgan Hunt Properties | Coming Soon',
  description:
    'Morgan Hunt Properties | Website coming soon. Call us on 01782 307075.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${playfair.className} ${raleway.className}`}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml'></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
