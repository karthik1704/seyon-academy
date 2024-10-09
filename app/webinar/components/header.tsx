import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LOGO_ALT, LOGO_URL } from "@/app/constants";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2 text-2xl font-bold">
          <Image src={LOGO_URL} alt={LOGO_ALT} width={30} height={30} />
          <Link href="/">Seyon Academy</Link>
        </div>
        {/* <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav> */}
        <div className="md:hidden">
        <div className="flex justify-center space-x-4 mb-4 mt-2">
        {/* <a
          href="https://www.instagram.com/seyon_academy_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/social/instagram-color.svg"
            alt="Instagram"
            width={20}
            height={20}
          />
        </a> */}
        <a
          href="https://wa.me/+918681889968"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/social/whatsapp-color.svg"
            alt="WhatsApp"
            width={30}
            height={30}
          />
        </a>
      </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
