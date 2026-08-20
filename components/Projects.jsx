'use client';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
  // Select first 3 projects per requirement
  const featured = projects[0];
  const secondary = projects.slice(1, 3);

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

      <div className="mt-16 flex flex-col gap-8 md:gap-10">
        {/* Featured Project (01) */}
        {featured && <FeaturedCard project={featured} />}

        {/* Secondary Projects Grid (02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {secondary.map((project, idx) => (
            <SecondaryCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>

      <motion.div className="flex justify-center mt-5 md:mt-16">
        <Link
          href="/projects"
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

function FeaturedCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] shadow-2xl flex flex-col lg:flex-row transition-all duration-500 hover:border-white/10"
      style={{ '--card-color': project.shadowColor || '#ea580c' }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-125 h-125 bg-(--card-color) opacity-[0.03] blur-[120px] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]" />

      {/* Content Side */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:w-[45%] z-10 relative">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
            01
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-(--card-color)">
            {project.type}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-(--card-color)">
          {project.title}
        </h3>

        <p className="text-white/60 text-base leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-10 flex flex-wrap gap-2">
          {project.tags?.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 5 && (
            <span className="rounded-lg border border-white/5 bg-transparent px-3 py-1.5 text-xs font-medium text-white/40">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {(project.live_link || project.website) && (
            <a
              href={project.live_link || project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 border hover:scale-105 active:scale-95"
              style={{
                backgroundColor: `${project.shadowColor || '#ea580c'}1A`,
                borderColor: `${project.shadowColor || '#ea580c'}4D`,
                color: project.shadowColor || '#ea580c',
              }}
            >
              Visit Live <FiExternalLink className="size-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <FiGithub className="size-4" /> Source
            </a>
          )}
        </div>
      </div>

      {/* Image Side */}
      <div className="lg:w-[55%] relative min-h-87.5 lg:min-h-full overflow-hidden p-6 md:p-10 flex items-center justify-center bg-[#050403]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: project.gradient }}
        />

        <div className="relative w-full h-full aspect-4/3 lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-5000 ease-in-out md:group-hover:object-bottom"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#111]">
              <span className="text-white/20 uppercase tracking-widest text-sm font-bold relative z-10">
                Image Coming Soon
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-[#050403]/90 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

function SecondaryCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] shadow-2xl flex flex-col h-full transition-all duration-500 hover:border-white/10 hover:-translate-y-1"
      style={{ '--card-color': project.shadowColor || '#ea580c' }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-(--card-color) opacity-[0.03] blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.06]" />

      {/* Image Side - Top */}
      <div className="relative w-full aspect-16/10 overflow-hidden border-b border-white/5 bg-[#050403] p-5 pb-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: project.gradient }}
        />

        <div className="relative w-full h-full rounded-t-2xl overflow-hidden border border-white/10 border-b-0 shadow-2xl transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-5000 ease-in-out md:group-hover:object-bottom"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#111]">
              <span className="text-white/20 uppercase tracking-widest text-xs font-bold relative z-10">
                Coming Soon
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-[#050403]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      </div>

      {/* Content Side - Bottom */}
      <div className="flex flex-col p-8 flex-1 z-10 relative">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md">
            0{index + 2}
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-(--card-color)">
            {project.type}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-(--card-color)">
          {project.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          {(project.live_link || project.website) && (
            <a
              href={project.live_link || project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 text-white group-hover:text-(--card-color)"
            >
              View Project{' '}
              <FiArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors p-2"
              >
                <FiGithub className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
