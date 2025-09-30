import { Link } from 'react-router-dom';



function Contact() {
 

  return (
    <section className="bg-slate-100 vh-50 text-center">
      <div class="vh-50 d-flex align-items-center justify-content-center text-center">
      <div className="container">
            <div className="py-5">
              <h2 className=" text-3xl mb-4">Interesting in our services?</h2>
              <p className=" text-lg text-slate-700 mb-5">
                Rosewood Cleaning Services would love to work with you! Get in touch today and we will reach out with next steps about a quote, booking an appointment and more. Currently servicing Columbia, SC and surrounding areas.
              </p>
              
            </div>
        <Link to="/contact">
          <button className="bg-slate-900 text-white py-3 px-4  rounded mb-5">
            Contact Us
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Contact;