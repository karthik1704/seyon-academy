const YouShouldAttend = () => {
  return (
    <div className="mx-auto w-full text-center mt-40 flex flex-col">
      <h2 className="text-xl font-semibold text-center md:text-5xl capitalize mb-4">
        You Should{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          Attend This Webinar If
        </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:p-4 p-2">
        <Card title="You Want To Get 170 + In Neet Physics
" image="image1.jpg" />
        <Card title="You Really Want to Know The Methods To Score Higher Than Your Competes
" image="image2.jpg" />
        <Card title="Even If You Want To Start From Absolute Basics" image="image3.jpg" />
      </div>
    </div>
  );
};

export default YouShouldAttend;

interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="shadow-md rounded-lg p-1 w-full md:w-1/3 border transition-all duration-300  hover:bg-gradient-to-r hover:from-[#cdff64] hover:via-[#66d6ad] hover:to-[#13b5e8]">
     <div className="bg-black hover:border-transparent w-full h-full rounded-lg p-4">

      <img src={image} alt={title} className="mb-2" />
      <p className="text-center text-xl text-ellipsis">{title}</p>
     </div>
    </div>
  );
};
