import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';
// import { Droplets } from 'lucide-react';

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
  const emailRef = useRef(null);
  const [emailChars, setEmailChars] = useState([]);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Split email into characters on mount
  useEffect(() => {
    const email = "hello@rosewoodcleaning.com";
    setEmailChars(email.split(''));
  }, []);

  // Playful GSAP-style email animation
  const handleEmailHover = () => {
    if (prefersReducedMotion) return;

    const chars = emailRef.current?.querySelectorAll('.email-char');
    if (!chars) return;

    gsap.to(chars, {
      y: -6,
      rotation: () => gsap.utils.random(-12, 12),
      scale: 1.15,
      color: '#115e59', // Rosewood teal on hover
      duration: 0.4,
      ease: 'back.out(3)',
      stagger: {
        amount: 0.25,
        from: 'random'
      }
    });
  };

  const handleEmailLeave = () => {
    if (prefersReducedMotion) return;

    const chars = emailRef.current?.querySelectorAll('.email-char');
    if (!chars) return;

    gsap.to(chars, {
      y: 0,
      rotation: 0,
      scale: 1,
      color: '#64748b', // Slate-600 as default
      duration: 0.5,
      ease: 'elastic.out(1, 0.6)',
      stagger: {
        amount: 0.2,
        from: 'random'
      }
    });
  };

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
    <section className="py-3" style={{ backgroundColor: '#c7d2fe' }}>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          
          {/* Left Metadata - absolutely positioned, desktop only */}
          <div className="absolute left-0 hidden md:flex items-center gap-2">
            <span className="text-xs " style={{ 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              fontWeight: '500'
            }}>
              <span className='text-slate-500'>Columbia, South Carolina</span>
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
                <span className="word inline-block">stuff</span>
              </span>
               <span className="overflow-hidden inline-block">
                <span className="word inline-block ">💛</span>
              </span>
            </p>
          </div>

          {/* Right — Contact Info */}
          <div className="absolute right-0 hidden md:flex items-center" style={{ gap: '0.75rem' }}>
            <a
              href="mailto:hello@rosewoodcleaning.com"
              ref={emailRef}
              className="text-sm lora"
              onMouseEnter={handleEmailHover}
              onMouseLeave={handleEmailLeave}
              style={{
                letterSpacing: '0.01em',
                textDecoration: 'none',
                color: '#64748b',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              {emailChars.length > 0 ? (
                emailChars.map((char, idx) => (
                  <span
                    key={idx}
                    className="email-char"
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </span>
                ))
              ) : (
                'hello@rosewoodcleaning.com'
              )}
            </a>
            <span className="text-slate-300">•</span>
            {/* <a
              href="tel:+18031234567"
              className="text-xs text-slate-600 hover:text-slate-900"
              style={{
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              (803) 509-6700
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;