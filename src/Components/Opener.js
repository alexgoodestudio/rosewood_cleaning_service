import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../Images/2.jpg";
import heroImage2 from "../Images/daniel-weiss-iiFb0nLOHWY-unsplash.jpg";
import { ArrowUpRight } from "lucide-react";



function Opener() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);
  const isInitialMount = useRef(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedText, setDisplayedText] = useState("Surprise! Enjoy 10% off all services this season.");
  const [displayedSubtext, setDisplayedSubtext] = useState("Your home deserves the best cleaning in Columbia, SC");

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // No initial animation needed - content should appear immediately

  // Image crossfade animation
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev === 0 ? 1 : 0));
    }, 15000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Update images and text instantly when currentImage changes
  useGSAP(() => {
    if (prefersReducedMotion) return;

    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const nextImage = currentImage === 0 ? image1Ref.current : image2Ref.current;
    const prevImage = currentImage === 0 ? image2Ref.current : image1Ref.current;

    // Switch images instantly - no fade
    gsap.set(nextImage, { opacity: 1 });
    gsap.set(prevImage, { opacity: 0 });

    // Update text and subtext instantly
    const newText = currentImage === 0
      ? "Surprise! Enjoy 10% off all services this season."
      : "First time? Save 20% off your first booking!";
    const newSubtext = currentImage === 0
      ? "Your home deserves the best cleaning in Columbia, SC"
      : "Message us today for a free estimate";
    setDisplayedText(newText);
    setDisplayedSubtext(newSubtext);
  }, { dependencies: [currentImage] });

  return (
    <div className="relative w-full" style={{ height: "75vh" }}>
      {/* Hero Images Container - Stacked for crossfade */}
      <div className="absolute inset-0">
        <img
          ref={image1Ref}
          src={heroImage}
          alt="Folding Fresh Laundry"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />
        <img
          ref={image2Ref}
          src={heroImage2}
          alt="Clean Bathroom Sink"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Text + Button - bottom on mobile, vertically centered on desktop */}
      <div className="hero-text-container">
        <div className="row w-full">
          <div className="col-lg-4 col-12">
            <h1 ref={textRef} className="hero-heading font-medium mb-6">
              {displayedText}
            </h1>

            <p className="text-xl mb-6">
              {displayedSubtext}
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

      {/* Dot Navigation - bottom right */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2">
        <button
          onClick={() => setCurrentImage(0)}
          className={`hero-dot ${currentImage === 0 ? 'active' : ''}`}
          aria-label="View first image"
        />
        <button
          onClick={() => setCurrentImage(1)}
          className={`hero-dot ${currentImage === 1 ? 'active' : ''}`}
          aria-label="View second image"
        />
      </div>
    </div>
  );
}

export default Opener;