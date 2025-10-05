import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Mission() {
  const containerRef = useRef();
  const labelRef = useRef();
  const headingRef = useRef();
  const para1Ref = useRef();
  const para2Ref = useRef();
  const metaItemsRef = useRef([]);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([labelRef.current, headingRef.current, para1Ref.current, para2Ref.current, ...metaItemsRef.current], { 
        opacity: 1, 
        x: 0,
        y: 0,
        rotateX: 0
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Label slides from left with fade
    tl.from(labelRef.current, {
      x: -60,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    });

    // Heading: split into lines, alternating direction entry
    const headingSplit = new SplitText(headingRef.current, { type: "lines" });
    gsap.set(headingRef.current, { perspective: 1000 });
    
    headingSplit.lines.forEach((line, index) => {
      const isEven = index % 2 === 0;
      tl.from(line, {
        x: isEven ? -80 : 80,
        rotateY: isEven ? -15 : 15,
        opacity: 0,
        duration: MOTION.slow,
        ease: "power3.out"
      }, "-=0.4");
    });

    // First paragraph: reveal from bottom with slight rotation
    tl.from(para1Ref.current, {
      y: 40,
      rotateX: -8,
      opacity: 0,
      duration: MOTION.slow,
      ease: "power2.out",
      transformOrigin: "top center"
    }, "-=0.3");

    // Second paragraph: slides from right with delay
    tl.from(para2Ref.current, {
      x: 60,
      opacity: 0,
      duration: MOTION.slow,
      ease: "power2.out"
    }, "-=0.4");

    // Meta items stagger from bottom
    tl.from(metaItemsRef.current, {
      y: 20,
      opacity: 0,
      duration: MOTION.quick,
      ease: "power2.out",
      stagger: 0.1
    }, "-=0.5");

  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-40 bg-stone-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="row align-items-start">
              
              <div className="col-12 col-md-3 mb-6 mb-md-0">
                <p ref={labelRef} className="text-xs text-slate-500 tracking-wider uppercase mb-6">
                  Our Focus
                </p>
                <div className="space-y-3">
                  <p 
                    ref={el => metaItemsRef.current[0] = el}
                    className="text-sm text-slate-600"
                  >
                    Columbia, SC
                  </p>
                  <p 
                    ref={el => metaItemsRef.current[1] = el}
                    className="text-sm text-slate-600"
                  >
                    Est. 2019
                  </p>
                  <p 
                    ref={el => metaItemsRef.current[2] = el}
                    className="text-sm text-slate-600"
                  >
                    Residential
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-9">
                <h2 
                  ref={headingRef}
                  className="text-5xl md:text-6xl text-slate-900 mb-8"
                  style={{ perspective: '1000px' }}
                >
                  We clean homes for people who care about what goes into their space
                </h2>
                
                <div className="row">
                  <div className="col-12 col-lg-10">
                    <p 
                      ref={para1Ref}
                      className="text-md text-slate-700 mb-5"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      Most cleaning services use whatever's cheapest. We don't. Every product we bring into your home is plant-based, biodegradable, and safe for kids and pets. No synthetic fragrances. No harsh chemicals lingering in the air after we leave.
                    </p>
                    <p 
                      ref={para2Ref}
                      className="text-md text-slate-700"
                    >
                      Our clients tend to be families who cook at home, keep houseplants, compost their scraps—people building intentional lives who want their cleaning to match that ethos. We're not the fastest option, but we're thorough, and we show up consistently.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;