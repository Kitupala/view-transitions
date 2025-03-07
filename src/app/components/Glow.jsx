"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export const GlowArea = ({
  size = 300,
  className,
  verticalExtension = 300,
  children,
  ...rest
}) => {
  const elementRef = useRef(null);
  const frameIdRef = useRef(null);
  const latestCoordsRef = useRef(null);
  const isTrackingRef = useRef(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Reset glow position off-screen
  const resetGlowPosition = () => {
    if (elementRef.current) {
      elementRef.current.style.setProperty("--glow-x", "-99999px");
      elementRef.current.style.setProperty("--glow-y", "-99999px");
    }
  };

  // Update glow effect
  const updateGlow = () => {
    if (latestCoordsRef.current && elementRef.current) {
      const { x, y } = latestCoordsRef.current;
      elementRef.current.style.setProperty("--glow-x", `${x}px`);
      elementRef.current.style.setProperty("--glow-y", `${y}px`);
      frameIdRef.current = null;
    }
  };

  // Check if mouse pointer is within target bounds
  const isMouseWithinBounds = (event, bounds) =>
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top - verticalExtension &&
    event.clientY <= bounds.bottom + verticalExtension;

  useEffect(() => {
    resetGlowPosition();

    const handleGlobalMouseMove = (event) => {
      if (!elementRef.current) return;

      const elementBounds = elementRef.current.getBoundingClientRect();
      const isWithinBounds = isMouseWithinBounds(event, elementBounds);

      if (isWithinBounds) {
        // Start tracking if not already
        if (!isTrackingRef.current) {
          isTrackingRef.current = true;
          setHasInteracted(true);
        }

        // Calculate constrained Y position
        const constrainedY = Math.max(
          -verticalExtension,
          Math.min(
            event.clientY - elementBounds.top,
            elementBounds.height + verticalExtension,
          ),
        );

        // Update tracked coordinates
        latestCoordsRef.current = {
          x: event.clientX - elementBounds.left,
          y: constrainedY,
        };

        // Schedule update if not already pending
        if (!frameIdRef.current) {
          frameIdRef.current = requestAnimationFrame(updateGlow);
        }
      } else if (isTrackingRef.current) {
        isTrackingRef.current = false;
        resetGlowPosition();
      }
    };

    const handleWindowLeave = () => {
      if (isTrackingRef.current) {
        isTrackingRef.current = false;
        resetGlowPosition();
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseleave", handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseleave", handleWindowLeave);

      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [verticalExtension]);

  const handleMouseMove = (event) => {
    if (!isTrackingRef.current) {
      isTrackingRef.current = true;
      setHasInteracted(true);
    }

    const elementBounds = event.currentTarget.getBoundingClientRect();
    latestCoordsRef.current = {
      x: event.clientX - elementBounds.left,
      y: event.clientY - elementBounds.top,
    };

    if (!frameIdRef.current) {
      frameIdRef.current = requestAnimationFrame(updateGlow);
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        position: "relative",
        "--glow-size": `${size}px`,
      }}
      onMouseMove={handleMouseMove}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};

GlowArea.displayName = "GlowArea";

export const Glow = ({
  className,
  color = "oklch(0.596 0.145 163.225)",
  children,
  ...rest
}) => {
  const element = useRef(null);

  useEffect(() => {
    element.current?.style.setProperty(
      "--glow-top",
      `${element.current?.offsetTop}px`,
    );
    element.current?.style.setProperty(
      "--glow-left",
      `${element.current?.offsetLeft}px`,
    );
  }, []);

  return (
    <div ref={element} className={clsx("relative", className)}>
      <div
        {...rest}
        style={{
          backgroundImage: `radial-gradient(
            var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
            calc(var(--glow-y, -99999px) - var(--glow-top, 0px)),
            ${color} 0%,
            transparent 100%
          )`,
        }}
        className={clsx(
          "absolute pointer-events-none inset-0 dark:mix-blend-lighten mix-blend-multiply after:content-[''] after:absolute after:bg-[#0a0a0ae5] after:inset-px after:rounded-[inherit]",
          className,
        )}
      ></div>
      {children}
    </div>
  );
};

Glow.displayName = "Glow";
