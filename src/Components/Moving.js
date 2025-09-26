import React from 'react';
import SideBarNav from "./SideBarNav";

const HeroModule = () => (
  <div className="space-y-8">
    <div className="space-y-6">
      <h1 className="text-6xl font-semibold tracking-tight leading-tight text-slate-900">
        Moving Cleaning Services
      </h1>
      <div className="max-w-2xl">
        <p className="text-lg text-slate-600 leading-relaxed">
          Our Moving In and Out Cleaning services are tailored for those transitioning to a new home or 
          vacating an old one. This service ensures that your new space is pristine and welcoming or that 
          your previous home is left in impeccable condition, focusing on areas often overlooked during regular cleaning.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap gap-6 text-sm text-slate-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
        <span>Move-in ready cleaning</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
        <span>Move-out deep clean</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
        <span>Deposit return assistance</span>
      </div>
    </div>
  </div>
);

const CTAModule = () => (
  <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
    <div className="max-w-2xl">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
        Moving made easier?
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Let us handle the cleaning while you focus on settling in or moving out. 
        Our thorough service ensures a stress-free transition and helps secure deposit returns.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
          Call
        </button>
        <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
          Contact
        </button>
      </div>
    </div>
  </div>
);

function Moving() {
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

export default Moving;
