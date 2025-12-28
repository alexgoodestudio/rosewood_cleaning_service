import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2,
};

function Banner() {
  const bannerRef = useRef(null);
  const dropletsRef = useRef(null);
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
        delay: .75
      });

      // Droplets float animation
      gsap.to(dropletsRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, []);

  return (
    <section className="gs bg-banner-dark " style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          
          {/* Left Metadata - absolutely positioned, desktop only */}
          <div className="absolute left-0 hidden md:flex items-center gap-2">
            <span className="text-xs " style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontWeight: '500'
            }}>
            </span>
            {/* <span className="text-slate-300">•</span> */}
            {/* <span className="text-xs text-slate-500" style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontWeight: '500'
            }}>
              Eco-Friendly
            </span> */}
          </div>

          {/* Center Text - now truly centered */}
          <div className="text-center ">
            <p ref={bannerRef} className="font-semibold banner-text" style={{ fontSize: '0.8725rem', letterSpacing: '0.05em', margin: 0, lineHeight: 1.4, paddingTop: '0.3rem', paddingBottom: '0.15rem' }}>
              
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
                <span className="word inline-block font-bold ">cleaning </span>
              </span>
              <span className="overflow-hidden inline-block">
                <span className="word inline-block">stuff</span>
              </span>

              <span className="overflow-hidden inline-block">
                <span className="word inline-block px-1">☀️</span>
              </span>

              <span className="overflow-hidden inline-block">
                <Link to="/services/onetime" className="word inline-block underline transition-colors banner-text">View Services</Link>
              </span>
              <span className="overflow-hidden mobile-hide inline-block">
                <span className="word  inline-block">→</span>
              </span>

            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Banner;