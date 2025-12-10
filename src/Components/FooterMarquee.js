import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FooterMarquee() {
  const containerRef = useRef();
  const trackRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const track = trackRef.current;
      const container = containerRef.current;

      const trackWidth = track.offsetWidth;
      const containerWidth = container.offsetWidth;
      const startPosition = containerWidth * 0.11666;
      const distance = trackWidth + startPosition;

      gsap.set(track, { x: startPosition });

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        onEnter: () => {
          gsap.to(track, {
            x: -trackWidth,
            duration: distance / 80,
            ease: "none",
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
      className="marquee-container bg-teal-100 overflow-hidden w-full"
      role="complementary"
      aria-label="Call to action banner"
    >
      <div
        ref={trackRef}
        className="marquee-track"
      >
        <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
         <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
         <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Interested in working with us?
        </span>
        <span className="marquee-separator text-teal-950 font-bold">☀️</span>
        <span className="marquee-text text-teal-950">
          Let us help you get your home the way it should be
        </span>
      </div>
    </div>
  );
}

export default FooterMarquee;