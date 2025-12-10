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
  {
    name: "Sarah M.",
    text: "Saved me so much stress before my parents visited. Kitchen looked brand new and they even got the grout in the bathroom. Worth every penny.",
    location: "Columbia, SC"
  },
  {
    name: "Marcus T.",
    text: "I was skeptical but wow. Showed up on time, super respectful, and left everything spotless. My apartment hasn't looked this good since I moved in.",
    location: "Forest Acres"
  },
  {
    name: "Jennifer L.",
    text: "Got my full deposit back! They're thorough and don't rush.",
    location: "Shandon"
  },
  {
    name: "David K.",
    text: "Professional and actually listened when I mentioned the baseboards needed extra attention. Came prepared with all their own supplies.",
    location: "Rosewood"
  },
  {
    name: "Amanda R.",
    text: "Two dogs and a toddler make everything chaotic. Having them bi-weekly has been a game changer. I actually relax on weekends now instead of cleaning all Saturday.",
    location: "Columbia, SC"
  },
  {
    name: "Chris B.",
    text: "Fair pricing, no upselling. Just honest work.",
    location: "Irmo"
  },
  {
    name: "Rachel P.",
    text: "I have bad allergies and they use eco-friendly products that don't trigger anything. Really careful around my cat too.",
    location: "West Columbia"
  },
  {
    name: "Kevin H.",
    text: "Deep clean after kitchen reno. Got all the dust I missed, even cleaned inside cabinets without asking.",
    location: "Columbia, SC"
  },
];

const reviewsRow2 = [
  {
    name: "Maria S.",
    text: "They clean my Airbnb between guests. Always perfect. Guests mention it in their reviews.",
    location: "Downtown Columbia"
  },
  {
    name: "Tyler W.",
    text: "I'm terrible at cleaning bathrooms. Having them monthly keeps my place from becoming a disaster. Plus they're friendly and don't judge my mess lol.",
    location: "Cayce"
  },
  {
    name: "Lisa Chen",
    text: "Deep clean before Thanksgiving. My mother-in-law actually complimented the house, which never happens. Money well spent.",
    location: "Columbia, SC"
  },
  {
    name: "Brandon M.",
    text: "Fit me in last minute when family came to town. Showed up early, worked fast, didn't cut corners.",
    location: "Lexington"
  },
  {
    name: "Nicole D.",
    text: "The attention to detail impressed me. Cleaned areas I didn't think about like light switches and door handles.",
    location: "Forest Acres"
  },
  {
    name: "James R.",
    text: "Six months in, always consistent. Same quality every time.",
    location: "Columbia, SC"
  },
  {
    name: "Emma K.",
    text: "Nervous about someone in my apartment while at work but they were trustworthy. Nothing out of place, just super clean when I got home.",
    location: "Shandon"
  },
  {
    name: "Alex G.",
    text: "Great communication. Confirmed appointment, showed up on time, followed up after to make sure I was happy.",
    location: "Columbia, SC"
  },
];

function StarRating({ stars = 5 }) {
  return (
    <div className="mt-1" style={{ color: '#f59e0b' }}>
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
      className="min-w-[360px] max-w-[360px] shadow-md rounded-2xl py-4 px-5 text-base text-gray-700 border border-gray-200"
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
    <div className="space-y-12 bg-white pb-3 py-lg-5 pt-5">
      <h2 className="text-3xl font-semibold mb-3 mb-md-5 container font-mono">Loved By Our Customers 💘</h2>

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
