import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useRef } from 'react';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function ContactPage() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const snowContainerRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // Snow animation
  useGSAP(() => {
    if (!prefersReducedMotion && snowContainerRef.current) {
      const container = snowContainerRef.current;
      const snowflakes = [];

      // Pale indigo, slate-900, and soft sky blue
      const colors = ['#c7d2fe', '#0f172a', '#bae6fd'];

      // Responsive count and size based on screen width
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 30 : 60;
      const size = isMobile ? 14 : 18;
      const maxOpacity = isMobile ? 0.6 : 0.85;

      for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.borderRadius = '50%';
        snowflake.style.position = 'absolute';
        snowflake.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        snowflake.style.opacity = 0; // Start invisible
        snowflake.style.pointerEvents = 'none';
        snowflake.style.left = `${Math.random() * 100}%`;

        container.appendChild(snowflake);
        snowflakes.push(snowflake);
      }

      snowflakes.forEach((flake) => {
        const duration = Math.random() * 6 + 9;
        const xMovement = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;

        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(flake,
          { y: -150 },
          {
            y: window.innerHeight + 50,
            x: xMovement,
            rotation: Math.random() * 60,
            duration: duration,
            ease: 'none',
            onUpdate: function() {
              // Only show circle when it's below y=50
              const currentY = gsap.getProperty(flake, 'y');
              if (currentY > 50) {
                gsap.set(flake, { opacity: maxOpacity });
              } else {
                gsap.set(flake, { opacity: 0 });
              }
            },
            onRepeat: () => {
              gsap.set(flake, {
                x: 0,
                opacity: 0,
                left: `${Math.random() * 100}%`
              });
            }
          }
        );

        // Start at random point in animation
        tl.progress(Math.random());
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


  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Snow Container */}
      <div
        ref={snowContainerRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-20 container mx-auto px-4">
        <div className="flex justify-center pt-24 pb-12">
          <div className="w-full max-w-5xl">
            <div className="text-start mb-24">
              <h1 className="hero-title text-9xl  text-slate-900 mb-3 apfel">
                Contact Us
              </h1>
              <p className="hero-subtitle text-start text-lg text-slate-600  mx-auto">
                Have questions or ready to book? We're here to help! Fill out the form below and we'll respond within one business day.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-24">
          <div className="w-full max-w-5xl">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="form-container bg-white relative z-10">
                  {submitStatus === 'success' && (
                    <div className="text-center p-12 bg-green-50 rounded-lg mb-8">
                      <div className="text-2xl font-semibold text-slate-900 mb-2">Message Sent</div>
                      <p className="text-base text-slate-600">
                        We'll get back to you within one business day. Check your inbox for a confirmation.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-5 bg-red-50 border border-red-200 rounded-md mb-8">
                      <p className="text-sm text-red-700 mb-0">
                        Something went wrong. Please try again or email us directly at hello@rosewoodcleaning.com
                      </p>
                    </div>
                  )}

                  <form 
                    name="contact" 
                    method="POST"
                    netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </div>

                    <div className="mb-8">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(803) 555-0123"
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message <span className="text-slate-500">(Optional)</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full bg-indigo-600 text-white py-3.5 px-8 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitStatus === 'sending'}
                  >
                    {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
           
                </div>
              </div>

              <div className="lg:col-span-5">
                <div>
                  <div className="text-xs text-slate-500 mb-6 uppercase tracking-wider">
                    Contact Information
                  </div>
                  
                  <div className="info-item mb-8 pb-8 border-b border-slate-200">
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                      Service Area
                    </div>
                    <div className="text-base font-medium text-slate-900">Columbia, South Carolina</div>
                    <div className="text-sm text-slate-600 mt-1">
                      Within 20 miles of downtown
                    </div>
                  </div>

                  <div className="info-item mb-8 pb-8 border-b border-slate-200">
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                      Email
                    </div>
                    <a 
                      href="mailto:hello@rosewoodcleaning.com" 
                      className="text-base font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      hello@rosewoodcleaning.com
                    </a>
                    <div className="text-sm text-slate-600 mt-1">
                      Response within 24 hours
                    </div>
                  </div>

                  <div className="info-item mb-8 pb-8 border-b border-slate-200">
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                      Phone
                    </div>
                    <a 
                      href="tel:+18035550123" 
                      className="text-base font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      (803) 555-0123
                    </a>
                    <div className="text-sm text-slate-600 mt-1">
                      Call or text, we're here to help
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="text-xs text-slate-500 mb-3 uppercase tracking-wide">
                      Availability
                    </div>
                    <div className="text-sm text-slate-700 mb-2">
                      Monday - Friday: 8am - 6pm
                    </div>
                    <div className="text-sm text-slate-700 mb-2">
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