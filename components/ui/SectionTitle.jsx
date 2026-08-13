export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 w-full">
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto overflow-hidden py-4">
        
        {/* Subtle Background Glow behind the title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 rounded-full bg-[#ea580c]/5 blur-3xl pointer-events-none" />

        {/* Large background text */}
        <span 
          className="text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[9rem] leading-none font-extrabold bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent select-none tracking-tighter whitespace-nowrap text-center z-0 pointer-events-none"
        >
          {title.toUpperCase()}
        </span>

        {/* Main foreground title */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 capitalize tracking-tight z-10 whitespace-nowrap drop-shadow-xl">
          {title}
        </h2>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6 z-10">
        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#ea580c]/40" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#ea580c] shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#ea580c]/40" />
      </div>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] text-white/70 uppercase max-w-md text-center font-semibold z-10">
        {subtitle}
      </p>
    </div>
  );
}
