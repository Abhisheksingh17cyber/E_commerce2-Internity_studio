"use client";

import { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { formatPrice, cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [productId, setProductId] = useState<string | null>(null);
  
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    params.then((p) => setProductId(p.id));
  }, [params]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.fromTo(
      image,
      { scale: 1.1 },
      {
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [activeImage]);

  if (!productId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-neutral-400 font-sans">Loading...</div>
      </div>
    );
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = [product.image, product.hoverImage].filter(Boolean) as string[];

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-neutral-500 mb-12 font-sans"
        >
          <Link href="/" className="hover:text-gold-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gold-600 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-neutral-900">{product.name}</span>
        </motion.nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div
              ref={imageRef}
              className="relative aspect-[3/4] bg-neutral-100 overflow-hidden"
            >
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-neutral-900 text-white px-4 py-1.5 text-xs tracking-wider uppercase font-sans">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-600 text-white px-4 py-1.5 text-xs tracking-wider uppercase font-sans">
                    Sale
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative aspect-square w-20 bg-neutral-100 overflow-hidden transition-opacity",
                      activeImage === index
                        ? "ring-2 ring-gold-500"
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:py-8"
          >
            <p className="text-sm text-gold-500 tracking-[0.2em] uppercase mb-4 font-sans">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 mb-6 font-serif">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-medium text-neutral-900 font-sans">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-400 line-through font-sans">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-neutral-600 leading-relaxed mb-10 font-sans">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <p className="text-sm text-neutral-500 mb-3 font-sans">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full transition-transform hover:scale-110",
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-gold-500"
                          : "ring-1 ring-neutral-200"
                      )}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-neutral-500 font-sans">Size</p>
                  <button className="text-sm text-neutral-600 underline hover:text-gold-600 transition-colors font-sans">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[48px] h-12 px-4 border text-sm transition-colors font-sans",
                        selectedSize === size
                          ? "border-gold-500 bg-gold-500 text-neutral-900"
                          : "border-neutral-200 text-neutral-600 hover:border-gold-500"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="flex gap-4 mb-10">
              <Button variant="primary" size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="aspect-square !px-0"
                aria-label="Add to wishlist"
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-neutral-200 pt-8 space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gold-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <span className="text-neutral-600 font-sans">
                  Complimentary shipping on orders over $200
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gold-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <span className="text-neutral-600 font-sans">
                  30-day returns for unworn items
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-32">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 mb-12 text-center font-serif">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
