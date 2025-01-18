import type { Metadata } from "next";
import {Poppins} from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "500","400", "600", "700", "800", "900"],
  subsets: ['latin'],
  style: ['normal', "italic"],
  variable: '--font-poppins',
})



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
        className={`${poppins.variable} antialiased text-black `}
      >
        <main>

        {children}
        </main>
        <Toaster position="top-right" richColors/>

      </body>
    </html>
  );
}
