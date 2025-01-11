import { getLiveClass } from "@/services/live_classes";

import Player from "./player";


export default async function LiveClassPage() {
  // const liveClass = await getLiveClass();

 
  // if (!liveClass) {
  //   return <div>No Live Class</div>;
  // }
  
  return (
    <div>
      <h1>HLS Video with Video.js</h1>
      <Player/>

    </div>
  );
    
}


