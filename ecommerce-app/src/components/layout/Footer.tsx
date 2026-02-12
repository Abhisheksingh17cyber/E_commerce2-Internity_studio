"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "All Products", href: "/shop" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Craftsmanship", href: "/craftsmanship" },
    { label: "Careers", href: "/careers" },
  ],
  help: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-neutral-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
              Join Our World
            </h3>
            <p className="text-neutral-400 mb-8 font-sans">
              Subscribe for exclusive access to new collections, private events,
              and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-gold-400 transition-colors font-sans"
              />
              <button
                type="submit"
                className="bg-gold-500 text-neutral-950 px-8 py-3 text-sm tracking-wider uppercase hover:bg-gold-400 transition-colors font-sans"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <Link
              href="/"
              className="text-2xl font-light tracking-[0.2em] mb-4 block"
            >
              ATELIER
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-sans">
              Crafting timeless elegance through sustainable luxury fashion
              since 2020.
            </p>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold-400 font-sans">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-gold-400 text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold-400 font-sans">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-gold-400 text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold-400 font-sans">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-gold-400 text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-gold-400 font-sans">Follow</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-gold-400 text-sm transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 font-sans">
            <p>&copy; {new Date().getFullYear()} ATELIER. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
