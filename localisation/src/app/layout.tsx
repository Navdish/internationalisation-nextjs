import { cookies } from 'next/headers'
import {NextIntlClientProvider} from 'next-intl';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const language = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  return (
    <html lang={language}>
      <body>
      {/* <NextIntlClientProvider locale={language}> */}
        {children}
        {/* </NextIntlClientProvider> */}
        </body>
    </html>
  );
}
