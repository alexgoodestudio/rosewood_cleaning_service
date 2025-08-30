import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const reviewsRow1 = [
  "Rosewood left my apartment sparkling clean!",
  "Fast, reliable, and super friendly staff.",
  "Honestly the most stress-free cleaning I’ve ever had.",
  "They got every detail — even places I didn’t notice!",
  "Affordable and worth every penny.",
  "My home feels brand new. Highly recommend.",
  "Professional, punctual, and thorough work.",
  "Best cleaning service in the city.",
];

const reviewsRow2 = [
  "Scheduling was simple and hassle-free.",
  "The team showed up right on time.",
  "My carpets haven’t looked this good in years.",
  "They went above and beyond expectations.",
  "Customer support was responsive and kind.",
  "Truly a five-star experience.",
  "Every corner was spotless after they left.",
  "I’ll definitely be booking again.",
];

// Pastel Tailwind color classes
const pastelColors = [
  "bg-red-100",
  "bg-pink-100",
  "bg-purple-100",
  "bg-indigo-100",
  "bg-blue-100",
  "bg-cyan-100",
  "bg-teal-100",
  "bg-green-100",
  "bg-lime-100",
  "bg-yellow-100",
  "bg-amber-100",
  "bg-orange-100",
  "bg-rose-100",
];

function ReviewMarquee() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    const row1Width = row1.scrollWidth / 2;
    const row2Width = row2.scrollWidth / 2;

    // Row 1 - scroll left
    gsap.fromTo(
      row1,
      { x: 0 },
      {
        x: -row1Width,
        duration: 25,
        repeat: -1,
        ease: "linear",
      }
    );

    // Row 2 - scroll right
    gsap.fromTo(
      row2,
      { x: -row2Width },
      {
        x: 0,
        duration: 25,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div className="space-y-12 bg-white py-12">
      <h1>Loved by our customers</h1>
      {/* Row 1 */}
      <div className="overflow-hidden">
        <div ref={row1Ref} className="flex gap-6">
          {[...reviewsRow1, ...reviewsRow1].map((text, i) => (
            <div
              key={`row1-${i}`}
              className={`min-w-[260px] shadow-md rounded-2xl p-5 text-base text-gray-700 ${
                pastelColors[i % pastelColors.length]
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden">
        <div ref={row2Ref} className="flex gap-6">
          {[...reviewsRow2, ...reviewsRow2].map((text, i) => (
            <div
              key={`row2-${i}`}
              className={`min-w-[260px] shadow-md rounded-2xl p-5 text-base text-gray-800 ${
                pastelColors[(i + 5) % pastelColors.length] // offset so rows don’t match exactly
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewMarquee;
