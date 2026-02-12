"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Organic & recycled materials by 2025" },
  { value: "Zero", label: "Waste sent to landfill from our facilities" },
  { value: "50%", label: "Reduction in water usage since 2020" },
  { value: "B Corp", label: "Certified for meeting high social and environmental standards" },
];

const initiatives = [
  {
    title: "Responsible Materials",
    description: "We source only the finest organic, recycled, and responsibly produced fabrics. Every material is carefully vetted to ensure it meets our strict environmental standards.",
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
  },
  {
    title: "Ethical Production",
    description: "Our ateliers provide fair wages, safe working conditions, and opportunities for artisans to grow. We partner only with facilities that share our commitment to human dignity.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    title: "Carbon Neutral",
    description: "We've achieved carbon neutrality across our entire supply chain through renewable energy investments, efficient logistics, and verified carbon offset programs.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  },
  {
    title: "Circular Fashion",
    description: "Our take-back program ensures your Atelier pieces live multiple lives. We repair, refurbish, and recycle garments to minimize waste and extend their journey.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
  },
];

export default function SustainabilityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: 30,
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
      <section ref={heroRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 scale-125">
          <Image
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=1920&q=80"
            alt="Sustainable fashion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
            >
              Our Commitment
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6"
            >
              Sustainability
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-neutral-200 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Fashion that honors the planet. We believe luxury and sustainability 
              must coexist—and we're proving it's possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-400 block mb-2">
                  {stat.value}
                </span>
                <p className="text-neutral-400 font-sans text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Our Vision
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-8">
              Redefining Luxury for a New Era
            </h2>
            <p className="text-neutral-600 font-sans leading-relaxed text-lg">
              True luxury isn't just about exquisite craftsmanship—it's about creating 
              beauty without compromise. We're building a fashion future where exceptional 
              quality and environmental responsibility go hand in hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-32">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="text-gold-500 text-sm font-sans tracking-wider">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 mt-2 mb-6">
                    {initiative.title}
                  </h3>
                  <p className="text-neutral-600 font-sans leading-relaxed text-lg">
                    {initiative.description}
                  </p>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 lg:py-32 bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Verified Commitment
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["GOTS Certified", "B Corp", "Fair Trade", "Climate Neutral"].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 text-center border border-neutral-200"
              >
                <div className="w-16 h-16 rounded-full bg-gold-50 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="font-serif text-neutral-900">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Join Us on the Journey
            </h2>
            <p className="text-neutral-400 font-sans text-lg mb-10 leading-relaxed">
              Sustainability is a continuous journey, not a destination. We invite you to 
              be part of our story—choose pieces that align with your values and help us 
              build a more conscious fashion future.
            </p>
            <a
              href="/shop"
              className="inline-block bg-gold-500 text-neutral-950 px-12 py-4 text-sm tracking-wider uppercase font-sans hover:bg-gold-400 transition-colors"
            >
              Shop Consciously
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
