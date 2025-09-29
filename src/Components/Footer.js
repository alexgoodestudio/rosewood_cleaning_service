import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MOTION = {
  smooth: 0.5
};

function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.footer-column', {
        y: 20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="container">
        <div className="footer-content row py-5">
          
          <div className="footer-column col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h2 className="text-xl font-bold mb-2 text-slate-50 tracking-tight">Rosewood Cleaning</h2>
            <p className="text-md text-slate-400 mb-3 pe-lg-4">Let us handle the cleaning stuff while you focus on what matters.</p>
            <p className="text-sm text-slate-500 mb-0">Columbia, South Carolina</p>
          </div>

          <div className="footer-column col-6 col-lg-2 col-md-3 mb-4 mb-lg-0">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Services</h3>
            <nav className="d-flex flex-column gap-2">
              <a href="/onetime" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">One Time Cleaning</a>
              <a href="/recurring" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Recurring Service</a>
              <a href="/moving" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Moving Clean</a>
            </nav>
          </div>

          <div className="footer-column col-6 col-lg-2 col-md-3 mb-4 mb-lg-0">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Company</h3>
            <nav className="d-flex flex-column gap-2">
              <a href="/about" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">About</a>
              <a href="/contact" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Contact</a>
              <a href="/faq" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">FAQ</a>
            </nav>
          </div>

          <div className="footer-column col-lg-4 col-md-12">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Connect</h3>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-top border-slate-800 py-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="text-xs text-slate-500 mb-0">© {currentYear} Rosewood Cleaning Services</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-xs text-slate-500 mb-0">Columbia, SC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;