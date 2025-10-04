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
  const metadataRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const badgesRef = useRef(null);
  const imageContainerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const statsRef = useRef(null);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([metadataRef.current, headingRef.current, paragraphRef.current, badgesRef.current, statsRef.current], { opacity: 1 });
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
      trigger: metadataRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.from(metadataRef.current, {
          y: 20,
          opacity: 0,
          duration: MOTION.smooth,
          ease: 'power2.out'
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(headingRef.current, {
          y: 40,
          opacity: 0,
          duration: MOTION.slow,
          ease: 'power3.out'
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: paragraphRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(paragraphRef.current, {
          y: 30,
          opacity: 0,
          duration: MOTION.smooth,
          ease: "power2.out",
          delay: 0.1
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: badgesRef.current,
      start: "top 80%",
      onEnter: () => {
        const badges = badgesRef.current.querySelectorAll('.community-badge');
        gsap.from(badges, {
          y: 20,
          opacity: 0,
          duration: MOTION.quick,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.2
        });
      },
      once: true,
    });

    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        const stats = statsRef.current.querySelectorAll('.stat-item');
        gsap.from(stats, {
          y: 20,
          opacity: 0,
          duration: MOTION.smooth,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3
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
            <div className="mb-4">
              <p 
                ref={metadataRef} 
                className="text-xs text-slate-500 mb-3 tracking-wide"
                style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                Columbia, SC · Locally Owned
              </p>
              <h2 ref={headingRef} className="text-6xl text-slate-900 mb-4" style={{ fontWeight: 600 }}>
                Why Choose Us
              </h2>
            </div>

            <div className="mb-5">
              <p 
                ref={paragraphRef} 
                className="text-lg text-slate-700 mb-0"
                style={{ maxWidth: '600px' }}
              >
                We're not just another cleaning company — we're part of your
                community. From local families to busy professionals, we take pride
                in making homes across Columbia cleaner, healthier, and more
                welcoming. By choosing Rosewood Cleaning Services, you're
                supporting a locally owned business that values relationships,
                trust, and the well-being of our community.
              </p>
            </div>

            <div ref={badgesRef} className="d-flex gap-2 flex-wrap mb-5">
              <span className="community-badge badge bg-slate-100 text-slate-800 border border-slate-200 px-4 py-2 text-button transition-all" style={{ borderRadius: '2rem', cursor: 'default' }}>
                Local
              </span>
              <span className="community-badge badge bg-slate-100 text-slate-800 border border-slate-200 px-4 py-2 text-button transition-all" style={{ borderRadius: '2rem', cursor: 'default' }}>
                Small Business
              </span>
              <span className="community-badge badge bg-slate-100 text-slate-800 border border-slate-200 px-4 py-2 text-button transition-all" style={{ borderRadius: '2rem', cursor: 'default' }}>
                Pet-Safe Products
              </span>
              <span className="community-badge badge bg-slate-100 text-slate-800 border border-slate-200 px-4 py-2 text-button transition-all" style={{ borderRadius: '2rem', cursor: 'default' }}>
                Community Focused
              </span>
            </div>

            <div ref={statsRef} className="row gx-4 gy-4">
              <div className="col-6 col-md-4">
                <div className="stat-item">
                  <div className="text-3xl text-slate-900 mb-1" style={{ fontWeight: 600 }}>500+</div>
                  <div className="text-sm text-slate-600">Homes Served</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="stat-item">
                  <div className="text-3xl text-slate-900 mb-1" style={{ fontWeight: 600 }}>5 Years</div>
                  <div className="text-sm text-slate-600">In Columbia</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="stat-item">
                  <div className="text-3xl text-slate-900 mb-1" style={{ fontWeight: 600 }}>4.9★</div>
                  <div className="text-sm text-slate-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
            <div 
              ref={imageContainerRef}
              className="position-relative w-100 mx-auto overflow-hidden rounded" 
              style={{ aspectRatio: '1 / 1', maxWidth: '380px' }}
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