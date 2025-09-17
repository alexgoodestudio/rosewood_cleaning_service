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
            duration: 22,
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
      className="banner-container bg-indigo-200  text-sky-800  overflow-hidden whitespace-nowrap w-full"
    >
      <span
        ref={textRef}
        className="banner-text py-4 text-6xl bold inline-block"
      >
        Interested in working with us? Let us help you get your home the way it should be.
      </span>
    </div>
  );
}

export default FooterMarquee;
