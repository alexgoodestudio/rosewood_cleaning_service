import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(); // not required here but safe habit

function FooterMarquee() {
  const containerRef = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      const el = textRef.current;
      const container = containerRef.current;

      const containerWidth = container.offsetWidth;
      const textWidth = el.offsetWidth;

      // start text just offscreen right
      gsap.set(el, { x: containerWidth });

      // animate left
      gsap.to(el, {
        x: -textWidth - containerWidth,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    },
    { scope: containerRef } // tells useGSAP which DOM tree it's controlling
  );

  return (
    <div
      ref={containerRef}
      className="banner-container bg-gray-200  overflow-hidden whitespace-nowrap w-full"
    >
      <span ref={textRef} className="banner-text py-4 text-dark text-5xl inline-block">
        How can we help you make an impact? Let’s talk about it. 
      </span>
    </div>
  );
}

export default FooterMarquee;
