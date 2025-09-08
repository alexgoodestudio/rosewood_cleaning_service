function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-5 text-center bg-gray-900 text-gray-50">
      <section className="mb-3">
        <div className="row text-center">
          <div className="col-lg-3 col-12"></div>



         

          <div className="col-lg-2 col-12 py-lg-0 pb-3 text-center">
            <h5 className="bold">Services</h5>
            <div className="mb-3 text-sm">One Time</div>
            <div className="mb-3 text-sm">Recurring</div>
            <div className="mb-3 text-sm">Moving</div>
            
          </div>

          <div className="col-lg-2 col-12 py-lg-0 pb-3 text-center">
            <h5 className="bold">Info</h5>
            
            <div className="mb-3 text-sm">About Us</div>
            <div className="mb-3 text-sm">Contact</div>
            <div className="mb-3 text-sm">FAQ</div>
          </div>

          <div className="col-lg-2 col-12 py-lg-0 pb-3 text-center">
            <h5 className="bold">Socials</h5>
            <div className="mb-3 text-sm">Facebook</div>
          </div>

          <div className="col-lg-3 col-12"></div>
        </div>
      </section>

      <p className="text-center p-3 text-xs mt-5 py-3">
        © {currentYear} <span className="px-1">•</span> Rosewood Cleaning
        Services <span className="px-1">•</span> Columbia, South Carolina
      </p>
    </div>
  );
}

export default Footer;
