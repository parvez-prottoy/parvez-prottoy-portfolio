'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCode,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
} from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

// Reusing GeometricBackground from Hero to maintain consistency
const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050403] pointer-events-none">
      {/* Pure CSS Grid Pattern with subtle orange lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 88, 12, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 88, 12, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          backgroundPosition: 'center center',
        }}
      />
      {/* Soft radial glow in the center-left to highlight the avatar area */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(234,88,12,0.08), transparent 50%)',
        }}
      />
      {/* Edge fade */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle at center, transparent 30%, #050403 120%)',
        }}
      />
    </div>
  );
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skillItems = [
    {
      icon: <FaLaptopCode className="text-[#ea580c]" />,
      text: 'Frontend Development',
    },
    {
      icon: <FaCode className="text-[#ea580c]" />,
      text: 'Webflow CMS',
    },
    {
      icon: <FaLaptopCode className="text-[#ea580c]" />,
      text: 'React & Next.js',
    },
    {
      icon: <FaCode className="text-[#ea580c]" />,
      text: 'Responsive UI',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 text-gray-300 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <GeometricBackground />

      <div className="relative z-10">
        <SectionTitle title="About Me" subtitle="MORE ABOUT ME" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16 gap-16 lg:gap-24 pt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Left Column: Avatar & Floating Badges */}
        <motion.div
          className="relative order-1 w-full lg:w-1/2 flex justify-center py-12 lg:py-0"
          variants={itemVariants}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-[#ea580c]/10 blur-3xl -z-10" />

            {/* Animated Avatar Container */}
            <motion.div
              className="relative w-full h-full rounded-full border border-[#ea580c]/20 bg-[#050403] shadow-[0_0_40px_rgba(234,88,12,0.1)] overflow-hidden flex items-center justify-center z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              {/* Replace /placeholder.svg with your actual image path (e.g., /profile.png) */}
              <Image
                src="/personal-avater.webp"
                height={300}
                width={300}
                alt="Parvez Prottoy Avatar Image."
                className="w-full h-full object-cover opacity-80 hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050403] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating "Hi" Interaction */}
            <motion.div
              className="absolute -top-6 right-4 sm:-top-8 sm:right-6 bg-[#050403] border border-[#ea580c]/30 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-[#ea580c]/10 z-30 font-sans text-sm font-medium backdrop-blur-md"
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: 'easeInOut',
              }}
            >
              Hi 👋
            </motion.div>

            {/* Floating Tech Badges - 6 total */}

            {/* 1. Next.js (Top Left) */}
            <motion.div
              className="absolute top-4 -left-6 sm:top-8 sm:-left-10 md:top-10 md:-left-12 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              Next.js
            </motion.div>

            {/* 2. React (Top Right) */}
            <motion.div
              className="absolute top-12 -right-6 sm:top-16 sm:-right-10 md:top-20 md:-right-12 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: 'easeInOut',
                delay: 0.8,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              React
            </motion.div>

            {/* 3. TypeScript (Middle Left) */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-12 md:-left-16 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4.2,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              TypeScript
            </motion.div>

            {/* 4. Node.js (Bottom Right) */}
            <motion.div
              className="absolute bottom-1/4 -right-6 sm:bottom-1/4 sm:-right-10 md:bottom-1/4 md:-right-12 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, -7, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.8,
                ease: 'easeInOut',
                delay: 2.1,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              Node.js
            </motion.div>

            {/* 5. MongoDB (Bottom Center/Left) */}
            <motion.div
              className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-8 md:-bottom-8 md:left-12 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, 9, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4.5,
                ease: 'easeInOut',
                delay: 2.7,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              MongoDB
            </motion.div>

            {/* 6. Webflow (Bottom Left) */}
            <motion.div
              className="absolute bottom-12 -left-6 sm:bottom-16 sm:-left-10 md:bottom-20 md:-left-12 flex items-center gap-2 bg-[#050403]/80 border border-[#ea580c]/20 text-white/90 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 backdrop-blur-md"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.9,
                ease: 'easeInOut',
                delay: 1.1,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_6px_#ea580c]" />{' '}
              Webflow
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          className="order-2 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight mb-6 text-white leading-tight"
            variants={itemVariants}
          >
            Hey, I&rsquo;m <span className="text-[#ea580c]">Parvez.</span>
          </motion.h3>

          <motion.p
            className="text-sm sm:text-base text-white/60 font-sans leading-relaxed mb-5 max-w-xl"
            variants={itemVariants}
          >
            I&rsquo;m a Web Developer and Computer Science student with a
            passion for building clean, modern, and highly-performant digital
            experiences. I specialize in bridging the gap between beautiful
            design and robust engineering.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-white/60 font-sans leading-relaxed mb-8 max-w-xl"
            variants={itemVariants}
          >
            My expertise lies in modern Frontend Development using HTML, CSS,
            JavaScript, React, Next.js, and Tailwind CSS, alongside crafting
            high-end Webflow websites. I&rsquo;m always leveling up my skills to
            build seamless UIs and scalable web applications.
          </motion.p>

          <motion.div className="mb-10 w-full" variants={itemVariants}>
            <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">
              What I Do
            </h4>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 text-sm text-white/80 hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span>{skill.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full flex flex-col sm:flex-row items-center gap-6 lg:justify-start justify-center"
            variants={itemVariants}
          >
            {/* Resume Button matching Hero CTA style */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#050403] font-sans text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              View Resume
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                {
                  href: 'https://github.com/naimur-reza',
                  label: 'GitHub',
                  icon: <FaGithub className="text-lg" />,
                },
                {
                  href: 'https://www.linkedin.com/in/naimur-reza',
                  label: 'LinkedIn',
                  icon: <FaLinkedin className="text-lg" />,
                },
                {
                  href: 'https://www.facebook.com/iamrezadadu/',
                  label: 'Facebook',
                  icon: <FaFacebookF className="text-lg" />,
                },
                {
                  href: 'mailto:naimur.rezaa@gmail.com',
                  label: 'Gmail',
                  icon: <FaEnvelope className="text-lg" />,
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/5 text-white/60 hover:text-[#ea580c] hover:bg-[#ea580c]/10 hover:border-[#ea580c]/30 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
