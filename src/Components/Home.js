import React from "react";
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
      <Opener />
      <Services/>
      <Highlight />
      {/* <About /> */}
      <ReviewMarquee />
      <Mission />
      <Interested/>
    </div>
  );
}

export default Home;