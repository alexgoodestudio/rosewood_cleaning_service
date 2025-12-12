import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SideBarNav from "./SideBarNav";
import ServiceImage from "../Images/card3.png";

const ImageModule = () => (
  <div className="row">
    <div className="col-12 col-md-8 col-lg-7">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={ServiceImage}
          alt="One-Time Cleaning Service"
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
        One-Time Cleaning Service
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-600 leading-relaxed">
          Perfect for special occasions, seasonal refreshes, or giving your space a complete reset.
          Our comprehensive service delivers thorough cleaning using environmentally safe products,
          ensuring every corner sparkles while keeping your home healthy and safe.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-3">
      <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
        Eco-friendly products
      </span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
        Professional team
      </span>
      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
        Satisfaction guaranteed
      </span>
    </div>
  </div>
);

const CTAModule = () => (
  <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
    <div className="max-w-2xl">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 cabinet">
        Ready for a spotless home?
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Book your one-time cleaning service today and experience the difference 
        professional cleaning makes. No contracts, no commitments — just exceptional results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="tel:8035096700"
          className="btn-service btn-service-red"
        >
          <span>Call Us</span>
          <ArrowRight size={16} />
        </a>
        <Link to="/contact" className="btn-service btn-service-purple">
          <span>Contact</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </div>
);

function OneTime() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main container with proper spacing following Self Aware methodology */}
      <div className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main content area - 9 columns on large screens */}
            <div className="lg:col-span-9 space-y-16">

              {/* Hero module */}
              <section className="content-module">
                <HeroModule />
              </section>

              {/* Image module */}
              <section className="content-module">
                <ImageModule />
              </section>

              {/* Call-to-action module */}
              <section className="content-module">
                <CTAModule />
              </section>

            </div>
            
            {/* Sidebar - 3 columns on large screens */}
            <div className="lg:col-span-3">
              <SideBarNav />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTime;