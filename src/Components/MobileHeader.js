import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="d-lg-none bg-slate-50" style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <span className="cabinet-bold brand-text text-slate-800">Rosewood Cleaning</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-link p-0"
            style={{ textDecoration: 'none', color: '#000000' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="d-lg-none bg-slate-50 border-top border-slate-200" style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
          <nav className="d-flex flex-column" style={{ gap: '0.5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <Link
              to="/"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services/onetime"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              One-Time Clean
            </Link>
            <Link
              to="/services/recurring"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recurring Service
            </Link>
            <Link
              to="/services/moving"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Move In / Out
            </Link>
            <Link
              to="/services/laundry"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Laundry Service
            </Link>
            <Link
              to="/about"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="text-decoration-none text-slate-800 py-2 hover:text-slate-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
