import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { gsap } from 'gsap';

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialRefs = useRef([]);
  
  const handleSocialMove = (e, index) => {
    const icon = socialRefs.current[index];
    if (!icon) return;
    const bounds = icon.getBoundingClientRect();
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    gsap.to(icon, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
  };
  
  const handleSocialLeave = (index) => {
    gsap.to(socialRefs.current[index], { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <footer className="bg-slate-900 py-5">
      <div className="container py-md-6">
        <div className="row g-5 g-lg-6">
          <div className="col-12 col-md-6 col-lg-5">
            <Link to="/" className="d-inline-block mb-4 no-underline">
              <h3 className="text-4xl apfel text-white mb-0 ">Rosewood Cleaning</h3>
            </Link>
            <p className="text-md tracking-wide text-slate-400 mb-4 pe-lg-5">Let us handle the cleaning stuff while you focus on what matters.</p>
            <p className="text-metadata text-slate-500">Columbia, South Carolina</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-metadata text-slate-500 mb-4">Services</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/services/one-time" className="text-base text-slate-300 footer-link">One Time Cleaning</Link>
              <Link to="/services/recurring" className="text-base text-slate-300 footer-link">Recurring Service</Link>
              <Link to="/services/moving" className="text-base text-slate-300 footer-link">Moving Clean</Link>
            </nav>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-metadata text-slate-500 mb-4">Company</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/about" className="text-base text-slate-300 footer-link">About</Link>
              <Link to="/contact" className="text-base text-slate-300 footer-link">Contact</Link>
              <Link to="/faq" className="text-base text-slate-300 footer-link">FAQ</Link>
            </nav>
          </div>
          <div className="col-12 col-lg-3">
            <h4 className="text-metadata text-slate-500 mb-4">Connect</h4>
            <div className="d-flex gap-3">
              <a ref={(el) => (socialRefs.current[0] = el)} href="https://facebook.com/rosewoodcleaning" target="_blank" rel="noopener noreferrer" className="social-icon-dark" onMouseMove={(e) => handleSocialMove(e, 0)} onMouseLeave={() => handleSocialLeave(0)} aria-label="Visit us on Facebook">
                <Facebook size={20} className="text-slate-300" strokeWidth={1.5} />
              </a>
              <a ref={(el) => (socialRefs.current[1] = el)} href="https://instagram.com/rosewoodcleaningservices" target="_blank" rel="noopener noreferrer" className="social-icon-dark" onMouseMove={(e) => handleSocialMove(e, 1)} onMouseLeave={() => handleSocialLeave(1)} aria-label="Visit us on Instagram">
                <Instagram size={20} className="text-slate-300" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5 mt-md-6 pt-5 pt-md-6 border-top border-slate-800">
          <div className="col-12">
            <p className="text-sm text-slate-500 mb-0 text-center">© {currentYear} Rosewood Cleaning Services • Columbia, SC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;