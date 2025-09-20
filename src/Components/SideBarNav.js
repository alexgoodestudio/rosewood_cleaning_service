import { Link, useLocation } from "react-router-dom";

function SideBarNav() {
  const location = useLocation();

  const services = [
    { 
      path: "/onetime", 
      name: "One Time Cleaning",
      icon: "✨",
      description: "Perfect for special occasions"
    },
    { 
      path: "/recurring", 
      name: "Recurring Cleaning",
      icon: "🔄",
      description: "Weekly, bi-weekly, or monthly"
    },
    { 
      path: "/moving", 
      name: "Moving Cleaning",
      icon: "📦",
      description: "Moving in or out assistance"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Our Services
        </h4>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
      </div>
      
      <nav className="space-y-2">
        {services.map((service) => {
          const isActive = location.pathname === service.path;
          
          return (
            <Link 
              key={service.path}
              to={service.path} 
              className={`
                group relative block no-underline px-4 py-4 rounded-lg transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md transform scale-105' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:transform hover:scale-102'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span className={`text-xl transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {service.icon}
                </span>
                <div className="flex-1">
                  <div className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>
                    {service.name}
                  </div>
                  <div className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                    {service.description}
                  </div>
                </div>
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                </div>
              )}
              
              {/* Hover effect line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </Link>
          );
        })}
      </nav>
      
    </div>
  );
}

export default SideBarNav;