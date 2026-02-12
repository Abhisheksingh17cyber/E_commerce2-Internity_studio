"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { brandValues } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export function BrandValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll(".value-card");

    // Animate cards on scroll
    cardElements.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
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
    <section ref={sectionRef} className="bg-neutral-950 text-white py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6 font-sans"
          >
            Our Philosophy
          </motion.p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block text-white"
            >
              Crafted with
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="block text-gold-400 italic"
            >
              Intention
            </motion.span>
          </h2>
        </div>

        {/* Value Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {brandValues.map((value, index) => (
            <div
              key={value.title}
              className="value-card group bg-neutral-900/60 backdrop-blur-sm p-8 md:p-10 lg:p-14 border border-neutral-800 hover:border-gold-600/40 transition-colors duration-500"
            >
              <span className="text-3xl mb-6 block text-gold-400">{value.icon}</span>
              <h3 className="text-xl md:text-2xl font-serif tracking-tight mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed font-sans">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
