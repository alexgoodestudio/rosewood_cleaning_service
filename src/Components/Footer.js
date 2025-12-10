import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 py-5">
      <div className="container py-md-6">
        <div className="row g-5 g-lg-6">
          <div className="col-12 col-md-6 col-lg-5">
            <Link to="/" className="d-inline-block mb-4 no-underline">
              <h3 className="text-3xl text-white mb-0 ">Rosewood Cleaning</h3>
            </Link>
            <p className="text-base tracking-wide text-slate-400 mb-4 pe-lg-5">Own your free time. Let us handle the cleaning stuff.</p>
            <p className="text-sm text-slate-500">Columbia, South Carolina</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-sm text-slate-500 mb-4">Services</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/services/onetime" className="text-base text-slate-300 footer-link">One Time Cleaning</Link>
              <Link to="/services/recurring" className="text-base text-slate-300 footer-link">Recurring Service</Link>
              <Link to="/services/moving" className="text-base text-slate-300 footer-link">Moving Clean</Link>
              <Link to="/services/laundry" className="text-base text-slate-300 footer-link">Laundry Service</Link>
            </nav>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="text-sm text-slate-500 mb-4">Company</h4>
            <nav className="d-flex flex-column gap-3">
              <Link to="/about" className="text-base text-slate-300 footer-link">About</Link>
              <Link to="/contact" className="text-base text-slate-300 footer-link">Contact</Link>
              <Link to="/faq" className="text-base text-slate-300 footer-link">FAQ</Link>
            </nav>
          </div>
          <div className="col-12 col-lg-3">
            <h4 className="text-sm text-slate-500 mb-4">Connect</h4>
            <nav className="d-flex flex-column gap-3">
              <a href="https://facebook.com/rosewoodcleaning" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link">Facebook</a>
              <a href="https://instagram.com/rosewoodcleaningservices" target="_blank" rel="noopener noreferrer" className="text-base text-slate-300 footer-link">Instagram</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5 mt-md-6">
        <div className="pt-5 pt-md-6 border-top border-slate-800">
          <p className="text-sm text-slate-500 mb-0 text-center">© {currentYear} Rosewood Cleaning Services • Columbia, SC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;