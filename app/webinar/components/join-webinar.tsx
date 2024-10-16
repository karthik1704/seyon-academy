import { WEBINAR_DATETIME, WEBINAR_URL } from "@/app/constants";
import Link from "next/link";

const JoinWebinar = () => {
  return (
    <div className="flex flex-col items-center  mt-20 p-1">
      <h2 className="text-4xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
        Get To Know The Best Methods To Get Good Marks In Neet Physics Before
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          Everyone Else
        </span>
      </h2>
      <p className="text-xl text-ellipsis text-center md:text-2xl text-slate-400 p-2">
        In this webinar you will learn how to use institutional order flow
        techniques to catch the biggest moves with the highest risk reward
        ratio, consistently in the markets.
      </p>

      <div className="flex flex-col md:flex-row justify-between p-2 md:gap-10">
        <UpcomingWebinar />
        <WebinarBounes />
      </div>
    </div>
  );
};

export default JoinWebinar;

const UpcomingWebinar = () => {
  return (
    <div className="  rounded-3xl overflow-hidden shadow-lg my-4 border-4 border-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8] ">
      <div className="w-full h-full bg-black rounded-3xl px-25 py-50 text-center p-2">
        <div className="px-6 py-4">
          <div className="font-bold text-4xl md:text-6xl mb-2 py-8">
            Upcoming Webinar
          </div>
          <p className="text-gray-700 text-lg">Date & Time</p>
          <p className="font-semibold text-xl">{WEBINAR_DATETIME}</p>
          <p className="text-gray-700 text-lg md:text-xl font-semibold">
            (Seats Are Filling Very Fast)
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const WebinarBounes = () => {
  return (
    <div className="  rounded-3xl overflow-hidden shadow-lg my-4 border-4 border-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8] ">
      <div className="w-full h-full bg-black rounded-3xl px-25 py-50 text-center p-2">
        <div className="px-6 py-4">
          <div className="font-bold text-4xl md:text-6xl mb-2 p-8">
          Webinar Bonuses
          </div>
          
        </div>
        <div className="px-6 py-4">
            <div className="flex items-center mb-2">
                <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
                <span className="font-semibold text-lg">Free Ebook</span>
            </div>
            <div className="flex items-center mb-2">
                <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
                <span className="font-semibold text-lg">Source Material</span>
            </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Register Now
            </Link>
        </div>
      </div>
    </div>
  );
};
