import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage3 from "../Images/3.jpg";
import heroImage from "../Images/o.jpg";
import heroImage2 from "../Images/n.jpg";

import { ArrowUpRight } from "lucide-react";



function Opener() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
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
      setCurrentImage(prev => (prev + 1) % 3);
    }, 9000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Smooth crossfade animation when currentImage changes
  useGSAP(() => {
    if (prefersReducedMotion) return;

    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const images = [image1Ref.current, image2Ref.current, image3Ref.current];
    const currentImageRef = images[currentImage];

    // Fade out all images except the current one
    images.forEach((img, index) => {
      if (index !== currentImage) {
        gsap.to(img, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut"
        });
      }
    });

    // Fade in the current image
    gsap.to(currentImageRef, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut"
    });

    // Smooth text transition with fade
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Update text content
        const newText = currentImage === 0
          ? "Surprise! Enjoy 10% off all services this season."
          : currentImage === 1
          ? "First time? Save 20% off your first booking!"
          : "Ask us about our membership plans!";
        const newSubtext = currentImage === 0
          ? "Your home deserves the best cleaning in Columbia, SC"
          : currentImage === 1
          ? "Message us today for a free estimate"
          : "Keep your home fresh with our exclusive membership program";
        setDisplayedText(newText);
        setDisplayedSubtext(newSubtext);

        // Fade text back in
        gsap.to(textRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  }, { dependencies: [currentImage] });

  return (
    <div className="hero-wrapper">
      {/* Hero Images Container - Top half on mobile, full on desktop */}
      <div className="hero-image-section bg-teal-900">
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
        <img
          ref={image3Ref}
          src={heroImage3}
          alt="Professional Cleaning Service"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Text + Button - bottom half on mobile with background, vertically centered on desktop */}
      <div className="hero-text-container">
        <div className="row w-full">
          <div className="col-lg-4 col-12">
            <h1 ref={textRef} className="hero-heading cabinet font-medium mb-6">
              {displayedText}
            </h1>

            <p className="text-xl mb-6">
              {displayedSubtext}
            </p>
            <a href="/contact" className="btn-cta-teal cabinet group">
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
      <div className="hero-dot-navigation">
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
        <button
          onClick={() => setCurrentImage(2)}
          className={`hero-dot ${currentImage === 2 ? 'active' : ''}`}
          aria-label="View third image"
        />
      </div>
    </div>
  );
}

export default Opener;