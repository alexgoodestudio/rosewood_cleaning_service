import SideBarNav from "./SideBarNav";
import { Link } from 'react-router-dom';


const HeroModule = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h1 className="text-5xl font-semibold tracking-tight leading-tight text-slate-900">
        Recurring Cleaning Services
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-600 leading-relaxed">
          Our Recurring Cleaning service offers weekly, bi-weekly, or monthly cleaning schedules to fit your lifestyle.
          Designed for those who desire continual cleanliness and order in their homes, this service includes regular
          cleaning tasks ensuring your home remains a consistently clean and healthy environment using eco-friendly products.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-6 text-sm text-slate-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
        <span>Weekly, bi-weekly, or monthly</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
        <span>Customizable frequency</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
        <span>Consistent maintenance</span>
      </div>
    </div>
  </div>
);

const CTAModule = () => (
  <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
    <div className="max-w-2xl">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
        Ready for consistent cleanliness?
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Schedule your recurring cleaning service today and enjoy the peace of mind that comes
        with a consistently clean home. Choose your frequency and let us handle the rest.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="tel:8035096700" 
          className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors text-center"
        >
          Call
        </a>
<Link to="/contact">
  <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
    Contact
  </button>
</Link>
      </div>
    </div>
  </div>
);

function Recurring() {
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

export default Recurring;