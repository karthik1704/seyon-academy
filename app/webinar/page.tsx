import { Metadata } from "next";
import HeroSection from "./components/hero";
import VideoSection from "./components/video-section";
import LearnFromUs from "./components/learn-from-us";
import CheckoutSneakpeak from "./components/checkout-sneakpeak";
import LimitedTimeOffer from "./components/limited-time-offer";
import AttendingWebinar from "./components/attending-webinar";
import TimerAndDate from "./components/timer-and-date";
import WeHelp from "./components/we-help";
import JoinWebinar from "./components/join-webinar";
import YouShouldAttend from "./components/you-should-attend";
import YourCoach from "./components/your-coach";
import HearFromStudents from "./components/hear-from-students";
import TimeTicking from "./components/time-ticking";
import Faq from "./components/faq";
import Footer from "./components/footer";
import StickyButton from "./components/sticky-button";

export const generateMetadata = (): Metadata => ({
  title: "Webinar | Seyon Academy",
  description: "Seyon Academy's Webinar Page",
});

const WebinarPage = async () => {
  return (
    <div className="w-full mx-auto">
      <HeroSection />
      
      <VideoSection />

      <LearnFromUs />
      <CheckoutSneakpeak />
      <LimitedTimeOffer/>
      <AttendingWebinar />
      <TimerAndDate />
      <WeHelp/>
      <JoinWebinar/>
      <YouShouldAttend/>
      <YourCoach/>
      <HearFromStudents/>
      <TimeTicking />
      <Faq/>
      <Footer/>
      <StickyButton/>
    </div>
  );
};

export default WebinarPage;
