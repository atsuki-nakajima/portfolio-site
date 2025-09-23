import type { Metadata } from "next";
import "./globals.css";
import { Cinzel } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-cinzel" });
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Atsuki's — Portfolio",
  description: "ポートフォリオサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${cinzel.variable} ${noto.variable} font-noto bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}