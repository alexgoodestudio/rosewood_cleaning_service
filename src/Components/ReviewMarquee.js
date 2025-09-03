import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Utility to create initials
function getInitials(name) {
  const parts = name.split(" ");
  return parts.map((p) => p[0]).join("").toUpperCase();
}

// Pastel background palette
const pastelBgColors = [
  "bg-red-200",
  "bg-pink-200",
  "bg-purple-200",
  "bg-indigo-200",
  "bg-blue-200",
  "bg-cyan-200",
  "bg-teal-200",
  "bg-green-200",
  "bg-lime-200",
  "bg-yellow-200",
  "bg-amber-200",
  "bg-orange-200",
  "bg-rose-200",
];

// Deterministic color: same name → same color every render
function getColorForName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return pastelBgColors[Math.abs(hash) % pastelBgColors.length];
}

// Custom Avatar
function Avatar({ name }) {
  const initials = getInitials(name);
  const color = getColorForName(name);

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 ${color}`}
    >
      {initials}
    </div>
  );
}

const reviewsRow1 = [
  { name: "Emily R.", text: "Rosewood left my apartment looking spotless. Even my friends noticed how clean it was!" },
  { name: "James K.", text: "Fast, reliable, and the crew was super friendly. Didn’t waste any time." },
  { name: "Sophia L.", text: "Honestly the most stress-free cleaning I’ve ever had. I didn’t have to lift a finger." },
  { name: "Michael B.", text: "They caught details I didn’t even notice myself. Way more thorough than I expected." },
  { name: "Olivia P.", text: "Affordable and definitely worth it. My place feels so much fresher now." },
  { name: "Daniel S.", text: "My apartment feels brand new again. I’d recommend them to anyone." },
  { name: "Ava T.", text: "Professional, punctual, and they didn’t cut corners. Really impressed." },
  { name: "Liam W.", text: "Hands down the best cleaning service I’ve used in the city." },
];

const reviewsRow2 = [
  { name: "Charlotte H.", text: "Booking was super easy online and I got the time I wanted." },
  { name: "Ethan M.", text: "The team showed up exactly when they said they would—rare these days!" },
  { name: "Mia G.", text: "My carpets haven’t looked this fresh in years. Huge difference." },
  { name: "Noah J.", text: "They really went above and beyond. Even organized a bit for me." },
  { name: "Isabella F.", text: "Customer service replied quickly and was genuinely helpful." },
  { name: "Lucas C.", text: "Start to finish, it was a five-star experience." },
  { name: "Amelia D.", text: "Every corner was spotless. Even the baseboards were clean." },
  { name: "Logan V.", text: "I’ll definitely be booking them again. Worth every dollar." },
];

function StarRating({ stars = 5 }) {
  return (
    <div className="text-yellow-400 mt-1">
      {"★".repeat(stars)}{" "}
      <span className="text-gray-400 text-sm">{"/5"}</span>
    </div>
  );
}

function ReviewMarquee() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    const row1Width = row1.scrollWidth / 2;
    const row2Width = row2.scrollWidth / 2;

    gsap.fromTo(row1, { x: 0 }, { x: -row1Width, duration: 25, repeat: -1, ease: "linear" });
    gsap.fromTo(row2, { x: -row2Width }, { x: 0, duration: 25, repeat: -1, ease: "linear" });
  }, []);

  const renderReview = (review, i) => (
    <div
      key={i}
      className="min-w-[260px] shadow-md rounded-2xl py-5 px-3 text-base text-gray-700 border border-gray-200"
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-2">
        <Avatar name={review.name} />
        <div className="font-semibold">{review.name}</div>
      </div>

      {/* Review text */}
      <div className="mt-1">{review.text}</div>
      <StarRating />
    </div>
  );

  return (
    <div className="space-y-12 bg-white py-12">
      <h1 className="text-xl font-semibold ms-5">Loved By Our Customers</h1>

      {/* Row 1 */}
      <div className="overflow-hidden">
        <div ref={row1Ref} className="flex gap-6">
          {[...reviewsRow1, ...reviewsRow1].map((review, i) => renderReview(review, `row1-${i}`))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden">
        <div ref={row2Ref} className="flex gap-6">
          {[...reviewsRow2, ...reviewsRow2].map((review, i) => renderReview(review, `row2-${i}`))}
        </div>
      </div>
    </div>
  );
}

export default ReviewMarquee;
