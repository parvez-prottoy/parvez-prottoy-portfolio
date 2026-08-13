import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import TechIcon from './ui/TechIcon';

export default function ProjectSidebar({ project }) {
  return (
    <div className="hidden py-4 lg:sticky lg:block lg:w-[40%]">
      <div className="sticky top-40">
        <div className="flex">
          {/* Subtle Accent Line */}
          <div
            aria-hidden="true"
            className="my-5 mr-6 h-1 min-w-6 rounded-full bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.5)]"
          />
          
          <div className="flex flex-col items-start lg:h-125">
            {/* Title & Github */}
            <motion.div
              className="flex items-center gap-4"
              key={project?.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-white text-3xl font-bold tracking-tight">
                {project?.title || 'Project Title'}
              </h3>
              {project?.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="translate-y-px cursor-pointer rounded-full p-2 bg-white/5 border border-white/10 text-white/60 hover:text-[#ea580c] hover:border-[#ea580c]/30 hover:bg-[#ea580c]/10 transition-all duration-300"
                  href={project?.github}
                >
                  <FaGithub className="size-5" />
                </a>
              )}
            </motion.div>

            {/* Project Type */}
            <motion.p
              className="text-white/40 mt-1 mb-4 text-sm font-medium tracking-widest uppercase"
              key={`type-${project?.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {project?.type || 'Personal Project'}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-white/60 mb-6 text-base font-sans leading-relaxed max-w-sm"
              key={`desc-${project?.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {project?.description || 'Project description'}
            </motion.p>

            {/* Features List */}
            <motion.ul
              className="text-white/80 mt-2 flex flex-col gap-y-3 text-sm font-sans max-w-sm"
              key={`features-${project?.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {(project?.features || []).map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx + 0.3 }}
                >
                  {/* Subtle Orange Diamond Bullet */}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-1 mr-3 shrink-0 text-[#ea580c]"
                  >
                    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tech icons */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              key={`tech-${project?.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {project?.techIcons?.map((tech, idx) => (
                <TechIcon key={idx} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
