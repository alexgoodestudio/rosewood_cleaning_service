import React, { useRef } from "react";

function Opener() {
  const containerRef = useRef(null);
  const rosewoodRef = useRef(null);
  const cleaningRef = useRef(null);
  const servicesRef = useRef(null);
  const rosewoodRRef = useRef(null); // "R" in Rosewood
  const rosewoodSRef = useRef(null); // "s" in Rosewood
  const rosewoodORef = useRef(null); // first "o" in Rosewood
  const rosewoodSecondORef = useRef(null); // second "o" in Rosewood
  const cleaningNRef = useRef(null); // "n" in Cleaning
  const servicesERef = useRef(null); // "e" in Services
  const servicesRRef = useRef(null); // "R" in Services

  React.useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      const splitTextScript = document.createElement("script");
      splitTextScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js";
      splitTextScript.onload = () => {
        const { gsap } = window;

        const ctx = gsap.context(() => {
          // Split text for non-animated letters
          const rosewoodText = rosewoodRef.current.textContent;
          const cleaningText = cleaningRef.current.textContent;
          const servicesText = servicesRef.current.textContent;

          // Create arrays to hold individual letter spans
          const createLetterSpans = (text, container, excludeIndices = []) => {
            const letters = [];
            container.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
              const span = document.createElement('span');
              span.textContent = text[i];
              span.style.display = 'inline-block';
              span.style.position = 'relative';
              
              if (!excludeIndices.includes(i)) {
                // Set initial state for animation
                gsap.set(span, { opacity: 0, y: 30 });
              }
              
              container.appendChild(span);
              letters.push(span);
            }
            return letters;
          };

          // Create letter spans (excluding animated letters)
          // Rosewood: R(0) o(1) s(2) e(3) w(4) o(5) o(6) d(7) - animated: R(0), o(1), s(2), o(5)
          const rosewoodLetters = createLetterSpans(rosewoodText, rosewoodRef.current, [0, 1, 2, 5]); // R, o, s, second o positions
          const cleaningLetters = createLetterSpans(cleaningText, cleaningRef.current, [4]); // n position
          const servicesLetters = createLetterSpans(servicesText, servicesRef.current, [2, 6]); // r, e positions

          // Replace specific letters with refs
          rosewoodRef.current.children[0].replaceWith(rosewoodRRef.current);
          rosewoodRef.current.children[1].replaceWith(rosewoodORef.current);
          rosewoodRef.current.children[2].replaceWith(rosewoodSRef.current);
          rosewoodRef.current.children[5].replaceWith(rosewoodSecondORef.current);
          
          cleaningRef.current.children[4].replaceWith(cleaningNRef.current);
          
          servicesRef.current.children[2].replaceWith(servicesRRef.current);
          servicesRef.current.children[6].replaceWith(servicesERef.current);

          // Set initial states for special animated letters
          gsap.set(rosewoodRRef.current, {
            y: -100,
            clipPath: "inset(100% 0 0 0)",
          });

          gsap.set(rosewoodSRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set(rosewoodORef.current, { x: -150, opacity: 0 });

          gsap.set(cleaningNRef.current, {
            y: -100,
            clipPath: "inset(0 0 100% 0)",
          });

          gsap.set(servicesERef.current, {
            rotationY: 0,
            transformOrigin: "center center",
            scale: 0.8,
          });

          gsap.set(rosewoodSecondORef.current, { scaleY: 1 });

          gsap.set(servicesRRef.current, { x: 100, opacity: 0 });

          // Timeline
          const tl = gsap.timeline({ delay: 0.5 });

          // Animate all non-special letters first - SLOWED DOWN
          tl.to([...rosewoodLetters.filter((_, i) => ![0, 1, 2, 5].includes(i)),
                 ...cleaningLetters.filter((_, i) => i !== 4),
                 ...servicesLetters.filter((_, i) => ![2, 6].includes(i))], {
            duration: 0.15, // Increased from 0.05
            opacity: 1,
            y: 0,
            stagger: 0.08, // Increased from 0.03
            ease: "power2.out",
          })

          // Animate "R" in Rosewood sliding down from top
          .to(rosewoodRRef.current, {
            duration: 1.2, // Increased from 0.8
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            ease: "power3.out",
          }, "-=0.8") // Adjusted timing

          // Animate "R" in Services sliding in
          .to(servicesRRef.current, {
            duration: 1.3, // Increased from 0.9
            x: 0,
            opacity: 1,
            ease: "power3.out",
          }, "-=0.5") // Adjusted timing

          // 'e' spinning
          .to(servicesERef.current, {
            duration: 1.8, // Increased from 1.2
            rotationY: 360,
            scale: 1,
            ease: "power2.inOut",
            transformOrigin: "center center",
          }, "-=0.8") // Adjusted timing

          // 'n' sliding down
          .to(cleaningNRef.current, {
            duration: 1.4, // Increased from 1.0
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            ease: "power3.out",
          }, "-=1.2") // Adjusted timing

          // 'o' sliding in from left
          .to(rosewoodORef.current, {
            duration: 1.1, // Increased from 0.8
            x: 0,
            opacity: 1,
            ease: "power2.out",
          }, "-=1.8") // Adjusted timing

          // 's' sliding up
          .to(rosewoodSRef.current, {
            duration: 1.0, // Increased from 0.7
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            ease: "power3.out",
          }, "-=1.5") // Adjusted timing

          // Flip second 'o'
          .to(rosewoodSecondORef.current, {
            duration: 0.6, // Increased from 0.4
            scaleY: 0,
            ease: "power2.in",
          }, "-=0.3")
          .to(rosewoodSecondORef.current, {
            duration: 0.6, // Increased from 0.4
            scaleY: 1,
            ease: "power2.out",
          })

          // Spin first 'o'
          .to(rosewoodORef.current, {
            duration: 1.2, // Increased from 0.8
            rotationX: 360,
            ease: "back.out(1.7)",
            transformOrigin: "center center",
          }, "+=1.5"); // Increased delay

        }, containerRef);

        return () => ctx.revert();
      };
      document.head.appendChild(splitTextScript);
    };

    document.head.appendChild(script);

    return () => {
      const scripts = document.head.querySelectorAll('script[src*="gsap"]');
      scripts.forEach(script => {
        if (document.head.contains(script)) document.head.removeChild(script);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <h1 className=" opener-text font-bold text-center leading-tight">
        <span className="inline-block">
          <span ref={rosewoodRef}>Rosewood</span>
        </span>

        <br />

        <span className="inline-block">
          <span ref={cleaningRef}>Cleaning</span>{" "}
          <span ref={servicesRef}>Services</span>
        </span>
      </h1>

      {/* Hidden elements for special animations */}
      <div style={{ position: 'absolute', visibility: 'hidden' }}>
        <span ref={rosewoodRRef} style={{ display: 'inline-block', position: 'relative' }}>R</span>
        <span ref={rosewoodORef} style={{ display: 'inline-block', position: 'relative' }}>o</span>
        <span ref={rosewoodSRef} style={{ display: 'inline-block', position: 'relative' }}>s</span>
        <span ref={rosewoodSecondORef} style={{ display: 'inline-block', position: 'relative' }}>o</span>
        <span ref={cleaningNRef} style={{ display: 'inline-block', position: 'relative' }}>n</span>
        <span ref={servicesRRef} style={{ display: 'inline-block', position: 'relative' }}>r</span>
        <span ref={servicesERef} style={{ display: 'inline-block', position: 'relative' }}>e</span>
      </div>

      <button className="call-btn bg-white text-violet-600 font-semibold mt-8 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Call Us
      </button>
    </div>
  );
}

export default Opener;