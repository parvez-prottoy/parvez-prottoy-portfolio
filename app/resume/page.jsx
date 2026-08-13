import Contact from '@/components/Contact';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiDownload,
  FiExternalLink,
  FiFileText,
} from 'react-icons/fi';

export const metadata = {
  title: 'Resume',
  description:
    'View the professional resume and CV of Parvez Prottoy. Detailed experience, skills, and qualifications in frontend web development.',
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  const resumeUrl = '/parvezahmedprottoy_cv.pdf';

  return (
    <main className="relative min-h-screen overflow-hidden px-6 md:px-12 lg:px-16 pb-24 pt-32 text-gray-300 bg-[#050403]">
      {/* Ambient Lighting */}
      <div className="absolute left-1/2 top-20 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-[#ea580c]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-64 -z-10 h-100 w-100 rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a] px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-[#ea580c]/30 hover:text-white"
        >
          <FiArrowLeft className="size-4" />
          Back to Home
        </Link>

        <section className="mt-10 grid gap-10 lg:gap-12 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[0.9fr_1.6fr] lg:items-start">
          {/* Left Column: Information Panel */}
          <div className="relative flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] p-8 sm:p-10 shadow-2xl shadow-black/50 backdrop-blur-sm transition-colors duration-500 hover:border-white/10">
              {/* Subtle ambient glows inside the card */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ea580c]/5 blur-[80px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/2 blur-[80px] pointer-events-none" />

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white font-heading relative z-10">
                Resume of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-[#ea580c]">
                  Parvez Prottoy
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/60 relative z-10 max-w-md">
                Web developer focused on building production-ready web
                applications with clean frontend experiences, modern UI
                architectures, and performant user interfaces.
              </p>

              {/* Quick Info Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-1 relative z-10">
                <div className="group rounded-2xl border border-white/5 bg-white/2 p-5 hover:bg-white/4 hover:border-white/10 transition-all duration-300">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ea580c] transition-colors" />
                    Role
                  </p>
                  <p className="font-medium text-white/90 text-sm">
                    Frontend Developer
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/5 bg-white/2 p-5 hover:bg-white/4 hover:border-white/10 transition-all duration-300">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ea580c] transition-colors" />
                    Location
                  </p>
                  <p className="font-medium text-white/90 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/5 bg-white/2 p-5 hover:bg-white/4 hover:border-white/10 transition-all duration-300">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ea580c] transition-colors" />
                    Stack
                  </p>
                  <p className="font-medium text-white/90 text-sm">
                    React · Next.js · UI
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/5 bg-white/2 p-5 hover:bg-white/4 hover:border-white/10 transition-all duration-300">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#ea580c] transition-colors" />
                    Availability
                  </p>
                  <p className="font-medium text-white/90 text-sm">
                    Full-time / Freelance
                  </p>
                </div>
              </div>

              {/* File Info */}
              <div className="mt-10 space-y-6 relative z-10">
                <div className="group rounded-2xl border border-white/5 bg-[#050403] p-5 flex items-center justify-between hover:border-[#ea580c]/30 hover:bg-white/2 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-xl bg-[#0a0a0a] border border-white/5 text-white/40 group-hover:text-[#ea580c] group-hover:border-[#ea580c]/20 transition-all duration-300">
                      <FiFileText className="size-5" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-white text-sm">
                        parvezahmedprottoy_cv.pdf
                      </h2>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-white/60">
                          PDF
                        </span>
                        <span className="text-[10px] font-medium text-white/40">
                          58 KB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row gap-3 pt-2">
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#050403] transition-all hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <FiDownload className="size-3.5 sm:size-4" />
                    Download
                  </a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#050403] px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:border-[#ea580c]/50 hover:bg-[#ea580c]/5 hover:text-[#ea580c]"
                  >
                    <FiExternalLink className="size-3.5 sm:size-4" />
                    Open File
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Resume Preview */}
          <div className="relative h-full min-h-[70vh] lg:min-h-187.5 flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] shadow-2xl shadow-black/50 transition-colors duration-500 hover:border-white/10">
            {/* Browser Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-[#050403] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="size-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <span className="size-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="ml-3 text-xs font-bold text-white/30 uppercase tracking-widest hidden sm:inline-block">
                  Resume Preview
                </span>
              </div>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-white/50 hover:text-[#ea580c] transition-colors flex items-center gap-2"
              >
                <span>Open full screen</span>
                <FiExternalLink className="size-3" />
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="relative flex-1 bg-white/5 p-1">
              <iframe
                title="Resume Preview"
                src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
                className="absolute inset-0 w-full h-full rounded-b-3xl"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section at the bottom */}
      <div className="mt-32">
        <Contact />
      </div>
    </main>
  );
}
