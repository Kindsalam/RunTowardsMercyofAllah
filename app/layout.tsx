import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RouteScrollManager } from "@/components/route-scroll-manager";
import { SiteSettingsProvider } from "@/components/site-settings-provider";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

import "./globals.css";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["Amiri", "serif"],
  variable: "--font-noto-naskh-arabic",
});

const indoPakQuran = localFont({
  src: "./fonts/indopak-quran.ttf",
  display: "swap",
  preload: true,
  variable: "--font-indopak-quran",
});

const quranUthmanicHafs = localFont({
  src: "./fonts/quran-uthmanic-hafs.woff2",
  display: "swap",
  preload: true,
  variable: "--font-quran-uthmanic-hafs",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
  icons: {
    icon: "/logo-mercy.svg",
    shortcut: "/logo-mercy.svg",
    apple: "/logo-mercy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoNaskhArabic.variable} ${indoPakQuran.variable} ${quranUthmanicHafs.variable}`}
        suppressHydrationWarning
      >
        <SiteSettingsProvider>
          <RouteScrollManager />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
