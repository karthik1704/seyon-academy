"use client";
import { WEBINAR_URL } from "@/app/constants";
import Link from "next/link";
import React from "react";

const TimeTicking = () => {
  const [time, setTime] = React.useState(600);

  React.useEffect(() => {
    if (time > 1) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="mx-auto w-full  mt-10 p-5 md:p-10">
      <div className="p-5 border  rounded-3xl shadow-lg text-center ">
        <h2 className="text-3xl font-semibold text-center md:text-5xl capitalize mb-4">
          Time Is{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
            Ticking
          </span>
        </h2>
        <p className="text-lg text-slate-400">
          Don&apos;t miss out on something truly exceptional!
        </p>
        <div className="p-4">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            {formatTime(time)}
          </h1>
          <div>

          <p className="border  border-red-500 bg-red-900 text-white rounded-full px-4 py-2 mt-4 w-[100%]">
        Last Few Seats Left! Grab Your Seats Now
      </p>
          </div>
        </div>
        <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Register Now
          </Link>
          <p className="text-lg text-slate-400 py-1">(Offer expires in 10 minutes, Hurry Up!)</p>
      </div>
    </div>
  );
};

export default TimeTicking;
