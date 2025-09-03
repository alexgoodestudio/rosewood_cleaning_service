import React, { useRef } from "react";
import heroImage from "../Images/alex-tyson-1eUtEZDFH9Y-unsplash.jpg";

function Opener() {
  const containerRef = useRef(null);
  const rosewoodRef = useRef(null);
  const rosewoodRRef = useRef(null);
  const rosewoodSRef = useRef(null);
  const rosewoodORef = useRef(null);
  const rosewoodSecondORef = useRef(null);

  React.useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      const { gsap } = window;

      const ctx = gsap.context(() => {
        const rosewoodText = rosewoodRef.current.textContent;

        const createLetterSpans = (text, container, excludeIndices = []) => {
          const letters = [];
          container.innerHTML = "";

          for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.style.display = "inline-block";
            span.style.position = "relative";

            if (!excludeIndices.includes(i)) {
              gsap.set(span, { opacity: 0.4, y: 30, scale: 0.9 });
            }

            container.appendChild(span);
            letters.push(span);
          }
          return letters;
        };

        const rosewoodLetters = createLetterSpans(
          rosewoodText,
          rosewoodRef.current,
          [0, 1, 2, 5]
        );

        // Replace special refs
        rosewoodRef.current.children[0].replaceWith(rosewoodRRef.current);
        rosewoodRef.current.children[1].replaceWith(rosewoodORef.current);
        rosewoodRef.current.children[2].replaceWith(rosewoodSRef.current);
        rosewoodRef.current.children[5].replaceWith(rosewoodSecondORef.current);

        // Initial states
        gsap.set(rosewoodRRef.current, { y: -60, opacity: 0, scale: 0.6 });
        gsap.set(rosewoodSRef.current, { opacity: 0, scale: 0.8 });
        gsap.set(rosewoodORef.current, { opacity: 0, scale: 0.8 });
        gsap.set(rosewoodSecondORef.current, {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "center center",
        });

        // Timeline
        const tl = gsap.timeline({ delay: 0.2 });

        tl.to(
          rosewoodLetters.filter((_, i) => ![0, 1, 2, 5].includes(i)),
          {
            duration: 0.6,
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            ease: "power3.out",
          }
        )
          .to(
            rosewoodRRef.current,
            { duration: 0.9, y: 0, opacity: 1, scale: 1, ease: "elastic.out(1,0.6)" },
            "-=1"
          )
          .to(
            rosewoodORef.current,
            { duration: 0.7, opacity: 1, scale: 1, ease: "power3.out" },
            "-=0.75"
          )
          .to(
            rosewoodSRef.current,
            { duration: 0.7, opacity: 1, scale: 1, ease: "power3.out" },
            "-=0.75"
          )
          .to(
            rosewoodSecondORef.current,
            { duration: 0.6, scaleX: 1, opacity: 1, ease: "power3.out" },
            "-=0.4"
          )
          .to(
            rosewoodRef.current,
            { duration: 7, scale: 1.01, y: 2, ease: "sine.inOut", repeat: -1, yoyo: true },
            "+=0.5"
          );

        tl.timeScale(1.15);
      }, containerRef);

      return () => ctx.revert();
    };

    document.head.appendChild(script);

    return () => {
      const scripts = document.head.querySelectorAll('script[src*="gsap"]');
      scripts.forEach((script) => {
        if (document.head.contains(script)) document.head.removeChild(script);
      });
    };
  }, []);

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
          <span ref={rosewoodRef}>Rosewood</span>
          <br />
          <span>Cleaning Services</span>
        </h1>

        {/* Hidden animated letters */}
        <div style={{ position: "absolute", visibility: "hidden" }}>
          <span ref={rosewoodRRef} style={{ display: "inline-block" }}>R</span>
          <span ref={rosewoodORef} style={{ display: "inline-block" }}>o</span>
          <span ref={rosewoodSRef} style={{ display: "inline-block" }}>s</span>
          <span ref={rosewoodSecondORef} style={{ display: "inline-block" }}>o</span>
        </div>

        <p className="text-lg md:text-xl mb-4">
          Top-tier house cleaning services in Columbia, South Carolina
        </p>

        <button className="bg-primary text-white hover:bg-indigo-200 hover:text-slate-900 rounded px-6 py-3 font-semibold">
          Call Us
        </button>
      </div>
    </div>
  );
}

export default Opener;
