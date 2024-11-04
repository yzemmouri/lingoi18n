import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import LocaleSwitcher from './components/LocaleSwitcher';

import { IBM_Plex_Serif } from 'next/font/google';
import { Metadata } from 'next';

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--front-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'Lingo',
  description: 'Lingo application',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${ibmPlexSerif.variable}`}>
        <nav dir={locale === 'ar' ? 'ltr' : 'rtl'}>
          <LocaleSwitcher />
        </nav>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
