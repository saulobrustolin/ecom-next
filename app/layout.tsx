import type { Metadata } from "next";
import "./globals.css";

import { inter } from '@/config/font';

import PromotionBar from '@/modules/promotion-bar';
import BarNavigation from '@/modules/bar-navigation/bar-navigation';

export const metadata: Metadata = {
  title: "building...",
  description: "building...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}
      >
        <PromotionBar/>
        <BarNavigation/>
        {children}
      </body>
    </html>
  );
}
