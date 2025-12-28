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
      className="bg-interested position-relative overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="container-fluid" style={{ maxWidth: '1400px' }}>
        <div className="row">

          {/* Left Column - 40% Metadata & Context */}
          <div className="col-12 col-lg-5 mb-5 mb-lg-0">
            <div style={{ position: 'sticky', top: '2rem' }}>
              {/* Overline Metadata */}
              <p
                className="text-xs interested-footer mb-3"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: '600'
                }}
              >
                Get Started
              </p>

              {/* Divider Line */}
              <div
                style={{
                  width: '48px',
                  height: '1px',
                  backgroundColor: '#cbd5e1',
                  marginBottom: '1.5rem'
                }}
              />

              {/* Location */}
              <p
                className="text-sm interested-footer"
                style={{
                  letterSpacing: '0.02em'
                }}
              >
                Located in Columbia, SC
              </p>
            </div>
          </div>

          {/* Right Column - 60% Main Content */}
          <div className="col-12 col-lg-7">

            {/* Large Statement Heading */}
            <h2
              ref={headingRef}
              className="text-4xl interested-heading cabinet-bold mb-3 font-bold"
              style={{
                letterSpacing: '-0.015em',
                maxWidth: '600px',
                textDecoration: 'underline',
                textDecorationColor: '#cbd5e1',
                textDecorationThickness: '2px',
                textUnderlineOffset: '8px'
              }}
            >
              Reclaim <span className='italic'>Your&nbsp;</span>&nbsp;Free Time
            </h2>

            {/* Supporting Body Text */}
            <p
              className="text-lg interested-subtext mb-5"
              style={{
                letterSpacing: '-0.005em',
                maxWidth: '540px'
              }}
            >
              We understand. We're here to support your busy lives. We'll take care of the cleaning. You take care of everything else.
            </p>

            {/* CTA */}
            <div ref={ctaRef}>
              <a href="/contact" className="btn-cta-teal-reversed gs group">
                Let's Go
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Interested;
