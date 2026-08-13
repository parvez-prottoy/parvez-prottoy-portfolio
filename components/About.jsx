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

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050403] pointer-events-none">
      {/* Pure CSS Grid Pattern with subtle orange lines */}
      <div
        className="absolute inset-0 z-0 opacity-40"
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
            'radial-gradient(circle at 30% 50%, rgba(234,88,12,0.05), transparent 50%)',
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
    { icon: <FaLaptopCode className="text-[#ea580c] size-4" />, text: 'Frontend Development' },
    { icon: <FaCode className="text-[#ea580c] size-4" />, text: 'Webflow CMS' },
    { icon: <FaLaptopCode className="text-[#ea580c] size-4" />, text: 'React & Next.js' },
    { icon: <FaCode className="text-[#ea580c] size-4" />, text: 'Responsive UI' },
  ];

  const floatingBadges = [
    { name: 'Next.js', delay: 0.2, yAnim: [-6, 0], duration: 4, pos: 'top-4 -left-6 sm:top-8 sm:-left-10 md:top-10 md:-left-12' },
    { name: 'React', delay: 0.8, yAnim: [8, 0], duration: 3.5, pos: 'top-12 -right-6 sm:top-16 sm:-right-10 md:top-20 md:-right-12' },
    { name: 'TypeScript', delay: 1.5, yAnim: [6, 0], duration: 4.2, pos: 'top-1/2 -translate-y-1/2 -left-8 sm:-left-12 md:-left-16' },
    { name: 'Node.js', delay: 2.1, yAnim: [-7, 0], duration: 3.8, pos: 'bottom-1/4 -right-6 sm:bottom-1/4 sm:-right-10 md:bottom-1/4 md:-right-12' },
    { name: 'MongoDB', delay: 2.7, yAnim: [9, 0], duration: 4.5, pos: '-bottom-4 left-4 sm:-bottom-6 sm:left-8 md:-bottom-8 md:left-12' },
    { name: 'Webflow', delay: 1.1, yAnim: [-5, 0], duration: 3.9, pos: 'bottom-12 -left-6 sm:bottom-16 sm:-left-10 md:bottom-20 md:-left-12' },
  ];

  return (
    <section
      id="about"
      className="py-24 text-gray-300 relative overflow-hidden min-h-screen flex flex-col justify-center w-full"
    >
      <GeometricBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionTitle title="About Me" subtitle="MORE ABOUT ME" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16 gap-16 lg:gap-24 pt-16 lg:pt-20"
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
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-[#ea580c]/10 blur-3xl -z-10" />

            {/* Animated Avatar Container */}
            <motion.div
              className="relative w-full h-full rounded-full border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center z-10 group"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/personal-avater.webp"
                height={400}
                width={400}
                alt="Parvez Prottoy Avatar Image"
                sizes="(max-width: 768px) 100vw, 320px"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-[#050403] via-transparent to-transparent opacity-50" />
            </motion.div>

            {/* Floating "Hi" Interaction */}
            <motion.div
              className="absolute -top-6 right-4 sm:-top-8 sm:right-6 bg-[#0a0a0a]/90 border border-white/10 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-black/50 z-30 font-sans text-sm font-medium backdrop-blur-md"
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: 'easeInOut',
              }}
            >
              Hi 👋
            </motion.div>

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${badge.pos} flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 text-white/80 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 transition-colors hover:border-[#ea580c]/30 hover:text-white cursor-default`}
                animate={{ y: badge.yAnim }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: badge.duration,
                  ease: 'easeInOut',
                  delay: badge.delay,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_8px_#ea580c]" />
                {badge.name}
              </motion.div>
            ))}
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
            className="text-sm sm:text-base text-white/70 font-sans leading-relaxed mb-5 max-w-xl"
            variants={itemVariants}
          >
            I&rsquo;m a Web Developer and Computer Science student with a
            passion for building clean, modern, and highly-performant digital
            experiences. I specialize in bridging the gap between beautiful
            design and robust engineering.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-white/70 font-sans leading-relaxed mb-8 max-w-xl"
            variants={itemVariants}
          >
            My expertise lies in modern Frontend Development using HTML, CSS,
            JavaScript, React, Next.js, and Tailwind CSS, alongside crafting
            high-end Webflow websites. I&rsquo;m always leveling up my skills to
            build seamless UIs and scalable web applications.
          </motion.p>

          {/* Premium 'What I Do' Card */}
          <motion.div 
            className="mb-10 w-full relative overflow-hidden bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-white/10"
            variants={itemVariants}
          >
            {/* Subtle internal glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea580c]/5 rounded-full blur-3xl" />
            
            <h4 className="text-xs font-bold mb-5 text-white/40 uppercase tracking-widest">
              What I Do
            </h4>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start relative z-10">
              {skillItems.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 bg-[#050403] px-4 py-2 rounded-full border border-white/5 text-sm font-medium text-white/70 hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="w-full flex flex-col sm:flex-row items-center gap-6 lg:justify-start justify-center"
            variants={itemVariants}
          >
            {/* Resume Button matching global CTA style */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#050403] font-sans text-sm font-bold hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-white/5"
            >
              View Resume
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                {
                  href: 'https://github.com/naimur-reza',
                  label: 'GitHub',
                  icon: <FaGithub className="size-5" />,
                },
                {
                  href: 'https://www.linkedin.com/in/naimur-reza',
                  label: 'LinkedIn',
                  icon: <FaLinkedin className="size-5" />,
                },
                {
                  href: 'https://www.facebook.com/iamrezadadu/',
                  label: 'Facebook',
                  icon: <FaFacebookF className="size-5" />,
                },
                {
                  href: 'mailto:naimur.rezaa@gmail.com',
                  label: 'Gmail',
                  icon: <FaEnvelope className="size-5" />,
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center size-12 rounded-full bg-[#0a0a0a] border border-white/5 text-white/50 hover:text-[#ea580c] hover:bg-[#ea580c]/10 hover:border-[#ea580c]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ea580c]/5 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
