import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";
import { ArrowUpRight } from "lucide-react";

          

function Opener({ onImageLoad }) {
  const contentRef = useRef(null);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Animate content in when image loads
  useGSAP(() => {
    if (!prefersReducedMotion && contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <div 
      ref={contentRef}
      className="relative w-full" 
      style={{ height: "75vh" }}
    >
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
        onLoad={() => setTimeout(() => onImageLoad(), 1100)}
      />

      {/* Text + Button in bottom-left */}
      <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Rosewood
          <br />
          Cleaning Services
        </h1>

        <p className="text-lg md:text-xl mb-4">
          Your home deserves the best cleaning in <span className="font-bold">Columbia, South Carolina</span>
        </p>
<a 
  href="tel:+18035096700" 
  className="btn-call-hero text-slate-950 no-underline px-5 py-3 font-medium inline-flex items-center gap-2 group"
>
  Call Us
  <ArrowUpRight 
    size={18} 
    className="text-slate-700 group-hover:text-white group-hover:rotate-45 transition-all duration-300" 
    strokeWidth={1.5} 
  />
</a>
    
      </div>
    </div>
  );
}

export default Opener;