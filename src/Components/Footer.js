import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.footer-column', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    }
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-50 py-5">
      <div className="container">
        <div className="footer-content row justify-content-center py-5">
          <div className="footer-column col-lg-3 col-md-4 col-4 mb-4 mb-lg-0">
            <h5 className="text-base font-semibold mb-3 text-slate-400">Services</h5>
            <a href="/onetime" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">One Time Cleaning</a>
            <a href="/recurring" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">Recurring Service</a>
            <a href="/moving" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">Moving Clean</a>
          </div>

          <div className="footer-column col-lg-3 col-md-4 col-4 mb-4 mb-lg-0">
            <h5 className="text-base font-semibold mb-3 text-slate-400">Info</h5>
            <a href="/about" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">About Us</a>
            <a href="/contact" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">Contact</a>
            <a href="/faq" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">FAQ</a>
          </div>

          <div className="footer-column col-lg-3 col-md-4 col-4">
            <h5 className="text-base font-semibold mb-3 text-slate-400">Connect</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="d-block mb-2 text-sm text-slate-300 text-decoration-none transition-colors hover:text-slate-50">Instagram</a>
          </div>
        </div>

        <div className="border-top border-slate-800 pt-4 mt-5">
          <p className="text-center text-xs text-slate-400 mb-0">
            © {currentYear} Rosewood Cleaning · Columbia, South Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;