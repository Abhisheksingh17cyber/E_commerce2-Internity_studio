"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    name: "Orders & Shipping",
    questions: [
      {
        question: "How long will my order take to arrive?",
        answer: "Standard shipping typically takes 5-7 business days within the US. Express shipping (2-3 business days) and overnight options are available at checkout. International orders may take 7-14 business days depending on the destination.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. All applicable duties and taxes are calculated at checkout for a seamless experience.",
      },
      {
        question: "Can I track my order?",
        answer: "Absolutely. Once your order ships, you'll receive an email with tracking information. You can also track your order by logging into your account and viewing your order history.",
      },
      {
        question: "What if my package is lost or damaged?",
        answer: "We take full responsibility for packages until they reach you. If your order is lost or arrives damaged, please contact our customer service team within 48 hours, and we'll arrange a replacement or full refund.",
      },
    ],
  },
  {
    name: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unworn items in their original condition with all tags attached. Items must be returned in their original packaging. Sale items are final sale unless otherwise noted.",
      },
      {
        question: "How do I initiate a return?",
        answer: "Log into your account, navigate to your order history, and select 'Request Return' for the item you wish to return. You'll receive a prepaid shipping label via email. For orders placed as a guest, please contact customer service.",
      },
      {
        question: "How long do refunds take to process?",
        answer: "Once we receive your return, please allow 5-7 business days for inspection and processing. Refunds are credited to your original payment method within 3-5 business days after processing.",
      },
      {
        question: "Can I exchange an item for a different size?",
        answer: "Yes, we offer free exchanges for different sizes, subject to availability. If your preferred size is out of stock, we'll issue a full refund so you can reorder when it becomes available.",
      },
    ],
  },
  {
    name: "Products & Care",
    questions: [
      {
        question: "How should I care for my garments?",
        answer: "Each item comes with specific care instructions on the label. Generally, we recommend dry cleaning for delicate fabrics like silk and cashmere. For cotton and linen pieces, gentle machine wash in cold water is suitable.",
      },
      {
        question: "Are your products sustainably made?",
        answer: "Sustainability is at the core of our brand. We use responsibly sourced materials, partner with ethical manufacturers, and are committed to reducing our environmental footprint. Learn more on our Sustainability page.",
      },
      {
        question: "What sizes do you offer?",
        answer: "We offer sizes XS through XL for most garments, with select styles available in extended sizes. Please refer to our size guide for detailed measurements. If you need assistance finding your size, our styling team is happy to help.",
      },
      {
        question: "Do you offer alterations?",
        answer: "We partner with select tailors in major cities for complimentary minor alterations on full-price purchases. Contact our customer service team after your purchase to inquire about this service in your area.",
      },
    ],
  },
  {
    name: "Account & Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer Afterpay for eligible purchases, allowing you to pay in four interest-free installments.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard SSL encryption to protect your personal and payment information. We are PCI DSS compliant and never store your full credit card details on our servers.",
      },
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a link to reset your password within minutes. If you don't see the email, please check your spam folder.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter processing and cannot be changed. Please contact customer service immediately if you need to make changes.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const activeQuestions = faqCategories.find((cat) => cat.name === activeCategory)?.questions || [];

  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Frequently Asked Questions">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Help Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Find answers to common questions about orders, shipping, returns, and more.
            Can&apos;t find what you&apos;re looking for? Contact our team.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="FAQ categories and questions">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 text-sm font-sans tracking-wider transition-colors ${
                  activeCategory === category.name
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-gold-400 hover:text-neutral-900"
                }`}
                aria-pressed={activeCategory === category.name}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Questions Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {activeQuestions.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-neutral-200 bg-white"
              >
                <button
                  onClick={() => toggleQuestion(item.question)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={openQuestions.includes(item.question)}
                >
                  <span className="font-serif text-lg text-neutral-900">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: openQuestions.includes(item.question) ? 45 : 0 }}
                      className="block w-4 h-0.5 bg-neutral-900 relative"
                    >
                      <span
                        className={`absolute inset-0 bg-neutral-900 transition-transform ${
                          openQuestions.includes(item.question) ? "rotate-0" : "rotate-90"
                        }`}
                      />
                    </motion.span>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openQuestions.includes(item.question) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-neutral-100">
                        <p className="text-neutral-600 font-sans leading-relaxed pt-6">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Contact support">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4"
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 font-sans mb-8 max-w-md mx-auto"
          >
            Our customer service team is here to help. Reach out and we&apos;ll respond within 24 hours.
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
              className="px-8 py-4 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:support@atelier.com"
              className="px-8 py-4 border border-neutral-900 text-neutral-900 font-sans text-sm tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Email Support
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
