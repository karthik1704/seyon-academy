import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

const namakuSans = localFont({
  src: "../public/fonts/namaku/Namaku.ttf",
  variable: "--font-namaku-sans",
});


export const metadata: Metadata = {
  title: "Seyon Academy",
  description: "Seyon Academy's is next generation coaching platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <GoogleTagManager gtmId="AW-16792179174" />
      <body
        className={`${namakuSans.variable} antialiased text-black `}
      >
        {children}
      </body>
    </html>
  );
}
