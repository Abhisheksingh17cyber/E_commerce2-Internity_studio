"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Timeless Design",
    description: "We create pieces that transcend seasonal trends, focusing on enduring elegance that remains relevant year after year."
  },
  {
    number: "02", 
    title: "Sustainable Practice",
    description: "Every garment is crafted with respect for our planet, using responsibly sourced materials and ethical production methods."
  },
  {
    number: "03",
    title: "Exceptional Quality",
    description: "We partner with master artisans who bring decades of expertise to every stitch, ensuring lasting quality."
  },
  {
    number: "04",
    title: "Personal Connection",
    description: "Fashion is deeply personal. We're committed to creating pieces that resonate with your individual style and story."
  }
];

const milestones = [
  { year: "2020", event: "Founded in Milan with a vision for sustainable luxury" },
  { year: "2021", event: "Launched our first capsule collection to critical acclaim" },
  { year: "2022", event: "Expanded to our flagship store in Paris" },
  { year: "2023", event: "Achieved carbon-neutral operations across all facilities" },
  { year: "2024", event: "Introduced our heritage artisan partnership program" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
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
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Atelier workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight"
            >
              About Atelier
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
                Est. 2020
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-neutral-900">
                Where Tradition Meets Tomorrow
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-sans">
                <p>
                  Born from a passion for timeless elegance and a commitment to conscious 
                  craftsmanship, Atelier was founded with a singular vision: to create 
                  garments that honor both tradition and innovation.
                </p>
                <p>
                  Our journey began in the fashion capitals of Europe, where we sought out 
                  master artisans whose skills have been passed down through generations. 
                  These partnerships form the heart of our brand—a bridge between heritage 
                  techniques and contemporary design sensibilities.
                </p>
                <p>
                  Every piece we create tells a story. It speaks of the hands that shaped it, 
                  the sustainable practices that guided its production, and the timeless 
                  aesthetic that will carry it through years of wear.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                alt="Atelier craftsmanship"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Our Values
            </p>
            <h2 className="text-3xl md:text-5xl font-serif">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-neutral-800 pt-8"
              >
                <span className="text-gold-500 text-sm tracking-wider font-sans">{value.number}</span>
                <h3 className="text-2xl font-serif mt-4 mb-4">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-sans">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 pb-12 border-l border-neutral-300 pl-8 ml-4 relative last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gold-500" />
                <div>
                  <span className="text-gold-600 font-serif text-2xl">{milestone.year}</span>
                  <p className="text-neutral-600 mt-2 font-sans">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-24 lg:py-32 bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-4xl font-serif text-neutral-900 leading-relaxed italic">
              "We don't follow fashion—we create lasting elegance. Every piece is designed to 
              become a cherished part of your wardrobe for years to come."
            </blockquote>
            <div className="mt-8">
              <p className="text-gold-600 font-sans font-medium">Sofia Laurent</p>
              <p className="text-neutral-500 text-sm font-sans">Founder & Creative Director</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
