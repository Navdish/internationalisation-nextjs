import { cookies } from 'next/headers'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const language = cookieStore.get('NEXT_LOCALE')?.value || 'en'
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
