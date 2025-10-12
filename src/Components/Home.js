import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why";
import Mission from "./Mission";
import ServicesNew from "./ServicesNew";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const loaderTextRef = useRef(null);
  const loaderContainerRef = useRef(null);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Loader text animation
  useGSAP(() => {
    if (!prefersReducedMotion && loaderTextRef.current) {
      // Initial fade in
      gsap.from(loaderTextRef.current, {
        opacity: 0,
        y: 8,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Gentle breathing pulse
      gsap.to(loaderTextRef.current, {
        opacity: 0.5,
        duration: 1.2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  // Animate loader out when image loads
  useGSAP(() => {
    if (imageLoaded && loaderContainerRef.current) {
      gsap.to(loaderContainerRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          if (loaderContainerRef.current) {
            loaderContainerRef.current.style.display = 'none';
          }
        }
      });
    }
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {/* Loading indicator - always rendered, controlled by GSAP */}
      <div 
        ref={loaderContainerRef}
        className="fixed inset-0 flex items-center justify-center w-full h-full bg-stone-50 z-[9999]" 
      >
        <div className="text-center">
          <div className="loader mx-auto mb-4"></div>
          <p 
            ref={loaderTextRef}
            className="text-slate-600 text-sm tracking-wide"
          >
            Rosewood Cleaning
          </p>
        </div>
      </div>

      {/* Main content */}
      <div>
        <Opener onImageLoad={handleImageLoad} />            
        <ReviewMarquee />
        <Mission />
        <ServicesNew />   
        <Why /> 
      </div>

      {/* Loader CSS */}
      <style jsx>{`
        .loader {
          width: 32px;
          aspect-ratio: 1;
          --_g: no-repeat radial-gradient(farthest-side, #0f172a 90%, #0000);
          background: var(--_g), var(--_g), var(--_g), var(--_g);
          background-size: 40% 40%;
          animation: l46 1s infinite;
        }
        @keyframes l46 {
          0%   { background-position: 0 0, 100% 0, 100% 100%, 0 100% }
          40%,
          50%  { background-position: 100% 100%, 100% 0, 0 0, 0 100% }
          90%,
          100% { background-position: 100% 100%, 0 100%, 0 0, 100% 0 }
        }
      `}</style>
    </>
  );
}

export default Home;