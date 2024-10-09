import Image from 'next/image';

const YourCoach = () => {
  return (
    <div className="mx-auto w-full text-center">
      <h2 className="text-2xl font-semibold text-center md:text-5xl capitalize mb-4">
        Your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          Coach
        </span>
      </h2>
      <div className="flex border md:p-20 flex-col md:flex-row justify-center items-center text-center m-8 rounded-3xl">
        <div className="w-1/2">
          <Image
            src="/images/other/bala.png"
            alt="Your Coach"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-center md:items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-ellipsis mb-4">
            Rethina Balan
          </h3>
          <p className='text-slate-400 md:text-xl text-lg mb-4'>( Aeronautical Engineer | Founder & Teacher @ Seyon Academy | 8+ Years Experience )</p>
          <p className=" text-lg md:text-xl text-ellipsis text-center">
            Rethina Balan is a founder and teacher @ seyon academy for the past 9 years. He has helped 1000+ students achieve
            mind-blowing physics scores by helping them understand the REAL
            REASONS behind physics concepts through the best strategies and
            Concepts.
          </p>
      </div>
    </div>
    </div>
  );
};

export default YourCoach;
