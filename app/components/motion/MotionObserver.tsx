"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-ambient]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.visible = "true";
        element.dataset.inView = "true";
      });
      return;
    }

    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          element.dataset.inView = entry.isIntersecting ? "true" : "false";
          if (entry.isIntersecting) element.dataset.visible = "true";
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
