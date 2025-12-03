import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG from "../Images/7.jpg";
// import IMG2 from "../Images/2.jpg";
// import IMG3 from "../Images/3.jpg";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function About() {
  const containerRef = useRef(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.hero-label', {
        y: 20,
        opacity: 0,
        duration: MOTION.quick,
        ease: 'power2.out'
      });

      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.1
      });

      gsap.from('.hero-body', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.2
      });

      gsap.from('.hero-meta', {
        y: 20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.3
      });

      gsap.from('.hero-image', {
        y: 60,
        opacity: 0,
        duration: MOTION.slow,
        ease: 'power3.out',
        delay: 0.15
      });

      gsap.from('.philosophy-badge', {
        scale: 0.8,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 75%',
        }
      });

    

      gsap.from('.philosophy-text', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 75%',
        }
      });

      gsap.from('.philosophy-image', {
        scale: 0.95,
        opacity: 0,
        duration: MOTION.slow,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 75%',
        }
      });

      gsap.from('.bento-item', {
        y: 50,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%',
        }
      });

      gsap.from('.values-item', {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 80%',
        }
      });
    }
  }, { scope: containerRef });

  return (
    <div className="about-page overflow-hidden position-relative" ref={containerRef}>
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="row align-items-center" style={{ minHeight: '85vh' }}>
          <div className="col-lg-7">
            <div className="hero-label text-xs text-stone-500 mb-2" style={{ 
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Columbia, South Carolina
            </div>
            
            <h1 className="hero-title text-4xl font-semibold text-stone-900 mb-4">
              Meet the Owners
            </h1>
            
            <div className="hero-body" style={{ maxWidth: '38rem' }}>
              <p className="text-lg text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
               Sarah and Andrew. What started as a weekend side hustle for friends has evolved into a service built on trust, genuine care, and the belief that everyone deserves a space that feels like home.
              </p>
            </div>

            <div className="hero-meta d-flex align-items-center gap-4" style={{ marginTop: '3rem' }}>
              <div>
                <div className="text-xs text-stone-500 mb-1" style={{ 
                  letterSpacing: '0.025em',
                  textTransform: 'uppercase'
                }}>
                  Established
                </div>
                <div className="text-base text-stone-900">2023</div>
              </div>
              
              <div style={{ 
                width: '1px',
                height: '2.5rem',
                backgroundColor: '#d6d3d1'
              }}></div>
              
              <div>
                <div className="text-xs text-stone-500 mb-1" style={{ 
                  letterSpacing: '0.025em',
                  textTransform: 'uppercase'
                }}>
                  Homes Served
                </div>
                <div className="text-base text-stone-900">150+</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="position-relative hero-image" style={{ marginTop: '2rem' }}>
              <img
                src={IMG}
                alt="Sarah and Marcus"
                className="w-100 rounded-4"
                style={{ 
                  aspectRatio: '4/4',
                  objectFit: 'cover',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="philosophy-section" style={{ 
        backgroundColor: '#eff6ff',
        padding: '8rem 0',
        borderTop: '1px solid #dbeafe',
        borderBottom: '1px solid #dbeafe'
      }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <img
                src={IMG3}
                alt="Clean sanctuary"
                className="philosophy-image w-100 rounded-3"
                style={{ 
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  opacity: '0.9',
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            
            <div className="col-lg-7">
              <div className="philosophy-badge text-xs text-blue-700 mb-4" style={{ 
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                Our Philosophy
              </div>
              
              <h2 className="text-4xl text-blue-900 mb-4" style={{ fontWeight: '400' }}>
                <span className="philosophy-heading-static">Clean </span>
                <span className="philosophy-heading-reveal" >Canvas</span>
                <span className="philosophy-heading-static">, Creative </span>
                <span className="philosophy-heading-reveal">Life</span>
              </h2>
              
              <p className="philosophy-text text-lg text-blue-800 mb-0" style={{ 
                lineHeight: '1.7',
                maxWidth: '34rem'
              }}>
                A thoughtfully maintained space becomes a sanctuary for inspiration. We don't just clean—we create environments where life's most meaningful moments unfold naturally. When your space works for you, everything else follows.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="values-section " style={{
        padding: '8rem 0',
   
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5" style={{ paddingBottom: '2rem' }}>
                <div className="text-xs text-stone-500 mb-3" style={{ 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  How We Work
                </div>
                <h2 className="text-4xl text-stone-900" style={{ fontWeight: '400' }}>
                  Built on Trust & Transparency
                </h2>
              </div>

              <div className="row g-5">
                <div className="col-md-6">
                  <div className="values-item">
                    <div className="text-xs text-stone-500 mb-2" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      01
                    </div>
                    <h4 className="text-xl text-stone-900 mb-3" style={{ fontWeight: '500' }}>
                      Consistent Teams
                    </h4>
                    <p className="text-base text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
                      The same dedicated professionals visit your home every time. No strangers, no surprises—just familiar faces who know your preferences and priorities.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="values-item">
                    <div className="text-xs text-stone-500 mb-2" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      02
                    </div>
                    <h4 className="text-xl text-stone-900 mb-3" style={{ fontWeight: '500' }}>
                      Open Communication
                    </h4>
                    <p className="text-base text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
                      Questions about products, scheduling changes, or specific requests? We respond within hours, not days. Your peace of mind is our priority.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="values-item">
                    <div className="text-xs text-stone-500 mb-2" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      03
                    </div>
                    <h4 className="text-xl text-stone-900 mb-3" style={{ fontWeight: '500' }}>
                      Fair Pricing
                    </h4>
                    <p className="text-base text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
                      No hidden fees or surprise charges. We provide detailed quotes upfront and honor our commitments. Quality service at honest prices.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="values-item">
                    <div className="text-xs text-stone-500 mb-2" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      04
                    </div>
                    <h4 className="text-xl text-stone-900 mb-3" style={{ fontWeight: '500' }}>
                      Satisfaction Guarantee
                    </h4>
                    <p className="text-base text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
                      Not completely satisfied? We'll make it right within 24 hours. Your happiness with our work is non-negotiable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;