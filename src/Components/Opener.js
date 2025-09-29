import React from "react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";

function Opener() {
  return (
    <div className="relative w-full" style={{ height: "75vh" }}>
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
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
  );
}

export default Opener;
