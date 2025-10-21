import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import NavigationB from '@/components/layout/NavigationB';
import FooterB from '@/components/layout/FooterB';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apex Affinity Group - Design B - Revolutionary Insurance Sales',
  description: 'Join the insurance network that transforms lives through AI-powered marketing. Build extraordinary income with Apex Affinity Group.',
  keywords: 'insurance sales, network marketing, MLM, AI insurance, life insurance, passive income',
};

export default function DesignBLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased text-white bg-neutral-950 overflow-x-hidden`} suppressHydrationWarning>
        <NavigationB />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterB />
      </body>
    </html>
  );
}

