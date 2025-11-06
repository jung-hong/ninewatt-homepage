import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import localFont from "next/font/local";

import "../globals.css";

import Header from "../_components/layout/header";
import Footer from "../_components/layout/footer";
import { HeaderProvider } from "../_providers/HeaderContext";

// i18n
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  fallback: ["intel"],
});

export const metadata: Metadata = {
  title: "Ninewatt",
  description: "Ninewatt Homepage",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // 들어오는 'locale'이 유효한지 확인합니다.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 클라이언트에게 모든 메시지를 제공합니다.
  // side is the easiest way to get started
  const messages = await getMessages();

  console.log({ locale, messages });

  return (
    <html lang={locale}>
      <head>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderProvider>
            <Header />
            <div className="flex flex-col bg-white">{children}</div>
            <Footer />
          </HeaderProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
