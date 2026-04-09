// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'AluEmpire | Aluminium Skirting Systems for Modern Spaces',
  description:
    'Discover a smarter, stronger, and more sustainable way to style your home or office with Alu Empire’s high-performance Aluminium Skirting Systems for Modern Spaces. Designed for durability, comfort, and modern aesthetics — we bring you lasting quality with minimal upkeep.',
};

const GA_ID = 'AW-17338354366';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          src="https://code.tidio.co/mz0zv7hmp9t2yzol4urumx6hbtteto6m.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${poppins.className} font-body antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
