import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col justify-center items-center h-full gap-6 text-white py-8">
      <div>
        <Image src="/images/home/seyon_logo.png" alt="Logo" width={150} height={150} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/terms-conditions" className="hover:text-green-500">Terms and Conditions</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>&copy; 2024 Seyon Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
