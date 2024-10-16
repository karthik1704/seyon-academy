'use client';
import { useState, useEffect } from "react";
import WebinarButton from "./webinar-button";
const texts = ["Get 170 + Score", " With Perfect Strategy ", "With Focussed Targets" ];

const HeroSection = () => {
  const [text, setText] = useState(texts[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setFadeIn(false); // Trigger fade-out

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setText(texts[currentIndex]);
        setFadeIn(true); // Trigger fade-in
      }, 500); // Wait for fade-out animation (500ms) before changing text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-7 p-4 container mx-auto flex items-center justify-center flex-col">
      <h1 className="text-4xl font-semibold text-center inline-block md:text-6xl capitalize">
      Master NEET Physics <br />
        <span
          className={`bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8] transition-opacity duration-500 ease-in-out transform ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {text}
        </span><br />
       <span> &</span>
        <span className="block "> Achieve Your Dream of Becoming a Doctor! </span>
          </h1>
      <p className="text-center mt-4 text-ellipsis text-slate-600 font-medium md:text-xl">
      Unlock The Secrets of High Level Performance
      </p>

      <WebinarButton />
    </section>
  );
};

export default HeroSection;
