import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
    <footer className="bg-teal-950 py-5">
      <div className="container py-md-6">
        <div className="row g-5 g-lg-6">
          <div className="col-12 col-md-6 col-lg-5">
            <Link to="/" className="d-inline-block mb-4 no-underline">
              <h3 className="text-3xl text-white mb-0 ">Rosewood Cleaning</h3>
            </Link>
            <p className="text-md tracking-wide text-slate-300 mb-4 pe-lg-5 gs">Own your free time. Let us handle the cleaning stuff.</p>
            <p className="text-sm text-slate-400">Columbia, South Carolina</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Services</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/services/onetime" className="text-base text-slate-300 footer-link">One Time Cleaning</Link>
              <Link to="/services/recurring" className="text-base text-slate-300 footer-link">Recurring Service</Link>
              <Link to="/services/moving" className="text-base text-slate-300 footer-link">Moving Clean</Link>
              <Link to="/services/laundry" className="text-base text-slate-300 footer-link">Laundry Service</Link>
            </nav>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Company</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/about" className="text-base text-slate-300 footer-link">About</Link>
              <Link to="/contact" className="text-base text-slate-300 footer-link">Contact</Link>
              <Link to="/faq" className="text-base text-slate-300 footer-link">FAQ</Link>
            </nav>
          </div>
          <div className="col-12 col-lg-3">
            <h4 className="text-md text-slate-400 mb-4 font-mono">Connect</h4>
            <nav className="d-flex flex-column gap-3">
              <a href="https://facebook.com/rosewoodcleaning" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link">Facebook</a>
              <a href="https://instagram.com/rosewoodcleaningservices" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link">Instagram</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mt-md-6">
        <div className="pt-5 pt-md-6 border-top border-slate-800 font-mono">
          {/* Email - Mobile Only */}
          <div className="d-md-none text-center mb-4">
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