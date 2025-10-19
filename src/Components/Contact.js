import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";

function Contact() {
 

  return (
    <section className="bg-slate-100 vh-50 text-center">
      <div class="vh-50 d-flex align-items-center justify-content-center text-center">
      <div className="container">
            <div className="py-5">
              <h2 className=" text-4xl mb-4">Interested in our services?</h2>
              <p className=" text-lg mx-auto  col-lg-8 col-11  text-slate-700 mb-5 ">
                Rosewood Cleaning Services would love to work with you! Get in touch today and we will reach out with next steps about a quote, booking an appointment and more. Currently servicing Columbia, SC and surrounding areas.
              </p>
              
            </div>
<Link to="/contact">
  <button className="btn-contact py-3 px-5 mb-5 inline-flex items-center gap-2">
    Contact Us
    <ArrowUpRight 
      size={18} 
      strokeWidth={1.5} 
    />
  </button>
</Link>
      </div>
      </div>
    </section>
  );
}

export default Contact;