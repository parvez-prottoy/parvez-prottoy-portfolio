'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiPenTool } from 'react-icons/fi';

export default function BlogClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050403] px-6 pb-24 pt-32 text-gray-300 md:px-12 lg:px-16">
      {/* Ambient Lighting Background */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-[#ea580c]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-64 -z-10 h-100 w-100 rounded-full bg-white/5 blur-[120px]" />

      <section className="mx-auto w-full max-w-7xl relative">
        <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-12">
          <SectionTitle title="My Blog" subtitle="LATEST ARTICLES" />
          <p className="mt-6 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-white/40">
            Thoughts, insights, and technical deep-dives into modern web
            development, software engineering, and UI design.
          </p>
        </div>

        {/* The Skeleton Grid underneath the Coming Soon overlay */}
        <div className="relative mt-8">
          {/* Faded/Skeleton Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-20 select-none pointer-events-none filter grayscale pb-20">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a]"
              >
                <div className="h-48 w-full bg-[#111]" />
                <div className="flex flex-1 flex-col p-6 sm:p-8 space-y-4">
                  <div className="h-6 w-3/4 rounded-md bg-[#222]" />
                  <div className="h-6 w-1/2 rounded-md bg-[#222]" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded-md bg-[#1a1a1a]" />
                    <div className="h-3 w-5/6 rounded-md bg-[#1a1a1a]" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5 flex justify-between">
                    <div className="h-3 w-20 rounded-md bg-[#222]" />
                    <div className="h-6 w-6 rounded-full bg-[#222]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Foreground Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-linear-to-b from-transparent via-[#050403]/80 to-[#050403] pt-32 backdrop-blur-[2px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex w-full max-w-2xl flex-col items-center text-center"
            >
              {/* Premium Icon Container */}
              <motion.div
                variants={itemVariants}
                className="relative mb-8 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#ea580c]/20 blur-3xl rounded-full" />
                <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-[0_0_40px_rgba(234,88,12,0.15)]">
                  <FiPenTool className="size-8 sm:size-10 text-[#ea580c]" />
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white font-heading tracking-tight"
              >
                Work in{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ea580c] to-[#ea580c]/70">
                  Progress
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-sm sm:text-lg leading-relaxed text-white/60 max-w-md mx-auto"
              >
                I&apos;m currently writing my first few articles. Deep dives
                into frontend development and UI architecture are coming soon!
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/2 px-6 py-3 text-sm font-medium text-white/50 shadow-xl backdrop-blur-md"
              >
                <FiClock className="size-4 text-[#ea580c]" />
                <span>Stay tuned for updates</span>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-8 py-3.5 text-sm font-bold text-gray-300 transition-all duration-300 hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 hover:text-white hover:-translate-y-1 shadow-lg shadow-black/50"
                >
                  <FiArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
