import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import TechIcon from './ui/TechIcon';

export default function ProjectMobileCard({ project }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="mt-6 mb-12 flex flex-col w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl lg:hidden relative"
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, margin: '-50px' }}
      style={{ '--card-color': project.shadowColor || '#ea580c' }}
    >
      {/* Project Image Area */}
      <motion.div
        className="relative w-full h-56 sm:h-72 overflow-hidden border-b border-white/5 bg-black/50 flex items-center justify-center"
        variants={item}
      >
        {/* Subtle Glow behind image */}
        <div 
          className="absolute inset-0 pointer-events-none z-0" 
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.shadowColor || '#ea580c'}1A, transparent 70%)` }}
        />

        {project.image ? (
          <Image
            alt={project.title}
            src={project.image}
            fill
            loading="lazy"
            className="object-cover object-top opacity-95 z-10"
            sizes="(max-width: 1024px) 100vw"
          />
        ) : (
          <span className="text-white/20 font-medium tracking-widest uppercase z-10">Image Coming Soon</span>
        )}

        {/* Gradient Overlay for seamless blend to content */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
      </motion.div>

      {/* Content Area */}
      <div className="flex flex-col p-6 sm:p-8 h-full">
        {/* Category & Title */}
        <motion.div className="flex flex-col mb-4" variants={item}>
          <p 
            className="mb-2 text-xs sm:text-sm font-bold tracking-widest uppercase"
            style={{ color: 'var(--card-color)' }}
          >
            {project.type}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white/60 mb-6 text-sm sm:text-base font-sans leading-relaxed"
          variants={item}
        >
          {project.description}
        </motion.p>

        {/* Features List */}
        <motion.ul
          className="text-white/80 mb-8 flex flex-col gap-y-3 text-sm sm:text-base font-sans"
          variants={item}
        >
          {(project.features || []).map((feature, idx) => (
            <li key={idx} className="flex items-start leading-relaxed">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mt-1 mr-3 shrink-0"
                style={{ color: 'var(--card-color)' }}
              >
                <path d="M12 2L22 12L12 22L2 12L12 2Z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </motion.ul>

        {/* Technology Stack */}
        <motion.div
          className="mb-8 flex flex-wrap gap-2 sm:gap-3"
          variants={item}
        >
          {project.techIcons?.map((tech, idx) => (
            <TechIcon key={idx} tech={tech} />
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex w-full gap-3 sm:gap-4 mt-auto flex-wrap"
          variants={item}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              <FaGithub className="size-5" />
              <span className="font-medium text-sm sm:text-base">Source</span>
            </a>
          )}
          {project.client_link && (
            <a
              href={project.client_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              <FaGithub className="size-5" />
              <span className="font-medium text-sm sm:text-base">Client</span>
            </a>
          )}
          {project.server_link && (
            <a
              href={project.server_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              <FaGithub className="size-5" />
              <span className="font-medium text-sm sm:text-base">Server</span>
            </a>
          )}

          {(project.live_link || project.website) && (
            <a
              href={project.live_link || project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border transition-all duration-300 active:scale-[0.98]"
              style={{
                backgroundColor: `${project.shadowColor || '#ea580c'}1A`,
                borderColor: `${project.shadowColor || '#ea580c'}4D`,
                color: project.shadowColor || '#ea580c'
              }}
            >
              <span className="font-medium text-sm sm:text-base">Visit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
