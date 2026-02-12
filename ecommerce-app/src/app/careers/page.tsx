"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const jobListings = [
  {
    id: 1,
    title: "Senior Fashion Designer",
    department: "Design",
    location: "Milan, Italy",
    type: "Full-time",
    description: "Lead the creative direction of our seasonal collections, working closely with our artisan partners to bring innovative designs to life.",
  },
  {
    id: 2,
    title: "E-Commerce Manager",
    department: "Digital",
    location: "New York, USA",
    type: "Full-time",
    description: "Drive our online growth strategy, optimizing the customer journey and expanding our digital presence globally.",
  },
  {
    id: 3,
    title: "Sustainability Coordinator",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    description: "Champion our sustainability initiatives, ensuring ethical practices throughout our supply chain.",
  },
  {
    id: 4,
    title: "Visual Merchandiser",
    department: "Retail",
    location: "Paris, France",
    type: "Full-time",
    description: "Create compelling visual experiences in our flagship stores that embody the Atelier aesthetic.",
  },
  {
    id: 5,
    title: "Content Creator",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "Develop engaging content that tells our brand story across digital platforms.",
  },
  {
    id: 6,
    title: "Customer Experience Associate",
    department: "Customer Service",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Provide exceptional service to our clientele, ensuring every interaction reflects our commitment to excellence.",
  },
];

const values = [
  {
    title: "Creativity",
    description: "We encourage bold ideas and innovative thinking at every level.",
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
  {
    title: "Sustainability",
    description: "We're committed to ethical practices that respect our planet.",
  },
  {
    title: "Collaboration",
    description: "We believe the best work comes from diverse perspectives working together.",
  },
];

const departments = ["All", "Design", "Digital", "Operations", "Retail", "Marketing", "Customer Service"];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = activeDepartment === "All" 
    ? jobListings 
    : jobListings.filter(job => job.department === activeDepartment);

  return (
    <main className="bg-neutral-50 min-h-screen" aria-label="Careers">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/50" />
        </div>
        <div className="relative h-full flex items-center justify-center px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl text-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-6 font-sans"
            >
              Join Our Team
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6"
            >
              Careers at Atelier
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto"
            >
              Be part of a team that&apos;s redefining luxury fashion. We&apos;re looking for 
              passionate individuals who share our commitment to excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-100" aria-label="Our values">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8"
              >
                <h3 className="font-serif text-xl text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 px-4 md:px-6 lg:px-12" aria-label="Open positions">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold-600 text-sm tracking-[0.2em] uppercase mb-4 font-sans">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Current Opportunities
            </h2>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 py-2 text-sm font-sans tracking-wider transition-colors ${
                  activeDepartment === dept
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-gold-400 hover:text-neutral-900"
                }`}
                aria-pressed={activeDepartment === dept}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-neutral-200 bg-white"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4"
                  aria-expanded={expandedJob === job.id}
                >
                  <div>
                    <h3 className="font-serif text-xl text-neutral-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm font-sans text-neutral-500">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <span className="text-gold-600 font-sans text-sm tracking-wider">
                    {expandedJob === job.id ? "Close" : "View Details"}
                  </span>
                </button>
                
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-neutral-100"
                  >
                    <p className="text-neutral-600 font-sans leading-relaxed py-6">
                      {job.description}
                    </p>
                    <button className="px-8 py-3 bg-neutral-900 text-white font-sans text-sm tracking-wider hover:bg-gold-500 hover:text-neutral-900 transition-colors">
                      Apply Now
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <p className="text-center text-neutral-500 font-sans py-12">
              No positions available in this department at the moment.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-neutral-900" aria-label="General application">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-white mb-6"
          >
            Don&apos;t See Your Role?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 font-sans mb-8 max-w-2xl mx-auto"
          >
            We&apos;re always looking for exceptional talent. Send us your resume and 
            tell us how you&apos;d contribute to the Atelier story.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-8 py-4 bg-gold-500 text-neutral-900 font-sans text-sm tracking-wider hover:bg-gold-400 transition-colors"
          >
            Submit General Application
          </motion.button>
        </div>
      </section>
    </main>
  );
}
