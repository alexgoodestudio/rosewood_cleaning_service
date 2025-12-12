import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SideBarNav from "./SideBarNav";
import ServiceImage from "../Images/2.jpg";

const ImageModule = () => (
  <div className="row">
    <div className="col-12 col-md-8 col-lg-7">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={ServiceImage}
          alt="Laundry Service"
          className="w-100 h-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </div>
);

const HeroModule = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h1 className="text-5xl font-semibold tracking-tight leading-tight text-slate-900 cabinet">
        Laundry Services
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-600 leading-relaxed">
          Let us handle your laundry so you don't have to. We'll wash, dry, fold, and have everything
          ready for you using eco-friendly detergents. Perfect for busy weeks when the pile just keeps
          growing or when you'd rather spend your time doing literally anything else.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
        Wash, dry, and fold
      </span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
        Eco-friendly detergents
      </span>
      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
        Time-saving convenience
      </span>
    </div>
  </div>
);

const CTAModule = () => (
  <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
    <div className="max-w-2xl">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 cabinet">
        Ready to cross laundry off your to-do list?
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Schedule your laundry service today and reclaim your weekends. We'll pick up, clean,
        and deliver your laundry fresh and perfectly folded.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="tel:8035096700"
          className="btn-service btn-service-indigo"
        >
          <span>Call Us</span>
          <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn-service btn-service-lime">
          <span>Contact</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </div>
);

function LaundryService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container with proper spacing following Self Aware methodology */}
      <div className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main content area - 9 columns on large screens */}
            <div className="lg:col-span-9 space-y-16">
              <section className="content-module">
                <HeroModule />
              </section>

              {/* Image module */}
              <section className="content-module">
                <ImageModule />
              </section>

              <section className="content-module">
                <CTAModule />
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <SideBarNav />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LaundryService;
