"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Card = ({ title, description, index }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const currentCard = gsap.utils.selector(containerRef);

      gsap.fromTo(
        currentCard("h2"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: currentCard("h2"),
            start: "top bottom",
            scrub: false, // Disable scrubbing, so animation plays independently of scrolling
            once: true, // Optional: Makes sure the animation runs only once
            // markers: true,
          },
        },
      );

      gsap.fromTo(
        currentCard("p"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: currentCard("p"),
            start: "top+=-10px bottom",
            scrub: false,
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="card h-80 relative"
      id={`card-${index + 1}`}
    >
      <div className="card-inner relative will-change-transform w-full h-full ~p-4/8 flex gap-4">
        <div className="card-content basis-3/4">
          <h2 className="~text-3xl/7xl mb-8 tracking-tighter">{title}</h2>
          <p className="~text-sm/lg max-w-2xl">{description}</p>
        </div>
        <div className="card-img basis-1/4 aspect-video rounded-md overflow-hidden">
          <img src={`/assets/card-${index + 1}.jpg`} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
