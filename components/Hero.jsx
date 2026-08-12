'use client';

import { motion } from 'framer-motion';

// Helper component for the CSS geometric grid background
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050403] pointer-events-none">
      {/* Pure CSS Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center',
        }}
      />

      {/* A few subtle geometric accent boxes aligned to the grid */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[16rem] left-[8rem] w-[4rem] h-[4rem] bg-white/[0.03]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[24rem] right-[16rem] w-[4rem] h-[4rem] bg-[#ea580c]/[0.05]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[12rem] left-[20rem] w-[8rem] h-[4rem] bg-white/[0.02]"
      />

      {/* Subtle radial gradient overlay to fade out the edges for depth (using inline style for safety) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle at center, transparent 20%, #050403 120%)',
        }}
      />
    </div>
  );
};

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative min-h-dvh w-full flex flex-col items-center overflow-hidden pt-28 pb-20 lg:pb-12">
      {/* The Premium Geometric Background */}
      <GeometricBackground />

      {/* Unified Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-center mt-auto mb-auto py-12"
      >
        {/* Left Column: Main Typography */}
        <div className="h-full max-w-2xl flex flex-col justify-center items-center text-center gap-6">
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center items-center gap-3"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#ea580c]" />
            <span className="text-xs font-sans font-medium tracking-wide text-white/60">
              Parvez Ahmed — Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-sans font-bold tracking-tight leading-[1.05] text-white"
          >
            Build Stunning <br />
            <span className="text-white/90">Digital Experiences</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-base text-white/50 font-sans leading-relaxed"
          >
            I design and build premium, highly-performant digital interfaces
            that scale your vision and engage your audience.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#050403] font-sans text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:gap-3 z-20"
      >
        <span className="text-[8px] font-sans font-medium tracking-[0.3em] uppercase text-white/30 hidden lg:block">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            height: ['0px', '24px', '0px'],
            opacity: [0, 1, 0],
            y: [0, 10, 20],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-white/30"
        />
      </motion.div>
    </div>
  );
}
