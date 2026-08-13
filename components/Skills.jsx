'use client';
import { techStack } from '@/data/techStack';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import SectionTitle from './ui/SectionTitle';

export default function Skills() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const skillsScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="skills"
      className="relative mx-auto flex h-full w-full max-w-7xl flex-col py-24 px-6 md:px-12 lg:px-16"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          {/* Subtle Warm Background Glows */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-[#ea580c]/5"
            animate={{
              y: [0, -20, 0],
              transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-white/5"
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              },
            }}
          />
        </motion.div>
      </div>

      <div className="relative mx-auto size-fit overflow-hidden mb-8">
        <motion.div
          className="relative mx-auto size-75 translate-y-24 md:size-95 md:translate-y-32"
          style={{ transform: 'rotate(78.5deg)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            inView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            width={300}
            height={300}
            src="/gpt.jpg"
            draggable={false}
            alt="skills cover rotating image"
            className="z-10 w-full select-none"
          />
        </motion.div>
        <motion.h2
          className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center z-30 pb-5 mb-0 md:mb-0 bottom-0 size-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionTitle title="Skills" subtitle="I constantly try to improve" />
        </motion.h2>

        {/* Improved gradient fade masking the image */}
        <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-[#000000]/50 to-[#000000]"></div>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="mx-auto mt-4 flex max-w-225 flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5"
        style={{ scale: skillsScale }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -3,
              transition: { type: 'spring', stiffness: 400, damping: 25 },
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 hover:text-white hover:shadow-[0_4px_20px_rgba(234,88,12,0.1)] cursor-default"
          >
            {tech.icon && (
              <div className="flex shrink-0">
                <Image
                  height={20}
                  width={20}
                  alt={tech.name}
                  src={tech.icon}
                  unoptimized
                  className="w-4 sm:w-5 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <span className="tracking-wide">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
