import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Form from "./Form";

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

function Contact() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useGSAP(() => {
    if (!prefersReducedMotion) {
      gsap.from('.contact-heading', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      gsap.from('.contact-description', {
        y: 20,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.1
      });

      gsap.from('.contact-form', {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out',
        delay: 0.2
      });
    }
  }, []);

  return (
    <section className="bg-indigo-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="py-5 py-md-6">
              <h2 className="contact-heading text-5xl mb-4">Contact</h2>
              <p className="contact-description text-lg text-slate-700 mb-5">
                Get in touch today and we will reach out for next steps about a quote, booking an appointment and more.
              </p>
              <div className="contact-form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;