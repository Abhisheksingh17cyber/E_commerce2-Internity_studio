"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { collections, products } from "@/data";
import { ProductCard } from "@/components/ui/ProductCard";

export default function CollectionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const collection = collections.find((c) => c.slug === slug);
  
  if (!collection) {
    return (
      <main className="bg-neutral-50 min-h-screen pt-32 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-serif text-neutral-900 mb-4">
            Collection Not Found
          </h1>
          <p className="text-neutral-600 font-sans mb-8">
            The collection you're looking for doesn't exist.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors font-sans"
          >
            View All Collections
          </Link>
        </div>
      </main>
    );
  }

  // For demo purposes, show all products in each collection
  const collectionProducts = products;

  return (
    <main className="bg-neutral-50 min-h-screen" aria-label={collection.name}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-white/80 font-sans text-sm tracking-wider uppercase mb-4 hover:text-gold-400 transition-colors"
              >
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                <span>All Collections</span>
              </Link>
              <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-2 font-sans">
                {collection.productCount} Products
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                {collection.name}
              </h1>
              <p className="text-white/80 font-sans text-lg max-w-xl">
                {collection.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-12" aria-label="Collection products">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200"
          >
            <p className="text-neutral-600 font-sans">
              Showing {collectionProducts.length} products
            </p>
            <div className="flex items-center gap-4">
              <label className="text-sm text-neutral-600 font-sans">Sort by:</label>
              <select className="bg-transparent border-b border-neutral-300 px-2 py-1 text-sm text-neutral-900 font-sans focus:outline-none focus:border-gold-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {collectionProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-16 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Related collections">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">
              Explore More Collections
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections
              .filter((c) => c.slug !== slug)
              .slice(0, 3)
              .map((relatedCollection, index) => (
                <motion.div
                  key={relatedCollection.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/collections/${relatedCollection.slug}`}
                    className="group block relative aspect-[3/2] overflow-hidden bg-neutral-200"
                  >
                    <Image
                      src={relatedCollection.image}
                      alt={relatedCollection.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-serif text-white text-center px-4">
                        {relatedCollection.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
