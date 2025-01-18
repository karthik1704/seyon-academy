"use client";
import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="/images/logo/logo_gif.gif"
        width={400}
        height={400}
        alt="seyon gif"
      />
    </div>
  );
}
