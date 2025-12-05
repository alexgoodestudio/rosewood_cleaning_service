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
  const statementRef = useRef();
  const mobileStatementRef = useRef();
  const cardsRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([metaRef.current, statementRef.current, mobileStatementRef.current, '.mission-card'], { 
        opacity: 1, 
        x: 0,
        y: 0
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true
      }
    });

    tl.from(metaRef.current, {
      x: -30,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    })
    .from([statementRef.current, mobileStatementRef.current], {
      y: 40,
      opacity: 0,
      duration: MOTION.slow,
      ease: "power3.out"
    }, "-=0.3")
    .from('.mission-card', {
      y: 30,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out",
      stagger: 0.12
    }, "-=0.4");

  }, []);

  return (
    <section ref={containerRef} className="mission-section bg-stone-50">
      <div className="container">
        
        {/* Metadata bar - offset on desktop */}
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-11">
            <div className="mb-4 mb-md-5">
              <div 
                ref={metaRef}
                className="d-flex flex-wrap align-items-center"
                style={{ gap: '0.5rem 0.75rem' }}
              >
                <span className="text-metadata text-slate-500">
                  Columbia, SC
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-metadata text-slate-500">
                  Since 2019
                </span>
                <span className="text-slate-300">•</span>

              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only hero - full width */}
        <div className="row d-lg-none">
          <div className="col-12">
            <div className="mb-4">
              <div ref={mobileStatementRef}>
                <h2 className="mission-mobile-title text-slate-900 mb-3">
                  Two people. Same every time.
                </h2>
                <p className="mission-mobile-body text-slate-600">
                  Just Sarah and Andrew, 
                  keeping your home clean and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout - offset with 60/40 split */}
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-11">
            <div className="row align-items-start">
              
              {/* Large statement - 60% */}
              <div className="col-12 col-lg-7 mb-5 mb-lg-0 pe-lg-5 d-none d-lg-block">
                <h2 
                  ref={statementRef}
                  className="mission-desktop-title text-5xl text-slate-900"
                >
                  The same two people clean your home.
                </h2>
                <p className="text-lg text-slate-600 mt-4">
                 Sarah and Andrew, 
                   keeping your home clean and healthy.
                </p>
              </div>

              {/* Bento cards - 40% */}
              <div ref={cardsRef} className="col-12 col-lg-5">
                <div className="mission-cards-container">
                  
                  {/* Card 1: Products */}
                  <div className="mission-card  bg-white rounded">
                    <p className="text-metadata text-slate-500 mb-2">
                      What We Use
                    </p>
                    <p className="mission-card-text text-slate-700">
                      Safe Eco-friendly products. We've been using the same 
                      products since 2019.
                    </p>
                  </div>

                  {/* Card 2: Service area */}
                  <div className="mission-card  bg-stone-100 rounded">
                    <p className="text-metadata text-slate-500 mb-2">
                      Where We Work
                    </p>
                    <p className="mission-card-text text-slate-700">
                      Shandon, Rosewood, Forest Acres, Elmwood Park. 
                      Within 5 miles of Five Points. If you're further, 
                      contact us to discuss.
                    </p>
                  </div>

                  {/* Card 3: Target client */}
                  <div className="mission-card  bg-white rounded">
                    <p className="text-metadata text-slate-500 mb-2">
                      Who Hires Us
                    </p>
                    <p className="mission-card-text text-slate-700">
                     Families with toddlers crawling on floors. People with 
                     chemical sensitivities or respiratory issues. Everyday households 
                      wanting a reliable, trustworthy cleaning team.
                    </p>
                  </div>

                  {/* Card 4: Honest limitations */}
                  <div className="mission-card  bg-stone-50 rounded border border-stone-200">
                    <p className="text-metadata text-slate-500 mb-2">
                      What We Don't Do
                    </p>
                    <p className="mission-card-text-small text-slate-600">
                      Last-minute requests. We're a two-person team scheduling 
                      2 to 3 weeks out. Keep up with us on Instagram for additional openings. 
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