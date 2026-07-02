"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

type ScrollContextValue = {
  scrollY: number;
};

const ScrollContext = createContext<ScrollContextValue>({ scrollY: 0 });

export function useScrollY() {
  return useContext(ScrollContext).scrollY;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
    });

    lenis.on("scroll", ({ scroll }) => {
      setScrollY(scroll);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
}
