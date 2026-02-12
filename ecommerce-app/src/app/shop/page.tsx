"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "outerwear", label: "Outerwear" },
  { id: "knitwear", label: "Knitwear" },
  { id: "dresses", label: "Dresses" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "accessories", label: "Accessories" },
];

const sortOptions = [
  { id: "newest", label: "Newest" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = products.filter(
    (product) => activeCategory === "all" || product.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 font-sans"
          >
            Shop
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Heading as="h1" className="font-serif">All Products</Heading>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-neutral-200"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm tracking-wider transition-colors font-sans",
                  activeCategory === category.id
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-gold-400 hover:text-neutral-900"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-500 font-sans">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-b border-neutral-300 text-sm text-neutral-900 py-1 focus:outline-none focus:border-gold-500 font-sans"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-neutral-500 mb-8 font-sans"
        >
          Showing {sortedProducts.length} products
        </motion.p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg font-sans">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
