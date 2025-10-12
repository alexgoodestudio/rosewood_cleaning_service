import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2,
};

function Banner() {
  const bannerRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      const words = gsap.utils.toArray('.word');
      
      gsap.from(words, {
        yPercent: 100,
        opacity: 0,
        scale: 0.8,
        duration: MOTION.smooth,
        ease: 'back.out(1.4)',
        stagger: {
          each: 0.08,
          from: 'start'
        },
        delay: 1.8
      });
    }
  }, []);

  return (
    <section className="banner-section bg-indigo-100 text-center py-3">
      <div className="container">
        <p ref={bannerRef} className="banner-text text-md font-semibold text-slate-900 mb-0">
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">Let </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">us </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">handle </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">the </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block font-bold">cleaning </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">stuff.</span>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Banner;