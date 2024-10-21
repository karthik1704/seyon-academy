import { WEBINAR_DATETIME, WEBINAR_DAY, WEBINAR_TIMING, WEBINAR_URL } from "@/app/constants";
import Link from "next/link";

const WebinarButton = () => {
  return (
    <div className="border rounded-3xl border-[#58FF29] text-center py-3 px-5 mt-4 shadow-[0px_2px_47.3px_0px_#58FF292B] md:flex md:py-2  md:items-center md:justify-evenly md:w-full">
      <p className="text-2xl font-semibold p-2  w-full md:text-2xl">{WEBINAR_DATETIME}</p>
      <p className="text-2xl font-semibold   w-full md:text-2xl p-1 ">{WEBINAR_DAY}</p>
      <p className="text-2xl font-semibold   w-full md:text-2xl p-1 mb-3">{WEBINAR_TIMING}</p>
        
      <Link href={WEBINAR_URL} target="_blank" className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-2 rounded-md w-full block font-bold text-black md:p-2 md:text-xl ">
        Register Now
      </Link>
    </div>
  );
};

export default WebinarButton;
