"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      const isCurrentPage =
        destination.origin === window.location.origin &&
        destination.pathname === window.location.pathname &&
        !destination.hash;

      if (!isCurrentPage) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => window.scrollTo(0, 0));
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useLayoutEffect(() => {
    // Preserve deliberate section links such as /work#mech-hevan.
    if (window.location.hash) return;

    window.scrollTo(0, 0);

    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => window.scrollTo(0, 0));
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  return null;
}
