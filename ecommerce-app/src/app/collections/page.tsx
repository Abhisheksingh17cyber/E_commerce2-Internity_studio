"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data";

export default function CollectionsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Collections">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Curated
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Explore our thoughtfully curated collections, each designed to inspire and elevate your personal style.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="Collection list">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={`/collections/${collection.slug}`}
                  className="group block relative aspect-4/5 overflow-hidden bg-neutral-100"
                >
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <p className="text-gold-400 text-sm tracking-wider uppercase mb-2 font-sans">
                        {collection.productCount} Products
                      </p>
                      <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">
                        {collection.name}
                      </h2>
                      <p className="text-white/80 font-sans text-sm md:text-base max-w-md">
                        {collection.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="mt-4 inline-flex items-center gap-2 text-white font-sans text-sm tracking-wider uppercase group-hover:text-gold-400 transition-colors">
                        <span>Explore Collection</span>
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
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-900" aria-label="Featured collection">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Spring / Summer 2026
            </h2>
            <p className="text-neutral-400 font-sans max-w-xl mx-auto mb-8">
              Our newest collection embraces the spirit of renewal with flowing silhouettes and natural textures.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-gold-500 text-neutral-950 px-8 py-4 text-sm tracking-wider uppercase hover:bg-gold-400 transition-colors font-sans"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
