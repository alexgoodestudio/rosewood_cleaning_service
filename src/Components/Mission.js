import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Mission() {
  const containerRef = useRef();
  const headingRef = useRef();
  const locationRef = useRef();
  const paragraphRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([headingRef.current, paragraphRef.current, locationRef.current], { 
        opacity: 1, 
        y: 0 
      });
      return;
    }

    // Initial hidden states
    gsap.set(headingRef.current, { opacity: 0, y: 20 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 15 });
    gsap.set(locationRef.current, { opacity: 0, y: 10 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Animate in sequence
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    })
    .to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: MOTION.slow,
      ease: "power2.out"
    }, "-=0.2")
    .to(locationRef.current, {
      opacity: 1,
      y: 0,
      duration: MOTION.quick,
      ease: "power2.out"
    }, "-=0.4");

  }, []);

  return (
    <section ref={containerRef} className="bg-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
        >
          What We Do
        </h2>
        <p
          ref={paragraphRef}
          className="text-md  text-slate-700 leading-relaxed mb-8"
        >
          At Rosewood Cleaning Services, we specialize in providing top-tier
          house cleaning that caters to the unique needs of each client,
          transforming your space into a pristine, welcoming environment. We
          pride ourselves on our commitment to eco-friendly cleaning practices, utilizing environmentally safe and sustainable products
          to ensure not only the cleanliness but also the health and safety of
          your home.
        </p>
        <p 
          ref={locationRef}
          className="text-sm text-slate-500 font-medium"
        >
          Serving Columbia, South Carolina
        </p>
      </div>
    </section>
  );
}

export default Mission;