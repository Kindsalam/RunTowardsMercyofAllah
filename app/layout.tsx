import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteSettingsProvider } from "@/components/site-settings-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Run Towards Allah's Mercy",
  description:
    "A calm, mobile-first Ramadan reading space for Qur'anic Rabbana duas, morning and evening adhkar, and duas for the last 10 nights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteSettingsProvider>
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
