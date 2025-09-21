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
    // Sophisticated hero entrance with layered timing
    const heroTl = gsap.timeline();
    heroTl
      .from(".hero-badge", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 0.6, 
        ease: "back.out(2)" 
      })
      .from(".hero-title", { 
        opacity: 0, 
        y: 80, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.3")
      .from(".hero-subtitle", { 
        opacity: 0, 
        y: 40, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.5")
      .from(".hero-image", { 
        opacity: 0, 
        scale: 0.95, 
        duration: 1.2, 
        ease: "power3.out" 
      }, "-=0.8")
      .from(".floating-badge", { 
        opacity: 0, 
        scale: 0, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.8)" 
      }, "-=0.4");

    // Floating element continuous animation
    gsap.to(".floating-badge", {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Enhanced bento grid reveal with sophisticated stagger
    gsap.from(".bento-item", {
      opacity: 0,
      scale: 0.92,
      y: 60,
      rotation: 2,
      stagger: {
        amount: 0.8,
        from: "start",
        ease: "power2.out"
      },
      duration: 1,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: bentoRef.current,
        start: "top 75%",
        end: "bottom 25%",
      },
    });

    // Micro-interactions for bento items
    gsap.utils.toArray(".bento-item").forEach((item) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(item, { 
        y: -8, 
        scale: 1.02, 
        duration: 0.3, 
        ease: "power2.out" 
      });

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });

    // Sophisticated stats animation with typewriter effect
    gsap.utils.toArray(".stat-number").forEach((stat, i) => {
      const finalValue = parseInt(stat.textContent);
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          delay: i * 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    // Philosophy section reveal with mask effect
    gsap.from(philosophyRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: philosophyRef.current,
        start: "top 80%",
      },
    });

    // Team section sophisticated entrance
    const teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
      },
    });
    
    teamTl
      .from(".team-content", { 
        opacity: 0, 
        x: -60, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".team-visual", { 
        opacity: 0, 
        x: 60, 
        scale: 0.9, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.6")
      .from(".team-badges", { 
        opacity: 0, 
        y: 20, 
        stagger: 0.1, 
        duration: 0.5, 
        ease: "back.out(2)" 
      }, "-=0.3");

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
            <h1 className="hero-title text-10xl text-stone-900 mb-4" 
                style={{ letterSpacing: '-0.02em', fontWeight: '900' }}>
              About
              <span className="d-block text-amber-600">Us</span>
            </h1>
            <p className="hero-subtitle text-2xl text-stone-600 mb-5" style={{ fontWeight: '300', lineHeight: '1.4' }}>
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
                  <div className="text-3xl text-emerald-600 mb-1" style={{ fontWeight: '700' }}>150+</div>
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
            <div className="bento-item h-100  rounded-4 p-5 position-relative overflow-hidden border border-emerald-200">
              <div className="row h-100 align-items-center">
                <div className="col-md-7">
                  <div className="mb-3">
                    <span className="badge bg-emerald-200 text-emerald-800 px-3 py-2 rounded-pill text-xs" style={{ fontWeight: '500' }}>
                      Our Promise
                    </span>
                  </div>
                  <h3 className="text-5xl text-emerald-900 mb-4" style={{ fontWeight: '700' }}>
                    Planet-First Cleaning
                  </h3>
                  <p className="text-lg text-emerald-800 mb-4" style={{ lineHeight: '1.6' }}>
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
                <div className="bento-item bg-gradient-to-br from-rose-50 to-pink-50 rounded-4 p-4 text-center h-100 border border-rose-200">
                  <div className="text-6xl mb-3">🏡</div>
                  <h4 className="text-2xl text-rose-900 mb-3" style={{ fontWeight: '700' }}>Community Roots</h4>
                  <p className="text-md text-rose-800" style={{ lineHeight: '1.5' }}>
                    Born and raised in Columbia. Every home we clean strengthens the community we love.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="bento-item bg-gradient-to-br from-violet-50 to-purple-50 rounded-4 p-4 text-center h-100 border border-violet-200">
                  <div className="text-6xl mb-3">✨</div>
                  <h4 className="text-2xl text-violet-900 mb-3" style={{ fontWeight: '700' }}>Obsessive Care</h4>
                  <p className="text-md text-violet-800" style={{ lineHeight: '1.5' }}>
                    We notice what others miss—every detail matters in creating your perfect space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy section */}
          <div className="col-12">
            <div ref={philosophyRef} className="bento-item bg-gradient-to-r from-stone-900 via-stone-800 to-stone-700 rounded-4 p-5 text-white position-relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <span className="badge bg-amber-400 text-stone-900 px-3 py-2 rounded-pill text-xs" style={{ fontWeight: '700' }}>
                      Our Philosophy
                    </span>
                  </div>
                  <h3 className="text-5xl mb-4" style={{ fontWeight: '700' }}>Clean Canvas, Creative Life</h3>
                  <p className="text-xl mb-4" style={{ opacity: '0.9', lineHeight: '1.6' }}>
                    A thoughtfully maintained space becomes a sanctuary for inspiration. We don't just clean—we create 
                    environments where life's most meaningful moments unfold naturally.
                  </p>
                  <div className="d-flex gap-3 align-items-center">
                    <span className="text-amber-400">•</span>
                    <span className="text-lg">Mindful</span>
                    <span className="text-amber-400">•</span>
                    <span className="text-lg">Sustainable</span>
                    <span className="text-amber-400">•</span>
                    <span className="text-lg">Personal</span>
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
            <div className="bento-item bg-gradient-to-br from-amber-50 to-yellow-50 rounded-4 p-4 text-center h-100 border border-amber-200">
              <div className="mb-4">
                <img 
                  src={IMG4} 
                  alt="Flexible scheduling" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-2xl text-amber-900 mb-3" style={{ fontWeight: '700' }}>Life-First Scheduling</h4>
              <p className="text-md text-amber-800" style={{ lineHeight: '1.5' }}>
                Your rhythm, our flexibility. We adapt our schedule to honor your life's natural flow.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bento-item bg-gradient-to-br from-blue-50 to-indigo-50 rounded-4 p-4 text-center h-100 border border-blue-200">
              <div className="mb-4">
                <img 
                  src={IMG5} 
                  alt="Personal approach" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-2xl text-blue-900 mb-3" style={{ fontWeight: '700' }}>Story-Driven Care</h4>
              <p className="text-md text-blue-800" style={{ lineHeight: '1.5' }}>
                Every home tells a unique story. We listen, learn, and clean with deep respect for your narrative.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bento-item bg-gradient-to-br from-indigo-50 to-purple-50 rounded-4 p-4 text-center h-100 border border-indigo-200">
              <div className="mb-4">
                <img 
                  src={IMG6} 
                  alt="Quality promise" 
                  className="w-100 rounded-3 mb-3 shadow-sm"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <h4 className="text-2xl text-indigo-900 mb-3" style={{ fontWeight: '700' }}>Satisfaction Guaranteed</h4>
              <p className="text-md text-indigo-800" style={{ lineHeight: '1.5' }}>
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
            <h2 className="text-6xl text-stone-900 mb-3" style={{ fontWeight: '700' }}>Impact by Numbers</h2>
            <p className="text-xl text-stone-600">Small team, meaningful difference</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-4 p-4 text-center border border-emerald-200 h-100">
                <div className="stat-number text-5xl text-emerald-700 mb-2" style={{ fontWeight: '900' }}>150</div>
                <div className="text-emerald-800" style={{ fontWeight: '500' }}>Homes Transformed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-4 p-4 text-center border border-blue-200 h-100">
                <div className="stat-number text-5xl text-blue-700 mb-2" style={{ fontWeight: '900' }}>2</div>
                <div className="text-blue-800" style={{ fontWeight: '500' }}>Years Serving Columbia</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-4 p-4 text-center border border-rose-200 h-100">
                <div className="stat-number text-5xl text-rose-700 mb-2" style={{ fontWeight: '900' }}>100</div>
                <div className="text-rose-800" style={{ fontWeight: '500' }}>% Eco-Friendly Products</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-4 p-4 text-center border border-violet-200 h-100">
                <div className="stat-number text-5xl text-violet-700 mb-2" style={{ fontWeight: '900' }}>24</div>
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
                <h2 className="text-6xl text-dark mb-4" style={{ fontWeight: '700' }}>Meet Sarah & Marcus</h2>
                <p className="text-xl text-stone-800 mb-4" style={{ lineHeight: '1.6' }}>
                  We're two friends who discovered that our shared obsession with beautiful, 
                  thoughtfully maintained spaces could become something larger than ourselves.
                </p>
                <p className="text-lg text-stone-800 mb-5" style={{ lineHeight: '1.6' }}>
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
                <div className=" rounded-4 p-5 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👋</div>
                    <h3 className="text-3xl text-stone-900 mb-2" style={{ fontWeight: '700' }}>Sarah & Marcus</h3>
                    <p className="text-stone-800 mb-4 text-lg">Co-Founders & Lead Cleaners</p>
                    <div className="team-badges d-flex gap-2 justify-content-center flex-wrap">
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Columbia Natives</span>
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Detail Obsessed</span>
                      <span className="badge bg-stone-900 text-white px-3 py-2 rounded-pill">Community First</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around team card */}
                <div className="position-absolute bg-white rounded-3 p-2 shadow" 
                     style={{ top: '10%', right: '-3%', zIndex: 10 }}>
                  <div className="text-2xl">🌱</div>
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