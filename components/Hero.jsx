'use client';

import { motion } from 'framer-motion';
import TextType from './TextType';
import ShinyText from './ui/ShinyText';

const cn = (...classes) => classes.filter(Boolean).join(' ');

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-[#ea580c]/[0.15]',
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 0.8 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-linear-to-r to-transparent',
            gradient,
            'backdrop-blur-[1px]',
            'border border-[#ea580c]/[0.25]',
            'shadow-[0_8px_32px_0_rgba(234,88,12,0.15)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.15),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
}
// Helper component for the CSS geometric grid background
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050403] pointer-events-none">
      {/* Pure CSS Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 88, 12, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 88, 12, 0.20)1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center',
        }}
      />

      {/* A few subtle geometric accent boxes aligned to the grid */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-64 left-32 w-16 h-15 bg-white/3"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-96 right-64 w-16 h-16 bg-[#ea580c]/5"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-48 left-80 w-32 h-16 bg-white/2"
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
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.2 + i * 0.05,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };
  const title = 'Coder X Dreamer';
  const letters = title.split('');

  return (
    <div className="relative min-h-dvh w-full flex flex-col items-center overflow-hidden pt-28 pb-20 lg:pb-12">
      {/* The Premium Geometric Background */}
      <GeometricBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#ea580c]/[0.20]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#ea580c]/[0.18]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#fb923c]/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#ea580c]/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#fb923c]/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Unified Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-center mt-auto mb-auto py-12"
      >
        {/* Left Column: Main Typography */}
        <div className="h-full  flex flex-col justify-center items-center text-center gap-6">
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center items-center gap-3"
          >
            {/* <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" /> */}
            <span className="text-xs font-sans font-medium tracking-wide text-white/60">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    letter === 'X'
                      ? 'bg-linear-to-r from-[#ea580c] via-[#fb923c] to-[#c2410c] bg-clip-text text-transparent font-bold'
                      : letter === ' '
                        ? 'w-2'
                        : ''
                  }
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-[32px] sm:text-5xl md:text-6xl xl:text-[4.5rem] font-sans font-bold tracking-tight leading-[1.05] text-white"
          >
            <ShinyText
              text="Hello, I&rsquo;m Parvez"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
            <br />
            <TextType
              text={[
                'Text typing effect',
                'for your websites',
                'Happy coding!',
              ]}
              typingSpeed={65}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              texts={[
                'Frontend Developer',
                'Backend Developer',
                'Software Developer',
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              className="text-white/90"
              hn
            />
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-base text-white/50 font-sans leading-relaxed"
          >
            Frontend Developer building modern, responsive, and high-performing{' '}
            <br />
            web experiences with Webflow, React, Next.js, and Tailwind CSS.
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
