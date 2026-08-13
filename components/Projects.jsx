'use client';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectSidebar from './ProjectSidebar';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);
  // Handle project hover and selection
  const handleProjectHover = (index) => {
    setActiveProject(index);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projectRefs]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="work"
      className="relative mx-auto w-full max-w-7xl py-24 px-6 md:px-12 lg:px-16"
    >
      <SectionTitle title="Projects" subtitle="FEATURED CASE STUDIES" />

      <div className="relative mx-auto flex w-full lg:gap-16">
        <div className="mx-auto flex w-full flex-col gap-y-12 md:gap-y-20 lg:w-[60%]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="w-full"
            >
              <ProjectCard
                project={project}
                index={index}
                onHover={handleProjectHover}
                isActive={activeProject === index}
              />
            </div>
          ))}
        </div>

        {/* Sticky sidebar for desktop */}
        <ProjectSidebar project={projects[activeProject]} />
      </div>

      <motion.div className="flex justify-center mt-5 md:mt-16">
        <Link
          href="/work"
          className="flex items-center gap-2 text-neutral-300 transition-colors hover:text-neutral-100"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            See more projects
          </motion.span>
          <motion.div
            className="rounded-full bg-white/5 p-0.5 backdrop-blur-xs"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}
