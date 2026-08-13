'use client';

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';

export default function Tape() {
  const tapeItems = [
    'Frontend Developer',
    'Webflow Developer',
    'React Developer',
    'Next.js Developer',
    'Building Modern Web Experiences',
    'Learning Full Stack Development',
    'JavaScript Enthusiast',
  ];

  const sectionRef = useRef(null);
  const baseVelocity = -1;
  const xPos = useMotionValue(0);
  const [inView, setInView] = useState(false);

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
  }, []);

  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    let newX = xPos.get() + baseVelocity * (delta / 10);

    if (newX < -contentWidth) {
      newX = 0;
    } else if (newX > 0) {
      newX = -contentWidth;
    }

    xPos.set(newX);
  });

  return (
    <div className="py-20 mb-20 relative w-full max-w-[100vw] overflow-hidden" ref={sectionRef}>
      
      {/* Background Dark Strip */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-0 translate-y-8 rotate-6 bg-[#050403] border-y border-white/5 py-6 md:rotate-3 lg:translate-y-12 lg:py-10 shadow-2xl w-[120vw]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Foreground Marquee Strip */}
      <motion.div
        className="relative z-10 left-1/2 -translate-x-1/2 flex -rotate-3 items-center justify-center bg-[#0a0a0a] border-y border-[#ea580c]/15 py-4 lg:py-5 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md w-[120vw]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) flex-row mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex flex-none"
            style={{ x: xPos }}
            ref={contentRef}
          >
            {[
              ...new Array(4).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {tapeItems.map((item) => (
                    <div
                      key={`${idx}-${item}`}
                      className="inline-flex ml-6 lg:ml-8 gap-6 lg:gap-8 items-center font-bold uppercase tracking-[0.2em]"
                    >
                      <span className="text-sm md:text-base lg:text-lg text-white/90 whitespace-nowrap">
                        {item}
                      </span>
                      
                      {/* Premium 4-Point Star Accent */}
                      <div className="flex items-center justify-center text-[#ea580c]">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                          className="opacity-80"
                        >
                          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
