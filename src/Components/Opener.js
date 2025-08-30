import React, { useRef } from "react";

function Opener() {
  const containerRef = useRef(null);
  const rosewoodSRef = useRef(null);
  const rosewoodORef = useRef(null);
  const rosewoodSecondORef = useRef(null);
  const cleaningNRef = useRef(null);
  const servicesERef = useRef(null);

  React.useLayoutEffect(() => {
    // Import GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const { gsap } = window;

      const ctx = gsap.context(() => {
        // Set initial positions
        gsap.set(rosewoodSRef.current, { 
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" 
        });

        gsap.set(rosewoodORef.current, { 
          x: -150, 
          opacity: 0 
        });

        gsap.set(cleaningNRef.current, { 
          y: -100, 
          clipPath: "inset(0 0 100% 0)" 
        });

        gsap.set(servicesERef.current, {
          rotationY: 0,
          transformOrigin: "center center",
          scale: 0.8
        });

        gsap.set(rosewoodSecondORef.current, { scaleY: 1 });

        // Create timeline
        const tl = gsap.timeline({ delay: 0.2 });

        // 'e' spinning like a ballerina
        tl.to(servicesERef.current, {
          duration: 1.2,
          rotationY: 360,
          scale: 1,
          ease: "power2.inOut",
          transformOrigin: "center center"
        })
        // 'n' sliding down
        .to(cleaningNRef.current, {
          duration: 1.0,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          ease: "power3.out"
        }, "-=0.8")
        // 'o' sliding in from left
        .to(rosewoodORef.current, {
          duration: 0.8,
          x: 0,
          opacity: 1,
          ease: "power2.out"
        }, "-=0.7")
        // 's' sliding up from behind wall
        .to(rosewoodSRef.current, {
          duration: 0.7,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          ease: "power3.out"
        }, "-=0.5")
        // Flip the third 'o'
        .to(rosewoodSecondORef.current, {
          duration: 0.4,
          scaleY: 0,
          ease: "power2.in"
        }, "+=0.3")
        .to(rosewoodSecondORef.current, {
          duration: 0.4,
          scaleY: 1,
          ease: "power2.out"
        })
        // Spin the first 'o' on x-axis
        .to(rosewoodORef.current, {
          duration: 0.8,
          rotationX: 360,
          ease: "back.out(1.7)",
          transformOrigin: "center center"
        }, "+=1");

      }, containerRef);

      return () => ctx.revert();
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight">
        <span className="inline-block">
          R
          <span 
            ref={rosewoodORef} 
            className="inline-block relative" 
            style={{ position: 'relative', display: 'inline-block' }}
          >
            o
          </span>
          <span 
            ref={rosewoodSRef} 
            className="inline-block relative" 
            style={{ position: 'relative', display: 'inline-block' }}
          >
            s
          </span>
          ew
          <span 
            ref={rosewoodSecondORef} 
            className="inline-block relative" 
            style={{ position: 'relative', display: 'inline-block' }}
          >
            o
          </span>
          od
        </span>
        <br />
        <span className="inline-block">
          Clea
          <span 
            ref={cleaningNRef} 
            className="inline-block relative" 
            style={{ position: 'relative', display: 'inline-block' }}
          >
            n
          </span>
          ing Servic
          <span 
            ref={servicesERef} 
            className="inline-block relative" 
            style={{ position: 'relative', display: 'inline-block' }}
          >
            e
          </span>
          s
        </span>
      </h1>
      
      <button className="call-btn bg-white text-violet-600 font-semibold mt-8 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Call Us
      </button>
    </div>
  );
}

export default Opener;
