import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

function WaveBorder() {
  const phrases = [
    "Let us handle the cleaning stuff",
    "Relax while we make it shine",
    "Your space, spotlessly clean",
    "Professional cleaning made easy",
    "Fresh and clean, every time"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate current text out to the left
      gsap.to(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Update the text
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          
          // Reset position to right (off-screen)
          gsap.set(textRef.current, { x: 100, opacity: 0 });
          
          // Animate new text in from the right
          gsap.to(textRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    }, 3200);

    // Initial animation on mount
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '384px' }}>
              <h1 
                ref={textRef}
                className="text-3xl text-semibold px-3"
              >
                {phrases[currentIndex]}
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