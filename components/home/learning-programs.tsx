"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  
  {
    id: 8,
    title: "Phoenix",
    description: "Seyon online physics batch",
    image:
      "/images/home/learning-cards/n_point_phoenix.jpg?height=200&width=300",
    badge: "12th / Repeater - NEET",
  },
  {
    id: 7,
    title: "Eagle",
    description: "Seyon online physics batch",
    image:
      "/images/home/learning-cards/n point eagle.jpg?height=200&width=300",
    badge: "11th - NEET",
  },


  {
    id: 5,
    title: "Spark",
    description: "Seyon online physics batch",
    image: "/images/home/learning-cards/12th isc.jpg?height=200&width=300",
    badge: "12th - ICSE",
  },

  {
    id: 4,
    title: "Spark",
    description: "Seyon online physics batch",
    image: "/images/home/learning-cards/12th cbse.jpg?height=200&width=300",
    badge: "12th - CBSE",
  },

 

  {
    id: 6,
    title: "Spark",
    description: "Seyon online physics batch",
    image:
      "/images/home/learning-cards/12th StateBoard.jpg?height=200&width=300",
    badge: "12th - StateBoard",
  },

  {
    id: 2,
    title: "Nexus",
    description: "Seyon online physics batch",
    image: "/images/home/learning-cards/10th Icse .jpg?height=200&width=300",
    badge: "10th - ICSE",
  },
  {
    id: 3,
    title: "Nexus",
    description: "Seyon online physics batch",
    image: "/images/home/learning-cards/10th Cbse .jpg?height=200&width=300",
    badge: "10th - CBSE",
  },




];



export default function LearningPrograms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-5">
      <h2 className="text-2xl font-bold text-center mb-8">
        Explore our learning Programs
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {programs.map((program) => (
            <Card key={program.id} className="w-[350px] bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-[350px]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-contains rounded-t-lg"
                  />
                  {/* <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {program.badge}
                  </div> */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button
                    variant="link"
                    className="text-green-600 hover:text-green-800 p-0"
                  >
                    Read more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
