import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Highlight() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const highlights = [
    {
      id: 1,
      text: "We use eco-friendly products that are safe for your family and pets"
    },
    {
      id: 2,
      text: "Our professional team is trained, insured, and the same two people who show up every time"
    },
    {
      id: 3,
      text: "Satisfaction guaranteed or we'll come back and make it right"
    }
  ];

  useGSAP(() => {
    const container = containerRef.current;

    if (prefersReducedMotion) {
      // Show all items if reduced motion is preferred
      highlights.forEach((highlight) => {
        const item = container.querySelector(`#highlight-${highlight.id}`);
        const number = item.querySelector('.highlight-number');
        const text = item.querySelector('.highlight-text');
        const lines = item.querySelectorAll('.highlight-line');

        gsap.set([number, text], { opacity: 1, y: 0 });
        gsap.set(lines, { opacity: 1, strokeDashoffset: 0 });
      });
      return;
    }

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=300%',
      pin: true,
      pinSpacing: true,
    });

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=300%',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;

        highlights.forEach((highlight, index) => {
          const item = container.querySelector(`#highlight-${highlight.id}`);
          const number = item.querySelector('.highlight-number');
          const text = item.querySelector('.highlight-text');
          const svg = item.querySelector('.highlight-svg');
          const lines = item.querySelectorAll('.highlight-line');

          // Each item gets its own section of the scroll
          // Item 1: 0% - 33%
          // Item 2: 33% - 66%
          // Item 3: 66% - 100%
          const sectionStart = index / 3;
          const sectionEnd = (index + 1) / 3;

          // Calculate opacity based on position in section
          let opacity = 0;

          if (progress < sectionStart) {
            // Before this section - hidden
            opacity = 0;
          } else if (progress >= sectionStart && progress < sectionStart + 0.1) {
            // Fading in (first 10% of section)
            opacity = (progress - sectionStart) / 0.1;
          } else if (progress >= sectionStart + 0.1 && progress < sectionEnd - 0.1) {
            // Fully visible (middle 80% of section)
            opacity = 1;
          } else if (progress >= sectionEnd - 0.1 && progress < sectionEnd) {
            // Fading out (last 10% of section)
            opacity = 1 - ((progress - (sectionEnd - 0.1)) / 0.1);
          } else {
            // After this section - hidden
            opacity = 0;
          }

          // Animate all elements together as one unit
          gsap.set([number, text, svg], {
            opacity: opacity,
            y: opacity < 1 ? 20 * (1 - opacity) : 0
          });

          lines.forEach(line => {
            gsap.set(line, {
              opacity: opacity,
              strokeDashoffset: 100 * (1 - opacity)
            });
          });
        });
      }
    });

  }, { scope: containerRef, dependencies: [] });

  return (
    <div
      ref={containerRef}
      className="py-24 relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#2947d4' }}
    >
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl  text-white mb-16 text-center cabinet-bold"
        >
          Why Choose Rosewood
        </h2>

        <div className="max-w-4xl mx-auto relative" style={{ minHeight: '300px' }}>
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              id={`highlight-${highlight.id}`}
              className="absolute inset-0 flex flex-col items-start"
            >
              {/* SVG Lines - positioned above */}
              <svg
                className="highlight-svg mb-4 flex-shrink-0"
                width="46"
                height="27"
                viewBox="0 0 46 27"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="highlight-line"
                  d="M25.2908 2.01233C22.4624 8.503 20.7401 15.4832 20.2324 22.554"
                  stroke="#FFFFFF"
                  strokeWidth="3.62607"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: '100',
                    strokeDashoffset: '100',
                    opacity: 0
                  }}
                />
                <path
                  className="highlight-line"
                  d="M2.33594 9.1377L6.94101 22.6811"
                  stroke="#FFFFFF"
                  strokeWidth="3.62607"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: '100',
                    strokeDashoffset: '100',
                    opacity: 0
                  }}
                />
                <path
                  className="highlight-line"
                  d="M33.9941 24.6936L44.002 15.9729"
                  stroke="#FFFFFF"
                  strokeWidth="3.62607"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: '100',
                    strokeDashoffset: '100',
                    opacity: 0
                  }}
                />
              </svg>

              {/* Number - large and prominent */}
              <div
                className="highlight-number text-8xl md:text-9xl font-bold text-white mb-4"
                style={{ opacity: 0, lineHeight: 0.9 }}
              >
                {highlight.id}
              </div>

              {/* Text - below number */}
              <p
                className="highlight-text text-2xl md:text-3xl text-white leading-relaxed max-w-2xl"
                style={{ opacity: 0 }}
              >
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
