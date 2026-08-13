'use client';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const options = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    
    // Always show at the top of the page (e.g., < 50px)
    if (latest <= 50) {
      setIsHidden(false);
      return;
    }

    // Scrolling down & diff > 5 to ignore tiny jiggle
    if (latest > previous && latest - previous > 5) {
      setIsHidden(true);
    } 
    // Scrolling up & diff > 5 to ignore tiny jiggle
    else if (latest < previous && previous - latest > 5) {
      setIsHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 md:py-8 pointer-events-auto">
        {/* Logo (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isHidden ? 0 : 1,
            x: isHidden ? -10 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
          className="relative z-50"
        >
          <Link
            href="/"
            className="text-2xl font-heading font-bold text-white tracking-tight"
          >
            Parvez<span className="text-primary">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu (Center) */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="border border-white/10 bg-white/5 px-1.5 py-1 md:flex items-center justify-center space-x-5 rounded-full text-accent-foreground backdrop-blur-md hidden"
        >
          {options.map((option) => {
            const isActive = pathname === option.path;
            return (
              <motion.li
                className="cursor-pointer focus:text-accent-foreground ring-ring/10 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-base font-semibold text-white/70 transition-[text-shadow,color] duration-200 hover:text-white/85 relative"
                key={option.path}
                data-active={isActive}
                initial={{ opacity: 0.9 }}
                animate={{
                  opacity: 1,
                  color: isActive
                    ? 'rgba(255, 255, 255, 0.95)'
                    : 'rgba(255, 255, 255, 0.7)',
                }}
                transition={{ duration: 0.2 }}
              >
                <Link href={option.path}>{option.label}</Link>
                {isActive && (
                  <motion.div
                    className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full"
                    layoutId="activeBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                  >
                    <motion.div
                      className="bg-primary absolute -top-2.25 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"
                      layoutId="activeIndicator"
                    >
                      <motion.div
                        className="bg-primary/10 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-sm"
                        layoutId="glow1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      />
                      <motion.div
                        className="bg-primary/10 absolute -top-1 h-6 w-8 rounded-full blur-sm"
                        layoutId="glow2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.05 }}
                      />
                      <motion.div
                        className="bg-primary/10 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"
                        layoutId="glow3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA Button (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isHidden ? 0 : 1,
            x: isHidden ? 10 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
          className="hidden md:block relative z-50"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#050403] text-sm font-medium font-sans hover:bg-white/90 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="text-xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Fullscreen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-40 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.ul
                className="flex flex-col items-center justify-center h-full space-y-6"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {options.map((option) => {
                  const isActive = pathname === option.path;
                  return (
                    <motion.li
                      key={option.path}
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: 20, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden"
                    >
                      <Link
                        href={option.path}
                        onClick={() => setIsOpen(false)}
                        className={`relative z-10 block px-8 py-2 text-3xl font-heading tracking-wide transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-white/40 hover:text-white'
                        }`}
                      >
                        {option.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                  className="pt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black text-lg font-medium font-sans"
                  >
                    Get in touch
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
