"use client";

import Card from "@/app/components/Card";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const cards = [
  {
    title: "Photography Sessions",
    description:
      "Capture your most important moments with custom sessions tailored to your vision. From portraits to events, I'll create images that tell your story.",
  },
  {
    title: "Fine Art Prints",
    description:
      "Transform your space with museum-quality prints from my collection. Each piece is carefully produced to showcase vibrant colors and exceptional detail.",
  },
  {
    title: "Workshops",
    description:
      "Elevate your photography skills through personalized workshops. Learn techniques, composition, and editing to bring your creative vision to life.",
  },
  {
    title: "Premium Presets",
    description:
      "Achieve professional results with my curated preset collection. Transform your images instantly with tools I use in my own award-winning work.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cardElements = gsap.utils.toArray(".card");

      gsap.fromTo(
        ".intro h1",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.075,
          scrollTrigger: {
            trigger: ".intro",
            start: "top 35%",
          },
        },
      );

      if (cardElements.length > 0) {
        ScrollTrigger.create({
          trigger: cardElements[0],
          start: "top 35%",
          endTrigger: cardElements[cardElements.length - 1],
          end: "top 45%",
          pin: ".intro",
          pinSpacing: false,
        });

        cardElements.forEach((card, index) => {
          const cardInner = card.querySelector(".card-inner");

          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 55%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cardElements.length - index) * 18}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 25%",
              scrub: true,
            },
          });
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <section className="hero relative w-screen h-screen">
        <img
          src="/assets/hero-studio.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <h1 className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ~text-3xl/7xl tracking-tighter z-10">
          Transforming ordinary moments
        </h1>
      </section>

      <section className="intro relative w-screen h-screen p-8">
        <h1 className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ~text-3xl/7xl tracking-tighter z-10">
          into
          <span className="italic px-2 drop-shadow-xl">extraordinary</span> art
        </h1>
      </section>

      <section className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>

      <section className="flex items-center justify-center outro relative w-screen h-screen p-8">
        <h1 className="~text-3xl/7xl tracking-tighter p-8">
          Let's leave a mark.
        </h1>
      </section>
    </div>
  );
};
export default Services;
