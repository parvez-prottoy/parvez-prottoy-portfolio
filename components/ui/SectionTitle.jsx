import ShinyText from './ShinyText';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#ea580c]/10 blur-3xl" />

        {/* Large background text */}
        <span className="text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] font-extrabold bg-linear-to-b from-white/15 to-white/5 bg-clip-text text-transparent select-none tracking-tighter whitespace-nowrap">
          {title.toUpperCase()}
        </span>

        {/* Main title */}
        <ShinyText
          text={title}
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="absolute text-4xl md:text-6xl font-bold text-white capitalize tracking-tight"
        />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-[#ea580c]/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#ea580c]/50 shadow-[0_0_8px_rgba(234,88,12,0.4)]" />
        <div className="h-px w-16 bg-linear-to-l from-transparent to-[#ea580c]/30" />
      </div>

      {/* Subtitle */}
      <p className="text-sm md:text-base tracking-[0.2em] text-white uppercase max-w-md text-center font-medium">
        {subtitle}
      </p>
    </div>
  );
}
