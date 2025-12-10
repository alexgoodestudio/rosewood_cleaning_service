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
    text: "They cleaned my place before my parents visited and honestly saved me so much stress. The kitchen looked brand new and they even got the grout in the bathroom I'd been ignoring for months. Worth every penny.",
    location: "Columbia, SC"
  },
  {
    name: "Marcus T.",
    text: "I was skeptical about hiring cleaners but wow. They showed up right on time, were super respectful of my space, and left everything spotless. My apartment hasn't looked this good since I moved in.",
    location: "Forest Acres"
  },
  {
    name: "Jennifer L.",
    text: "Booked them for a move-out clean and my landlord was impressed. Got my full deposit back! They're thorough and don't rush through it.",
    location: "Shandon"
  },
  {
    name: "David K.",
    text: "The team was professional and actually listened when I mentioned the baseboards needed extra attention. They came prepared with all their own supplies which was a huge plus.",
    location: "Rosewood"
  },
  {
    name: "Amanda R.",
    text: "My house always feels chaotic with two dogs and a toddler. Having them come bi-weekly has been a game changer. I can actually relax on weekends now instead of spending Saturday cleaning.",
    location: "Columbia, SC"
  },
  {
    name: "Chris B.",
    text: "Fair pricing and they don't try to upsell you on stuff you don't need. Just good, honest work.",
    location: "Irmo"
  },
  {
    name: "Rachel P.",
    text: "I have bad allergies and they use eco-friendly products that don't trigger anything. Plus they were really careful around my cat who gets anxious with strangers.",
    location: "West Columbia"
  },
  {
    name: "Kevin H.",
    text: "Scheduled a deep clean after renovating our kitchen. They got all the dust and debris I missed. Even cleaned inside the cabinets without me asking.",
    location: "Columbia, SC"
  },
];

const reviewsRow2 = [
  {
    name: "Maria S.",
    text: "They cleaned my Airbnb between guests and it's always perfect. Guests have mentioned how clean everything is in their reviews. Reliable and consistent.",
    location: "Downtown Columbia"
  },
  {
    name: "Tyler W.",
    text: "I'm terrible at remembering to clean the bathrooms. Having them come monthly keeps my place from turning into a disaster. Plus they're friendly and don't judge my mess lol.",
    location: "Cayce"
  },
  {
    name: "Lisa Chen",
    text: "Used them for a one-time deep clean before hosting Thanksgiving. My mother-in-law actually complimented how clean the house was, which never happens. Money well spent.",
    location: "Columbia, SC"
  },
  {
    name: "Brandon M.",
    text: "They fit me in last minute when family was coming to town. Showed up early, worked fast, and didn't cut any corners. Highly recommend.",
    location: "Lexington"
  },
  {
    name: "Nicole D.",
    text: "The attention to detail is what impressed me most. They cleaned areas I didn't even think about like light switches and door handles.",
    location: "Forest Acres"
  },
  {
    name: "James R.",
    text: "Been using them for 6 months now and they're always consistent. Same quality every time.",
    location: "Columbia, SC"
  },
  {
    name: "Emma K.",
    text: "I was nervous about having someone in my apartment while I was at work but they were trustworthy and professional. Nothing out of place, just super clean when I got home.",
    location: "Shandon"
  },
  {
    name: "Alex G.",
    text: "Great communication from start to finish. They confirmed the appointment, showed up when they said they would, and followed up after to make sure I was happy with everything.",
    location: "Columbia, SC"
  },
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
    <div className="space-y-12 bg-white pt-0 pb-3 py-lg-5 pt-5">
      <h2 className="text-3xl font-semibold mb-3 mb-md-5 container">Loved By Our Customers</h2>

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
