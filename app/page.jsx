import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Tape from '@/components/Tape';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-28  overflow-x-clip">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Tape />
    </div>
  );
}
