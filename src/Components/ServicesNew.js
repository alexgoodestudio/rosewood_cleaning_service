import { useState, useRef } from "react";
import { Sparkles, Home, RotateCcw, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image1 from "../Images/card3.png";
import Image2 from "../Images/card5.png";
import Image3 from "../Images/qwe.png";

gsap.registerPlugin(ScrollTrigger);

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function ServiceCard({ service, index }) {
  const cardRef = useRef();
  const imageRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: MOTION.slow,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: MOTION.smooth,
        ease: "power2.inOut"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <article ref={cardRef} className="service-card-modern" data-index={index}>
      <a href={service.link} className="service-card-link">
        <div className="service-image-container">
          <img
            ref={imageRef}
            src={service.image}
            alt=""
            className="service-image"
            loading="lazy"
          />
          <div className="service-icon-badge">
            <service.icon className="text-slate-700" size={20} strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="service-content">
          <div className="service-metadata">
            <span className="text-xs text-slate-500 tracking-wider uppercase">
              {service.category}
            </span>
          </div>
          
          <h3 className="text-2xl text-slate-900 mb-2">
            {service.title}
          </h3>
          
          <p className="text-md text-slate-600 mb-4">
            {service.description}
          </p>
          
          <div className="service-cta">
            <span className="text-button text-slate-900">Explore Service</span>
            <ArrowUpRight size={18} className="text-slate-700" strokeWidth={1.5} />
          </div>
        </div>
      </a>
    </article>
  );
}

function MobileServiceItem({ service, isExpanded, onToggle }) {
  const contentRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    if (isExpanded) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: MOTION.quick,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: MOTION.quick,
        ease: "power2.in"
      });
    }
  }, [isExpanded]);

  return (
    <div className="mobile-service-item">
      <button
        onClick={onToggle}
        className="mobile-service-header"
        aria-expanded={isExpanded}
      >
        <div className="d-flex align-items-center gap-3">
          <div className="mobile-icon-container">
            <service.icon size={18} className="text-slate-700" strokeWidth={1.5} />
          </div>
          <div className="text-start">
            <h3 className="text-lg text-slate-900 mb-0">{service.title}</h3>
            <p className="text-xs text-slate-500 mb-0 mt-1">{service.category}</p>
          </div>
        </div>
        <div className="mobile-toggle-icon">
          {isExpanded ? "−" : "+"}
        </div>
      </button>
      
      <div ref={contentRef} className="mobile-service-content">
        <p className="text-md text-slate-700 mb-4">
          {service.description}
        </p>
        <a href={service.link} className="mobile-service-link">
          <span className="text-button">Get Started</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

function ServicesNew() {
  const [expandedMobile, setExpandedMobile] = useState(null);
  const sectionRef = useRef();
  const headingRef = useRef();
  const subtitleRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const serviceData = [
    {
      title: "One-Time Clean",
      category: "Deep Cleaning",
      image: Image1,
      icon: Sparkles,
      description: "A thorough, one-off cleaning service using eco-friendly products for a sparkling, healthy home.",
      link: "/onetime",
    },
    {
      title: "Move In / Out",
      category: "Transition Service",
      image: Image2,
      icon: Home,
      description: "Comprehensive cleaning for your new or old space, ensuring it's immaculate and move-in ready.",
      link: "/moving",
    },
    {
      title: "Recurring Service",
      category: "Ongoing Care",
      image: Image3,
      icon: RotateCcw,
      description: "Regular cleaning schedules tailored to your needs, maintaining cleanliness with eco-safe products.",
      link: "/recurring",
    },
  ];

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set([headingRef.current, subtitleRef.current, ".service-card-modern"], { 
        opacity: 1, 
        y: 0 
      });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
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
    )
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: MOTION.smooth,
        ease: "power2.out"
      },
      "-=0.3"
    )
    .fromTo(".service-card-modern",
      { y: 50, opacity: 0 },
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
    <section ref={sectionRef} className="bg-white">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 ref={headingRef} className="text-6xl text-slate-900 mb-3">
              Services
            </h2>
            <p ref={subtitleRef} className="text-lg text-slate-600">
              Professional cleaning solutions designed around your life
            </p>
          </div>
        </div>

        <div className="row g-4 d-none d-md-flex">
          {serviceData.map((service, index) => (
            <div key={index} className="col-lg-4">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        <div className="d-md-none">
          {serviceData.map((service, index) => (
            <MobileServiceItem
              key={index}
              service={service}
              isExpanded={expandedMobile === index}
              onToggle={() => setExpandedMobile(expandedMobile === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesNew;