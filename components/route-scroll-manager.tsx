"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function resetScrollPosition() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const frame = window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  const timer = window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  }, 120);

  return () => {
    window.cancelAnimationFrame(frame);
    window.clearTimeout(timer);
    root.style.scrollBehavior = previousScrollBehavior;
  };
}

export function RouteScrollManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (window.location.hash) {
      isFirstRender.current = false;
      return;
    }

    if (isFirstRender.current) {
      const navigationEntry = performance.getEntriesByType("navigation")[0];

      if (
        navigationEntry &&
        "type" in navigationEntry &&
        navigationEntry.type === "back_forward"
      ) {
        isFirstRender.current = false;
        return;
      }
    }

    isFirstRender.current = false;
    return resetScrollPosition();
  }, [pathname]);

  return null;
}
