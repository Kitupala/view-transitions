"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  const bounds = useRef({ top: 0, bottom: 0 });
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
    });
    lenisRef.current = lenis;

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(document.body);
    updateBounds();

    const animate = () => {
      if (!imageRef.current || !bounds.current) return;

      currentTranslateY.current = lerp(
        currentTranslateY.current,
        targetTranslateY.current,
        0.1,
      );

      imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
    };

    const onScroll = () => {
      const scrollY = lenisRef.current?.scroll || window.scrollY;
      targetTranslateY.current = (scrollY - bounds.current.top) * 0.2;
      animate();
    };

    lenis.on("scroll", onScroll);
    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      fill
      className="object-cover translate-y-0 scale-125 will-change-transform"
    />
  );
};

export default ParallaxImage;
