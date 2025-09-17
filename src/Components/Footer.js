function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-5 text-center bg-gray-900 text-gray-50">
      <section className="mb-3">
        <div className="row text-center">

          <div className="col-lg-3 col-0"></div>

          <div className="col-lg-2 col-4 py-lg-0 pb-3 px-5 text-start">
            <h5 className="bold mb-2 text-gray-500">Services</h5>
            <div className="mb-2 text-sm">One Time</div>
            <div className="mb-2 text-sm">Recurring</div>
            <div className="mb-2 text-sm">Moving</div>
            
          </div>

          <div className="col-lg-2 col-4 py-lg-0 pb-3 px-5 text-start">
            <h5 className="bold mb-2 text-gray-500">Info</h5>
            
            <div className="mb-2 text-sm">About Us</div>
            <div className="mb-2 text-sm">Contact</div>
  
          </div>

          <div className="col-lg-2 col-4 py-lg-0 pb-3 px-5 text-start">
            <h5 className="bold mb-2 text-gray-500">Socials</h5>
            <div className="mb-2 text-sm">Facebook</div>
            <div className="mb-2 text-sm">Instagram</div>
          </div>

          <div className="col-lg-3 col-4"></div>
        </div>
      </section>

      <p className="text-center px-2 text-xs mt-5 py-3">
        © {currentYear} <span className="px-1">•</span> Rosewood Cleaning
        <span className="px-1">•</span> Columbia, South Carolina
      </p>
    </div>
  );
}

export default Footer;
