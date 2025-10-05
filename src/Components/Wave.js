import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function WaveBorder() {
  const containerRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.wave-heading', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.wave-heading',
          start: 'top 80%',
          once: true
        }
      });

      gsap.from('.wave-path', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: MOTION.story,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wave-path',
          start: 'top 80%',
          once: true
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-slate-50 text-slate-900">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '384px' }}>
              <h1 className="wave-heading text-5xl font-semibold px-3">
                Let us handle the cleaning stuff
              </h1>
              <svg 
                className="position-absolute bottom-0 start-0 w-100" 
                style={{ height: '80px', display: 'block' }}
                viewBox="0 0 1200 80" 
                preserveAspectRatio="none"
                role="img"
                aria-label="Decorative wave transition"
              >
                <path 
                  className="wave-path"
                  d="M0,40 Q300,8 600,40 Q900,72 1200,40 L1200,80 L0,80 Z" 
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaveBorder;