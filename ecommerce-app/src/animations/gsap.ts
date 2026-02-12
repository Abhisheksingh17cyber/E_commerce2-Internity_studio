import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInOnScroll = (element: HTMLElement, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};

export const parallaxEffect = (
  element: HTMLElement,
  speed: number = 0.5,
  direction: "up" | "down" = "up"
) => {
  const yValue = direction === "up" ? -100 * speed : 100 * speed;

  return gsap.to(element, {
    y: yValue,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const revealText = (element: HTMLElement, delay: number = 0) => {
  const chars = element.querySelectorAll(".char");

  return gsap.fromTo(
    chars,
    {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.02,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const pinSection = (
  trigger: HTMLElement,
  target: HTMLElement,
  endDistance: string = "+=100%"
) => {
  return ScrollTrigger.create({
    trigger,
    start: "top top",
    end: endDistance,
    pin: target,
    pinSpacing: true,
  });
};

export const horizontalScroll = (container: HTMLElement, items: HTMLElement) => {
  const scrollWidth = items.scrollWidth - container.offsetWidth;

  return gsap.to(items, {
    x: -scrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${scrollWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });
};

export const scaleOnScroll = (element: HTMLElement) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const clipReveal = (element: HTMLElement) => {
  return gsap.fromTo(
    element,
    {
      clipPath: "inset(100% 0% 0% 0%)",
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const splitTextAnimation = (element: HTMLElement) => {
  const text = element.textContent || "";
  element.innerHTML = text
    .split("")
    .map((char) => `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");

  return revealText(element);
};

export const magneticEffect = (element: HTMLElement, strength: number = 0.5) => {
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
};

export const createTimeline = (scrollTriggerOptions?: ScrollTrigger.Vars) => {
  return gsap.timeline({
    scrollTrigger: {
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...scrollTriggerOptions,
    },
  });
};
