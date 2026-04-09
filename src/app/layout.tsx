// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'AluEmpire | uPVC Doors & Windows',
  description:
    'Discover a smarter, stronger, and more sustainable way to style your home with Alu Empire’s high-performance uPVC doors and windows. Designed for durability, comfort, and modern aesthetics — we bring you lasting quality with minimal upkeep.',
};

const GA_ID = 'AW-17338354366';

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

        <script src="//code.tidio.co/mz0zv7hmp9t2yzol4urumx6hbtteto6m.js" async></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
