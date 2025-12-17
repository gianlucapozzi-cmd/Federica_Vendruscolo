import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/ScrollAnimations'
import LoadingScreen from '@/components/MicroInteractions'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Federica Vendruscolo PT | Allenamenti Funzionali Online per Donne',
  description: 'Trasforma il tuo corpo con programmi di allenamento funzionale personalizzati. Coach specializzata in obiettivi estetici e funzionali. Consulenza gratuita.',
  keywords: 'personal trainer, allenamento funzionale, fitness donne, workout online, programmi personalizzati',
  authors: [{ name: 'Federica Vendruscolo' }],
  creator: 'Federica Vendruscolo',
  publisher: 'Federica Vendruscolo',
  robots: 'index, follow',
  openGraph: {
    title: 'Federica Vendruscolo PT | Allenamenti Funzionali Online per Donne',
    description: 'Trasforma il tuo corpo con programmi di allenamento funzionale personalizzati. Coach specializzata in obiettivi estetici e funzionali.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Federica Vendruscolo PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federica Vendruscolo PT | Allenamenti Funzionali Online per Donne',
    description: 'Trasforma il tuo corpo con programmi di allenamento funzionale personalizzati.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e2a9f1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1380617413766098');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1380617413766098&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="lh4rpbqq322hqyubz5ekophyay1bvh" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/Logo Fede.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Logo Fede.png" />
        <meta name="theme-color" content="#e2a9f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Federica Vendruscolo PT" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoadingScreen />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}