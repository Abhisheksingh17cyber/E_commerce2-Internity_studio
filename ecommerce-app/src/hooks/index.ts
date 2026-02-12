"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrolled / scrollHeight);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isInView;
}

export function useParallax(speed: number = 0.5): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const yValue = -100 * speed;

    gsap.to(element, {
      y: yValue,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, [speed]);

  return ref;
}

export function useMagneticEffect(strength: number = 0.5): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

export function useScrollDirection(): "up" | "down" {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateDirection = () => {
      const scrollY = window.scrollY;
      setDirection(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", updateDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  return direction;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useWindowSize(): { width: number; height: number } {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
