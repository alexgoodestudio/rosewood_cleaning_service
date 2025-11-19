import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why";
import Mission from "./Mission";
import ServicesNew from "./ServicesNew";
// import Contact from "./Contact"

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

    }
  }, []);

  // Animate loader out when image loads
  useGSAP(() => {
    if (imageLoaded && loaderContainerRef.current) {
      gsap.to(loaderContainerRef.current, {
        opacity: 0,
        duration: .5,
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
            className="text-slate-700  text-sm font-semibold tracking-wide"
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
        {/* <Contact/> */}
      </div>
    </>
  );
}

export default Home;