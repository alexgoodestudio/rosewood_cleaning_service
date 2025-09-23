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
    // Ensure ScrollTrigger is refreshed after component mounts
    ScrollTrigger.refresh();

    // Small delay to ensure DOM is fully rendered
    gsap.delayedCall(0.1, () => {
      // Stats count-up animation (keeping only this animation)
      gsap.utils.toArray(".stat-number").forEach((stat, i) => {
        const finalValue = parseInt(stat.textContent);

        // Set initial value to 0
        gsap.set(stat, { textContent: 0 });

        gsap.to(stat, {
          textContent: finalValue,
          duration: 1.8,
          ease: "power2.out",
          snap: { textContent: 1 },
          delay: i * 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
            onRefresh: () => {
              // Reset to 0 when ScrollTrigger refreshes
              gsap.set(stat, { textContent: 0 });
            },
            // Add markers for debugging (remove in production)
            // markers: true,
          },
        });
      });

      // Force ScrollTrigger to check positions
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className=" overflow-hidden position-relative" ref={containerRef}>
      {/* Hero Section */}
      <div className="container py-5" ref={heroRef}>
        <div className="row align-items-center" style={{ minHeight: "85vh" }}>
          <div className="col-lg-6">
            <h1 className=" text-5xl text-stone-900 mb-1">About Us</h1>
            <h6 className="text-stone-600">Meet Sarah & Marcus</h6>
            <p className=" text-stone-700 mb-5 mt-4">
              Husband and Wife Duo who discovered that our
              shared obsession with beautiful, thoughtfully maintained spaces
              could become something larger than ourselves. What started as
              weekend help for friends has evolved into a service built on
              trust, genuine care, and the belief that everyone deserves a space
              that feels like home.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <div className="text-stone-400 text-sm">Since 2023</div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative">
              <div className="hero-image ">
                <img
                  src={IMG}
                  alt="Our Story"
                  className="w-100 rounded-3"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
              </div>

              {/* Floating stats badge */}
              <div
                className="floating-badge position-absolute bg-white rounded-3 p-3 shadow-lg"
                style={{ top: "20%", right: "-5%", zIndex: 10 }}
              >
                <div className="text-center">
                  <div
                    className="text-emerald-600 mb-1"
                    style={{ fontWeight: "700", fontSize: "2rem" }}
                  >
                    150+
                  </div>
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
                    <span
                      className="badge bg-emerald-500 text-emerald-800 px-3 py-2 rounded-pill text-xs"
                      style={{ fontWeight: "500" }}
                    >
                      Our Promise
                    </span>
                  </div>
                  <h3 className="text-emerald-900 mb-4">
                    Planet-First Cleaning
                  </h3>
                  <p className="text-emerald-800 mb-4">
                    Every product in our arsenal is a conscious
                    choice—non-toxic, biodegradable, and safe for your family,
                    pets, and our shared environment.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">
                      Plant-based
                    </span>
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">
                      Pet-safe
                    </span>
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">
                      Locally sourced
                    </span>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="position-relative">
                    <img
                      src={IMG2}
                      alt="Eco cleaning products"
                      className="w-100 rounded-3 shadow"
                      style={{ aspectRatio: "4/5", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side stack */}
          <div className="col-xl-4">
            <div className="row  h-100">
              <div className="col-12 mb-4">
                <div className="bento-item  rounded-4 p-4 text-center h-100 border border-rose-200">
                  <div style={{ fontSize: "3rem" }} className="mb-3">
                    🏡
                  </div>
                  <h4 className="text-slate-900 mb-3">Community Roots</h4>
                  <p className="text-slate-800">
                    Born and raised in Columbia. Every home we clean strengthens
                    the community we love.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="bento-item rounded-4 p-4 text-center h-100 border border-violet-200">
                  <h4 className="text-slate-900 mb-3">Quality Assurance</h4>
                  <p className="text-slate-800">
                    We notice what others miss. Every detail matters in creating
                    your perfect space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy section */}
          <div className="col-12  text-blue-900">
            <div
              ref={philosophyRef}
              className="bento-item  rounded-4  bg-blue-50 p-5 border   position-relative overflow-hidden"
            >
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <span
                      className="badge bg-blue-400 text-stone-900 px-3 py-2 rounded-pill text-xs"
                      style={{ fontWeight: "700" }}
                    >
                      Our Philosophy
                    </span>
                  </div>
                  <h3 className="mb-4">Clean Canvas, Creative Life</h3>
                  <p className="mb-4">
                    A thoughtfully maintained space becomes a sanctuary for
                    inspiration. We don't just clean—we create environments
                    where life's most meaningful moments unfold naturally.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative">
                    <img
                      src={IMG3}
                      alt="Clean sanctuary"
                      className="w-100 rounded-3 shadow-lg"
                      style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        opacity: "0.9",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats */}
      <div className="bg-white py-5 my-5" ref={statsRef}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-stone-900 mb-3">Impact by Numbers</h2>
            <p className="text-stone-600">Small team, meaningful difference</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="bg-emerald-50 rounded-4 p-4 text-center border border-emerald-200 h-100">
                <div
                  className="stat-number text-emerald-700 mb-2"
                  style={{
                    fontWeight: "900",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  150
                </div>
                <div className="text-emerald-800">Homes Transformed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-blue-50 rounded-4 p-4 text-center border border-blue-200 h-100">
                <div
                  className="stat-number text-blue-700 mb-2"
                  style={{
                    fontWeight: "900",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  2
                </div>
                <div className="text-blue-800">Years Serving Columbia</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-rose-50 rounded-4 p-4 text-center border border-rose-200 h-100">
                <div
                  className="stat-number text-rose-700 mb-2"
                  style={{
                    fontWeight: "900",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  100
                </div>
                <div className="text-rose-800">% Eco-Friendly Products</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-violet-50 rounded-4 p-4 text-center border border-violet-200 h-100">
                <div
                  className="stat-number text-violet-700 mb-2"
                  style={{
                    fontWeight: "900",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  24
                </div>
                <div className="text-violet-800">Hour Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default About;
