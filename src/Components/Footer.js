
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-5 text-center ">
      <section className="mb-3">
        <div className="row">
          <div className="col-lg-3 col-12">


          </div>
          <div className="col-lg-3 col-12">
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>

          </div>
          <div className="col-lg-3 col-12">
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>

          </div>
          <div className="col-lg-3 col-12">
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>
            <div className="row mb-3"> Hello</div>

          </div>
        </div>
      </section>
      <p className="text-center p-3">
        © {currentYear} | Rosewood Cleaning Services
      </p>
    </div>
  );
}

export default Footer;
