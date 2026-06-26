"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WipeRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnScroll?: boolean;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onRevealEnd?: () => void;
  [key: string]: unknown;
}

export default function WipeReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  triggerOnScroll = true,
  as: Component = "div",
  onRevealEnd,
  ...rest
}: WipeRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReduced) {
      gsap.set(el, { clearProps: "all" });
      onRevealEnd?.();
      return;
    }

    const ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        el,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          onComplete: () => onRevealEnd?.(),
        }
      );

      if (triggerOnScroll) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          animation: anim,
        });
      }
    });

    return () => ctx.revert();
  }, [delay, duration, triggerOnScroll, isReduced]);

  return (
    <Component ref={ref} className={className} style={{ opacity: isReduced ? 1 : undefined }} {...rest}>
      {children}
    </Component>
  );
}
