import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Parvez Prottoy. Open for freelance opportunities, full-time roles, and technical collaborations.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="bg-[#050403]">
      <Contact />
    </main>
  );
}
