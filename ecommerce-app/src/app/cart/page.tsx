"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Mock cart items
const initialCartItems = [
  {
    id: "1",
    name: "Cashmere Overcoat",
    color: "Charcoal",
    size: "M",
    price: 890,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80"
  },
  {
    id: "2",
    name: "Silk Blouse",
    color: "Ivory",
    size: "S",
    price: 320,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&q=80"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal - discount + shipping;

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-neutral-50 min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-24 h-24 rounded-full bg-neutral-100 mx-auto mb-8 flex items-center justify-center">
              <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-serif text-neutral-900 mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 font-sans mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-neutral-950 text-white px-10 py-4 text-sm tracking-wider uppercase font-sans hover:bg-neutral-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-2">Shopping Cart</h1>
          <p className="text-neutral-600 font-sans">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 py-8 border-b border-neutral-200"
                >
                  {/* Image */}
                  <div className="relative w-28 h-36 bg-neutral-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-serif text-neutral-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-neutral-500 font-sans">
                          {item.color} / {item.size}
                        </p>
                      </div>
                      <p className="text-lg font-sans text-neutral-900">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-12 text-center font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-neutral-500 hover:text-neutral-900 font-sans underline underline-offset-4 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Continue Shopping Link */}
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 font-sans mt-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 border border-neutral-200 sticky top-32"
            >
              <h2 className="text-xl font-serif text-neutral-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    disabled={promoApplied}
                    className="flex-1 border-b border-neutral-300 bg-transparent py-2 text-sm font-sans focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                  />
                  <button
                    onClick={handlePromoCode}
                    disabled={promoApplied || !promoCode}
                    className="text-sm font-sans text-gold-600 hover:text-gold-700 disabled:opacity-50 transition-colors"
                  >
                    {promoApplied ? "Applied" : "Apply"}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-green-600 font-sans mt-2">10% discount applied!</p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm font-sans">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Complimentary" : `$${shipping}`}</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg text-neutral-900">
                    <span className="font-serif">Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-neutral-950 text-white py-4 text-sm tracking-wider uppercase font-sans hover:bg-neutral-800 transition-colors mt-8">
                Proceed to Checkout
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-center gap-4 text-neutral-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500 text-center mt-3 font-sans">
                  Secure checkout with SSL encryption
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
