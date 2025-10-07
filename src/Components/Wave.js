import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

const phrases = [
  "We handle the cleaning",
  "You handle everything else",
  "Clean homes, clear minds",
  "Thoughtfully cleaned spaces",
  "Done right, every time"
];

function WaveBorder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 3200);
      return () => clearInterval(interval);
    }

    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: MOTION.smooth,
      ease: "power2.out"
    });

    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        x: -100,
        opacity: 0,
        duration: MOTION.smooth,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          gsap.fromTo(textRef.current,
            { x: 100, opacity: 0 },
            { 
              x: 0, 
              opacity: 1, 
              duration: MOTION.smooth, 
              ease: "power2.out" 
            }
          );
        }
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="wave-border-section bg-slate-50 text-slate-900">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="wave-border-hero position-relative d-flex align-items-center justify-content-center overflow-hidden">
              <h1 
                ref={textRef}
                className="text-4xl md:text-4xl fw-semibold px-4 text-center"
              >
                {phrases[currentIndex]}
              </h1>
              <svg 
                className="wave-border-svg position-absolute bottom-0 start-0 w-100" 
                viewBox="0 0 1200 80" 
                preserveAspectRatio="none"
                role="img"
                aria-label="Decorative wave transition"
              >
                <path 
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