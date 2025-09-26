import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG from "../Images/7.jpg";
import IMG2 from "../Images/2.jpg";
import IMG3 from "../Images/3.jpg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const bentoRef = useRef(null);
  const philosophyRef = useRef(null);
  const happyHomesRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.delayedCall(0.1, () => {
      const stat = happyHomesRef.current;
      const finalValue = parseInt(stat.textContent);

      gsap.set(stat, { textContent: 0 });

      gsap.to(stat, {
        textContent: finalValue,
        duration: 1.8,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
          onRefresh: () => gsap.set(stat, { textContent: 0 }),
        },
        onUpdate: () => {
          stat.textContent = Math.round(stat.textContent) + "+";
        },
      });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div className="overflow-hidden position-relative" ref={containerRef}>
      {/* Hero Section */}
      <div className="container py-5" ref={heroRef}>
        <div className="row align-items-center" style={{ minHeight: "85vh" }}>
          <div className="col-lg-8">
            <h1 className="text-5xl text-stone-900 mb-1">About Us</h1>
            <h6 className="text-stone-600">Meet Sarah & Marcus</h6>
            <p className="text-stone-700 mb-5 mt-4">
              Husband and Wife duo who discovered that our shared obsession with
              beautiful, thoughtfully maintained spaces could become something
              larger than ourselves. What started as weekend help for friends
              has evolved into a service built on trust, genuine care, and the
              belief that everyone deserves a space that feels like home.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <div className="text-stone-400 text-sm">Since 2023</div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="position-relative">
              <div className="hero-image">
                <img
                  src={IMG}
                  alt="Our Story"
                  className="w-100 rounded-3 shadow-lg"
                  style={{ aspectRatio: "3/4", objectFit: "cover" }}
                />
              </div>

              {/* Floating stats badge */}
              <div
                className="floating-badge position-absolute bg-white rounded-3 p-3 shadow-lg"
              
              >
                <div className="text-center">
                  <div
                    className="text-emerald-600 mb-1 text-lg  "
                    style={{ fontWeight: "700"}}
                    ref={happyHomesRef}
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

      {/* Philosophy Section */}
      <div className="col-12 text-blue-900">
        <div
          ref={philosophyRef}
          className="bg-blue-50 p-5 border position-relative overflow-hidden"
        >
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="position-relative">
                <img
                  src={IMG3}
                  alt="Clean sanctuary"
                  className="w-100 rounded-3 shadow-lg mb-lg-0 mb-3"
                  style={{ aspectRatio: "1/1", objectFit: "cover", opacity: 0.8 }}
                />
              </div>
            </div>
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
                A thoughtfully maintained space becomes a sanctuary for inspiration.
                We don't just clean—we create environments where life's most
                meaningful moments unfold naturally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bento Grid */}
      <div className="container py-5 mb-5" ref={bentoRef}>
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="bento-item h-100 rounded-4 p-5 position-relative overflow-hidden border border-emerald-200">
              <div className="row h-100 align-items-center">
                <div className="col-md-7">
                  <h3 className="text-emerald-900 mb-4">Planet-First Cleaning</h3>
                  <p className="text-emerald-800 mb-4">
                    Every product in our arsenal is a conscious choice—non-toxic,
                    biodegradable, and safe for your family, pets, and our shared environment.
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-lg-0 mb-3">
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">Local</span>
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">Pet-safe</span>
                    <span className="badge bg-emerald-500 text-emerald-900 px-3 py-2 rounded-pill">Small Business</span>
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

          <div className="col-xl-4">
            <div className="row h-100">
              <div className="col-12 mb-4">
                <div className="bento-item rounded-4 p-4 text-center h-100 border border-rose-200">
                  <div style={{ fontSize: "3rem" }} className="mb-3"></div>
                  <h4 className="text-slate-900 mb-3">Community Roots</h4>
                  <p className="text-slate-800">
                    Born and raised in Columbia. Every home we clean strengthens the community we love.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="bento-item rounded-4 p-4 text-center h-100 border border-violet-200">
                  <h4 className="text-slate-900 mb-3">Quality Assurance</h4>
                  <p className="text-slate-800">
                    We notice what others miss. Every detail matters in creating your perfect space.
                  </p>
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