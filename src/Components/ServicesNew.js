import { useRef } from "react";
import { Sparkles, Home, RotateCcw, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image1 from "../Images/card3.png";
import Image2 from "../Images/card5.png";
import Image3 from "../Images/qwe.png";

const MOTION = {
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
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
        </div>
        
        <div className="service-content bg-white">
          <h3 className="text-2xl text-slate-900 mb-2">
            {service.title}
          </h3>
          
          <p className="text-md text-slate-600 mb-4">
            {service.description}
          </p>
          
          <div className="service-cta border px-5 py-3 hover:bg-slate-950 group">
            <span className="text-button text-slate-900 group-hover:text-white">LEARN MORE</span>
            <ArrowUpRight size={18} className="text-slate-700 group-hover:text-white group-hover:rotate-45" strokeWidth={1.5} />
          </div>
        </div>
      </a>
    </article>
  );
}

function MobileServiceCard({ service, index }) {
  const cardRef = useRef();
  const imageRef = useRef();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const card = cardRef.current;
    const image = imageRef.current;

    const handleTouchStart = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: MOTION.quick,
        ease: "power2.out"
      });
    };

    const handleTouchEnd = () => {
      gsap.to(image, {
        scale: 1,
        duration: MOTION.smooth,
        ease: "power2.inOut"
      });
    };

    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchend', handleTouchEnd);

    return () => {
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <article ref={cardRef} className="mobile-service-card" data-index={index}>
      <a href={service.link} className="service-card-link">
        <div className="service-image-container">
          <img
            ref={imageRef}
            src={service.image}
            alt=""
            className="service-image"
            loading="lazy"
          />
        </div>

        <div className="service-content bg-white">
          <h3 className="text-2xl text-slate-900 mb-2">
            {service.title}
          </h3>

          <p className="text-md text-slate-600 mb-4">
            {service.description}
          </p>

          <div className="service-cta border px-5 py-3 hover:bg-slate-950 group">
            <span className="text-button text-slate-900 group-hover:text-white">LEARN MORE</span>
            <ArrowUpRight size={18} className="text-slate-700 group-hover:text-white group-hover:rotate-45" strokeWidth={1.5} />
          </div>
        </div>
      </a>
    </article>
  );
}

function ServicesNew() {
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
      title: "Moving In / Out Clean",
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

  return (
    <section className="bg-white mb-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="text-5xl font-semibold text-slate-900 mb-3">
              Our Services
            </h2>
            <p className=" text-slate-600">
              Explore our range of eco-friendly cleaning services designed to keep your home spotless and healthy.
            </p>
          </div>
        </div>

        <div className="row g-4 d-none d-md-flex ">
          {serviceData.map((service, index) => (
            <div key={index} className="col-lg-4 ">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        <div className="d-md-none mobile-services-grid">
          {serviceData.map((service, index) => (
            <MobileServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesNew;