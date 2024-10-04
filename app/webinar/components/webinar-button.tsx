import { WEBINAR_DATETIME, WEBINAR_URL } from "@/app/constants";
import Link from "next/link";

const WebinarButton = () => {
  return (
    <div className="border rounded-md border-[#58FF29] text-center p-5 mt-4 shadow-[0px_2px_47.3px_0px_#58FF292B] md:flex md:py-2  md:items-center md:justify-evenly md:w-full">
       
      <p className="text-lg font-semibold p-4  w-full md:text-xl">{WEBINAR_DATETIME}</p>
        
      <Link href={WEBINAR_URL} target="_blank" className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl ">
        Live Webinar
      </Link>
    </div>
  );
};

export default WebinarButton;
