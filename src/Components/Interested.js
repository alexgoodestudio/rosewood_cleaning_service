import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Interested() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'back.out(1.7)',
      delay: 0.2
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-20 py-lg-28 bg-slate-100 mt-5 position-relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative text-center">
        {/* Centered band layout */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">

            {/* Large centered heading */}
            <h2
              ref={headingRef}
              className="text-5xl text-lg-6xl font-mono font-bold text-slate-900 mb-6 mb-lg-7"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                maxWidth: '800px',
                margin: '0 auto 2rem auto'
              }}
            >
              Let us handle the cleaning stuff.
            </h2>

            {/* Subtext */}
            <p
              className="text-xl text-slate-600 mb-7 mb-lg-8"
              style={{
                letterSpacing: '-0.005em',
                lineHeight: '1.5',
                maxWidth: '600px',
                margin: '0 auto 2.5rem auto'
              }}
            >
              Get a quote today and see how we can make your life easier.
            </p>

            {/* CTA */}
            <div ref={ctaRef}>
              <a href="/contact" className="btn-cta">
                Get Started
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>

            {/* Subtle footer note */}
            <p
              className="text-sm text-slate-500 mt-5"
              style={{
                letterSpacing: '0.02em',
                fontWeight: '500'
              }}
            >
              Local cleaning services in Columbia, SC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interested;
