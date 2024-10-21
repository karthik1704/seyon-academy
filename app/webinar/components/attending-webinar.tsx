import Image from "next/image";
interface CardProps {
  title: string;
  image: string;
}

const cardData = [
  {
    title: "Generate a study plan on your own weekly monthly with your comfort schedule",
    image: "/images/4.1.png"
  },
  {
    title: "Get the most score possible between 160 to 180 easily",
    image: "/images/4.2.png"
  },
  {
    title: "Behaving and being as a neet aspirant as your confident grows and you get things done, not just a talk",
    image: "/images/4.3.png"
  }
]

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="flex  md:flex-col items-center justify-center  border border-transparent rounded-3xl shadow-lg w-full md:w-[300px] md:h-[300px] hover:bg-clip-border hover:bg-gradient-to-r hover:from-[#12FFD4] hover:to-[#9BF170] ">
      <div className="bg-black  hover:border-transparent p-4 rounded-3xl text-center h-full flex items-center md:flex-col">
        <div className="flex justify-center items-center">

        <Image src={image} alt={title} width={100} height={80} className="p-2  w-40 h-32 " />
        </div>
        <h3 className="text-sm md:text-xl font-semibold text-center text-ellipsis mt-4">
          {title}
        </h3>
      </div>
    </div>
  );
};

const AttendingWebinar = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-8">
      <h2 className="text-4xl font-semibold text-center inline-block md:text-5xl capitalize mb-4 p-1">
        After Attending This Webinar
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          You Will Be Able To
        </span>
      </h2>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-3  md:gap-3 p-2 ">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default AttendingWebinar;
