import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Home, RotateCcw, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image1 from "../Images/card3.png";
import Image2 from "../Images/card5.png";
import Image3 from "../Images/qwe.png";
import "../Style.css";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function AccordionItem({ title, subtitle, description, link, isOpen, onClick, icon: Icon }) {
  return (
    <div className="accordion-item-custom mb-3 d-md-none">
      <button
        onClick={onClick}
        className="accordion-button-custom"
        aria-expanded={isOpen}
        aria-label={`${title} - ${subtitle}`}
      >
        <div className="d-flex align-items-center">
          <div className="accordion-icon-container">
            <Icon className="text-slate-700" size={20} />
          </div>
          <div>
            <h3 className="text-lg text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-600 mb-0">{subtitle}</p>
          </div>
        </div>
        <span className="accordion-toggle">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`accordion-content ${isOpen ? "is-open" : ""}`}>
        <div className="accordion-body">
          <p className="text-md text-slate-700 mb-4">{description}</p>
          <Link to={link} className="btn-custom-dark">
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServicesNew() {
  const [open, setOpen] = useState(null);
  const headingRef = useRef();
  const cardsRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const serviceData = [
    {
      title: "One-Time Clean",
      subtitle: "Perfect for a quick refresh",
      image: Image1,
      icon: Sparkles,
      description:
        "A thorough, one-off cleaning service using eco-friendly products for a sparkling, healthy home.",
      link: "/onetime",
    },
    {
      title: "Move In / Out Cleaning",
      subtitle: "Hassle-free moving",
      image: Image2,
      icon: Home,
      description:
        "Comprehensive cleaning for your new or old space, ensuring it's immaculate and move-in ready.",
      link: "/moving",
    },
    {
      title: "Recurring Service",
      subtitle: "Keep your home consistently clean",
      image: Image3,
      icon: RotateCcw,
      description:
        "Regular cleaning schedules tailored to your needs, maintaining cleanliness with eco-safe products.",
      link: "/recurring",
    },
  ];

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([headingRef.current, ".service-card"], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        once: true
      }
    });

    tl.fromTo(headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.smooth,
        ease: "power2.out"
      }
    );

    tl.fromTo(".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.smooth,
        stagger: 0.08,
        ease: "power2.out"
      },
      "-=0.2"
    );
  }, []);

  return (
    <section className="bg-white">
      <div className="container py-5 px-4 px-lg-5">
        <h2 
          ref={headingRef}
          className="text-5xl text-slate-900 mb-5"
        >
          Services
        </h2>

        {/* Desktop Cards */}
        <div ref={cardsRef} className="row g-4 d-none d-md-flex">
          {serviceData.map((service, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="service-card card-modern">
                <div className="card-image-wrapper">
                  <img
                    src={service.image}
                    className="card-image"
                    alt={service.subtitle}
                    loading="lazy"
                  />
                  <div className="card-icon-overlay">
                    <service.icon className="text-slate-700" size={24} />
                  </div>
                </div>
                <div className="card-body-modern">
                  <h3 className="text-xl text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-md text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <Link to={service.link} className="btn-custom-dark">
                    <span>Get Started</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="d-md-none">
          {serviceData.map((service, idx) => (
            <AccordionItem
              key={idx}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={service.icon}
              link={service.link}
              isOpen={open === idx}
              onClick={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesNew;