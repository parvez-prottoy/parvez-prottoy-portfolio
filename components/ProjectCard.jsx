import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectMobileCard from './ProjectMobileCard';

export default function ProjectCard({ project, index, onHover, isActive }) {
  return (
    <div
      className="project-card flex w-full flex-row"
      onMouseEnter={() => onHover(index)}
    >
      <div className="flex flex-col w-full">
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-[#050403] p-2 transition-all duration-500 hover:bg-white/2 hidden lg:block"
          href={project.live_link || project.website || '#'}
          style={{ '--hover-border-color': project.shadowColor || '#ea580c' }}
        >
          {/* Subtle Accent Glow on Hover */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 -z-10" 
            style={{ background: project.gradient || 'linear-gradient(to right, #ea580c, #fb923c)' }} 
          />

          {/* Inner Card Container */}
          <div 
            className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 h-full transition-all duration-500"
            style={{ borderColor: 'var(--hover-border-color)' }}
          >
            {/* Soft Radial Glow behind the image */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" 
              style={{ background: `radial-gradient(circle at 50% 0%, ${project.shadowColor || '#ea580c'}1A, transparent 70%)` }}
            />

            {/* Mobile Title Header */}
            <motion.div
              className={`w-full flex-row items-center justify-between px-6 py-6 hidden md:flex text-white/90`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isActive ? 1 : 0.5 }}
            >
              <h3 className="max-w-[85%] text-xl font-medium tracking-wide">
                {project.mobileDescription}
              </h3>

              <motion.div
                className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors"
                style={{ 
                   borderColor: 'var(--hover-border-color)', 
                   color: 'var(--hover-border-color)' 
                }}
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Project Screenshot Container */}
            <div className="w-full flex justify-center p-4 md:p-8 md:pt-0 overflow-hidden relative">
              <div className="relative w-full max-w-[90%] md:max-w-[85%] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center bg-[#111] aspect-[1203/753]">
                {project.image ? (
                  <Image
                    alt={project.title}
                    loading="lazy"
                    fill
                    src={project.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 50vw"
                    className="w-full h-full object-cover object-top opacity-90 transition-all duration-[5000ms] ease-in-out md:group-hover:object-bottom group-hover:opacity-100"
                  />
                ) : (
                  <span className="text-white/20 font-medium tracking-widest uppercase relative z-10">Image Coming Soon</span>
                )}

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </motion.a>
        <ProjectMobileCard project={project} />
      </div>
    </div>
  );
}
