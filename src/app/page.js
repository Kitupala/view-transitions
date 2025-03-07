"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const heroText = new SplitType(".home h1", {
        types: "chars",
      });
      gsap.set(heroText.chars, { y: 400 });

      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.075,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="home w-full h-screen flex items-center justify-center text-center"
    >
      <h1 className="kerning-none">Kaelon</h1>
    </div>
  );
}
