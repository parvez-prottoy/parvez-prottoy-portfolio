import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://parvezprottoy.com'),
  title: {
    default: 'Parvez Prottoy | Senior Frontend Developer',
    template: '%s | Parvez Prottoy',
  },
  description: 'Portfolio of Parvez Prottoy, a Senior Frontend Developer specializing in React, Next.js, and modern UI/UX design. Building performant, scalable, and beautiful web applications.',
  keywords: ['Parvez Prottoy', 'Frontend Developer', 'React Developer', 'Next.js Expert', 'UI/UX Designer', 'Web Development', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Parvez Prottoy', url: 'https://parvezprottoy.com' }],
  creator: 'Parvez Prottoy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://parvezprottoy.com',
    title: 'Parvez Prottoy | Senior Frontend Developer',
    description: 'Senior Frontend Developer specializing in React, Next.js, and modern UI/UX design.',
    siteName: 'Parvez Prottoy Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can add a default og-image.jpg in the public folder later
        width: 1200,
        height: 630,
        alt: 'Parvez Prottoy Portfolio Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parvez Prottoy | Senior Frontend Developer',
    description: 'Senior Frontend Developer specializing in React, Next.js, and modern UI/UX design.',
    creator: '@parvezprottoy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Parvez Prottoy',
    url: 'https://parvezprottoy.com',
    jobTitle: 'Senior Frontend Developer',
    knowsAbout: ['React', 'Next.js', 'JavaScript', 'UI/UX Design', 'Web Performance'],
    sameAs: [
      'https://github.com/parvezprottoy',
      'https://linkedin.com/in/parvezprottoy',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Parvez Prottoy Portfolio',
    url: 'https://parvezprottoy.com',
  };

  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${oswald.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
