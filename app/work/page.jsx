import { projects } from '@/data/projects';
import ProjectsGrid from '@/components/ProjectsGrid';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 md:px-12 lg:px-16 pb-24 pt-32 text-gray-300">
      
      {/* Premium Background Ambient Lighting */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ea580c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-64 -z-10 h-[400px] w-[400px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 -z-10 h-72 w-72 rounded-full bg-[#ea580c]/5 blur-[120px] pointer-events-none" />

      <section className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-white/70">
            <FiBriefcase className="size-3.5 text-[#ea580c]" />
            Project Case Studies
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl font-heading">
            Work that tells a{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-[#ea580c]/70">
              real story
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            A closer look at the problems I solved, the decisions I made, and
            the lessons I learned while building full-stack products,
            dashboards, and client-focused web experiences.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050403] transition-all hover:bg-white/90 hover:scale-[1.02]"
            >
              Browse case studies
              <FiArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div id="case-studies" className="mt-24 scroll-mt-24">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
