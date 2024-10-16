import LearnCard from "./learn-card";

const cardData = [
  {
    title: "Why Neet Physics Is More Important Than You Ever Thought?",
    description: "You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.",
    image: '/images/2.1.avif',
    link: "https://www.google.com"
  },
  {
    title: "How To Use Your Full Potential To Get 170 + In Neet Physics?",
    description: "You might have all the sources, You might be good in math and physics concepts and numericals also. But what you don't know is how to get things done, how to use your full potential , i am going to make you see how you can get 170+ . Buckle up !",
    image:'/images/2.2.avif',
    link: "https://www.google.com"
  },
  {
    title: "What Must You Do To Achieve Your Doctor Dream ?",
    description: "Yes, You can be as good as possible, you can be very knowledgeable . but if you dont know what to follow, what to do next, someone will get what you deserve. That's true. It is not the knowledge game, it is a competition . you should prepare to beat everyone to go higher than the rest of them. Lets learn how to do that!",
    image:'/images/2.3.avif',
    link: "https://www.google.com"
  }
];

const LearnFromUs = () => {
  return (
    <div className="text-center mt-4 container flex flex-col items-center justify-center mx-auto mb-10">
      <h2 className="text-4xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
        What Will You Learn <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          In This Webinar ?
        </span>
      </h2>
      <div className="flex items-center flex-col md:flex-row md:flex-wrap md:justify-center">
        {cardData.map((card, index) => (
          <LearnCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            
          />
        ))}
      </div>
    </div>
  );
};

export default LearnFromUs;
