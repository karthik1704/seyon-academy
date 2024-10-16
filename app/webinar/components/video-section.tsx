import {
  LOGO_ALT,
  LOGO_URL,
  VIDEO_SECTION_IMAGE_AVIF,
  WEBINAR_URL,
} from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

const VideoSection = () => {
  return (
    <section className="mt-7 md:border container mx-auto flex items-center justify-center flex-col  md:rounded-3xl overflow-hidden bg-gradient-to-b  from-[#29e337] to-gray-500 ">
      <div className=" p-4  md:p-8 md:border-transparent bg-black w-full">
        <div className="hidden md:flex md:gap-2 text-center md:justify-center bg-black ">
          <div className="flex items-center justify-center gap-6">
            <Image src={LOGO_URL} alt={LOGO_ALT} width={50} height={50} />
            <div className="block md:hidden border bg-[rgb(34,33,36)] border-[#58FF29] text-[10px] font-bold p-2">
              Hosted By Seyon Academy
            </div>
          </div>
          
          <div className="">
            <h2 className="text-2xl font-semibold capitalize text-center">
              <span className="text-[#58FF29] text-3xl ">
                {" "}
                #1<sup className="lowercase">st</sup>
              </span>{" "}
              Ever NEET Physics community in TamilNadu
            </h2>
          
          </div>
        </div>
        <div className="mt-2 border rounded-xl overflow-hidden w-full ">
          <Image
            src={VIDEO_SECTION_IMAGE_AVIF}
            alt="atten webinar image"
             width={800} // Original width
          height={600} // Original height
          className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="md:hidden flex  flex-col gap-2 text-center justify-center mt-3">
          <div className="flex items-center justify-center  gap-6">
            <Image src={LOGO_URL} alt={LOGO_ALT} width={50} height={50} />
            <div className="block md:hidden border bg-[rgb(34,33,36)] border-[#58FF29] text-[10px] font-bold p-2">
              Hosted By Seyon Academy
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold capitalize">
              <span className="text-[#58FF29] text-3xl ">
                {" "}
                #1<sup className="lowercase">st</sup>
              </span>{" "}
              Ever NEET Physics community in TamilNadu
            </h2>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
