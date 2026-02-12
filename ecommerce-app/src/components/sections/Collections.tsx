"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { collections } from "@/data";
import { Heading } from "@/components/ui/Typography";

gsap.registerPlugin(ScrollTrigger);

interface CollectionCardProps {
  collection: (typeof collections)[0];
  index: number;
  isReversed?: boolean;
}

function CollectionCard({ collection, index, isReversed }: CollectionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    // Parallax effect on image
    gsap.to(image, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) trigger.kill();
      });
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isReversed ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${isReversed ? "lg:col-start-2" : ""}`}
      >
        <Link href={`/collections/${collection.slug}`} className="block group">
          <div className="relative aspect-4/5 overflow-hidden bg-neutral-100">
            <div ref={imageRef} className="absolute inset-0 -top-20 -bottom-20">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </Link>
      </div>

      {/* Content */}
      <div className={`py-8 ${isReversed ? "lg:col-start-1" : ""}`}>
        <Link
          href={`/collections/${collection.slug}`}
          className="block group"
        >
          <p className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
            {collection.productCount} pieces
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-6 group-hover:text-gold-600 transition-colors font-serif">
            {collection.name}
          </h3>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-md font-sans">
            {collection.description}
          </p>
          <span className="inline-flex items-center gap-2 text-neutral-900 group-hover:gap-4 transition-all group-hover:text-gold-600">
            <span className="text-sm tracking-wider uppercase font-sans">
              Explore Collection
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export function Collections() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 font-sans"
          >
            Curated
          </motion.p>
          <Heading as="h2" animated className="font-serif">
            Collections
          </Heading>
        </div>

        {/* Collections Grid */}
        <div className="space-y-24 lg:space-y-32">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
