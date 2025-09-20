import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Mission() {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

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
      lineDiv.className = "line-container overflow-hidden";

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
    // hide the container right away
    gsap.set(container.current, { opacity: 0 });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top 80%",
      onEnter: () => {
        const lines = splitTextIntoLines(container.current);

        // now reveal and animate lines
        gsap.set(container.current, { opacity: 1 });
        gsap.set(lines, { y: 50, opacity: 0 });
        gsap.to(lines, {
          y: 0,
          opacity: 1,
             duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  }, []);

  return (
    <div className="px-lg-5 px-4 bg-sky-50">
      <div className="mission-body row">
        <div className="col-12 ">
          <h2 className=" text-4xl text-start mb-lg-4">Our Mission</h2>
          <p
            ref={container}
            className="text-xl justify-text thin leading-relaxed"
          >
            At Rosewood Cleaning Services, we specialize in providing top-tier
            house cleaning that caters to the unique needs of each client,
            transforming your space into a pristine, welcoming environment. We
            pride ourselves on our commitment to eco-friendly cleaning
            practices, utilizing environmentally safe and sustainable products
            to ensure not only the cleanliness but also the health and safety of
            your home.
          </p>
          <p className="text-start mt-lg-5 text-sm bold">
            Columbia South Carolina
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
