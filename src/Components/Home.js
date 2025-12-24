import React from "react";
import MobileHeader from "./MobileHeader";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Mission from "./Mission";
// import About from "./About";
import Highlight from "./Highlight";
import Services from "./Services";
import Interested from "./Interested";

import BannerBottom from "./BannerBottom";

function Home() {
  return (
    <div>
      <BannerBottom/>
  
      <MobileHeader />
      <Opener />
      <Services/>
      <ReviewMarquee />
      <Highlight />
      {/* <About /> */}
      <Mission />
      <Interested/>
    </div>
  );
}

export default Home;