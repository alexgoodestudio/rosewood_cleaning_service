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
  const [submitStatus, setSubmitStatus] = useState(null);

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.15
      });

      gsap.from('.form-container', {
        y: 60,
        opacity: 0,
        duration: MOTION.slow,
        ease: 'power3.out',
        delay: 0.25
      });

      gsap.from('.info-item', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.35
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('sending');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="row justify-content-center" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
          <div className="col-lg-10 col-xl-9">
            <div className="text-center" style={{ marginBottom: '6rem' }}>
              <h1 className="hero-title text-4xl text-slate-900 mb-3">
                hello.
              </h1>
              <p className="hero-subtitle text-lg text-slate-600" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                Ready to experience a cleaner, more organized space? We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="row g-5">
              <div className="col-lg-7 mb-lg-5 mb-0">
                <div className="form-container">
                  {submitStatus === 'success' && (
                    <div className="success-message text-center" style={{ 
                      padding: '3rem 2rem',
                      backgroundColor: '#f8faf9',
                      borderRadius: '8px',
                      marginBottom: '2rem'
                    }}>
                      <div className="text-2xl text-slate-900 mb-2">Message Sent</div>
                      <p className="text-base text-slate-600">
                        We'll get back to you within one business day. Check your inbox for a confirmation.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message" style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '6px',
                      marginBottom: '2rem'
                    }}>
                      <p className="text-sm text-red-700 mb-0">
                        Something went wrong. Please try again or email us directly at hello@rosewoodcleaning.com
                      </p>
                    </div>
                  )}

                  <form 
                    name="contact" 
                    method="POST" 
                    netlify
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="d-none">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="name" className="text-sm text-slate-700" style={{ 
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <div id="name-error" className="text-xs text-red-600" style={{ marginTop: '0.5rem' }}>
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="email" className="text-sm text-slate-700" style={{ 
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <div id="email-error" className="text-xs text-red-600" style={{ marginTop: '0.5rem' }}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="phone" className="text-sm text-slate-700" style={{ 
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(803) 555-0123"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <div id="phone-error" className="text-xs text-red-600" style={{ marginTop: '0.5rem' }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="service" className="text-sm text-slate-700" style={{ 
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Service Interest
                      </label>
                      <select
                        className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        aria-describedby={errors.service ? "service-error" : undefined}
                      >
                        <option value="">Select a service</option>
                        <option value="onetime">One Time Cleaning</option>
                        <option value="recurring">Recurring Service</option>
                        <option value="moving">Moving Clean</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      {errors.service && (
                        <div id="service-error" className="text-xs text-red-600" style={{ marginTop: '0.5rem' }}>
                          {errors.service}
                        </div>
                      )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="message" className="text-sm text-slate-700" style={{ 
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                      }}>
                        Message <span className="text-slate-500">(Optional)</span>
                      </label>
                      <textarea
                        className="form-control"
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
                      className="btn-primary w-100"
                      disabled={submitStatus === 'sending'}
                      style={{
                        padding: '0.875rem 2rem',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        opacity: submitStatus === 'sending' ? 0.6 : 1,
                        cursor: submitStatus === 'sending' ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="contact-info">
                  <div className="text-xs text-slate-500 mb-4" style={{ 
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Contact Information
                  </div>
                  
                  <div className="info-item" style={{ 
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <div className="text-xs text-slate-500 mb-1" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      Service Area
                    </div>
                    <div className="text-base text-slate-900">Columbia, South Carolina</div>
                    <div className="text-sm text-slate-600" style={{ marginTop: '0.25rem' }}>
                      Within 20 miles of downtown
                    </div>
                  </div>

                  <div className="info-item" style={{ 
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <div className="text-xs text-slate-500 mb-1" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      Email
                    </div>
                    <a 
                      href="mailto:hello@rosewoodcleaning.com" 
                      className="text-base text-slate-900"
                      style={{ 
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      hello@rosewoodcleaning.com
                    </a>
                    <div className="text-sm text-slate-600" style={{ marginTop: '0.25rem' }}>
                      Response within 24 hours
                    </div>
                  </div>

                  <div className="info-item" style={{ 
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <div className="text-xs text-slate-500 mb-1" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      Phone
                    </div>
                    <a 
                      href="tel:+18035550123" 
                      className="text-base text-slate-900"
                      style={{ 
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      (803) 555-0123
                    </a>
                    <div className="text-sm text-slate-600" style={{ marginTop: '0.25rem' }}>
                      Call or text, we're here to help
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="text-xs text-slate-500 mb-2" style={{ 
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}>
                      Availability
                    </div>
                    <div className="text-sm text-slate-700" style={{ marginBottom: '0.5rem' }}>
                      Monday - Friday: 8am - 6pm
                    </div>
                    <div className="text-sm text-slate-700" style={{ marginBottom: '0.5rem' }}>
                      Saturday: 9am - 4pm
                    </div>
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