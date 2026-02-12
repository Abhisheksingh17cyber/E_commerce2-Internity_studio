"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: "char" | "word";
  type?: "fade" | "slide" | "mask";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  splitBy = "char",
  type = "slide",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = splitBy === "char" ? children.split("") : children.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "char" ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    },
    slide: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    mask: {
      hidden: { opacity: 0, y: "100%" },
      visible: {
        opacity: 1,
        y: "0%",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={cn("inline-flex flex-wrap", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {items.map((item, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={itemVariants[type]}
          >
            {item === " " ? "\u00A0" : item}
            {splitBy === "word" && index < items.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function Heading({
  as: Component = "h2",
  children,
  className,
  animated = false,
}: HeadingProps) {
  const baseStyles = {
    h1: "text-5xl md:text-7xl lg:text-8xl font-light tracking-tight",
    h2: "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight",
    h3: "text-3xl md:text-4xl font-light tracking-tight",
    h4: "text-2xl md:text-3xl font-light tracking-tight",
    h5: "text-xl md:text-2xl font-light",
    h6: "text-lg md:text-xl font-light",
  };

  if (animated && typeof children === "string") {
    return (
      <Component className={cn(baseStyles[Component], className)}>
        <TextReveal splitBy="word" type="slide">
          {children}
        </TextReveal>
      </Component>
    );
  }

  return (
    <Component className={cn(baseStyles[Component], className)}>
      {children}
    </Component>
  );
}

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Paragraph({
  children,
  className,
  size = "md",
}: ParagraphProps) {
  const sizes = {
    sm: "text-sm leading-relaxed",
    md: "text-base md:text-lg leading-relaxed",
    lg: "text-lg md:text-xl leading-relaxed",
  };

  return (
    <p className={cn("text-stone-600", sizes[size], className)}>{children}</p>
  );
}
