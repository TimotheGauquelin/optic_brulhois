"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  icon: string;
  title: string;
  short_description?: string;
}

interface AnimatedServiceGridProps {
  services: Array<{
    id: string;
    icon?: string;
    title: string;
    short_description?: string;
  }>;
}

export default function AnimatedServiceGrid({ services }: AnimatedServiceGridProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = gridRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 300);
            });
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
  }, [services.length]);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex transition-all duration-500 ${
            visibleCards[index]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: visibleCards[index] ? `${index * 300}ms` : "0ms",
          }}
        >
          <ServiceCard
            icon={service.icon ?? ""}
            title={service.title ?? ""}
            short_description={service.short_description ?? "Découvrez ce service"}
            url={`/services#${service.id}`}
          />
        </div>
      ))}
    </div>
  );
}

