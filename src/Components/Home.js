import React from "react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why";
import Mission from "./Mission";
// import ServicesNew from "./ServicesNew";
// import BannerBottom from "./BannerBottom";
import Contact from "./Contact"
import Services from "./Services";

function Home() {
  return (
    <div>
      <Opener />
      {/* <BannerBottom /> */}
      <Services/>
      <ReviewMarquee />
      <Mission />
      {/* <ServicesNew /> */}
      <Why />
      <Contact/>
    </div>
  );
}

export default Home;