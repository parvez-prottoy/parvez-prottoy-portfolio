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
  const [inView, setInView] = useState(false);
  const baseVelocity = -0.5; // Slightly slower, premium smooth speed
  const xPos = useMotionValue(0);

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

  const [setWidth, setSetWidth] = useState(0);
  const firstSetRef = useRef(null);

  // Measure exactly one set of items for a flawless loop
  useEffect(() => {
    const measureWidth = () => {
      if (firstSetRef.current) {
        setSetWidth(firstSetRef.current.offsetWidth);
      }
    };
    
    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  useAnimationFrame((_, delta) => {
    if (setWidth === 0) return;
    
    let newX = xPos.get() + baseVelocity * (delta / 10);

    // Flawless jump-back
    if (newX <= -setWidth) {
      newX += setWidth;
    } else if (newX > 0) {
      newX -= setWidth;
    }

    xPos.set(newX);
  });

  return (
    <div className="py-24 relative w-full max-w-[100vw] overflow-hidden" ref={sectionRef}>
      
      {/* Background Dark Strip */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-0 translate-y-8 rotate-6 bg-[#050403] border-y border-white/5 py-8 md:rotate-3 lg:translate-y-12 lg:py-12 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-[120vw]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Foreground Marquee Strip */}
      <motion.div
        className="relative z-10 left-1/2 -translate-x-1/2 flex -rotate-3 items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-xl border-y border-[#ea580c]/20 py-4 lg:py-5 shadow-[0_0_50px_rgba(0,0,0,0.8)] w-[120vw]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] w-full">
          <motion.div
            className="flex flex-none"
            style={{ x: xPos }}
          >
            {[...new Array(4)].map((_, idx) => (
              <div 
                key={idx} 
                // Only attach ref to the first set to measure its exact width
                ref={idx === 0 ? firstSetRef : null}
                className="flex flex-none items-center gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16"
              >
                {tapeItems.map((item, itemIdx) => (
                  <Fragment key={`${idx}-${itemIdx}`}>
                    <span className="text-sm md:text-base lg:text-lg font-bold text-white/90 uppercase tracking-[0.2em] whitespace-nowrap drop-shadow-md">
                      {item}
                    </span>
                    
                    {/* Premium 4-Point Star Accent */}
                    <div className="flex items-center justify-center text-[#ea580c] drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                      </svg>
                    </div>
                  </Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
