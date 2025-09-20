import { useEffect, useRef } from 'react';
import IMG from "../Images/image1.png";

function WaveRoller() {
  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeAnimation = () => {
      // Register ScrollTrigger plugin
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Function to calculate wave Y position based on X
      const getWaveY = (x, containerWidth) => {
        // Convert x to 0-1200 range (viewBox coordinates)
        const normalizedX = (x / containerWidth) * 1200;
        
        // Wave equation: M0,40 Q300,10 600,40 Q900,60 1200,40
        // This creates two quadratic curves
        if (normalizedX <= 600) {
          // First curve: Q300,10 600,40
          const t = normalizedX / 600;
          // Quadratic bezier: (1-t)²P0 + 2(1-t)tP1 + t²P2
          // P0=(0,40), P1=(300,10), P2=(600,40)
          const y = Math.pow(1-t, 2) * 40 + 2 * (1-t) * t * 10 + Math.pow(t, 2) * 40;
          return y;
        } else {
          // Second curve: Q900,60 1200,40
          const t = (normalizedX - 600) / 600;
          // P0=(600,40), P1=(900,60), P2=(1200,40)
          const y = Math.pow(1-t, 2) * 40 + 2 * (1-t) * t * 60 + Math.pow(t, 2) * 40;
          return y;
        }
      };

      // Create the scroll-triggered animation
      if (containerRef.current && ballRef.current) {
        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "+=300%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (!containerRef.current || !ballRef.current) return;
              
              const progress = self.progress;
              const containerWidth = containerRef.current.offsetWidth;
              
              // Calculate ball position - adjusted for larger ball (256px = 64 * 4)
              const x = progress * (containerWidth - 256);
              const waveY = getWaveY(x, containerWidth);
              
              // Convert wave coordinates to actual pixels
              const actualWaveY = (waveY / 64) * 64;
              
              // Position ball so its bottom edge sits on top of the wave
              const ballY = actualWaveY - 256; // 256 is full ball height (64 * 4)
              
              // Update ball position
              window.gsap.set(ballRef.current, {
                x: x,
                y: ballY,
                rotation: progress * 720
              });
            }
          }
        });

        // Return cleanup function
        return () => {
          tl.kill();
          window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    };

    // Check if GSAP is already loaded
    if (window.gsap && window.ScrollTrigger) {
      initializeAnimation();
      return;
    }

    // Load GSAP and ScrollTrigger if not already loaded
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load scripts sequentially
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js')
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'))
      .then(() => {
        initializeAnimation();
      })
      .catch((error) => {
        console.error('Failed to load GSAP:', error);
      });

  }, []);

  return (
    <div className="bg-white text-sky-800" ref={containerRef}>
      <div className="h-64 relative flex items-center justify-center">
        {/* Wave SVG at the top */}
        <svg 
          className="absolute top-0 left-0 w-full h-16" 
          viewBox="0 0 1200 64" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 Q300,10 600,40 Q900,60 1200,40 L1200,0 L0,0 Z" 
            fill="#e0e7ff"
          />
        </svg>
        
        {/* Rolling ball - using imported IMG */}
        <img 
          ref={ballRef}
          src={IMG}
          alt="Rolling ball"
          className="absolute w-64 h-64 rounded-full shadow-lg"
          style={{
            left: 0,
            top: 0,
            transformOrigin: 'center center'
          }}
        />
        

      </div>
      
    </div>
  );
}

export default WaveRoller;