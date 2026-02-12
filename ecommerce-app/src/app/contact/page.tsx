"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    title: "Visit Us",
    details: ["45 Rue du Faubourg Saint-Honoré", "75008 Paris, France"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Call Us",
    details: ["+33 1 42 65 00 00", "Mon-Sat: 10am - 7pm CET"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: "Email Us",
    details: ["contact@atelier.com", "press@atelier.com"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold-600 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-neutral-900 mb-6">
              Contact Us
            </h1>
            <p className="text-neutral-600 text-lg font-sans leading-relaxed">
              We'd love to hear from you. Whether you have a question about our collections, 
              need styling advice, or want to visit our atelier, our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 lg:p-10 text-center border border-neutral-200 hover:border-gold-300 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-50 text-gold-600 mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-neutral-600 font-sans text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-8">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gold-50 border border-gold-200 p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-100 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif text-neutral-900 mb-2">Message Sent</h3>
                  <p className="text-neutral-600 font-sans">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-neutral-700 font-sans mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-700 font-sans mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-700 font-sans mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-700 font-sans mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 font-sans focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-neutral-950 text-white px-10 py-4 text-sm tracking-wider uppercase font-sans hover:bg-neutral-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map/Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-32">
                <div className="aspect-square bg-neutral-100 mb-8 flex items-center justify-center">
                  {/* Placeholder for map - you could integrate Google Maps here */}
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto text-neutral-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-neutral-500 font-sans">Paris Flagship Store</p>
                    <p className="text-sm text-neutral-400 font-sans mt-1">45 Rue du Faubourg Saint-Honoré</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-neutral-900">Opening Hours</h3>
                  <div className="space-y-2 font-sans text-sm">
                    <div className="flex justify-between text-neutral-600">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Saturday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Appointment CTA */}
      <section className="py-16 lg:py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Exclusive Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Book a Private Appointment
            </h2>
            <p className="text-neutral-400 mb-8 font-sans leading-relaxed">
              Experience our collection in an intimate setting with personalized styling 
              advice from our expert consultants. Available at all our flagship locations.
            </p>
            <button className="bg-gold-500 text-neutral-950 px-10 py-4 text-sm tracking-wider uppercase font-sans hover:bg-gold-400 transition-colors">
              Schedule Appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
