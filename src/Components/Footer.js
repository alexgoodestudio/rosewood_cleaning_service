import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const emailRef = useRef(null);
  const [emailChars, setEmailChars] = useState([]);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Split email into characters on mount
  useEffect(() => {
    const email = "hello@rosewoodcleaning.com";
    setEmailChars(email.split(''));
  }, []);

  // Playful GSAP-style email animation
  const handleEmailHover = () => {
    if (prefersReducedMotion) return;

    const chars = emailRef.current?.querySelectorAll('.email-char');
    if (!chars) return;

    gsap.to(chars, {
      y: -6,
      rotation: () => gsap.utils.random(-12, 12),
      scale: 1.15,
      color: '#14b8a6', // Teal-500 on hover
      duration: 0.4,
      ease: 'back.out(3)',
      stagger: {
        amount: 0.25,
        from: 'random'
      }
    });
  };

  const handleEmailLeave = () => {
    if (prefersReducedMotion) return;

    const chars = emailRef.current?.querySelectorAll('.email-char');
    if (!chars) return;

    gsap.to(chars, {
      y: 0,
      rotation: 0,
      scale: 1,
      color: '#cbd5e1', // Slate-300 as default
      duration: 0.5,
      ease: 'elastic.out(1, 0.6)',
      stagger: {
        amount: 0.2,
        from: 'random'
      }
    });
  };

  return (
    <footer className="bg-teal-950 pt-5 pb-3">
      <div className="container-fluid px-5 pt-3 py-md-6">
        <div className="row g-5 g-lg-6">
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/" className="d-inline-block mb-4 no-underline">
              <h3 className="text-4xl text-white mb-0 cabinet" style={{
                // borderTop: '1px solid #cbd5e1',
                borderBottom: '1px solid #cbd5e1',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem'
              }}>Rosewood Cleaning</h3>
            </Link>
            <p className="text-lg tracking-wide text-slate-300 mb-4 pe-lg-5 ">Reclaim your free time. Let us handle the cleaning stuff.</p>
            <p className="text-sm text-slate-400">Columbia, South Carolina</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Services</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/services/onetime" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                One Time Cleaning
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link to="/services/recurring" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Recurring Service
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link to="/services/moving" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Moving Clean
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link to="/services/laundry" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Laundry Service
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </nav>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Company</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/about" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                About
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link to="/contact" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Contact
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link to="/faq" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                FAQ
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              {/* <a href="https://facebook.com/rosewoodcleaning" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Facebook
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
              <a href="https://instagram.com/rosewoodcleaningservices" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link d-inline-flex align-items-center gap-2">
                Instagram
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a> */}
            </nav>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Hours</h4>
            <div className="d-flex flex-column" style={{ gap: '0.625rem' }}>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Mon</span>
                <span className="text-sm text-slate-300 font-mono">8:00 AM - 5:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Tue</span>
                <span className="text-sm text-slate-300 font-mono">8:00 AM - 5:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Wed</span>
                <span className="text-sm text-slate-300 font-mono">8:00 AM - 5:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Thu</span>
                <span className="text-sm text-slate-300 font-mono">8:00 AM - 5:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Fri</span>
                <span className="text-sm text-slate-300 font-mono">8:00 AM - 5:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Sat</span>
                <span className="text-sm text-slate-300 font-mono">9:00 AM - 3:00 PM</span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                <span className="text-sm text-slate-400 font-mono" style={{ minWidth: '3rem' }}>Sun</span>
                <span className="text-sm text-slate-300 font-mono">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mt-md-6">
        <div className="pt-5 pt-md-6 border-top border-slate-800 font-mono">
          {/* Email - All Screens */}
          <div className="text-center mb-4">
            <a
              href="mailto:hello@rosewoodcleaning.com"
              ref={emailRef}
              className="text-sm"
              onMouseEnter={handleEmailHover}
              onMouseLeave={handleEmailLeave}
              style={{
                letterSpacing: '0.01em',
                textDecoration: 'none',
                color: '#cbd5e1',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              {emailChars.length > 0 ? (
                emailChars.map((char, idx) => (
                  <span
                    key={idx}
                    className="email-char"
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </span>
                ))
              ) : (
                'hello@rosewoodcleaning.com'
              )}
            </a>
          </div>

          <p className="text-sm text-slate-500 mb-0 text-center">© {currentYear} Rosewood Cleaning Services • Columbia, SC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;