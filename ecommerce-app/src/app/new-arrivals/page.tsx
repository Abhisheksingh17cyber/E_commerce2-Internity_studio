"use client";

import { motion } from "framer-motion";
import { products } from "@/data";
import { ProductCard } from "@/components/ui/ProductCard";

const newArrivals = products.filter((product) => product.isNew);

export default function NewArrivalsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="New Arrivals">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Just In
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            New Arrivals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Discover our latest additions — carefully curated pieces that embody timeless elegance and exceptional craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="New arrival products">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {newArrivals.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-neutral-500 font-sans text-lg">
                New arrivals coming soon. Check back shortly.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Newsletter signup">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4"
          >
            Be the First to Know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 font-sans mb-8 max-w-md mx-auto"
          >
            Subscribe to receive updates on new arrivals and exclusive offers.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 px-6 py-3 border border-neutral-300 bg-white text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
