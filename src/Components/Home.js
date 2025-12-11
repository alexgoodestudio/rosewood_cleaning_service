import React from "react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Mission from "./Mission";
// import About from "./About";
import Services from "./Services";
import Interested from "./Interested";

function Home() {
  return (
    <div>
      <Opener />
      <Services/>
      {/* <About /> */}
      <ReviewMarquee />
      <Mission />
      <Interested/>
    </div>
  );
}

export default Home;