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