import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG from "../Images/7.jpg";
import IMG2 from "../Images/2.jpg";
import IMG3 from "../Images/3.jpg";
import IMG4 from "../Images/4.jpg";
import IMG5 from "../Images/5.jpg";
import IMG6 from "../Images/6.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const bentoRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  const philosophyRef = useRef(null);

  useGSAP(() => {
    // Simple bento grid reveal
    gsap.from(".bento-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bentoRef.current,
        start: "top 80%",
      },
    });

    // Subtle micro-interactions for bento items
    gsap.utils.toArray(".bento-item").forEach((item) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(item, { 
        y: -4, 
        duration: 0.3, 
        ease: "power2.out" 
      });

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });

    // Stats count-up animation
    gsap.utils.toArray(".stat-number").forEach((stat, i) => {
      const finalValue = parseInt(stat.textContent);
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 1.8,
          ease: "power2.out",
          snap: { textContent: 1 },
          delay: i * 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    });

  }, []);

  return (
    <div className="bg-stone-50 overflow-hidden position-relative" ref={containerRef}>
      
      {/* Hero Section */}
      <div className="container py-5" ref={heroRef}>
        <div className="row align-items-center" style={{ minHeight: '85vh' }}>
          <div className="col-lg-6">
            <div className="hero-badge d-inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-pill text-sm font-medium mb-4">
              ✨ Est. 2023 • Columbia, SC
            </div>
            <h1 className="hero-title text-stone-900 mb-4" 
                style={{ letterSpacing: '-0.02em', fontWeight: '900', fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '0.9' }}>
              About
              <span className="d-block text-amber-600">Us</span>
            </h1>
            <p className="hero-subtitle text-stone-600 mb-5" style={{ fontWeight: '300', lineHeight: '1.4', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              Two hearts, one mission—creating spaces that inspire you to live beautifully. 
              We're more than cleaners; we're curators of comfort.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <div className="bg-stone-900 text-white rounded-pill px-4 py-3 text-sm" style={{ fontWeight: '500' }}>
                Local • Sustainable • Personal
              </div>
              <div className="text-stone-400 text-sm">Since 2023</div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="hero-image bg-slate-50 rounded-4 p-4 shadow-lg">
                <img 
                  src={IMG} 
                  alt="Our Story" 
                  className="w-100 rounded-3"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              
              {/* Floating stats badge */}
              <div className="floating-badge position-absolute bg-white rounded-3 p-3 shadow-lg" 
                   style={{ top: '20%', right: '-5%', zIndex: 10 }}>
                <div className="text-center">
                  <div className="text-emerald-600 mb-1" style={{ fontWeight: '700', fontSize: '2rem' }}>150+</div>
                  <div className="text-xs text-stone-600">Happy Homes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bento Grid */}
      <div className="container py-5 mb-5" ref={bentoRef}>
        <div className="row g-4">
          
          {/* Hero bento - Eco focus */}
          <div className="col-xl-8">
            <div className="bento-item h-100 bg-emerald-50 rounded-4 p-5 position-relative overflow-hidden border border-emerald-200">
              <div className="row h-100 align-items-center">
                <div className="col-md-7">
                  <div className="mb-3">
                    <span className="badge bg-emerald-200 text-emerald-800 px-3 py-2 rounded-pill text-xs" style={{ fontWeight: '500' }}>
                      Our Promise
                    </span>
                  </div>
                  <h3 className="text-emerald-900 mb-4" style={{ fontWeight: '700', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    Planet-First Cleaning
                  </h3>
                  <p className="text-emerald-800 mb-4" style={{ lineHeight: '1.6', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                    Every product in our arsenal is a conscious choice—non-toxic, biodegradable, 
                    and safe for your family, pets, and our shared environment.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-emerald-300 text-emerald-900 px-3 py-2 rounded-pill">Plant-based</span>
                    <span className="badge bg-emerald-300 text-emerald-900 px-3 py-2 rounded-pill">Pet-safe</span>
                    <span className="badge bg-emerald-300 text-emerald-900 px-3 py-2 rounded-pill">Locally sourced</span>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="position-relative">
                    <img 
                      src={IMG2} 
                      alt="Eco cleaning products" 
                      className="w-100 rounded-3 shadow"
                      style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side stack */}
          <div className="col-xl-4">
            <div className="row g-4 h-100">
              <div className="col-12">
                <div className="bento-item bg-rose-50 rounded-4 p-4 text-center h-100 border border-rose-200">
                  <div style={{ fontSize: '3rem' }} className="mb-3">🏡</div>
                  <h4 className="text-rose-900 mb-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Community Roots</h4>
                  <p className="text-rose-800" style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                    Born and raised in Columbia. Every home we clean strengthens the community we love.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="bento-item bg-violet-50 rounded-4 p-4 text-center h-100 border border-violet-200">
                  <div style={{ fontSize: '3rem' }} className="mb-3">✨</div>
                  <h4 className="text-violet-900 mb-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Obsessive Care</h4>
                  <p className="text-violet-800" style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                    We notice what others miss—every detail matters in creating your perfect space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy section */}
          <div className="col-12">
            <div ref={philosophyRef} className="bento-item  rounded-4 p-5 border   position-relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <span className="badge bg-amber-400 text-stone-900 px-3 py-2 rounded-pill text-xs" style={{ fontWeight: '700' }}>
                      Our Philosophy
                    </span>
                  </div>
                  <h3 className="mb-4" style={{ fontWeight: '700', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Clean Canvas, Creative Life</h3>
                  <p className="mb-4" style={{ opacity: '0.9', lineHeight: '1.6', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                    A thoughtfully maintained space becomes a sanctuary for inspiration. We don't just clean—we create 
                    environments where life's most meaningful moments unfold naturally.
                  </p>
                  <div className="d-flex gap-3 align-items-center">
                    <span className="text-amber-400">•</span>
                    <span style={{ fontSize: '1.125rem' }}>Mindful</span>
                    <span className="text-amber-400">•</span>
                    <span style={{ fontSize: '1.125rem' }}>Sustainable</span>
                    <span className="text-amber-400">•</span>
                    <span style={{ fontSize: '1.125rem' }}>Personal</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative">
                    <img 
                      src={IMG3} 
                      alt="Clean sanctuary" 
                      className="w-100 rounded-3 shadow-lg"
                      style={{ aspectRatio: '1/1', objectFit: 'cover', opacity: '0.9' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service highlights - three column */}
          <div className="col-lg-4">
            <div className="bento-item bg-amber-50 rounded-4 p-4 text-center h-100 border border-amber-200">
              <div className="mb-4">
                <img 
                  src={IMG4} 
                  alt="Flexible scheduling" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-amber-900 mb-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Life-First Scheduling</h4>
              <p className="text-amber-800" style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                Your rhythm, our flexibility. We adapt our schedule to honor your life's natural flow.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bento-item bg-blue-50 rounded-4 p-4 text-center h-100 border border-blue-200">
              <div className="mb-4">
                <img 
                  src={IMG5} 
                  alt="Personal approach" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-blue-900 mb-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Story-Driven Care</h4>
              <p className="text-blue-800" style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                Every home tells a unique story. We listen, learn, and clean with deep respect for your narrative.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bento-item bg-indigo-50 rounded-4 p-4 text-center h-100 border border-indigo-200">
              <div className="mb-4">
                <img 
                  src={IMG6} 
                  alt="Quality promise" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-indigo-900 mb-3" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Satisfaction Guaranteed</h4>
              <p className="text-indigo-800" style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                Not completely happy? We'll return and make it right. Your peace of mind is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats */}
      <div className="bg-white py-5 my-5" ref={statsRef}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-stone-900 mb-3" style={{ fontWeight: '700', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Impact by Numbers</h2>
            <p className="text-stone-600" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Small team, meaningful difference</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="bg-emerald-50 rounded-4 p-4 text-center border border-emerald-200 h-100">
                <div className="stat-number text-emerald-700 mb-2" style={{ fontWeight: '900', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>150</div>
                <div className="text-emerald-800" style={{ fontWeight: '500' }}>Homes Transformed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-blue-50 rounded-4 p-4 text-center border border-blue-200 h-100">
                <div className="stat-number text-blue-700 mb-2" style={{ fontWeight: '900', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>2</div>
                <div className="text-blue-800" style={{ fontWeight: '500' }}>Years Serving Columbia</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-rose-50 rounded-4 p-4 text-center border border-rose-200 h-100">
                <div className="stat-number text-rose-700 mb-2" style={{ fontWeight: '900', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>100</div>
                <div className="text-rose-800" style={{ fontWeight: '500' }}>% Eco-Friendly Products</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-violet-50 rounded-4 p-4 text-center border border-violet-200 h-100">
                <div className="stat-number text-violet-700 mb-2" style={{ fontWeight: '900', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>24</div>
                <div className="text-violet-800" style={{ fontWeight: '500' }}>Hour Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Team Section */}
      <div className="bg-slate-50 py-5 position-relative overflow-hidden">
        <div className="container position-relative" ref={teamRef}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-content">
                <div className="mb-4">
                  <span className="badge bg-amber-400 text-stone-800 px-4 py-2 rounded-pill" style={{ fontWeight: '700' }}>
                    The Humans Behind the Service
                  </span>
                </div>
                <h2 className="text-dark mb-4" style={{ fontWeight: '700', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Meet Sarah & Marcus</h2>
                <p className="text-stone-800 mb-4" style={{ lineHeight: '1.6', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  We're two friends who discovered that our shared obsession with beautiful, 
                  thoughtfully maintained spaces could become something larger than ourselves.
                </p>
                <p className="text-stone-800 mb-5" style={{ lineHeight: '1.6', fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)' }}>
                  What started as weekend help for friends has evolved into a service built on trust, 
                  genuine care, and the belief that everyone deserves a space that feels like home.
                </p>
                <button className="btn bg-amber-400 text-stone-900 rounded-pill px-4 py-3 shadow-lg" 
                        style={{ fontWeight: '700', transition: 'all 0.3s ease' }}>
                  Start Your Story With Us
                </button>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="team-visual position-relative">
                <div className="bg-white rounded-4 p-5 shadow-lg">
                  <div className="text-center">
                    <div className="mb-4" style={{ fontSize: '3rem' }}>👋</div>
                    <h3 className="text-stone-900 mb-2" style={{ fontWeight: '700', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Sarah & Marcus</h3>
                    <p className="text-stone-800 mb-4" style={{ fontSize: '1.125rem' }}>Co-Founders & Lead Cleaners</p>
                    <div className="team-badges d-flex gap-2 justify-content-center flex-wrap">
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Columbia Natives</span>
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Detail Obsessed</span>
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Community First</span>
                    </div>
                  </div>
                </div>
                

                <div className="position-absolute bg-emerald-100 text-emerald-800 rounded-pill px-3 py-1 text-sm shadow" 
                     style={{ bottom: '20%', left: '-5%', zIndex: 10, fontWeight: '500' }}>
                  Est. 2023
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