import { Suspense } from 'react';
import Script from 'next/script';
import { Loader2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ThankYouContent from '@/components/thank-you-content';

function ThankYouFallback() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center">
        <Loader2 className="w-16 h-16 animate-spin text-primary" />
      </main>
      <Footer />
    </div>
  );
}

export default function ThankYouPage() {
  const CONV_LABEL = 'AW-17338354366/8sWpCITnsfEaEL6VyctA';

  return (
    <>
     
      {/* Fire your Google Ads conversion event */}
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': '${CONV_LABEL}'
            });
          }
        `}
      </Script>

      <Suspense fallback={<ThankYouFallback />}>
        <ThankYouContent />
      </Suspense>
    </>
  );
}
