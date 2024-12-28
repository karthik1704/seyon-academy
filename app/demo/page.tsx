
const liveClass = "https://www.youtube.com/embed/6bW-5-6R3dU"
export default async function LiveClassPage() {


  return (
    <div className="h-[80%] md:h-screen ">
      <div className="aspect-w-16 aspect-h-9 p-8 h-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`${liveClass}?modestbranding=1&showinfo=0&rel=0&controls=0&cc_load_policy=0&iv_load_policy=0`}
          title={"Demo  Class"}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}


