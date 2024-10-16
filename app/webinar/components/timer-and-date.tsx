"use client";

import { WEBINAR_DATETIME, WEBINAR_URL } from "@/app/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className=" bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent text-center p-8" >
      <h2 className="text-7xl md:text-9xl font-extrabold"> {formatTime(seconds)}</h2>
      <p className="border border-red-500 bg-red-900 text-white rounded-full px-4 py-2 mt-4">
        Last Few Seats Left! Grab Your Seats Now
      </p>
    </div>
  );
};

const TimerAndDate = () => {
  return (
    <div className="mx-auto w-full mt-24 gap-6">
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
      <div className="">
        <Timer />
      </div>
      <div className="">
        <div className="border rounded-3xl border-[#58FF29] text-center p-8 mt-4 shadow-[0px_2px_47.3px_0px_#58FF292B] flex flex-col md:py-8  md:items-center md:justify-evenly md:w-full">
          <p className="text-xl">Date & Time</p>
          <p className="text-lg font-semibold p-4  w-full md:text-xl">
            {WEBINAR_DATETIME}
          </p>

          <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Register Now
          </Link>
          <p className="py-1 text-lg mt-1">(Seats Are Filling Very Fast)
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TimerAndDate;
