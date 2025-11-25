import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="container">
        
        <div className="row">
          <div className="col-12 col-lg-12">
            
            {/* 70/30 Split */}
            <div className="row align-items-start">
              
              {/* Left: Main CTA - 70% */}
              <div className="col-12 col-lg-7 mb-5 mb-lg-0 pe-lg-6">
                
                <div className="mb-4">
                  <span className="text-metadata text-slate-500">
                    Book a Clean
                  </span>
                </div>

                <h2 className="text-5xl font-bold text-slate-900 mb-5" style={{ lineHeight: '1.1' }}>
                  Let's talk about your home
                </h2>
                
                <p className="text-xl text-slate-600 mb-6" style={{ lineHeight: '1.6', maxWidth: '560px' }}>
                  Fill out our contact form and we'll get back to you within 24 hours—usually same day.
                </p>

                <p className="text-base text-slate-700 mb-6" style={{ lineHeight: '1.6', maxWidth: '560px' }}>
                  We'll ask about your square footage, how often you're thinking (weekly, biweekly, or one-time), and any rooms that need extra attention. Takes about 10 minutes on the phone.
                </p>

                <a 
                  href="/contact" 
                  className="btn-custom-dark"
                >
                  Send a Message
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </a>
              </div>

              {/* Right: Practical info - 30% */}
              <div className="col-12 col-lg-5">
                
                {/* Pricing */}
                <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #e7e5e4' }}>
                  <p className="text-metadata text-slate-500 mb-3">
                    Pricing
                  </p>
                  <p className="text-lg text-slate-900 font-semibold mb-2">
                    $120–$180 per clean
                  </p>
                  <p className="text-sm text-slate-600 mb-0" style={{ lineHeight: '1.6' }}>
                    Depends on square footage and frequency. We'll give you an exact quote after we talk about your home.
                  </p>
                </div>


                {/* What to have ready */}
                <div>
                  <p className="text-metadata text-slate-500 mb-3">
                    Have Ready When You Call
                  </p>
                  <p className="text-sm text-slate-700 mb-0" style={{ lineHeight: '1.6' }}>
                    Approximate square footage • Whether you have stairs • Number of bathrooms 
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;