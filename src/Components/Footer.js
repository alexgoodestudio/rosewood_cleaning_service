import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="container">
        <div className=" row py-5">
          
          <div className="footer-column col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h2 className="text-xl font-bold mb-2 text-slate-50 tracking-tight">Rosewood Cleaning</h2>
            <p className="text-md text-slate-400 mb-3 pe-lg-4">Let us handle the cleaning stuff while you focus on what matters.</p>
            <p className="text-sm text-slate-500 mb-0">Columbia, South Carolina</p>
          </div>

          <div className="footer-column col-6 col-lg-2 col-md-3 mb-4 mb-lg-0">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Services</h3>
            <nav className="d-flex flex-column gap-2">
              <Link to="/onetime" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">One Time Cleaning</Link>
              <Link to="/recurring" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Recurring Service</Link>
              <Link to="/moving" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Moving Clean</Link>
            </nav>
          </div>

          <div className="footer-column col-6 col-lg-2 col-md-3 mb-4 mb-lg-0">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Company</h3>
            <nav className="d-flex flex-column gap-2">
              <Link to="/about" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">About</Link>
              <Link to="/contact" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">Contact</Link>
              <Link to="/faq" className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 hover:translate-x-1">FAQ</Link>
            </nav>
          </div>

          <div className="footer-column col-lg-4 col-md-12">
            <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wide">Connect</h3>
            <div className="d-flex flex-column gap-3">
              <a 
                href="https://maderight.studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 d-flex align-items-center gap-2"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <a 
                href="https://maderight.studio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-slate-300 text-decoration-none transition-all hover:text-slate-50 d-flex align-items-center gap-2"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-top border-slate-800 py-3">
          <div className="row align-items-center">
            <div className="col-md-12 text-center  mb-2 mb-md-0">
              <p className="text-xs text-slate-500 mb-0">© {currentYear} Rosewood Cleaning Services • Columbia, SC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;