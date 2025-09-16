import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../Images/card3.png"
import Image2 from "../Images/card5.png"
import Image3 from "../Images/qwe.png"
import "../Style.css";

function AccordionItem({ title, subtitle, description, link, isOpen, onClick }) {
  return (
    <div className="border rounded-lg shadow-sm mb-2 d-md-none">
      
      <button
        onClick={onClick}
        className="w-100 text-start p-3 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
      >
        <div>
          <h3 className="mb-1 font-semibold">{title}</h3>
          <small className="text-gray-600">{subtitle}</small>
        </div>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen p-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 mb-2">{description}</p>
        <Link to={link} className="btn btn-outline-secondary w-100">
          Visit
        </Link>
      </div>
    </div>
  );
}

function Services() {
  const [open, setOpen] = useState(null);

  const serviceData = [
    {
      title: "One-Time Clean",
      subtitle: "Perfect for a quick refresh",
      image: Image1,
      description:
        "A thorough, one-off cleaning service using eco-friendly products for a sparkling, healthy home.",
      link: "/onetime",
    },
    {
      title: "Move In / Out Cleaning",
      subtitle: "Hassle-free moving",
      image: Image2,
      description:
        "Comprehensive cleaning for your new or old space, ensuring it’s immaculate and move-in ready.",
      link: "/moving",
    },
    {
      title: "Recurring Service",
      subtitle: "Keep your home consistently clean",
      image: Image3,
      description:
        "Regular cleaning schedules tailored to your needs, maintaining cleanliness with eco-safe products.",
      link: "/recurring",
    },
  ];

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="bg-white container py-5 px-4 services-container">
      <h2 className="text-gray-800 text-start text-4xl mb-5">Our Services</h2>

      {/* Desktop Cards */}
      <div className="row g-4 d-none d-md-flex">
        {serviceData.map((service, idx) => (
          <div key={idx} className="col-lg-4 col-md-6">
            <div className="rounded-2xl shadow-md overflow-hidden flex flex-col h-full text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg card-animate">
              <img
                src={service.image}
                className="card-img-top object-cover w-full h-48"
                alt={service.subtitle}
              />
              <div className="card-body p-5 flex-grow-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="card-footer p-3">
                <Link
                  to={service.link}
                  className="btn btn-outline-secondary w-50 p-2 text-center"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="d-md-none mb-5">
        {serviceData.map((service, idx) => (
          <AccordionItem
            key={idx}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            link={service.link}
            isOpen={open === idx}
            onClick={() => toggle(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
