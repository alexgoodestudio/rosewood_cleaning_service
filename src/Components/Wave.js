import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function WaveBorder() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      // Set initial scale to smaller
      gsap.set(textElement, { scale: 1, opacity: 0.9 });

      // Create scroll trigger animation
      gsap.to(textElement, {
        scale: 1.3,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textElement,
          start: "top center+=100", // Start animation when element is 100px past center
          end: "bottom center-=100", // End animation when element is 100px before center
          scrub: 1, // Smooth animation tied to scroll position
          toggleActions: "play none none reverse",
          // Uncomment the line below to see scroll trigger markers (for debugging)
          // markers: true
        }
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-indigo-100 text-sky-800">
      <div className="h-64 relative flex items-center justify-center">
        <h1 
          ref={textRef}
          className="text-2xl font-semibold"
        >
          Let us handle the cleaning!
        </h1>
        <svg 
          className="absolute bottom-0 left-0 w-full h-16" 
          viewBox="0 0 1200 64" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,32 Q300,0 600,32 Q900,64 1200,32 L1200,64 L0,64 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default WaveBorder;