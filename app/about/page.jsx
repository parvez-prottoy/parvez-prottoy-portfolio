import About from '@/components/About';

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Parvez Prottoy, a passionate Frontend Developer dedicated to crafting pixel-perfect, accessible, and performant web experiences.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="bg-[#050403]">
      <About />
    </main>
  );
}
