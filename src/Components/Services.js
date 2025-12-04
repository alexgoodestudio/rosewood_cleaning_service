import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image1 from "../Images/card3.png";
import Image2 from "../Images/card5.png";
import Image3 from "../Images/qwe.png";
import Image4 from "../Images/2.jpg";

const ExpandableService = ({ title, description, image, link, index, isExpanded, onExpand }) => {
  const contentRef = useRef(null);
  const serviceRef = useRef(null);
  const isInitialMount = useRef(true);

  useGSAP(() => {
    const content = contentRef.current;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(content, {
        opacity: isExpanded ? 1 : 0,
        height: isExpanded ? 'auto' : 0
      });
      return;
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(content, {
          height: 'auto',
          opacity: 1
        });
      } else {
        gsap.set(content, {
          height: 0,
          opacity: 0
        });
      }
      return;
    }

    if (isExpanded) {
      gsap.to(content, {
        height: 'auto',
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
    }
  }, { dependencies: [isExpanded], scope: serviceRef });

  return (
    <div
      ref={serviceRef}
      className={`expandable-service ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <button
        onClick={onExpand}
        className="service-trigger"
        aria-expanded={isExpanded}
        aria-controls={`service-content-${index}`}
        aria-label={isExpanded ? `Collapse ${title}` : `Expand ${title}`}
      >
        <span className={`service-indicator ${isExpanded ? 'active' : ''}`}></span>
        <span className="service-title text-5xl text-slate-900">{title}</span>
      </button>

      <div
        ref={contentRef}
        id={`service-content-${index}`}
        className="service-content"
      >
        <div className="service-inner">
          <div className="row">
            <div className="col-12 col-md-6 mb-5 mb-md-5">
              <div className="service-image-wrapper">
                <img
                  src={image}
                  alt={title}
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <p className="text-lg text-slate-600 mb-5">
                {description}
              </p>

              <a
                href={link}
                className="service-learn-more"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Services() {
  const [expandedService, setExpandedService] = useState(0);

  const handleNext = () => {
    setExpandedService((prev) => (prev + 1) %4);
  };

  const handlePrev = () => {
    setExpandedService((prev) => (prev - 1 + 4) % 4);
  };

  const serviceData = [
    {
      title: "One-Time Clean",
      description: "A one-off cleaning service using eco-friendly products for a sparkling, healthy home. Perfect for special occasions, seasonal deep cleans, or whenever you need a fresh start.",
      image: Image1,
      link: "/services/onetime",
    },
        {
      title: "Recurring Service",
      description: "Regular cleaning schedules tailored to your needs. Weekly, bi-weekly, or monthly options available to keep your home consistently fresh. We Also serve AirBnB Hosts!",
      image: Image3,
      link: "/services/recurring",
    },
    {
      title: "Moving Clean",
      description: "Cleaning for your new or old space, ensuring it's move-in ready. We handle every detail so you can focus on your transition.",
      image: Image2,
      link: "/services/moving",
    },
    {
      title: "Laundry Service",
      description: "Let us handle your laundry so you don't have to. We'll wash, dry, fold, and have everything ready for you. Good for busy weeks when the pile just keeps growing or when you'd rather spend your time doing literally anything else.",
      image: Image4,
      link: "/services/laundry",
    },

  ];

  return (
    <section className="bg-white py-16 position-relative">
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-8">
            <h2 className="text-5xl font-semibold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-slate-600">
              Explore our range of cleaning services designed to keep your home healthy and spotless.
            </p>
          </div>
        </div>

        <div className="services-carousel-wrapper">
          <button
            onClick={handlePrev}
            className="service-nav-button service-nav-prev"
            aria-label="Previous service"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <div className="expandable-services-wrapper">
            {serviceData.map((service, index) => (
              <ExpandableService
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
                index={index}
                isExpanded={expandedService === index}
                onExpand={() => setExpandedService(index)}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="service-nav-button service-nav-next"
            aria-label="Next service"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
