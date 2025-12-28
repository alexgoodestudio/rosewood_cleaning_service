import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BannerBottom() {
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
      const startPosition = -(trackWidth - (containerWidth * 0.8));
      const distance = trackWidth + (containerWidth * 0.8);

      gsap.set(track, { x: startPosition });

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        onEnter: () => {
          gsap.to(track, {
            x: containerWidth,
            duration: distance / 40,
            ease: "none",
            repeat: -1,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="banner-bottom-bg pt-3 pb-3" style={{ borderTop: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1' }}>
      <div
        ref={containerRef}
        className="overflow-hidden w-full"
      >
        <div
          ref={trackRef}
          className="d-inline-flex text-sm align-items-center"
          style={{ whiteSpace: 'nowrap', willChange: 'transform' }}
        >
          <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
<span className="gs tracking-wider font-bold text-teal-950">
            We're looking forward to serving you
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
          Let us handle the cleaning stuff
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, South Carolina
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
           <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Book your cleaning today
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Located in Columbia, SC
          </span>
          <span className="gs text-bold text-red-300 px-3">•</span>
          <span className="gs tracking-wider font-bold text-teal-950">
            Same-day service available
          </span>
        </div>
      </div>
    </div>
  )
}

export default BannerBottom;