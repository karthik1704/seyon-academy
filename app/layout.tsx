import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

const namakuSans = localFont({
  src: "../public/fonts/namaku/Namaku.ttf",
  variable: "--font-namaku-sans",
});


export const metadata: Metadata = {
  title: "Seyon - The Best Online Physics Coaching Institute",
  description: "NEET & Board Exam Physics 💡 | Top-Notch Coaching ⚡ 🎯 Interactive & Quality Teaching 💥 ",
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
