import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        {children}
      </body>
    </html>
  );
}
