'use client';
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export default function TechIcon({ tech }) {
  const getIcon = () => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <SiReact className="text-[#61DAFB]" />;
      case 'express':
        return <SiExpress className="text-white" />;
      case 'tailwind':
        return <SiTailwindcss className="text-[#06B6D4]" />;
      case 'mongodb':
        return <SiMongodb className="text-[#47A248]" />;
      case 'redux':
        return <SiRedux className="text-[#764ABC]" />;
      case 'prisma':
        return <SiPrisma className="text-white" />;
      case 'postgresql':
        return <SiPostgresql className="text-[#336791]" />;
      case 'supabase':
        return <SiSupabase className="text-[#3ECF8E]" />;
      case 'typescript':
        return <SiTypescript className="text-[#3178C6]" />;
      case 'nextjs':
        return <SiNextdotjs className="text-white" />;
      case 'graphql':
        return <SiGraphql className="text-[#E10098]" />;
      case 'aws':

      case 'vercel':
        return <SiVercel className="text-white" />;
      case 'nodejs':
      case 'node':
        return <SiNodedotjs className="text-[#3C873A]" />;
      default:
        return null;
    }
  };

  if (!getIcon()) return null;
  return (
    <div className="flex items-center justify-center rounded-full bg-black/30 p-2 backdrop-blur-sm border border-white/10">
      <div className="text-xl">{getIcon()}</div>
    </div>
  );
}
