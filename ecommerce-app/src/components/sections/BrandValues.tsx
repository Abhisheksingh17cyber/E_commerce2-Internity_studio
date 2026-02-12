"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { brandValues } from "@/data";
import { Heading } from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

export function BrandValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const cardElements = cards.querySelectorAll(".value-card");

    // Pin header on scroll
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: header,
      pinSpacing: false,
    });

    // Animate cards on scroll
    cardElements.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-stone-950 text-white">
      {/* Pinned Header */}
      <div
        ref={headerRef}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Our Philosophy
          </motion.p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Crafted with
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="block text-stone-400"
            >
              Intention
            </motion.span>
          </h2>
        </div>
      </div>

      {/* Value Cards */}
      <div ref={cardsRef} className="relative z-10 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {brandValues.map((value, index) => (
              <div
                key={value.title}
                className="value-card bg-stone-900/50 backdrop-blur-sm p-10 md:p-12 lg:p-16 border border-stone-800"
              >
                <span className="text-4xl mb-8 block">{value.icon}</span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
