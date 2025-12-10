import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image2 from "../Images/image1.png";

gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([imageRef.current, textRef.current, ctaRef.current], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Locomotive-style: Pin section + Scrub animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Image: Fade in + subtle scale (not rotation - too playful)
    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, ease: "none" },
      0
    );

    // Text: Stagger fade in
    tl.from(textRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: "none"
    }, 0.2);

    // CTA: Fade in last
    tl.from(ctaRef.current, {
      opacity: 0,
      y: 20,
      ease: "none"
    }, 0.4);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 py-lg-24 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Column - 60% (Asymmetric Layout) */}
          <div className="col-12 col-lg-7 order-2 order-lg-1 pe-lg-5">
            <div ref={textRef}>
              {/* Metadata - Uppercase with wide tracking */}
              <div className="mb-4">
                <span
                  className="text-xs text-slate-500"
                  style={{ letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  Our Mission
                </span>
              </div>

              {/* Heading - Editorial bold with tight tracking */}
              <h2
                className="text-3xl font-mono font-bold text-slate-900 mb-5 mb-lg-6"
                style={{
                  letterSpacing: '-0.025em',
                  lineHeight: '1.1'
                }}
              >
                Own your free time! 
              </h2>

              {/* Body - Generous line height, slight negative tracking */}
              <p
                className="text-lg text-slate-700 mb-6"
                style={{
                  letterSpacing: '-0.01em',
                  lineHeight: '1.6',
                  maxWidth: '600px'
                }}
              >
                We're not just another cleaning company — we're part of your
                community. From local families to busy professionals, we take pride
                in making homes across Columbia cleaner, healthier, and ready to go.
              </p>
            </div>

            {/* Badges */}
            {/* <div ref={badgesRef} className="d-flex gap-2 flex-wrap">
              <span
                className="bg-white border border-slate-300"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                  fontWeight: '500',
                  color: '#0f172a'
                }}
              >
                Child Safe Products
              </span>
              <span
                className="bg-white border border-slate-300"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                  fontWeight: '500',
                  color: '#0f172a'
                }}
              >
                Community Focused
              </span>
              <span
                className="bg-white border border-slate-300"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  letterSpacing: '0.01em',
                  fontWeight: '500',
                  color: '#0f172a'
                }}
              >
                Small Business
              </span>
            </div> */}

            {/* CTA Button */}
            <div ref={ctaRef} className="mt-6 mt-lg-7">
              <a href="/contact" className="btn-cta">
                Send a message
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Image Column - 40% (Asymmetric Layout) */}
          <div className="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
            <div
              ref={imageRef}
              className="position-relative w-100 overflow-hidden rounded"
              style={{ aspectRatio: '1/1', maxWidth: '400px', margin: '0 auto' }}
            >
              <img
                src={Image2}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt="Professional cleaning service team in Columbia, SC"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Mission;