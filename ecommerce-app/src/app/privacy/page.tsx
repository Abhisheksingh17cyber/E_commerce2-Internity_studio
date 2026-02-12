"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you create an account, make a purchase, or contact us, we collect personal information such as your name, email address, shipping address, billing address, phone number, and payment information.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our site.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "We use cookies, pixels, and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Order Processing",
        text: "We use your personal information to process and fulfill orders, send order confirmations and shipping updates, and handle returns and exchanges.",
      },
      {
        subtitle: "Customer Service",
        text: "Your information helps us respond to your inquiries, provide customer support, and resolve any issues with your orders or account.",
      },
      {
        subtitle: "Marketing Communications",
        text: "With your consent, we may send you promotional emails about new products, special offers, and events. You can unsubscribe from these communications at any time.",
      },
      {
        subtitle: "Site Improvement",
        text: "We analyze usage data to improve our website, enhance user experience, and develop new features and services.",
      },
    ],
  },
  {
    title: "Information Sharing",
    content: [
      {
        subtitle: "Service Providers",
        text: "We share your information with trusted third-party service providers who assist us in operating our website, processing payments, shipping orders, and conducting our business. These providers are contractually obligated to protect your information.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, to respond to legal processes, or to protect our rights, privacy, safety, or property, or that of our customers or others.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change.",
      },
    ],
  },
  {
    title: "Your Rights and Choices",
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, correct, or update your personal information at any time by logging into your account or contacting our customer service team.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal information, subject to certain legal exceptions. Please note that we may retain certain information as required by law or for legitimate business purposes.",
      },
      {
        subtitle: "Marketing Opt-Out",
        text: "You can opt out of receiving marketing communications by clicking the unsubscribe link in any promotional email or by contacting us directly.",
      },
      {
        subtitle: "Cookie Management",
        text: "Most browsers allow you to manage cookie preferences. You can set your browser to refuse cookies or alert you when cookies are being sent.",
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures to protect your personal information, including SSL encryption, secure payment processing, and regular security assessments.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, and resolve disputes.",
      },
    ],
  },
  {
    title: "International Transfers",
    content: [
      {
        subtitle: "Cross-Border Data Transfers",
        text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        subtitle: "Age Restrictions",
        text: "Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Privacy Policy">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 font-sans"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-500 font-sans text-sm mt-4"
          >
            Last updated: February 1, 2026
          </motion.p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="Privacy policy content">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-neutral-200 p-8 mb-8"
          >
            <p className="text-neutral-700 font-sans leading-relaxed">
              At Atelier, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy describes 
              our practices concerning the information we collect from visitors to our 
              website and customers who make purchases. By using our website, you 
              consent to the practices described in this policy.
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.05 }}
              >
                <h2 className="text-2xl font-serif text-neutral-900 mb-6 pb-2 border-b border-neutral-200">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="font-serif text-lg text-neutral-800 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-neutral-600 font-sans leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 font-sans leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-neutral-100 p-6 space-y-2">
              <p className="text-neutral-700 font-sans">
                <strong className="font-serif">Email:</strong> privacy@atelier.com
              </p>
              <p className="text-neutral-700 font-sans">
                <strong className="font-serif">Address:</strong> Atelier Fashion LLC, 123 Fifth Avenue, New York, NY 10010
              </p>
              <p className="text-neutral-700 font-sans">
                <strong className="font-serif">Phone:</strong> +1 (800) 555-0123
              </p>
            </div>
          </motion.div>

          {/* Updates Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gold-500/10 border border-gold-500/20 p-6"
          >
            <h3 className="font-serif text-lg text-neutral-900 mb-2">
              Policy Updates
            </h3>
            <p className="text-neutral-600 font-sans text-sm leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes 
              in our practices or for other operational, legal, or regulatory reasons. 
              We will notify you of any material changes by posting the updated policy 
              on our website and updating the &ldquo;Last updated&rdquo; date. We encourage you 
              to review this policy periodically.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
