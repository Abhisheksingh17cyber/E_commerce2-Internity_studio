"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    id: "1",
    name: "Oversized Linen Blazer",
    price: 289,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    badge: "#1 Best Seller",
  },
  {
    id: "2",
    name: "Cashmere Crew Sweater",
    price: 445,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    badge: "Customer Favorite",
  },
  {
    id: "5",
    name: "Merino Wool Coat",
    price: 695,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    badge: "Editor's Pick",
  },
  {
    id: "4",
    name: "Silk Slip Dress",
    price: 325,
    originalPrice: 425,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    badge: "Top Rated",
  },
  {
    id: "7",
    name: "Leather Crossbody Bag",
    price: 385,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    badge: "Most Wished",
  },
  {
    id: "6",
    name: "Cotton Poplin Shirt",
    price: 165,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    badge: "Trending",
  },
];

export default function BestSellersPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Best Sellers">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Most Loved
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Best Sellers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Our most coveted pieces, chosen by you. These timeless essentials have captured the hearts of our discerning clientele.
          </motion.p>
        </div>
      </section>

      {/* Featured Best Seller */}
      <section className="pb-16 px-4 md:px-6 lg:px-12" aria-label="Featured best seller">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-neutral-100 overflow-hidden"
          >
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src={bestSellers[0].image}
                alt={bestSellers[0].name}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 bg-gold-500 text-neutral-900 px-4 py-2 text-sm font-sans tracking-wider">
                {bestSellers[0].badge}
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-16">
              <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
                Our Signature Piece
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
                {bestSellers[0].name}
              </h2>
              <p className="text-neutral-600 font-sans mb-6 leading-relaxed">
                Effortlessly elegant oversized blazer crafted from premium Italian linen. 
                A versatile masterpiece that transitions seamlessly from day to evening.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-serif text-neutral-900">${bestSellers[0].price}</span>
                {bestSellers[0].originalPrice && (
                  <span className="text-lg font-sans text-neutral-400 line-through">
                    ${bestSellers[0].originalPrice}
                  </span>
                )}
              </div>
              <Link
                href={`/products/${bestSellers[0].id}`}
                className="inline-block w-fit px-8 py-4 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="Best selling products">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {bestSellers.slice(1).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1.5 text-xs font-sans tracking-wider">
                      {product.badge}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-neutral-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-neutral-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="font-sans text-neutral-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
