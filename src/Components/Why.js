import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../Images/image2.png";
import Image2 from "../Images/image1.png";

gsap.registerPlugin(ScrollTrigger);

function Why() {
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const image2Ref = useRef(null);
  const image1Ref = useRef(null);

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
      wordSpan.className = "word inline-block mr-2";
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
      lineDiv.className = "line-container overflow-hidden ";

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
    // Hide paragraph initially
    gsap.set(paragraphRef.current, { opacity: 0 });

    // Initial image positions
    gsap.set(image2Ref.current, { x: "130%", rotation: 0 });
    gsap.set(image1Ref.current, { rotation: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate top image: slide in + full rotation
    tl.to(image2Ref.current, { x: "0%", rotation: -360, ease: "none" }, 0)
      .to(image1Ref.current, { opacity: 0, ease: "none" }, 0);

    // Paragraph scroll animation
    ScrollTrigger.create({
      trigger: paragraphRef.current,
      start: "top 80%",
      onEnter: () => {
        const lines = splitTextIntoLines(paragraphRef.current);

        gsap.set(paragraphRef.current, { opacity: 1 });
        gsap.set(lines, { y: 50, opacity: 0 });
        gsap.to(lines, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        });
      },
      once: true,
    });
  }, containerRef);

  return (
    <div ref={containerRef} className="container mt-5 mb-lg-5 mb-0  relative">
      <div className="row items-center">
        <div className="col-lg-8 col-12 px-lg-0 p-4 ">
          <h2 className="text-5xl text-start mb-lg-5">Why Choose Us?</h2>
          <p ref={paragraphRef} className="text-xl justify-text thin leading-relaxed">
            We’re not just another cleaning company — we’re part of your
            community. From local families to busy professionals, we take pride
            in making homes across Columbia cleaner, healthier, and more
            welcoming. By choosing Rosewood Cleaning Services, you’re
            supporting a locally owned business that values relationships,
            trust, and the well-being of our community. Every home we care for
            is a part of the neighborhood we love.
          </p>
                            <div className="d-flex gap-2 flex-wrap">
                    <span className="badge border border-black text-dark px-3 py-2 rounded-pill">Local</span>
                    <span className="badge border border-black text-dark px-3 py-2 rounded-pill">Small Business</span>
                    <span className="badge border border-black text-dark px-3 py-2 rounded-pill">Pet-safe</span>
                  </div>
        </div>

        <div className="col-lg-4 col-12 ps-lg-5 ps-0  relative overflow-hidden">
          <div className="relative w-full max-w-[380px] mx-auto aspect-square">
            <img
              ref={image1Ref}
              src={Image}
              className="rounded absolute top-0 left-0 w-full h-full object-cover"
              alt="Before"
            />
            <img
              ref={image2Ref}
              src={Image2}
              className="rounded mb-lg-5 mb-0 absolute top-0 left-0 w-full h-full object-cover"
              alt="After"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
