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
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-[#050403] p-2 transition-all duration-500 hover:border-[#ea580c]/30 hover:bg-white/2 hidden lg:block"
          href={project.website}
        >
          {/* Subtle Accent Glow on Hover */}
          <div className="absolute inset-0 bg-[#ea580c]/0 transition-colors duration-500 group-hover:bg-[#ea580c]/5 -z-10" />

          {/* Inner Card Container */}
          <div className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 h-full transition-all duration-500">
            {/* Soft Radial Glow behind the image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.1),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

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
                className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-[#ea580c]/30 group-hover:text-[#ea580c] transition-colors"
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
              <div className="relative w-full max-w-[90%] md:max-w-[85%] rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
                <Image
                  alt={project.title}
                  loading="lazy"
                  width={1203}
                  height={753}
                  src={project.image}
                  className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />

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
