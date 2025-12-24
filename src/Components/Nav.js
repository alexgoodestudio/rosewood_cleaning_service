import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="navbar  text-slate-800 flex flex-col" style={{ padding: 0 }}>
      {/* Top bar with brand name - desktop only */}
      <div className="bg-slate-50 d-none d-lg-block" style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem', width: '100%' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative' }}>
          {/* Home & Contact links - far left on desktop */}
          <div className="d-none d-lg-flex align-items-center gap-4" style={{ position: 'absolute', left: '2rem' }}>
            <Link to="/" className="text-decoration-none text-slate-800 hover:text-slate-600 transition-colors font-semibold d-flex align-items-center gap-2" style={{ fontSize: '1.05rem' }}>
              <Home size={20} strokeWidth={2} />
              Home
            </Link>
            <Link to="/contact" className="text-decoration-none text-slate-800 hover:text-slate-600 transition-colors font-semibold" style={{ fontSize: '1.05rem'}}>
              Contact
            </Link>
          </div>

          <Link to="/" className="navbar-brand btn btn-link p-0 text-decoration-none">
            <span className="cabinet-bold brand-text text-slate-800">Rosewood Cleaning Services</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center gap-4" style={{ marginRight: '2rem', position: 'absolute', right: 0 }}>
          <Link to="/about" className="text-decoration-none text-slate-800 hover:text-slate-600 transition-colors font-semibold" style={{ fontSize: '1.05rem' }}>
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="position-relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
            style={{ padding: '0.5rem 0' }}
          >
            <span
              className="text-slate-800 hover:text-slate-600 transition-colors d-flex align-items-center gap-1 font-semibold"
              style={{ cursor: 'pointer', fontSize: '1.05rem' }}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {/* Dropdown Menu with bridge area */}
            {servicesDropdownOpen && (
              <div
                className="position-absolute"
                style={{
                  top: 'calc(100% - 0.5rem)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '0.5rem',
                  zIndex: 1000
                }}
              >
                <div
                  className="bg-white shadow-lg border border-slate-200"
                  style={{
                    borderRadius: '0.5rem',
                    minWidth: '200px',
                  }}
                >
                  <Link
                    to="/services/onetime"
                    className="d-block px-4 py-2 text-decoration-none text-slate-800 hover:bg-slate-50 transition-colors"
                    style={{ fontSize: '0.9rem', borderRadius: '0.5rem 0.5rem 0 0' }}
                  >
                    One-Time Clean
                  </Link>
                  <Link
                    to="/services/recurring"
                    className="d-block px-4 py-2 text-decoration-none text-slate-800 hover:bg-slate-50 transition-colors"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Recurring Service
                  </Link>
                  <Link
                    to="/services/moving"
                    className="d-block px-4 py-2 text-decoration-none text-slate-800 hover:bg-slate-50 transition-colors"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Move In / Out
                  </Link>
                  <Link
                    to="/services/laundry"
                    className="d-block px-4 py-2 text-decoration-none text-slate-800 hover:bg-slate-50 transition-colors"
                    style={{ fontSize: '0.9rem', borderRadius: '0 0 0.5rem 0.5rem' }}
                  >
                    Laundry Service
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/faq" className="text-decoration-none text-slate-800 hover:text-slate-600 transition-colors font-semibold" style={{ fontSize: '1.05rem' }}>
            FAQ
          </Link>
        </div>
        </div>
      </div>

      {/* Mobile Navigation Links - Below brand name with horizontal scroll */}
      <div className="mobile-links-nav-scroll d-lg-none">
        <div className="mobile-links-nav cabinet">
          <Link to="/" className="mobile-link-item">
            <Home size={24} strokeWidth={2} />
          </Link>
          <div className="mobile-nav-divider"></div>
          <Link to="/services/onetime" className="mobile-link-item">One-Time</Link>
          <Link to="/services/recurring" className="mobile-link-item">Recurring</Link>
          <Link to="/services/moving" className="mobile-link-item">Move In/Out</Link>
          <Link to="/services/laundry" className="mobile-link-item">Laundry</Link>
          <Link to="/about" className="mobile-link-item">About</Link>
          <Link to="/contact" className="mobile-link-item">Contact</Link>
          <Link to="/faq" className="mobile-link-item">FAQ</Link>
        </div>
      </div>

    </nav>
  );
}

export default Nav;