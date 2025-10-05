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
  const metaRef = useRef();
  const headingRef = useRef();
  const paragraph1Ref = useRef();
  const paragraph2Ref = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([metaRef.current, headingRef.current, paragraph1Ref.current, paragraph2Ref.current], { 
        opacity: 1, 
        x: 0,
        y: 0
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.from(metaRef.current.querySelectorAll('.meta-item'), {
      x: -30,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out",
      stagger: 0.1
    })
    .from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: MOTION.slow,
      ease: "power3.out"
    }, "-=0.3")
    .from(paragraph1Ref.current, {
      x: -40,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    }, "-=0.4")
    .from(paragraph2Ref.current, {
      x: 40,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    }, "-=0.3");

  }, []);

  return (
    <section ref={containerRef} className="mission-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="row align-items-start">
              
              <div ref={metaRef} className="col-12 col-md-3 mb-6 mb-md-0">
                <p className="text-xs text-slate-500 tracking-wider uppercase mb-6">
                  Our Focus
                </p>
                <div className="mission-meta">
                  <p className="meta-item text-sm text-slate-600 mb-4">
                    Columbia, SC
                  </p>
                  <p className="meta-item text-sm text-slate-600 mb-4">
                    Est. 2019
                  </p>
                  <p className="meta-item text-sm text-slate-600">
                    Residential
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-9">
                <h2 
                  ref={headingRef}
                  className="text-3xl md:text-4xl text-slate-900 mb-8"
                >
                  We clean homes for people who care about what goes into their space
                </h2>
                
                <div className="row">
                  <div className="col-12 col-lg-10">
                    <p ref={paragraph1Ref} className="text-md text-slate-700 mb-6">
                      Most cleaning services use whatever's cheapest. We don't. Every product we bring into your home is plant-based, biodegradable, and safe for kids and pets. No synthetic fragrances. No harsh chemicals lingering in the air after we leave.
                    </p>
                    <p ref={paragraph2Ref} className="text-md text-slate-700">
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