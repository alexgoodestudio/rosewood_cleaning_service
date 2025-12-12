import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

function SideBarNav() {
  const location = useLocation();

  const services = [
    {
      path: "/services/onetime",
      name: "One Time Cleaning",
      color: "red"
    },
    {
      path: "/services/recurring",
      name: "Recurring Cleaning",
      color: "lime"
    },
    {
      path: "/services/moving",
      name: "Moving Cleaning",
      color: "purple"
    },
    {
      path: "/services/laundry",
      name: "Laundry Service",
      color: "indigo"
    }
  ];

  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-2xl font-semibold mb-6 tracking-tight cabinet text-slate-900">
          Services
        </h3>
        <nav className="space-y-0">
          {services.map((service, index) => {
            const isActive = location.pathname === service.path;

            return (
              <Link
                key={service.path}
                to={service.path}
                className={`flex items-center justify-between py-3 transition-all no-underline group ${
                  index !== services.length - 1 ? 'border-b border-slate-200' : ''
                }`}
              >
                <span className={`text-base ${isActive ? 'font-semibold text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                  {service.name}
                </span>
                <ArrowRight
                  size={16}
                  className={`transition-transform ${isActive ? 'translate-x-1 text-slate-900' : 'text-slate-600 group-hover:text-slate-900 group-hover:translate-x-1'}`}
                  strokeWidth={isActive ? 2 : 1.5}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default SideBarNav;