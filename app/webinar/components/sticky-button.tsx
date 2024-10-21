import { WEBINAR_URL } from "@/app/constants";
import Link from "next/link";

const StickyButton: React.FC = () => {
  return (
    <div className=" md:hidden fixed bottom-4  z-50 w-full  flex items-center">
      <Link
        href={WEBINAR_URL}
        target="_blank"
        className="text-center mx-3 bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] px-2 py-3 rounded-md w-full block font-bold text-black md:p-2 md:text-xl "
      >
        Register Now
      </Link>
    </div>
  );
};

export default StickyButton;
