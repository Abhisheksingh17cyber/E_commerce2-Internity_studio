"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const craftSections = [
  {
    title: "The Art of Selection",
    subtitle: "Premium Materials",
    description: "Every piece begins with the finest materials sourced from renowned mills across Italy, Japan, and Scotland. Our fabric specialists travel the world to find textiles that meet our exacting standards for quality, sustainability, and beauty.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    stats: [
      { label: "Partner Mills", value: "24" },
      { label: "Countries", value: "8" },
    ],
  },
  {
    title: "Master Artisans",
    subtitle: "Handcrafted Excellence",
    description: "Our garments are brought to life by master artisans with decades of experience. Each stitch, seam, and detail is executed with precision and care, ensuring that every piece meets our uncompromising standards.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    stats: [
      { label: "Years of Expertise", value: "40+" },
      { label: "Master Craftspeople", value: "120" },
    ],
  },
  {
    title: "The Perfect Fit",
    subtitle: "Precision Tailoring",
    description: "Every pattern is developed through countless iterations, refined to achieve the perfect balance of comfort and elegance. Our fit specialists ensure that each garment drapes beautifully and moves with the wearer.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    stats: [
      { label: "Fit Tests", value: "50+" },
      { label: "Size Options", value: "12" },
    ],
  },
];

const heritage = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded in Milan with a vision to create timeless pieces that honor traditional craftsmanship.",
  },
  {
    year: "2021",
    title: "Artisan Partnerships",
    description: "Established relationships with master craftspeople across Europe and Asia.",
  },
  {
    year: "2022",
    title: "Sustainable Innovation",
    description: "Pioneered new techniques combining heritage methods with eco-conscious practices.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Received international acclaim for our commitment to quality and sustainability.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Craftsmanship">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80"
            alt="Artisan craftsmanship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl text-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6 font-sans"
            >
              Our Heritage
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6"
            >
              The Art of Craftsmanship
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto"
            >
              Where tradition meets innovation. Every piece tells a story of dedication, 
              skill, and an unwavering commitment to excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Craft Sections */}
      {craftSections.map((section, index) => (
        <section
          key={section.title}
          className={`py-24 px-4 md:px-6 lg:px-12 ${index % 2 === 1 ? "bg-neutral-100" : "bg-neutral-50"}`}
          aria-label={section.title}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
                  {section.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-neutral-600 font-sans text-lg leading-relaxed mb-8">
                  {section.description}
                </p>
                <div className="flex gap-12">
                  {section.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-4xl font-serif text-neutral-900 mb-1">{stat.value}</p>
                      <p className="text-neutral-500 font-sans text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative aspect-[4/5] overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Heritage Timeline */}
      <section className="py-24 px-4 md:px-6 lg:px-12 bg-neutral-900" aria-label="Our heritage timeline">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
              A Legacy in the Making
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heritage.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-neutral-700 pt-6"
              >
                <p className="text-gold-500 text-3xl font-serif mb-3">{item.year}</p>
                <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-neutral-400 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 md:px-6 lg:px-12 bg-neutral-50" aria-label="Philosophy quote">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-neutral-900 leading-relaxed mb-8"
          >
            &ldquo;True luxury is not about excess—it&apos;s about the quiet confidence that comes 
            from knowing every detail has been considered, every material thoughtfully chosen, 
            every stitch placed with intention.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-sans tracking-wider"
          >
            — The Atelier Philosophy
          </motion.p>
        </div>
      </section>
    </main>
  );
}
