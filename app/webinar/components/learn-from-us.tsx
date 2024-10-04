import { VIDEOSECTIONURL } from "@/app/constants";
import LearnCard from "./learn-card";

const LearnFromUs = () => {
  return (
    <div className="text-center mt-4 container flex flex-col items-center justify-center mx-auto
     mb-10">
      <h2 className="text-1xl font-semibold text-center inline-block md:text-5xl capitalize mb-4">
        What Will You Learn <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          In This Webinar ?
        </span>
      </h2>
      <div className="flex items-center flex-col  md:flex-row md:flex-wrap">
        <LearnCard
          title="Why Neet Physics Is More Important Than You Ever Thought ?
"
          description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
          image={VIDEOSECTIONURL}
          link="https://www.google.com"
        />
        <LearnCard
          title="Why Neet Physics Is More Important Than You Ever Thought ?
"
          description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
          image={VIDEOSECTIONURL}
          link="https://www.google.com"
        />
        <LearnCard
          title="Why Neet Physics Is More Important Than You Ever Thought ?
"
          description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
          image={VIDEOSECTIONURL}
          link="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default LearnFromUs;
