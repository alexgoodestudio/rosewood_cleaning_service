import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../Images/image2.png";
import Image2 from "../Images/image1.png";

gsap.registerPlugin(ScrollTrigger);

function Why() {
  const containerRef = useRef(null);
  const image2Ref = useRef(null);
  const image1Ref = useRef(null);

  useGSAP(() => {
    // Start Image2 off to the right
    gsap.set(image2Ref.current, { x: "130%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(image2Ref.current, { x: "0%", ease: "none" }, 0)
      .to(image1Ref.current, { opacity: 0, ease: "none" }, 0);
  }, containerRef);

  return (
    <div ref={containerRef} className="container why-section mt-4 relative">
      <div className="mission-body row items-center">
        <div className="col-lg-6 col-12 pe-lg-5 p-4">
          <h2 className="text-4xl text-start mb-lg-4">Why Choose Us?</h2>
          <p className="text-md justify-text thin">
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
          <p className="text-start mt-lg-5 text-sm bold">LEARN MORE</p>
        </div>

        {/* Image container */}
        <div className="col-lg-6 col-12 scroll-images px-5 pt-5  relative overflow-hidden">
          <div className="relative w-full   max-w-[500px] mx-auto aspect-square">
            {/* Use aspect-square for consistent ratio */}
            <img
              ref={image1Ref}
              src={Image}
              className="rounded absolute top-0 left-0 w-full h-full object-cover"
              alt="Before"
            />
            <img
              ref={image2Ref}
              src={Image2}
              className="rounded absolute top-0 left-0 w-full h-full object-cover"
              alt="After"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
