import { LOGO_ALT, LOGO_URL } from "@/app/constants";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className=" text-white py-4 text-center">
      <div>
        <Image
          src={LOGO_URL}
          alt={LOGO_ALT}
          className="mx-auto mb-4"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-semibold">Seyon Academy</h1>
      </div>
      <p className="text-lg mt-6">Follow us on:</p>
      <div className="flex justify-center space-x-4 mb-4 mt-2">
        <a
          href="https://www.instagram.com/seyon_academy_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/social/instagram-color.svg"
            alt="Instagram"
            width={30}
            height={30}
          />
        </a>
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
    <div className="text-center mt-4 mb-8">
        <h2 className="text-lg font-semibold">Disclaimer</h2>
        <p className="text-sm mt-2">
            The information provided on this website is for educational purposes only and is not intended as legal advice.
        </p>
    </div>
      <hr className="border-gray-700" />
      <div className="container mx-auto text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Seyon Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
