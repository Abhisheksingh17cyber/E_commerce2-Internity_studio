"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const giftCardDenominations = [
  { value: 50, label: "$50" },
  { value: 100, label: "$100" },
  { value: 200, label: "$200" },
  { value: 500, label: "$500" },
];

const giftCardDesigns = [
  {
    id: "classic",
    name: "Classic Gold",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80",
  },
  {
    id: "minimal",
    name: "Minimal Black",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
  },
  {
    id: "floral",
    name: "Heritage Floral",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
  },
];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [selectedDesign, setSelectedDesign] = useState<string>("classic");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle gift card purchase
  };

  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Gift Cards">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            The Perfect Gift
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Gift Cards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Give the gift of choice. Our digital gift cards are delivered instantly via email, 
            allowing your loved ones to select their own timeless pieces.
          </motion.p>
        </div>
      </section>

      {/* Gift Card Configuration */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="Configure gift card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Preview */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="sticky top-32">
                <div className="relative aspect-[16/10] bg-neutral-900 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={giftCardDesigns.find(d => d.id === selectedDesign)?.image || giftCardDesigns[0].image}
                    alt="Gift card design"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div>
                      <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-sans">Atelier</p>
                      <p className="text-white/60 text-xs font-sans mt-1">Gift Card</p>
                    </div>
                    <div>
                      <p className="text-white text-4xl md:text-5xl font-serif">${selectedAmount}</p>
                      {recipientName && (
                        <p className="text-white/80 font-sans mt-2">For: {recipientName}</p>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-sans mt-4 text-center">
                  Preview of your gift card
                </p>
              </div>
            </motion.div>

            {/* Configuration Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-neutral-900 font-serif text-lg mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {giftCardDenominations.map((denomination) => (
                      <button
                        key={denomination.value}
                        type="button"
                        onClick={() => setSelectedAmount(denomination.value)}
                        className={`py-4 text-center font-sans tracking-wider transition-all ${
                          selectedAmount === denomination.value
                            ? "bg-neutral-900 text-white"
                            : "bg-neutral-100 text-neutral-700 hover:bg-gold-400 hover:text-neutral-900"
                        }`}
                        aria-pressed={selectedAmount === denomination.value}
                      >
                        {denomination.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Design Selection */}
                <div>
                  <label className="block text-neutral-900 font-serif text-lg mb-4">
                    Choose Design
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {giftCardDesigns.map((design) => (
                      <button
                        key={design.id}
                        type="button"
                        onClick={() => setSelectedDesign(design.id)}
                        className={`relative aspect-video overflow-hidden transition-all ${
                          selectedDesign === design.id
                            ? "ring-2 ring-gold-500 ring-offset-2"
                            : "hover:opacity-80"
                        }`}
                        aria-pressed={selectedDesign === design.id}
                        aria-label={design.name}
                      >
                        <Image
                          src={design.image}
                          alt={design.name}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recipient Details */}
                <div className="space-y-4">
                  <label className="block text-neutral-900 font-serif text-lg">
                    Recipient Details
                  </label>
                  <input
                    type="text"
                    placeholder="Recipient's Name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-6 py-4 border border-neutral-300 bg-white text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    aria-label="Recipient's name"
                  />
                  <input
                    type="email"
                    placeholder="Recipient's Email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-6 py-4 border border-neutral-300 bg-white text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                    aria-label="Recipient's email"
                    required
                  />
                </div>

                {/* Personal Message */}
                <div>
                  <label className="block text-neutral-900 font-serif text-lg mb-4">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    placeholder="Add a personal message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-6 py-4 border border-neutral-300 bg-white text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    aria-label="Personal message"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors"
                >
                  Purchase Gift Card — ${selectedAmount}
                </button>

                <p className="text-neutral-500 text-sm font-sans text-center">
                  Gift cards are delivered instantly via email and never expire.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Gift card features">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Instant Delivery", description: "Delivered directly to your recipient's inbox within minutes." },
              { title: "Never Expires", description: "Our gift cards have no expiration date. Use them whenever you're ready." },
              { title: "Easy to Use", description: "Simply enter the code at checkout to redeem the full value." },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 font-sans">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
