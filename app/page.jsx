import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Tape from '@/components/Tape';

export const metadata = {
  title: 'Home | Parvez Prottoy',
  description:
    'Welcome to the portfolio of Parvez Prottoy, a Senior Frontend Developer building production-ready web applications.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="overflow-x-clip bg-[#050403]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Tape />
      <Experience />
      <Contact />
    </div>
  );
}
