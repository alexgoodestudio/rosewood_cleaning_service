import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        navContentRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(navContentRef.current.children, {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="navbar bg-indigo-100 text-slate-800 flex flex-col">
      {/* Always fixed header row */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button className="navbar-brand btn btn-link p-0">
          <span className="font-bold">Rosewood</span> Cleaning Services
        </button>
        <button
          className="navbar-toggler d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content BELOW, doesn’t push brand/toggler */}
      <div
        className={`w-100 px-3 mt-2 ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-slate-800 p-3">
            <h4>Welcome</h4>
            <p>
              We make homes cleaner, healthier, and more relaxing — so you can
              focus on what matters.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>About Us</h5>
            <p>
              Local, reliable, and eco-friendly. We treat every home like our
              own.
            </p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Contact</h5>
            <p>
              Call, email, or book online. We’ll build a plan that works for
              you.
            </p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>FAQ</h5>
            <p>
              Quick answers about pricing, supplies, and what’s included in our
              services.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>One-Time</h5>
            <p>
              Perfect for deep cleans, special events, or seasonal refreshes.
            </p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Recurring</h5>
            <p>
              Weekly, bi-weekly, or monthly cleanings to keep your home
              spotless.
            </p>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <h5>Move In / Out</h5>
            <p>
              We’ll handle the scrubbing so your move is easier and stress-free.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
