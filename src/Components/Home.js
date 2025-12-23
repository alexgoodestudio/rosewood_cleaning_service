import React from "react";
import MobileHeader from "./MobileHeader";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Mission from "./Mission";
// import About from "./About";
import Highlight from "./Highlight";
import Services from "./Services";
import Interested from "./Interested";

function Home() {
  return (
    <div>
      <MobileHeader />
      <Opener />
      <Services/>
      <Highlight />
      {/* <About /> */}
      <Mission />
      <ReviewMarquee />
      <Interested/>
    </div>
  );
}

export default Home;