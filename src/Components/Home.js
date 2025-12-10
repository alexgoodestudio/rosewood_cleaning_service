import React from "react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Mission from "./Mission";
// import About from "./About";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Opener />
      <Services/>
      {/* <About /> */}
      <ReviewMarquee />
      <Mission />
    </div>
  );
}

export default Home;