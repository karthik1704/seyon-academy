



const HearFromStudents = () => {
  return (
    <div className="mx-auto w-full text-center">
      <h2 className="text-xl font-semibold text-center md:text-5xl capitalize mb-4 p-2">
      What students say about{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
        our webinars
        </span>
      </h2>
    <div className="flex justify-around flex-wrap">
        {Array.from({ length: 4 }).map((_, index) => (
            <div
                key={index}
                className="border rounded-2xl p-1 m-2 w-full md:w-1/3 shadow-md bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8] bg-clip-border"
            >
                <div className=" bg-black border-transparent p-4 rounded-2xl w-full h-full">
                    <p>
                        &quot;I learned so much from the webinar. It was a great experience and I
                        would recommend it to anyone interested in learning more about the
                        topic.&quot;
                    </p>
                    <p>- John Doe</p>
                </div>
            </div>
        ))}
    </div>
    </div>
  );
}

export default HearFromStudents;