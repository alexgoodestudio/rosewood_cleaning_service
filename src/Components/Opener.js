import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";
import { ArrowUpRight } from "lucide-react";

          

function Opener() {
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
      />

      {/* Text + Button in bottom-left */}
      <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white row">
        <div className="col-lg-9 col-12">
        <h1 className="text-5xl  font-bold leading-tight mb-3">
          Enjoy 10% off all services this season.
        </h1>

        <p className="text-lg md:text-2xl mb-4">
          Your home deserves the best cleaning in <span className="">Columbia, SC</span>
        </p>
        <a href="/contact" className="btn-cta group">
          Get Started
          <ArrowUpRight
            size={18}
            className="group-hover:rotate-45 transition-all duration-300"
            strokeWidth={1.5}
          />
        </a>
    </div>
      </div>
    </div>
  );
}

export default Opener;