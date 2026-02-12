"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/ui/Typography";

const testimonials = [
  {
    id: 1,
    quote:
      "The attention to detail and quality of materials is exceptional. These pieces have become the foundation of my wardrobe.",
    author: "Sarah Mitchell",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    quote:
      "Finally, a brand that understands sustainable luxury isn't just a trend—it's a responsibility. Beautiful, timeless design.",
    author: "James Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    quote:
      "Every piece tells a story of craftsmanship. I receive compliments every time I wear something from ATELIER.",
    author: "Elena Rodriguez",
    role: "Fashion Editor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 font-sans"
          >
            Testimonials
          </motion.p>
          <Heading as="h2" animated className="font-serif">
            Client Voices
          </Heading>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-900 leading-relaxed mb-12 font-serif">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-gold-400">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-neutral-900 font-medium font-sans">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-neutral-500 text-sm font-sans">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-neutral-300 rounded-full text-neutral-600 hover:text-gold-600 hover:border-gold-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-gold-500 w-6"
                      : "bg-neutral-300 hover:bg-gold-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 border border-neutral-300 rounded-full text-neutral-600 hover:text-gold-600 hover:border-gold-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
