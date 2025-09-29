import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Mission() {
  const containerRef = useRef();
  const headingRef = useRef();
  const locationRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const splitTextIntoLines = (element) => {
    const text = element.textContent;
    const words = text.split(" ");
    let lines = [];
    let currentLine = [];

    element.innerHTML = "";
    let previousTop = null;

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word + " ";
      wordSpan.className = "word";
      element.appendChild(wordSpan);

      const rect = wordSpan.getBoundingClientRect();
      const currentTop = rect.top;

      if (previousTop !== null && Math.abs(currentTop - previousTop) > 5) {
        if (currentLine.length > 0) {
          lines.push([...currentLine]);
        }
        currentLine = [wordSpan];
      } else {
        currentLine.push(wordSpan);
      }

      previousTop = currentTop;
    });

    if (currentLine.length > 0) {
      lines.push(currentLine);
    }

    element.innerHTML = "";
    const lineElements = [];

    lines.forEach((lineWords) => {
      const lineDiv = document.createElement("div");
      lineDiv.className = "line-container";

      const lineInner = document.createElement("div");
      lineInner.className = "line-inner";

      lineWords.forEach((wordSpan) => {
        lineInner.appendChild(wordSpan);
      });

      lineDiv.appendChild(lineInner);
      element.appendChild(lineDiv);
      lineElements.push(lineInner);
    });

    return lineElements;
  };

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([containerRef.current, headingRef.current, locationRef.current], { 
        opacity: 1, 
        y: 0 
      });
      return;
    }

    gsap.set(containerRef.current, { opacity: 0 });
    gsap.set(headingRef.current, { y: 30, opacity: 0 });
    gsap.set(locationRef.current, { y: 20, opacity: 0 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        const tl = gsap.timeline();

        tl.to(headingRef.current, {
          y: 0,
          opacity: 1,
          duration: MOTION.smooth,
          ease: "power2.out"
        });

        const lines = splitTextIntoLines(containerRef.current);
        
        tl.set(containerRef.current, { opacity: 1 }, "<");
        tl.fromTo(lines, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION.smooth,
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.2"
        );

        tl.to(locationRef.current, {
          y: 0,
          opacity: 1,
          duration: MOTION.quick,
          ease: "power2.out"
        }, "-=0.3");
      },
      once: true
    });
  }, []);

  return (
    <section className="bg-slate-50 py-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2 
              ref={headingRef}
              className="text-4xl text-slate-900 mb-4 mb-lg-5"
            >
              What We Do
            </h2>
            <p
              ref={containerRef}
              className="text-md text-slate-700 mb-5"
            >
              At Rosewood Cleaning Services, we specialize in providing top-tier
              house cleaning that caters to the unique needs of each client,
              transforming your space into a pristine, welcoming environment. We
              pride ourselves on our commitment to eco-friendly cleaning practices, utilizing environmentally safe and sustainable products
              to ensure not only the cleanliness but also the health and safety of
              your home.
            </p>
            <p 
              ref={locationRef}
              className="text-sm text-slate-600"
            >
              Serving Columbia, South Carolina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;