

const comments = [
  {
    student_name: "Harini",
    std: '11th',
    comment:"This session was super session ever i have attended.",
    image: null,
  },
  {
    student_name: "Sneha",
    std: '12th',
    comment:"You made the day easy sir, i liked the way you taught us!",
    image: null,
  },
  {
    student_name: "Harshan",
    std: "11th",
    comment:"Sir, I like that you have insisted everyone to be strong in foundation",
    image: null,
  },
  {
    student_name: "Kavin",
    std: "RPTR",
    comment:"Sir, i am glad that i have attended this webinar, its awesome!",
    image: null,
  },

]
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
        {comments.map((comment, index) => (
            <div
                key={index}
                className="border rounded-2xl p-1 m-2 w-full md:w-1/3 shadow-md bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8] bg-clip-border"
            >
                <div className=" bg-black border-transparent p-4 rounded-2xl w-full h-full">
                    <p className="text-2xl">
                        &quot;{comment.comment}&quot;
                    </p>
                    <p className="text-2xl">- {comment.student_name}{" "}{`(${comment.std})`}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
  );
}

export default HearFromStudents;