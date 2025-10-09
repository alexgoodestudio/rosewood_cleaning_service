import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";

function Opener() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Loading indicator */}
      {!imageLoaded && (
        <div 
          className="flex items-center justify-center w-full bg-gradient-to-br from-gray-50 to-gray-100" 
          style={{ height: "75vh" }}
        >
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-700 font-medium text-lg">Loading Rosewood Cleaning...</p>
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
          onLoad={() => setImageLoaded(true)}
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
    </>
  );
}

export default Opener;