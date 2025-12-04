import React from "react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why";
import Mission from "./Mission";
// import ServicesNew from "./ServicesNew";
import BannerBottom from "./BannerBottom";
import Contact from "./Contact"
import Services from "./Services";

function Home() {
  return (
    <div>
      <Opener />
      <ReviewMarquee />
      <Mission />
      <Services/>
      {/* <ServicesNew /> */}
      <Why />
      <Contact/>
      <BannerBottom />
    </div>
  );
}

export default Home;