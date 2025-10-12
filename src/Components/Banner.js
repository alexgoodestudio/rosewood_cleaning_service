import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2,
};

function Banner() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.from('.banner-section', {
        opacity: 0,
        y: 10,
        duration: MOTION.quick,
      })
      .from('.banner-text', {
        opacity: 0,
        y: -20,
        duration: MOTION.smooth,
      }, "-=0.2");
    }
  }, []);

  return (
    <section className="banner-section bg-indigo-100 text-center py-3">
      <div className="container">
        <p className="banner-text text-md font-semibold text-slate-600 mb-0">
          Let us handle the cleaning stuff.
        </p>
      </div>
    </section>
  );
}

export default Banner;
