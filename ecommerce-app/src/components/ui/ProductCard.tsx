"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Product } from "@/types";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  className?: string;
}

export function ProductCard({ product, index = 0, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("group relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
    >
      <Link href={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
          {/* Primary Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
            )}
            priority={index < 4}
          />

          {/* Hover Image */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.name} - alternate view`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={cn(
                "object-cover transition-all duration-700 ease-out",
                isHovered ? "scale-100 opacity-100" : "scale-110 opacity-0"
              )}
            />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-neutral-900 text-white px-3 py-1 text-xs tracking-wider uppercase font-sans">
                New
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-600 text-white px-3 py-1 text-xs tracking-wider uppercase font-sans">
                Sale
              </span>
            )}
          </div>

          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <button className="w-full bg-white/90 backdrop-blur-sm text-neutral-900 py-3 text-sm tracking-wider uppercase transition-colors hover:bg-gold-400 font-sans">
              Quick View
            </button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="pt-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-medium text-neutral-900 tracking-wide font-sans">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-900 font-sans">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-neutral-400 line-through font-sans">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-1">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-4 h-4 rounded-full border border-neutral-200 cursor-pointer transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-neutral-200 rounded" />
      <div className="pt-4 space-y-2">
        <div className="h-4 bg-neutral-200 rounded w-3/4" />
        <div className="h-4 bg-neutral-200 rounded w-1/4" />
      </div>
    </div>
  );
}
