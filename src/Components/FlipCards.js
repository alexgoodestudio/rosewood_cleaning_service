// import { useRef } from "react";
// import { gsap } from "gsap";
// import "../Style.css";

// function FlipCards() {
//   const row1Ref = useRef();
//   const row2Ref = useRef();
//   const row3Ref = useRef(); 

//   const handleHover = (rowRef, hover) => {
//     const cards = rowRef.current.querySelectorAll(".flip-card");
//     gsap.to(cards, {
//       rotateX: hover ? 180 : 0,
//       duration: 0.7,
//       ease: "power2.inOut",
//     });
//   };

//   return (
//     <div className="vh-100 mission-body bg-white text-slate-900">
//       <h2 className="text-slate-900 tex-center text-8xl mb-5 mt-5">How We Differ from the Rest</h2>
//       {/* Row 1: Creativity + Technology */}
//       <div
//         className="flip-row mb-4 flip-container row1"
//         ref={row1Ref}
//         onMouseEnter={() => handleHover(row1Ref, true)}
//         onMouseLeave={() => handleHover(row1Ref, false)}
//       >
//         <div className="flip-card card-1 col-4 br">
//           <div className="front br">Creativity</div>
//           <div className="back br">We craft modern web designs that inspire and connect with people.</div>
//         </div>
//         <div className="flip-card card-2 col-8 br">
//           <div className="front br">Technology</div>
//           <div className="back br">From front-end GSAP animations to full-stack solutions, we make ideas come alive online.</div>
//         </div>
//       </div>

//       {/* Row 2: Strategy + Experience */}
//       <div
//         className="flip-row mb-4 flip-container row2"
//         ref={row2Ref}
//         onMouseEnter={() => handleHover(row2Ref, true)}
//         onMouseLeave={() => handleHover(row2Ref, false)}
//       >
//         <div className="flip-card card-2 col-8 br">
//           <div className="front br">Strategy</div>
//           <div className="back br">We align design and technology with purpose—helping brands to grow their digital presence.</div>
//         </div>
//         <div className="flip-card card-1 col-4 br">
//           <div className="front br">Experience</div>
//           <div className="back br">Every project blends usability, storytelling, and seamless interaction.</div>
//         </div>
//       </div>

//       {/* Row 3: Vision + Growth */}
//       <div
//         className="flip-row mb-4 flip-container row3"
//         ref={row3Ref}
//         onMouseEnter={() => handleHover(row3Ref, true)}
//         onMouseLeave={() => handleHover(row3Ref, false)}
//       >
//         <div className="flip-card card-1 col-4 br">
//           <div className="front br">Vision</div>
//           <div className="back br">We see the web as a canvas—merging design and code to create something lasting.</div>
//         </div>
//         <div className="flip-card card-2 col-8 br">
//           <div className="front br">Growth</div>
//           <div className="back br">We help brands not only launch—but thrive—with thoughtful digital design.</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlipCards;



// ===== Flip Container =====
// .flip-container {
//   perspective: 900px; /* subtle, natural depth */
// }

// /* ===== Flip Rows ===== */
// .flip-row {
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 1rem; /* spacing between rows */
// }

// /* ===== Flip Cards ===== */
// .flip-card {
//   position: relative;
//   flex: 1;
//   height: 120px;
//   transform-style: preserve-3d;
//   cursor: pointer;
// }

// /* Front and Back Faces */
// .flip-card .front,
// .flip-card .back {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   border-radius: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   backface-visibility: hidden;
//   font-weight: bold;
//   font-size: 1.2rem;
//   color: #000;
//   transition: background-color 0.3s;
// }

// /* Back face rotation */
// .flip-card .back {
//   transform: rotateX(180deg);
// }

// /* ===== Row 1: Creativity + Technology ===== */
// .row1 .card-1 .front {
//   background-color: #f3f5ff;
// }
// .row1 .card-1 .back {
//   background-color: #E2B23F;
// }
// .row1 .card-2 .front {
//   background-color: #E2B23F;
// }
// .row1 .card-2 .back {
//   background-color: #f3f5ff;
// }

// /* ===== Row 2: Strategy + Experience ===== */
// .row2 .card-1 .front {
//   background-color: #f3f5ff;
// }
// .row2 .card-1 .back {
//   background-color: #E2B23F;
//   color: white;
// }
// .row2 .card-2 .front {
//   background-color: #E2B23F;
//   color: white;
// }
// .row2 .card-2 .back {
//   background-color: #f3f5ff;
// }

// /* ===== Row 3: Vision + Growth ===== */
// .row3 .card-1 .front {
//   background-color: #f3f5ff;
// }
// .row3 .card-1 .back {
//   background-color: #E2B23F;
// }
// .row3 .card-2 .front {
//   background-color: #E2B23F;
// }
// .row3 .card-2 .back {
//   background-color: #f3f5ff;
// }