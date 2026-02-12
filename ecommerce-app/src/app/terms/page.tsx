"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the Atelier website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and customers of the Atelier website. We reserve the right to modify these terms at any time, and your continued use of the website following any changes constitutes acceptance of those changes.`,
  },
  {
    title: "2. Use of Website",
    content: `You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:

• Use the website in any way that violates applicable laws or regulations
• Impersonate or attempt to impersonate Atelier, an Atelier employee, or any other person
• Engage in any conduct that restricts or inhibits anyone's use of the website
• Attempt to gain unauthorized access to any portion of the website or any systems connected to it
• Use any automated means to access the website or collect any information from it
• Introduce any viruses, malware, or other harmful material to the website`,
  },
  {
    title: "3. Account Registration",
    content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use of your account

We reserve the right to suspend or terminate accounts that violate these terms or for any other reason at our sole discretion. You may delete your account at any time by contacting customer service.`,
  },
  {
    title: "4. Products and Pricing",
    content: `We strive to display our products and prices accurately at all times. However, we reserve the right to:

• Correct any errors in product descriptions, images, or prices
• Modify or discontinue products without prior notice
• Limit quantities available for purchase
• Refuse or cancel orders that appear to be placed by resellers or dealers

All prices are displayed in USD unless otherwise indicated. Prices do not include applicable taxes and shipping charges, which will be added at checkout.`,
  },
  {
    title: "5. Orders and Payment",
    content: `By placing an order, you represent that:

• You are of legal age to enter into binding contracts
• All information you provide is accurate and complete
• You are authorized to use the payment method provided

We reserve the right to cancel or refuse any order for any reason, including suspected fraud, unauthorized transactions, or violations of these terms. If we cancel your order after payment has been processed, we will issue a full refund.

Payment must be received in full before orders are shipped. We accept major credit cards, PayPal, and other payment methods as indicated at checkout.`,
  },
  {
    title: "6. Shipping and Delivery",
    content: `Shipping times and costs vary depending on the destination and shipping method selected. Please refer to our Shipping page for detailed information.

Title and risk of loss for products pass to you upon delivery to the shipping carrier. We are not responsible for delays caused by the shipping carrier or circumstances beyond our control.

For international orders, you are responsible for any customs duties, taxes, or import fees imposed by your country.`,
  },
  {
    title: "7. Returns and Refunds",
    content: `Our return policy allows you to return eligible items within 30 days of delivery. Please refer to our Returns page for complete details on our return process, eligible items, and refund methods.

Items marked as Final Sale are not eligible for returns or exchanges. We reserve the right to refuse returns that do not meet our return policy requirements.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on the Atelier website, including but not limited to text, graphics, logos, images, photographs, and software, is the property of Atelier or its content suppliers and is protected by intellectual property laws.

You may not:

• Copy, reproduce, or distribute any content without our written permission
• Use our trademarks or logos without authorization
• Create derivative works based on our content
• Remove any copyright or proprietary notices from our content

You are granted a limited, non-exclusive license to access and use the website for personal, non-commercial purposes only.`,
  },
  {
    title: "9. User Content",
    content: `By submitting reviews, comments, or other content to our website, you grant Atelier a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display that content.

You represent that any content you submit:

• Is accurate and not misleading
• Does not violate any third party's rights
• Does not contain any unlawful, defamatory, or objectionable material

We reserve the right to remove any user content at our sole discretion.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by law, Atelier shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or purchase of products, including but not limited to:

• Loss of profits, revenue, or data
• Personal injury or property damage
• Any unauthorized access to your personal information

Our total liability shall not exceed the amount you paid for the product giving rise to the claim. Some jurisdictions do not allow limitations on implied warranties or exclusions of certain damages, so these limitations may not apply to you.`,
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Atelier and its officers, directors, employees, and agents from any claims, liabilities, damages, costs, or expenses arising out of:

• Your violation of these Terms of Service
• Your use of the website
• Your violation of any rights of a third party
• Any content you submit to the website`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.

Any disputes arising from these terms or your use of the website shall be resolved exclusively in the state or federal courts located in New York County, New York, and you consent to the jurisdiction of such courts.`,
  },
  {
    title: "13. Severability",
    content: `If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.`,
  },
  {
    title: "14. Contact Information",
    content: `For questions about these Terms of Service, please contact us at:

Email: legal@atelier.com
Address: Atelier Fashion LLC, 123 Fifth Avenue, New York, NY 10010
Phone: +1 (800) 555-0123`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Terms of Service">
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 font-sans max-w-2xl mx-auto text-lg"
          >
            Please read these terms carefully before using our website or making a purchase.
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

      {/* Terms Content */}
      <section className="pb-24 px-4 md:px-6 lg:px-12" aria-label="Terms of service content">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-neutral-200 p-8 mb-8"
          >
            <p className="text-neutral-700 font-sans leading-relaxed">
              Welcome to Atelier. These Terms of Service (&ldquo;Terms&rdquo;) govern your 
              access to and use of the Atelier website, including any content, 
              functionality, and services offered on or through atelier.com 
              (the &ldquo;Website&rdquo;), as well as any purchases made through our Website.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-neutral-100 p-6 mb-12"
          >
            <h2 className="font-serif text-lg text-neutral-900 mb-4">Table of Contents</h2>
            <nav aria-label="Terms sections">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-neutral-600 font-sans text-sm hover:text-gold-600 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                id={`section-${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <h2 className="text-xl font-serif text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                  {section.title}
                </h2>
                <div className="text-neutral-600 font-sans leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agreement Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-neutral-900 p-8 text-center"
          >
            <p className="text-white font-sans leading-relaxed">
              By using our website or making a purchase, you acknowledge that you have 
              read, understood, and agree to be bound by these Terms of Service and our 
              Privacy Policy.
            </p>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/privacy"
              className="px-8 py-4 border border-neutral-900 text-neutral-900 font-sans text-sm tracking-wider hover:bg-neutral-900 hover:text-white transition-colors text-center"
            >
              Privacy Policy
            </a>
            <a
              href="/returns"
              className="px-8 py-4 border border-neutral-900 text-neutral-900 font-sans text-sm tracking-wider hover:bg-neutral-900 hover:text-white transition-colors text-center"
            >
              Returns Policy
            </a>
            <a
              href="/shipping"
              className="px-8 py-4 border border-neutral-900 text-neutral-900 font-sans text-sm tracking-wider hover:bg-neutral-900 hover:text-white transition-colors text-center"
            >
              Shipping Information
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
