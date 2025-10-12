import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";

function Opener() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const loaderTextRef = useRef(null);

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

  return (
    <>
      {/* Loading indicator */}
      {!imageLoaded && (
        <div 
          className="flex items-center justify-center w-full bg-stone-50" 
          style={{ height: "75vh" }}
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
      )}

      {/* Main content - hidden until image loads */}
      <div 
        className={`relative w-full ${imageLoaded ? 'block' : 'hidden'}`} 
        style={{ height: "75vh" }}
      >
        {/* Hero Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
          onLoad={() => setTimeout(() => setImageLoaded(true), 800)}
        />

        {/* Text + Button in bottom-left */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Rosewood
            <br />
            Cleaning Services
          </h1>

          <p className="text-lg md:text-xl mb-4">
            Your home deserves the best cleaning in <span className="bold">Columbia, South Carolina</span>
          </p>

          <a 
            href="tel:+18035096700" 
            className="bg-white text-slate-950 no-underline rounded-lg px-5 py-3 font-medium inline-block"
          >
            Call Us!
          </a>
        </div>
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

export default Opener;