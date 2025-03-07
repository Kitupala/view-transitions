"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

import Image from "next/image";

const Info = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(".info p", {
        types: "lines",
        tagName: "div",
        linesClass: "line",
      });

      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".info p .line span", { y: 400, display: "block" });

      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        delay: 0.25,
        stagger: 0.075,
        ease: "power4.out",
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="info w-screen h-full min-h-svh flex">
      <div className="col">
        <Image
          src="/assets/andrey-zvyagintsev.jpg"
          alt="Photo by Andrey Zvyagintsev"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col">
        <p className="~text-lg/2xl prose prose-invert prose-lg prose-slate">
          Kaelon is a talented portrait photographer who specializes in
          capturing emotions and telling unique stories through his lens. His
          keen eye for detail and creative approach make every photograph a work
          of art.
        </p>
      </div>
    </div>
  );
};

export default Info;
