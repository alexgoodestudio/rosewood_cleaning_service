import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { Droplets, Leaf } from 'lucide-react';

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
    <section className="bg-blue-100 py-3">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          
          {/* Left Metadata - absolutely positioned, desktop only */}
          <div className="absolute left-0 hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-500" style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontWeight: '500'
            }}>
              Columbia, SC
            </span>
            {/* <span className="text-slate-300">•</span> */}
            <Leaf size={12} className="text-emerald-700" strokeWidth={2} />
            {/* <span className="text-xs text-slate-500" style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontWeight: '500'
            }}>
              Eco-Friendly
            </span> */}
          </div>

          {/* Center Text - now truly centered */}
          <div className="text-center">
            <p ref={bannerRef} className="text-sm tracking-wider font-semibold text-slate-900 mb-0">
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

          {/* Right Droplets Icon - absolutely positioned, mobile only */}
          <div ref={dropletsRef} className="absolute right-0 md:hidden">
            <Droplets
              size={24}
              className="text-indigo-400"
              strokeWidth={1.5}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;