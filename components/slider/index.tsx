"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Define the structure for our slide data
interface SlideData {
  imageUrl: string;
  title: { line1: string; highlight: string; line2: string, line3:string } | null;
  description: string;
}

// Sample data for the carousel
const slides: SlideData[] = [
  // {
  //   imageUrl: "/images/slider/web 1.avif",
  //   title: null,
  //   description:
  //     "This is the description for slide 1. It can contain multiple sentences.",
  // },
  // {
  //   imageUrl: "/images/slider/web 2.avif",
  //   title: null,
  //   description:
  //     "Here's some information for slide 2. Feel free to add more details.",
  // },
  // {
  //   imageUrl: "/images/slider/web 3.avif",
  //   title: null,
  //   description:
  //     "Slide 3 brings more exciting content. Customize this text as needed.",
  // },
  // {
  //   imageUrl: "/images/slider/web 4.avif",
  //   title: null,
  //   description:
  //     "This is the description for slide 1. It can contain multiple sentences.",
  // },
  // {
  //   imageUrl: "/images/slider/web 5.avif",
  //   title:null,
  //   description:
  //     "Here's some information for slide 2. Feel free to add more details.",
  // },
  {
    imageUrl: "/images/slider/web6.jpg",
    title: {
      line1: "I Don't Just Teach;",
      highlight: "I Train My Students ",
      line2: "To Turn Their Dreams ",
      line3: "Into Reality",
    },
    description:
      "Here's some information for slide 2. Feel free to add more details.",
  },
];

// Custom Slide component
const Slide: React.FC<SlideData> = ({ imageUrl, title }) => (
  <Card className="w-full h-full overflow-hidden">
    {/* <CardContent className="p-0 ">
      <div className="flex flex-col md:flex-row items-center justify-center h-[60%]">
        <div className="w-full md:w-full relative mr-9">
          <AspectRatio ratio={16 / 9} className="w-full h-full">
            <Image src={imageUrl} alt={title} fill className="object-contain" />
          </AspectRatio>
        </div>
        <div className="w-full md:w-1/2 flex items-start  ">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
          </div>
        </div>
      </div>
    </CardContent> */}
    <div className="flex flex-col md:flex-row items-center p-6">
      {/* <div className="w-full md:w-1/2 space-y-4 bg-[url('/images/home/e1.png')] flex flex-col items-center">
        {title && (
          <h2 className="text-2xl md:text-6xl text-center md:text-left font-bold space-y-2 pl-4 p-2">
            <span className="block  py-2 "> {title.line1}</span>
            <span className="   py-2 rounded-full inline-block">
             {title.highlight}
            </span>
            <span className="block py-2 ">{title.line2}</span>
            <span className="block py-2 ">{title.line3} </span>
          </h2>
        )}
        <Image src={"/images/home/signature.png" } width={200} height={300} alt="signature" />
      </div> */}
      <div className="w-full ">
        <div className="p-1 relative">
          <Image
            src={imageUrl}
            alt="Food presentation"
            width={1440}
            height={900}
            className="w-full  object-contain"
          />
        </div>
      </div>
    </div>
  </Card>
);

export default function ImageTextCarousel() {
  //   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <Carousel
      className="w-full   mx-auto"
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Slide {...slide} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <CarouselPrevious className="relative left-0 translate-x-0 hover:bg-white/50 hover:text-black transition-colors">
          <ChevronLeft className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="relative right-0 translate-x-0 hover:bg-white/50 hover:text-black transition-colors">
          <ChevronRight className="h-8 w-8" />
        </CarouselNext>
      </div>
    </Carousel>
  );
}
