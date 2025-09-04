
import Form from "./Form.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-5 text-center bg-gray-900 text-gray-50 ">
 
      <section className="mb-3">
        <div className="row text-center">
           <div className="col-lg-1 col-12"></div>
          <div className="col-lg-2 col-12">
     <Form/>
          </div>
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-2 col-12 ">
            <div className="row mb-3">One Time</div>
            <div className="row mb-3">Contact</div>
            

          </div>
          <div className="col-lg-2 col-12">
            <div className="row mb-3">Recurring</div>
            <div className="row mb-3">About Us</div>
            

          </div>
          <div className="col-lg-2 col-12">
            <div className="row mb-3">Moving</div>
            <div className="row mb-3">FAQ</div>
    

          </div>
          <div className="col-lg-1 col-12"></div>
        </div>
      </section>
      <p className="text-center p-3 text-xs mt-5 py-3">
        © {currentYear} <span className="px-1">•</span>  Rosewood Cleaning Services <span className="px-1">•</span>  Columbia, South Carolina
      </p>
    </div>
  );
}

export default Footer;
