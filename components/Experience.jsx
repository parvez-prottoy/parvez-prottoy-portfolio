'use client';

import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Codexaa Limited',
    duration: 'March 2025 – Present',
    type: 'Current Role',
    highlights: [
      'Designed and implemented secure backend APIs using Node.js and TypeScript with role-based access control and complex business logic.',
      'Built 5 production-ready apps using React, Next.js, and TypeScript across the full stack.',
      'Reduced PostgreSQL/MongoDB query latency by 90% through strategic indexing and aggregation pipeline optimization.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ena-Ema Technology',
    duration: 'Dec 2024 – March 2025',
    type: 'Previous Role',
    highlights: [
      'Architected scalable RESTful backend services and APIs for 6 production applications.',
      "Led a 3-person team to successfully relaunch the agency's V2 site.",
      'Reduced bug backlog by 85% and optimized database queries for 10% faster load times.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="experience"
      className="relative mx-auto w-full max-w-7xl overflow-hidden py-24 px-6 md:px-12 lg:px-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#ea580c]/5 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/5 blur-[100px]" />
      </div>

      <SectionTitle title="Experience" subtitle="WHERE I HAVE WORKED" />

      <div className="relative mx-auto mt-8 max-w-4xl">
        {/* Timeline vertical connector line */}
        <div className="absolute left-5 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#ea580c]/60 via-white/10 to-transparent md:block" />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative md:pl-20"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 18,
                  delay: index * 0.1 + 0.2,
                }}
                className={`absolute left-0 top-8 hidden size-10 items-center justify-center rounded-full border ${
                  experience.type === 'Current Role'
                    ? 'border-[#ea580c]/40 bg-[#050403] shadow-[0_0_20px_rgba(234,88,12,0.2)]'
                    : 'border-white/20 bg-[#050403]'
                } md:flex`}
              >
                <span
                  className={`size-3 rounded-full ${
                    experience.type === 'Current Role'
                      ? 'bg-[#ea580c]'
                      : 'bg-white/40'
                  }`}
                />
              </motion.div>

              {/* Experience Card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0a0a0a] p-6 shadow-2xl transition-all duration-400 ease-out hover:-translate-y-2 hover:border-[#ea580c]/30 hover:bg-[#111] md:p-10">
                {/* Subtle Hover Glows */}
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#ea580c]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#ea580c]/10" />
                
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    {/* Role Type Badge */}
                    <div
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase ${
                        experience.type === 'Current Role'
                          ? 'border-[#ea580c]/20 bg-[#ea580c]/10 text-[#ea580c]'
                          : 'border-white/10 bg-white/5 text-white/60'
                      }`}
                    >
                      {experience.type}
                    </div>

                    <div>
                      {/* Job Title */}
                      <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {experience.role}
                      </h3>
                      {/* Company Name */}
                      <p className="mt-2 text-lg font-semibold tracking-wide text-[#ea580c]">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex w-fit items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-white/70">
                    {experience.duration}
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="relative mt-8 space-y-4">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-4 text-sm leading-relaxed text-white/60 md:text-base"
                    >
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="mt-1.5 shrink-0 text-[#ea580c]/80"
                      >
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
