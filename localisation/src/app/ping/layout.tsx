'use client'
import { NextIntlClientProvider } from "next-intl";

export default function PingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <NextIntlClientProvider locale={"en_EN"}>
        {children}
      </NextIntlClientProvider>
    </section>
  );
}
