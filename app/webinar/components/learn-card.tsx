import Link from "next/link";
import Image from "next/image";
import {  WEBINAR_URL } from "@/app/constants";

interface LearnCardProps {
  title: string;
  description: string;
  image: string;

}

const LearnCard = ({ title, description, image }: LearnCardProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 border rounded-lg m-2 w-[250px] md:w-[350px] h-[700px] transition-transform duration-300 hover:scale-105 hover:z-10">
      <div className="  p-2 mt-4">
        <Image
          src={image}
          alt="Picture of the author"
          width={250}
          height={40}
          className="rounded-md h-[160px]" // just an example
        />
      </div>
      <div className="text-center text-ellipsis p-2 flex flex-col justify-around">
        <h2 className="text-2xl md:text-3xl font-semibold capitalize">{title}</h2>
        <p className="text-muted-foreground font-semibold text-ellipsis text-pretty text-lg md:text-xl p-2">{description}</p>
      <Link href={WEBINAR_URL} target="_blank" className="bg-gradient-to-b  from-[#29e337] to-[#76ff80] shadow-[0_0_30px_1px_rgb(82_237_38_/_40%)] p-4 rounded-md w-full block font-bold text-black md:p-4 md:text-xl my-4 ">
        Register Now
      </Link>
      </div>
    </div>
  );
};

export default LearnCard;
