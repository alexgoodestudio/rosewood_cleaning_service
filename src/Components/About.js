import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG from "../Images/7.jpg";
import IMG2 from "../Images/2.jpg";
import IMG3 from "../Images/3.jpg";

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
  const metricRef = useRef(null);
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

      gsap.from('.philosophy-heading', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.1,
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

      const metric = metricRef.current;
      if (metric) {
        const finalValue = 150;
        
        gsap.to(metric, {
          textContent: finalValue,
          duration: MOTION.story,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '.hero-image',
            start: 'top 75%',
            once: true
          },
          onUpdate: function() {
            const current = Math.round(this.targets()[0].textContent);
            metric.textContent = current + '+';
          }
        });
      }
    } else {
      if (metricRef.current) {
        metricRef.current.textContent = '150+';
      }
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
            
            <h1 className=" text-5xl font-semibold text-stone-900 mb-4">
              Meet the Owners
            </h1>
            
            <div className="hero-body" style={{ maxWidth: '38rem' }}>
              <p className="text-lg text-stone-700 mb-0" style={{ lineHeight: '1.7' }}>
                Husband and wife duo who discovered that our shared obsession with beautiful, thoughtfully maintained spaces could become something larger than ourselves. What started as weekend help for friends has evolved into a service built on trust, genuine care, and the belief that everyone deserves a space that feels like home.
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

              <div
                className="position-absolute bg-white rounded-3 shadow-lg"
                style={{
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  padding: '1rem 1.5 rem',
                  border: '1px solid #e7e5e4'
                }}
              >
                <div className="text-center">
                  <div
                    className="text-emerald-600 mb-1"
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      lineHeight: '1.2'
                    }}
                    ref={metricRef}
                  >
                    150+
                  </div>
                  <div className="text-xs text-stone-600" style={{ letterSpacing: '0.025em' }}>
                    Happy Homes
                  </div>
       
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy-section" style={{ 
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
              
              <h2 className="philosophy-heading text-4xl text-blue-900 mb-4" style={{ fontWeight: '400' }}>
                Clean Canvas, Creative Life
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
      </div>

      <div className="bento-grid container" style={{ 
        paddingTop: '8rem',
        paddingBottom: '8rem'
      }}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="bento-item h-100 rounded-4 position-relative overflow-hidden" style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #a7f3d0',
              padding: '3.5rem'
            }}>
              <div className="row h-100 align-items-center g-4">
                <div className="col-md-7">
                  <div className="text-xs text-emerald-700 mb-3" style={{ 
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                  }}>
                    Our Commitment
                  </div>
                  
                  <h3 className="text-3xl text-emerald-900 mb-4" style={{ fontWeight: '400' }}>
                    Planet-First Cleaning
                  </h3>
                  
                  <p className="text-base text-emerald-800 mb-4" style={{ 
                    lineHeight: '1.7',
                    maxWidth: '28rem'
                  }}>
                    Every product in our arsenal is a conscious choice—non-toxic, biodegradable, and safe for your family, pets, and our shared environment. We partner with local suppliers who share our values.
                  </p>
                  
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="text-xs text-emerald-900 px-3 py-2 rounded-pill" style={{
                      backgroundColor: '#a7f3d0',
                      fontWeight: '600'
                    }}>
                      Local Suppliers
                    </span>
                    <span className="text-xs text-emerald-900 px-3 py-2 rounded-pill" style={{
                      backgroundColor: '#a7f3d0',
                      fontWeight: '600'
                    }}>
                      Pet-Safe
                    </span>
                    <span className="text-xs text-emerald-900 px-3 py-2 rounded-pill" style={{
                      backgroundColor: '#a7f3d0',
                      fontWeight: '600'
                    }}>
                      Family-Owned
                    </span>
                  </div>
                </div>
                
                <div className="col-md-5">
                  <img
                    src={IMG2}
                    alt="Eco cleaning products"
                    className="w-100 rounded-3 shadow"
                    style={{ 
                      aspectRatio: '4/5',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row g-4 h-100">
              <div className="col-12">
                <div className="bento-item rounded-4 h-100" style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h4 className="text-xl text-rose-900 mb-3" style={{ fontWeight: '500' }}>
                    Community Roots
                  </h4>
                  
                  <p className="text-sm text-rose-800 mb-0" style={{ lineHeight: '1.6' }}>
                    Born and raised in Columbia. Every home we clean strengthens the community we love.
                  </p>
                </div>
              </div>
              
              <div className="col-12">
                <div className="bento-item rounded-4 h-100" style={{
                  backgroundColor: '#f5f3ff',
                  border: '1px solid #ddd6fe',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h4 className="text-xl text-violet-900 mb-3" style={{ fontWeight: '500' }}>
                    Detail-Oriented
                  </h4>
                  
                  <p className="text-sm text-violet-800 mb-0" style={{ lineHeight: '1.6' }}>
                    We notice what others miss. Every corner matters in creating your perfect space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section" style={{
        backgroundColor: '#fafaf9',
        padding: '8rem 0',
        borderTop: '1px solid #e7e5e4'
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
      </div>
    </div>
  );
}

export default About;