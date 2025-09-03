import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../Images/card5.png";
import Image2 from "../Images/card3.png";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const containerRef = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // start Image2 off to the right
      gsap.set(image2Ref.current, {
        position: "absolute",
        top: 0,
        left: 0,
        x: "100%",
      });

      gsap.to(image2Ref.current, {
        x: "0%", // slide fully over Image1
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center", // section reaches middle of screen
          end: "+=1000", // how long the pin lasts (adjust this)
          scrub: true, // ties animation to scroll
          pin: true, // pins the section in place
          anticipatePin: 1, // smoother pin behavior
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container relative">
      <div className="mission-body row items-center">
        <div className="col-lg-5 col-12">
          <h2 className="text-4xl text-start mb-lg-4">
            Why Choose Us?
          </h2>
          <p className="text-md text-start thin">
            We’re not just another cleaning company — we’re part of your
            community. From local families to busy professionals, we take pride
            in making homes across Columbia cleaner, healthier, and more
            welcoming. At Rosewood Cleaning Services, we understand the unique
            needs of our neighbors. We know what it means to juggle work,
            family, and daily responsibilities, which is why we offer reliable,
            flexible cleaning solutions that save you time and energy. But it’s
            more than just cleaning — it’s about creating spaces where families
            can relax, children can play safely, and pets can roam without
            worry. We use eco-friendly products and sustainable practices
            because caring for your home also means caring for our shared
            environment. By choosing Rosewood Cleaning Services, you’re
            supporting a locally owned business that values relationships,
            trust, and the well-being of our community. Every home we care for
            is a part of the neighborhood we love.
          </p>
          <p className="text-start mt-lg-5 text-sm bold">
            LEARN MORE
          </p>
        </div>

        <div className="col-lg-1 col-12"></div>

        {/* Image container */}
        <div className="col-lg-6 col-12  relative overflow-hidden">
          <img src={Image} className="rounded w-100 p-lg-5" alt="Before" />
          <img ref={image2Ref} src={Image2} className="rounded w-100 p-lg-5" alt="After" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
