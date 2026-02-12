"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!container || !image || !overlay) return;

    // Parallax effect on image
    gsap.to(image, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade overlay on scroll
    gsap.to(overlay, {
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 -top-20">
        <Image
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=90"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
      />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6 font-sans"
          >
            New Collection 2026
          </motion.p>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8">
            <TextReveal delay={0.5} splitBy="word" type="slide">
              Effortless Elegance
            </TextReveal>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-12 font-sans"
          >
            Discover timeless pieces crafted for the modern wardrobe. 
            Sustainable luxury meets contemporary design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gold-500 text-neutral-950 hover:bg-gold-400 min-w-[200px] font-sans"
            >
              Shop Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-neutral-950 min-w-[200px] font-sans"
            >
              Explore Lookbook
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
              Scroll
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-5 h-5 text-white/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
