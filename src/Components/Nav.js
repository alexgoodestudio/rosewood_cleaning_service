import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="navbar text-slate-800 flex flex-col" style={{ padding: 0 }}>
      {/* Top bar with brand name */}
      <div className="container-fluid d-flex justify-content-center align-items-center bg-slate-50" style={{ paddingTop: '1rem', paddingBottom: '1rem', position: 'relative' }}>
        {/* Home & Contact links - far left on desktop */}
        <div className="d-none d-lg-flex align-items-center gap-4" style={{ position: 'absolute', left: '3rem' }}>
          <Link to="/" className="text-decoration-none text-slate-800 hover:text-slate-600 transition-colors font-semibold" style={{ fontSize: '1.05rem' }}>
            Home
          </Link>
          <Link to="/contact" className="text-decoration-none transition-colors font-semibold" style={{ fontSize: '1.05rem', color: '#476bff' }}>
            Contact
          </Link>
        </div>

        <Link to="/" className="navbar-brand btn btn-link p-0 text-decoration-none">
          <span className="cabinet font-medium brand-text">Rosewood Cleaning Services</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="d-none d-lg-flex align-items-center gap-4" style={{ marginRight: '3rem', position: 'absolute', right: 0 }}>
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

      {/* Mobile Navigation Links - Below brand name */}
      <div className="mobile-links-nav d-lg-none cabinet">
        <Link to="/" className="mobile-link-item">Home</Link>
        <div className="mobile-services-dropdown">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="mobile-link-item mobile-services-button"
          >
            Services
          </button>
          {mobileServicesOpen && (
            <div className="mobile-services-menu">
              <Link to="/services/onetime" className="mobile-service-item" onClick={() => setMobileServicesOpen(false)}>
                One-Time Clean
              </Link>
              <Link to="/services/recurring" className="mobile-service-item" onClick={() => setMobileServicesOpen(false)}>
                Recurring Service
              </Link>
              <Link to="/services/moving" className="mobile-service-item" onClick={() => setMobileServicesOpen(false)}>
                Move In / Out
              </Link>
              <Link to="/services/laundry" className="mobile-service-item" onClick={() => setMobileServicesOpen(false)}>
                Laundry Service
              </Link>
            </div>
          )}
        </div>
        <Link to="/about" className="mobile-link-item">About</Link>
        <Link to="/contact" className="mobile-link-item">Contact</Link>
        <Link to="/faq" className="mobile-link-item">FAQ</Link>
      </div>

    </nav>
  );
}

export default Nav;