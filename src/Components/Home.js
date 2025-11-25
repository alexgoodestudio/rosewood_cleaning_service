import React from "react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why";
import Mission from "./Mission";
import ServicesNew from "./ServicesNew";
// import BannerBottom from "./BannerBottom";
import Contact from "./Contact"

function Home() {
  return (
    <div>
      <Opener />
      <ReviewMarquee />
      <Mission />
      <ServicesNew />
      <Why />
      {/* <BannerBottom /> */}
      <Contact/>
    </div>
  );
}

export default Home;