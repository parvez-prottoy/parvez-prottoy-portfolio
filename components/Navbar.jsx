'use client';
import { AnimatePresence, motion } from 'framer-motion';
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
  { path: '/more', label: 'More' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center mt-6">
      <nav className="w-full flex items-center justify-center px-4">
        {/* Desktop Menu */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center justify-center space-x-1 px-1.5 py-1.5 rounded-full border border-white/5 bg-background/50 shadow-lg backdrop-blur-xl supports-backdrop-filter:bg-background/30"
        >
          {options.map((option) => {
            const isActive = pathname === option.path;
            return (
              <li key={option.path} className="relative">
                <Link
                  href={option.path}
                  className={`relative z-10 px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full block ${
                    isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-white/90'
                  }`}
                >
                  {option.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveIndicator"
                    className="absolute inset-0 z-0 rounded-full bg-white/5"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  </motion.div>
                )}
              </li>
            );
          })}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden fixed right-5 top-5 z-50 p-3 rounded-full border border-white/5 bg-background/50 backdrop-blur-xl shadow-lg supports-backdrop-filter:bg-background/30 focus:outline-none"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
                <FaTimes className="text-white text-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="text-white text-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl supports-backdrop-filter:bg-background/80"
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.ul
                className="flex flex-col items-center justify-center h-full space-y-4"
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
                        className={`relative z-10 block px-8 py-3 text-2xl font-heading tracking-wide transition-all duration-300 rounded-full ${
                          isActive
                            ? 'text-white'
                            : 'text-muted-foreground hover:text-white/90'
                        }`}
                      >
                        {option.label}
                      </Link>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 z-0 bg-white/5 rounded-full"
                          layoutId="mobileActiveBackground"
                          transition={{
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                          }}
                        >
                          <div className="absolute bottom-px left-1/2 h-px w-1/3 -translate-x-1/2 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                        </motion.div>
                      )}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
