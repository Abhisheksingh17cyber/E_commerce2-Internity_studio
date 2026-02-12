"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-9xl font-light text-stone-200 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-stone-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline" size="lg">
              Browse Shop
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
