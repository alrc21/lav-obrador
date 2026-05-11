"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Read the user's motion preference lazily so we don't trigger an effect-only setState.
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Lazy initializer — runs once on mount, no effect needed for the initial read.
  const [reduced, setReduced] = useState<boolean>(prefersReducedMotion);
  const [visible, setVisible] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => {
      setReduced(e.matches);
      if (e.matches) setVisible(true);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      style={
        reduced
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 500ms cubic-bezier(0, 0, 0.2, 1) ${delay}ms, transform 500ms cubic-bezier(0, 0, 0.2, 1) ${delay}ms`,
            }
      }
      className={className}
    >
      {children}
    </div>
  );
}
