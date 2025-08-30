import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FooterMarquee() {
  const containerRef = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      const el = textRef.current;
      const container = containerRef.current;

      const containerWidth = container.offsetWidth;
      const textWidth = el.offsetWidth;

      gsap.set(el, { x: containerWidth }); // start offscreen right

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom", // when top of container hits bottom of viewport
        onEnter: () => {
          gsap.to(el, {
            x: -textWidth - containerWidth,
            duration: 20,
            ease: "linear",
            repeat: -1,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="banner-container bg-gray-800 overflow-hidden whitespace-nowrap w-full"
    >
      <span
        ref={textRef}
        className="banner-text py-4 text-white text-6xl inline-block"
      >
        How can we help you make an impact? Let’s talk about it.
      </span>
    </div>
  );
}

export default FooterMarquee;
