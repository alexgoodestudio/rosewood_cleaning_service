import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="bg-stone-50 py-12 py-lg-20">
      <div className="container">

        <div className="row">
          <div className="col-12 col-lg-11 col-xl-10 mx-auto">

            {/* 70/30 Split */}
            <div className="row align-items-start g-5 g-lg-4">

              {/* Left: Main CTA - 70% */}
              <div className="col-12 col-lg-7 pe-lg-5">

                <div className="mb-4">
                  <span className="text-metadata text-slate-500">
                    Book a Clean
                  </span>
                </div>

                <h2 className="text-4xl text-lg-5xl font-bold text-slate-900 mb-5 mb-lg-6" style={{ lineHeight: '1.1' }}>
                  Let's talk about your home
                </h2>

                <p className="text-lg text-lg-xl text-slate-600 mb-5" style={{ lineHeight: '1.6' }}>
                  Fill out our contact form and we'll get back to you within 24 hours—usually same day.
                </p>

                <p className="text-base text-slate-700 mb-6 mb-lg-7" style={{ lineHeight: '1.7' }}>
                  We'll ask about your square footage, and any rooms that need extra attention.
                </p>

                <a href="/contact" className="btn-cta">
                  Message
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </a>
              </div>

              {/* Right: Practical info - 30% */}
              <div className="col-12 col-lg-5">

                {/* Pricing */}
                <div className="mb-7 pb-6 pb-lg-7" style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <p className="text-metadata text-slate-500 mb-3">
                    Pricing
                  </p>
                  <p className="text-lg text-lg-xl text-slate-900 font-semibold mb-3">
                    $120–$240 per clean
                  </p>
                  <p className="text-sm text-slate-600 mb-0" style={{ lineHeight: '1.7' }}>
                    Depends on square footage and frequency. We'll give you an exact quote after we talk about your home.
                  </p>
                </div>


                {/* What to have ready */}
                <div>
                  <p className="text-metadata text-slate-500 mb-3">
                    Have Ready When You Call
                  </p>
                  <p className="text-sm text-slate-700 mb-0" style={{ lineHeight: '1.7' }}>
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