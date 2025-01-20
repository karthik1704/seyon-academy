import { getLiveClass } from "@/services/live_classes";

import Player from "./player";


export default async function LiveClassPage() {
  // const liveClass = await getLiveClass();

 
  // if (!liveClass) {
  //   return <div>No Live Class</div>;
  // }
  
  return (
    <div className="p-10 ">
      <Player/>
    </div>
  );
    
}


