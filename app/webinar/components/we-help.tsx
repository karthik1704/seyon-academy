"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WEBINAR_URL } from "@/app/constants";
import Link from "next/link";

const images = [
  // "/images/other/1.jpg",
  // "/images/other/2.jpg",
  "/images/other/3.png",
];

const WeHelp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="mx-auto w-full mt-24 ">
      <div className="flex flex-col  justify-center items-center mx-auto">
        <h2 className="text-4xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
          We Help Students To Accelerate Their
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
            Neet Career
          </span>
        </h2>
        <p className="text-xl text-ellipsis p-1 text-center m-2">
          We have helped 1000+ Students achieve mind blowing physics scores by
          helping them understand the REAL REASONS behind physics concepts
          through the best strategies and Concepts.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg p-6 m-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2  transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
       
      </div>
      <div className="text-center mt-3 flex justify-center items-center mx-auto md:w-1/3 p-2 ">
          <Link
            href={WEBINAR_URL}
            target="_blank"
            className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
          >
            Yes, I Want To Learn
          </Link>
        </div>
    </div>
  );
};

export default WeHelp;
