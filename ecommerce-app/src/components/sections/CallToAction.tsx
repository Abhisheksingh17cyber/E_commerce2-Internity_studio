"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // Parallax on image
    gsap.to(image, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Scale up content on scroll
    gsap.fromTo(
      content,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
          alt="Lifestyle image"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full container mx-auto px-6 lg:px-12 flex items-center justify-center"
      >
        <div className="max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 font-serif"
          >
            Experience the
            <span className="block text-gold-400">Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto font-sans"
          >
            Visit our flagship store for a personalized styling consultation and
            discover pieces that speak to your individual style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-neutral-900 hover:bg-gold-400 hover:text-neutral-900"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-gold-500 hover:text-neutral-900 hover:border-gold-500"
            >
              Find a Store
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
