"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { products } from "@/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Heading } from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !container || !wrapper) return;

    const scrollWidth = wrapper.scrollWidth - container.offsetWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(wrapper, {
      x: -scrollWidth,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) trigger.kill();
      });
    };
  }, []);

  const featuredProducts = products.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-neutral-50 overflow-hidden"
    >
      <div ref={containerRef} className="h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 font-sans"
              >
                Featured
              </motion.p>
              <Heading as="h2" animated className="font-serif">
                New Arrivals
              </Heading>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/shop"
                className="hidden md:flex items-center gap-2 text-neutral-600 hover:text-gold-600 transition-colors group font-sans"
              >
                <span className="text-sm tracking-wider">View All Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Products Wrapper */}
        <div
          ref={wrapperRef}
          className="flex gap-8 pl-6 lg:pl-12"
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="shrink-0 w-75 md:w-87.5"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}

          {/* View All Card */}
          <div className="shrink-0 w-75 md:w-87.5 flex items-center justify-center">
            <Link
              href="/shop"
              className="group flex flex-col items-center justify-center w-full aspect-3/4 bg-neutral-900 text-white transition-colors hover:bg-gold-600"
            >
              <span className="text-lg tracking-wider mb-4 font-sans">View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 transition-transform group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="container mx-auto px-6 lg:px-12 mt-12">
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 font-sans">Scroll to explore</span>
            <div className="flex-1 h-px bg-neutral-300 max-w-50">
              <motion.div
                className="h-full bg-gold-500"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
