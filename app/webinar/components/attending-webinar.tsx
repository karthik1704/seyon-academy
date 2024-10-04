interface CardProps {
  title: string;
  icon: string;
}

const Card = ({ title, icon }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center  border border-transparent rounded-3xl shadow-lg w-full md:w-[400px] md:h-[200px] hover:bg-clip-border hover:bg-gradient-to-r hover:from-[#12FFD4] hover:to-[#9BF170] ">
      <div className="bg-black  hover:border-transparent p-4 rounded-3xl text-center h-full">
        <span className="text-5xl p-3">{icon}</span>
        <h3 className="text-xl font-semibold text-center text-ellipsis mt-4">
          {title}
        </h3>
      </div>
    </div>
  );
};

const AttendingWebinar = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-8">
      <h2 className="text-1xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
        After Attending This Webinar
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          You Will Be Able To
        </span>
      </h2>
      <div className="flex flex-col md:flex-row  gap-6 p-2 ">
        <Card
          icon="🚀"
          title="Generate a study plan on your own weekly monthly with your comfort schedule
"
        />
        <Card
          icon="🚀"
          title="Get the most score possible between 160 to 180 easily
"
        />
        <Card
          icon="🚀"
          title="Behaving and being as a neet aspirant as your confident grows and you get things done, not just a talk
"
        />
      </div>
    </div>
  );
};

export default AttendingWebinar;
