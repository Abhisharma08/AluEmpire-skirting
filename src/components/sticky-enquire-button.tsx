"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StickyEnquireButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    const section = document.getElementById("lead-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const servicesSection = document.getElementById("solutions");
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(servicesSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 pt-12 bg-gradient-to-t from-background/90 via-background/60 to-transparent md:hidden transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <Button
        size="lg"
        onClick={handleClick}
        className="w-full shadow-lg animate-glow"
        tabIndex={isVisible ? 0 : -1}
      >
        Get a Free Quote
      </Button>
    </div>
  );
}
