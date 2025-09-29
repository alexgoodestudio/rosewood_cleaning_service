import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function ContactPage() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.contact-hero', {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      gsap.from('.contact-form-container', {
        y: 60,
        opacity: 0,
        duration: MOTION.slow,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.contact-info-item', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.3
      });
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Please share your name';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'We need your email to respond';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number helps us reach you quickly';
    }
    
    if (!formState.service) {
      newErrors.service = 'Let us know which service interests you';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10">
            <div className="contact-hero text-center mb-5 pb-4">
              <h1 className="text-fluid-display font-bold text-slate-900 mb-3">Let's talk</h1>
              <p className="text-xl text-slate-600">
                Ready to experience a cleaner space? We're here to help.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="contact-form-container">
                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="d-none">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="name" className="form-label text-sm font-semibold text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <div className="form-error text-xs mt-2">{errors.name}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-sm font-semibold text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className={`form-control form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <div className="form-error text-xs mt-2">{errors.email}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="form-label text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`form-control form-control-custom ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(803) 555-0123"
                      />
                      {errors.phone && (
                        <div className="form-error text-xs mt-2">{errors.phone}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="service" className="form-label text-sm font-semibold text-slate-700">
                        Service Interest
                      </label>
                      <select
                        className={`form-select form-control-custom ${errors.service ? 'is-invalid' : ''}`}
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="onetime">One Time Cleaning</option>
                        <option value="recurring">Recurring Service</option>
                        <option value="moving">Moving Clean</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      {errors.service && (
                        <div className="form-error text-xs mt-2">{errors.service}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label text-sm font-semibold text-slate-700">
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-custom"
                        id="message"
                        name="message"
                        rows="5"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your space and what you need"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="btn-contact-primary w-100"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="contact-info">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Get in Touch</h3>
                  
                  <div className="contact-info-item mb-4 pb-4 border-bottom border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Location</div>
                    <div className="text-base text-slate-900">Columbia, South Carolina</div>
                  </div>

                  <div className="contact-info-item mb-4 pb-4 border-bottom border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Email</div>
                    <a href="mailto:hello@rosewoodcleaning.com" className="text-base text-slate-900 text-decoration-none hover-link">
                      hello@rosewoodcleaning.com
                    </a>
                  </div>

                  <div className="contact-info-item mb-4 pb-4 border-bottom border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 mb-1">Phone</div>
                    <a href="tel:+18035550123" className="text-base text-slate-900 text-decoration-none hover-link">
                      (803) 555-0123
                    </a>
                  </div>

                  <div className="contact-info-item">
                    <div className="text-xs font-semibold text-slate-500 mb-3">Hours</div>
                    <div className="text-sm text-slate-700 mb-2">Monday - Friday: 8am - 6pm</div>
                    <div className="text-sm text-slate-700 mb-2">Saturday: 9am - 4pm</div>
                    <div className="text-sm text-slate-700">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;