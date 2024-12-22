import { getLiveClass } from "@/services/live_classes";

export default async function LiveClassPage() {
  const liveClass = await getLiveClass();

  
  if (!liveClass) {
    return <div>No Live Class</div>;
  }
  
  return (
    <div className="h-full">
      <div className="aspect-w-16 aspect-h-9 p-8 h-full">
        <iframe
          className="w-full h-full rounded-lg"
          src={`${liveClass.class_link}?modestbranding=1&showinfo=0&rel=0&controls=1`}
          title={liveClass.class_name}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
