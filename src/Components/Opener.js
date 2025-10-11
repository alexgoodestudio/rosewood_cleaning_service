import React, { useState } from "react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";

function Opener() {
  const [imageLoaded, setImageLoaded] = useState(false);

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
            Top-tier house cleaning services in <span className="font-bold">Columbia, South Carolina</span>
          </p>

          <button className="btn btn-primary px-4 py-2 font-semibold">
            Call Us
          </button>
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