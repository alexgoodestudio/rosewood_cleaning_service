import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div className="border rounded-lg shadow-sm mb-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 transition"
      >
        {title}
        <span className="ml-2">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen p-4 bg-white" : "max-h-0"
        }`}
      >
        {isOpen && children}
      </div>
    </div>
  );
}

function Accordion_Services() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      <h2 className="text-4xl font-semibold mb-4 text-center">Our Services</h2>

      {/* One-Time Clean */}
      <AccordionItem
        title="One-Time Clean"
        isOpen={open === 0}
        onClick={() => toggle(0)}
      >
        <div className="flex flex-col md:flex-row gap-4 items-start">

          <div>
            <p className="text-gray-700 mb-3">
              A thorough, one-off cleaning service using eco-friendly products
              for a sparkling, healthy home.
            </p>
            <Link to="/onetime" className="btn btn-outline-secondary">
              Book One-Time Clean
            </Link>
          </div>
        </div>
      </AccordionItem>

      {/* Move In / Out Cleaning */}
      <AccordionItem
        title="Move In / Out Cleaning"
        isOpen={open === 1}
        onClick={() => toggle(1)}
      >
        <div className="flex flex-col md:flex-row gap-4 items-start">

          <div>
            <p className="text-gray-700 mb-3">
              Comprehensive cleaning for hassle-free moving, ensuring your new
              or old space is immaculate.
            </p>
            <Link to="/moving" className="btn btn-outline-secondary">
              Schedule Moving Clean
            </Link>
          </div>
        </div>
      </AccordionItem>

      {/* Recurring Service */}
      <AccordionItem
        title="Recurring Service"
        isOpen={open === 2}
        onClick={() => toggle(2)}
      >
        <div className="flex flex-col md:flex-row gap-4 items-start">

          <div>
            <p className="text-gray-700 mb-3">
              Regular cleaning schedules tailored to your needs, maintaining
              cleanliness with eco-safe products.
            </p>
            <Link to="/recurring" className="btn btn-outline-secondary">
              Set Up Recurring Service
            </Link>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}

export default Accordion_Services;
