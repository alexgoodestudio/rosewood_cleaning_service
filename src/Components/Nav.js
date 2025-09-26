import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar bg-indigo-100 text-slate-800 flex flex-col">
      {/* Always fixed header row */}
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand btn btn-link p-0 text-decoration-none">
          <span className="font-bold">Rosewood</span> Cleaning Services
        </Link>
        <button
          className="navbar-toggler d-block"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content BELOW, doesn't push brand/toggler */}
      <div
        className={`w-100 px-3 mt-2 ${isOpen ? "d-block" : "d-none"}`}
        ref={navContentRef}
      >
        {/* Row 1 */}
        <div className="row mb-3">
          <div className="col-12 text-slate-800 p-3">
            <h4>Welcome</h4>
            <p className="text-slate-600">
              We make homes cleaner, healthier, and more relaxing — so you can
              focus on what matters.
            </p>
          </div>
        </div>

        {/* Row 2 - Company Info Links */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/about" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">About Us</h5>
              <p className="text-slate-600">
                Local, reliable, and eco-friendly. We treat every home like our
                own.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/contact" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">Contact</h5>
              <p className="text-slate-600">
                Call, email, or book online. We'll build a plan that works for
                you.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/faq" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">FAQ</h5>
              <p className="text-slate-600">
                Quick answers about pricing, supplies, and what's included in our
                services.
              </p>
            </Link>
          </div>
        </div>

        {/* Row 3 - Service Links */}
        <div className="row mb-3">
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/onetime" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">One-Time</h5>
              <p className="text-slate-600">
                Perfect for deep cleans, special events, or seasonal refreshes.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/recurring" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">Recurring</h5>
              <p className="text-slate-600">
                Weekly, bi-weekly, or monthly cleanings to keep your home
                spotless.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-12 text-slate-800 p-3">
            <Link 
              to="/moving" 
              className="text-decoration-none text-slate-800"
              onClick={handleLinkClick}
            >
              <h5 className="underline">Move In / Out</h5>
              <p className="text-slate-600">
                We'll handle the scrubbing so your move is easier and stress-free.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;