"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationType?: "fadeInUp" | "fadeInScale" | "slideInFromLeft" | "slideInFromRight" | "fadeIn";
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  animationType = "fadeInUp",
}: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = imageRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case "fadeIn":
        return "animate-fade-in";
      case "fadeInScale":
        return "animate-fade-in-scale";
      case "slideInFromLeft":
        return "animate-slide-in-left";
      case "slideInFromRight":
        return "animate-slide-in-right";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={imageRef}
      className={`${className} ${isVisible ? getAnimationClass() : "opacity-0"}`}
    >
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-full object-cover rounded-md" />
    </div>
  );
}

