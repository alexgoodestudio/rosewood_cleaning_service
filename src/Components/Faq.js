import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

gsap.registerPlugin();

function FAQ() {
  const containerRef = useRef(null);

  // Animate whole FAQ section in
  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const faqs = [
    {
      q: "Do you have standard pricing?",
      a: "We don't have a one-size-fits-all pricing model because every home has unique needs. To ensure we provide a tailored service, we offer FREE estimates. Book yours today through the 'Contact' tab or email us at support@rosewoodcleaning.com."
    },
    {
      q: "Do you offer move-in/move-out cleaning?",
      a: "Yes! We provide move-in/out cleaning services to make your transition smoother. Head over to the Contact tab to schedule or request an estimate."
    },
    {
      q: "What’s your cancellation policy?",
      a: "Please provide a 48-hour notice for cancellations or rescheduling by emailing support@rosewoodcleaning.com. If you need to cancel within 48 hours, call or text (804) 482-0516."
    },
    {
      q: "How can I contact you?",
      a: "You can email support@rosewoodcleaning.com for assistance."
    },
    {
      q: "Do you provide holiday cleaning services?",
      a: "Yes! Hosting a holiday gathering? Let us handle the cleaning. Email support@rosewoodcleaning.com to book holiday cleaning services."
    },
    {
      q: "Can you remove pet hair from my home?",
      a: "Absolutely! Our cleaning services include pet hair removal from furniture and floors to keep your home clean and allergen-free."
    },
    {
      q: "Do you offer deep cleaning?",
      a: "Yes, our Deep Clean service provides a meticulous and thorough approach for spaces that need extra care."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit cards, debit cards, and digital payments. Contact us for details."
    },
    {
      q: "Do you offer recurring cleaning services?",
      a: "Yes! We offer weekly, bi-weekly, or monthly recurring cleaning to keep your home consistently fresh."
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Columbia, South Carolina, and surrounding areas."
    }
  ];

  const [open, setOpen] = useState("");

  const toggle = (id) => {
    const isOpen = open === id ? "" : id;
    setOpen(isOpen);

    // Animate answer body
    gsap.fromTo(
      `.answer-${id}`,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  };

  return (
    <div ref={containerRef} className="container py-16">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">Common Questions</h1>

      <Accordion open={open} toggle={toggle}>
        {faqs.map((item, i) => {
          const id = `${i}`;
          return (
            <AccordionItem key={id} className="mb-3 border-b border-gray-300">
              <AccordionHeader targetId={id} className="flex items-center justify-between text-2xl font-semibold text-gray-900">
                {item.q}
              </AccordionHeader>
              <AccordionBody accordionId={id} className={`answer-${id} text-lg text-gray-700`}>
                {item.a}
              </AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FAQ;
