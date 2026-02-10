import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import data from '@/config';
import ThemeContext from '@/context/themeContext';
import '@/styles/global.css';
import '@/styles/normalize.css';

export const metadata: Metadata = {
  title: data.title,
  icons: ['/profile.webp'],
  description: 'Hagen Baby Shower - registry links and shower details.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>{children}</ThemeContext>
        <Analytics />
      </body>
    </html>
  );
}
