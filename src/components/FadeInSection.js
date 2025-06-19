"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, direction = "up" }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Tentukan class animasi
  let animationClass = "";
  switch (direction) {
    case "left":
      animationClass = "animate-fadeInLeft";
      break;
    case "right":
      animationClass = "animate-fadeInRight";
      break;
    case "down":
      animationClass = "animate-fadeInDown";
      break;
    case "up":
    default:
      animationClass = "animate-fadeInUp";
  }

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? `opacity-100 ${animationClass}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
