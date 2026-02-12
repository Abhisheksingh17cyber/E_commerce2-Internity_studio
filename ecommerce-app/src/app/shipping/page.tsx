"use client";

import { motion } from "framer-motion";

const shippingOptions = [
  {
    name: "Standard Shipping",
    price: "Free",
    time: "5-7 business days",
    description: "Complimentary on all orders over $150",
  },
  {
    name: "Express Shipping",
    price: "$15",
    time: "2-3 business days",
    description: "Fast delivery for time-sensitive orders",
  },
  {
    name: "Overnight Shipping",
    price: "$35",
    time: "Next business day",
    description: "Order by 2pm EST for next-day delivery",
  },
  {
    name: "International Standard",
    price: "$25",
    time: "7-14 business days",
    description: "Available to 50+ countries worldwide",
  },
];

const internationalRegions = [
  {
    region: "Europe",
    countries: "UK, France, Germany, Italy, Spain, Netherlands, Belgium, Sweden, and more",
    time: "7-10 business days",
  },
  {
    region: "Asia Pacific",
    countries: "Japan, South Korea, Australia, Singapore, Hong Kong",
    time: "10-14 business days",
  },
  {
    region: "Middle East",
    countries: "UAE, Saudi Arabia, Qatar, Kuwait",
    time: "10-14 business days",
  },
  {
    region: "Americas",
    countries: "Canada, Mexico, Brazil",
    time: "7-12 business days",
  },
];

export default function ShippingPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Shipping Information">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Delivery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Shipping Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            We offer a range of shipping options to ensure your pieces arrive safely 
            and on time, wherever you are in the world.
          </motion.p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="pb-20 px-4 md:px-6 lg:px-12" aria-label="Shipping options">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-8 text-center"
          >
            Shipping Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-6"
              >
                <h3 className="font-serif text-lg text-neutral-900 mb-2">{option.name}</h3>
                <p className="text-gold-600 font-sans text-2xl mb-2">{option.price}</p>
                <p className="text-neutral-700 font-sans font-medium mb-2">{option.time}</p>
                <p className="text-neutral-500 font-sans text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Order processing">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-8 text-center"
          >
            Order Processing
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 space-y-6"
          >
            <div className="border-b border-neutral-100 pb-6">
              <h3 className="font-serif text-lg text-neutral-900 mb-2">Processing Time</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Orders are typically processed within 1-2 business days. During peak seasons 
                or promotional periods, processing may take an additional 1-2 days. You&apos;ll 
                receive an email confirmation once your order ships.
              </p>
            </div>
            
            <div className="border-b border-neutral-100 pb-6">
              <h3 className="font-serif text-lg text-neutral-900 mb-2">Order Cutoff Times</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                For express and overnight shipping, orders must be placed by 2:00 PM EST 
                Monday through Friday to ship the same day. Orders placed after this time 
                or on weekends will ship the next business day.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg text-neutral-900 mb-2">Order Tracking</h3>
              <p className="text-neutral-600 font-sans leading-relaxed">
                Once your order ships, you&apos;ll receive a confirmation email with tracking 
                information. You can also track your order by logging into your account 
                and viewing your order history.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-20 px-4 md:px-6 lg:px-12" aria-label="International shipping">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4 text-center"
          >
            International Shipping
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 font-sans text-center max-w-2xl mx-auto mb-12"
          >
            We ship to over 50 countries worldwide. International duties and taxes are 
            calculated at checkout for a seamless experience.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalRegions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-neutral-200 p-6"
              >
                <h3 className="font-serif text-xl text-neutral-900 mb-2">{region.region}</h3>
                <p className="text-neutral-600 font-sans text-sm mb-3">{region.countries}</p>
                <p className="text-gold-600 font-sans font-medium">{region.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-900" aria-label="Important shipping information">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-white mb-8 text-center"
          >
            Important Information
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Signature Required",
                description: "All orders over $500 require a signature upon delivery for your protection.",
              },
              {
                title: "P.O. Boxes",
                description: "We cannot ship to P.O. boxes for express or overnight deliveries.",
              },
              {
                title: "Address Accuracy",
                description: "Please ensure your shipping address is correct. We cannot redirect packages once shipped.",
              },
              {
                title: "Package Insurance",
                description: "All orders are fully insured against loss or damage during transit at no extra cost.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-serif text-lg text-gold-400 mb-2">{item.title}</h3>
                <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-12" aria-label="Shipping support">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-600 font-sans mb-6"
          >
            Have questions about shipping? Our customer service team is here to help.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="/contact"
            className="inline-block px-8 py-4 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </main>
  );
}
