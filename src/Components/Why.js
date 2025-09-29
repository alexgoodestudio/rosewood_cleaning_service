import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../Images/image2.png";
import Image2 from "../Images/image1.png";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Why() {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageContainerRef = useRef(null);
  const image2Ref = useRef(null);
  const image1Ref = useRef(null);
  const headingRef = useRef(null);
  const badgesRef = useRef(null);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([headingRef.current, paragraphRef.current, badgesRef.current], { opacity: 1 });
      gsap.set(image2Ref.current, { x: "0%" });
      return;
    }

    gsap.set(image2Ref.current, { x: "100%", rotation: 0 });
    gsap.set(image1Ref.current, { rotation: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(image2Ref.current, { x: "0%", rotation: -360, ease: "none" }, 0)
      .to(image1Ref.current, { opacity: 0, ease: "none" }, 0);

    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(headingRef.current, {
          y: 30,
          opacity: 0,
          duration: MOTION.smooth,
          ease: 'power2.out'
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: paragraphRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(paragraphRef.current, {
          y: 20,
          opacity: 0,
          duration: MOTION.smooth,
          ease: "power2.out",
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: badgesRef.current,
      start: "top 80%",
      onEnter: () => {
        const badges = badgesRef.current.querySelectorAll('.badge');
        gsap.from(badges, {
          y: 20,
          opacity: 0,
          duration: MOTION.quick,
          stagger: 0.05,
          ease: 'power2.out'
        });
      },
      once: true,
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-5 py-md-6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <h2 ref={headingRef} className="text-5xl mb-4">
              Why Choose Us
            </h2>
            <p 
              ref={paragraphRef} 
              className="text-md text-slate-700 mb-4"
            >
              We're not just another cleaning company — we're part of your
              community. From local families to busy professionals, we take pride
              in making homes across Columbia cleaner, healthier, and more
              welcoming. By choosing Rosewood Cleaning Services, you're
              supporting a locally owned business that values relationships,
              trust, and the well-being of our community. Every home we care for
              is a part of the neighborhood we love.
            </p>
            <div ref={badgesRef} className="d-flex  gap-2 flex-wrap">
              <span className="badge bg-slate-200 !text-slate-700 border-0 px-3 py-2 rounded-pill text-button">
                Local
              </span>
              <span className="badge bg-slate-200 !text-slate-700 border-0 px-3 py-2 rounded-pill text-button">
                Small Business
              </span>
              <span className="badge bg-slate-200 !text-slate-700 border-0 px-3 py-2 rounded-pill text-button">
                Pet-safe
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
            <div 
              ref={imageContainerRef}
              className="position-relative w-100 mx-auto overflow-hidden rounded" 
              style={{ maxWidth: '380px', aspectRatio: '1 / 1' }}
            >
              <img
                ref={image1Ref}
                src={Image}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt="Clean home interior before"
                loading="lazy"
              />
              <img
                ref={image2Ref}
                src={Image2}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt="Clean home interior after"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;