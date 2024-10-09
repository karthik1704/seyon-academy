"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WEBINAR_URL } from "@/app/constants";

const images = [
  "/images/3.2.avif",
  "/images/3.3.avif",
  "/images/3.4.avif",
];

const CheckoutSneakpeak = () => {
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
    <div className="text-center mt-4 container flex flex-col items-center justify-center mx-auto mb-10">
      <h2 className="text-2xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
        Check Out My Class Sessions
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          Sneak Peak!
        </span>
      </h2>
      <div className="flex items-center">
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
      <div className="p-2 items-center">
        <Link
          href={WEBINAR_URL}
          target="_blank"
          className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl "
        >
          Learn From Bala
        </Link>
        <p className="text-center  capitalize mt-4 text-sm">
          ( 8 + Years of Physics Teaching Experience, 6+ Years Of Neet Physics
          Coaching Experience )
        </p>
      </div>
    </div>
  );
};

export default CheckoutSneakpeak;
