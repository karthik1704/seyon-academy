'use client';
import Marquee from "react-fast-marquee";


const LimitedTimeOffer = () => {

return(
    <div className="overflow-hidden whitespace-nowrap bg-[rgba(255,255,255,0.06)] py-5 mt-4 relative w-full">
        <div className=" text-slate-300 font-medium text-lg text-center">
        <Marquee pauseOnHover speed={90}  className="text-center">
        {" "} !!! Hurry UP !!!{" "}
            {" "}!!! Limited Seats !!!{" "}
            {" "}!!! Register Now !!!{" "}
        </Marquee>

        </div>
       
    </div>
)

}

export default LimitedTimeOffer;