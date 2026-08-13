import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiExternalLink } from 'react-icons/fi';

export default function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-[#0a0a0a] p-12 text-center">
        <h2 className="text-2xl font-bold text-white">No case studies yet</h2>
        <p className="mt-2 text-white/60">
          Seed projects from the admin dashboard to show them here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:gap-10 md:grid-cols-2">
      {projects.map((project, index) => {
        const slug = project.title.toLowerCase().replace(/\s+/g, '-');
        return (
          <article
            key={project.title || index}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] p-4 sm:p-5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ea580c]/30 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)]"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {/* Subtle Accent Glows */}
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#ea580c]/5 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <Link
              href={`/work/${slug}`}
              className="relative  h-full flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-4/3 sm:aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-[#050403]">
                <Image
                  src={project.image || '/og-image.png'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050403]/90 via-transparent to-transparent opacity-80" />

                {/* Project Type Badge */}
                {project.type && (
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0a0a0a]/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md transition-colors group-hover:border-[#ea580c]/30">
                    {project.type}
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="mt-6 flex flex-col flex-1 px-1">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/50 mb-3">
                  {project.year && (
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="size-3.5 text-white/40" />
                      {project.year}
                    </span>
                  )}
                  {project.year && project.role && (
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                  )}
                  {project.role && (
                    <span className="uppercase tracking-wider">
                      {project.role}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#ea580c]">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                {project.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70 transition-colors group-hover:border-white/10 group-hover:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-lg border border-white/5 bg-transparent px-2.5 py-1 text-xs font-medium text-white/40">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Area */}
                <div className="mt-auto pt-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-[#ea580c]">
                    Read case study
                    <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                  {(project.live_link || project.website) && (
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                      <FiExternalLink className="size-4" />
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
