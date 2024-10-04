'use client';
import Marquee from "react-fast-marquee";


const LimitedTimeOffer = () => {

return(
    <div className="overflow-hidden whitespace-nowrap bg-[rgba(255,255,255,0.06)] py-5 mt-4 relative w-full">
        <div className=" text-slate-300 font-medium text-lg text-center">
        <Marquee pauseOnHover speed={90}  className="text-center">
            Offer 1: 50% off on all courses!
            Offer 2: Buy one get one free!
            Offer 3: Free trial for 7 days!
        </Marquee>

        </div>
       
    </div>
)

}

export default LimitedTimeOffer;