import { Link, useLocation } from "react-router-dom";

function SideBarNav() {
  const location = useLocation();

  const services = [
    {
      path: "/services/onetime",
      name: "One Time Cleaning"
    },
    {
      path: "/services/recurring",
      name: "Recurring Cleaning"
    },
    {
      path: "/services/moving",
      name: "Moving Cleaning"
    },
    {
      path: "/services/laundry",
      name: "Laundry Service"
    }
  ];

  return (
    <div className="sticky top-8">
      <div className="bg-stone-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 tracking-tight">Services</h3>
        <nav className="space-y-3">
          {services.map((service) => {
            const isActive = location.pathname === service.path;
            
            return (
              <Link 
                key={service.path}
                to={service.path} 
                className={`block text-sm transition-colors ${
                  isActive 
                    ? 'text-slate-900 font-medium' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {service.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default SideBarNav;