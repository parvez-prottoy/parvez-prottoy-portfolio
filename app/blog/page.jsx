import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts, insights, and technical deep-dives into modern web development, software engineering, and UI design by Parvez Prottoy.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogClient />;
}
