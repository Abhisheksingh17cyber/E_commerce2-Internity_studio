"use client";

import { motion } from "framer-motion";

const returnSteps = [
  {
    step: "01",
    title: "Initiate Return",
    description: "Log into your account and select the item(s) you wish to return from your order history.",
  },
  {
    step: "02",
    title: "Print Label",
    description: "Print the prepaid shipping label provided in your confirmation email.",
  },
  {
    step: "03",
    title: "Pack & Ship",
    description: "Pack items securely in original packaging and drop off at any authorized carrier location.",
  },
  {
    step: "04",
    title: "Receive Refund",
    description: "Once received and inspected, your refund will be processed within 5-7 business days.",
  },
];

export default function ReturnsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Returns and Exchanges">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Easy Returns
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Returns & Exchanges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            We want you to love your purchase. If something isn&apos;t quite right, 
            we make returns and exchanges simple.
          </motion.p>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="pb-20 px-4 md:px-6 lg:px-12" aria-label="Return policy overview">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-100 p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              30-Day Return Policy
            </h2>
            <p className="text-neutral-600 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
              Return any unworn item within 30 days of delivery for a full refund. 
              Items must be in original condition with all tags attached.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div>
                <p className="text-gold-600 text-3xl font-serif mb-1">Free</p>
                <p className="text-neutral-500 font-sans text-sm">Return Shipping</p>
              </div>
              <div>
                <p className="text-gold-600 text-3xl font-serif mb-1">30</p>
                <p className="text-neutral-500 font-sans text-sm">Days to Return</p>
              </div>
              <div>
                <p className="text-gold-600 text-3xl font-serif mb-1">5-7</p>
                <p className="text-neutral-500 font-sans text-sm">Days to Refund</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Return Process Steps */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-white" aria-label="Return process steps">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-12 text-center"
          >
            How to Return
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-gold-500 text-4xl font-serif mb-4 block">{item.step}</span>
                <h3 className="font-serif text-xl text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-50" aria-label="Detailed return policies">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-8 text-center"
          >
            Return Policies
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 p-6"
            >
              <h3 className="font-serif text-lg text-neutral-900 mb-3">Eligible Items</h3>
              <ul className="space-y-2 text-neutral-600 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">✓</span>
                  Unworn items in original condition with all tags attached
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">✓</span>
                  Items returned within 30 days of delivery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">✓</span>
                  Items in original packaging (when possible)
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-neutral-200 p-6"
            >
              <h3 className="font-serif text-lg text-neutral-900 mb-3">Non-Returnable Items</h3>
              <ul className="space-y-2 text-neutral-600 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">✕</span>
                  Items marked as Final Sale
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">✕</span>
                  Worn, altered, or damaged items
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">✕</span>
                  Items without original tags
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">✕</span>
                  Gift cards
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-neutral-200 p-6"
            >
              <h3 className="font-serif text-lg text-neutral-900 mb-3">Exchanges</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                We offer free exchanges for different sizes or colors, subject to availability. 
                If your preferred size or color is not available, we&apos;ll issue a full refund 
                so you can reorder when the item becomes available. To exchange an item, 
                please initiate a return and place a new order for your preferred option.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-neutral-200 p-6"
            >
              <h3 className="font-serif text-lg text-neutral-900 mb-3">International Returns</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                International customers are responsible for return shipping costs. 
                We recommend using a trackable shipping method for your protection. 
                Refunds will be processed in the original currency and may take an 
                additional 3-5 business days to reflect in your account due to 
                international banking processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-neutral-200 p-6"
            >
              <h3 className="font-serif text-lg text-neutral-900 mb-3">Refund Method</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Refunds are credited to your original payment method. Credit card refunds 
                typically appear within 3-5 business days after processing. PayPal refunds 
                are usually immediate. If you paid with a gift card, the amount will be 
                credited back to a new gift card sent to your email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-900" aria-label="Return support">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-white mb-4"
          >
            Need Help With a Return?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 font-sans mb-8 max-w-md mx-auto"
          >
            Our customer service team is available to assist you with any questions 
            about returns or exchanges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gold-500 text-neutral-900 font-sans text-sm tracking-wider hover:bg-gold-400 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/faq"
              className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider hover:bg-white hover:text-neutral-900 transition-colors"
            >
              View FAQ
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
