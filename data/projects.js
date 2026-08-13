import diteck from '../app/assets/projects/diteck.webp';
import tasty from '../app/assets/projects/tasty.webp';
import retrievex from '../app/assets/projects/retrievex.webp';

const assets = {
  projects: {
    diteck,
    tasty,
    retrievex,
  },
};

export const projects = [
  {
    title: 'Diteck Technology',
    description:
      'A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users.',
    mobileDescription:
      'Agency platform with job posting, AI chatbot, and secure application system.',
    website: 'https://diteck.vercel.app/', // update if needed
    github: '', // update with real repo
    image: assets.projects.diteck, // update if image asset differs
    gradient:
      'linear-gradient(188.62deg, #1F2937 49.9%, #2563EB 81.7%, #3B82F6 93.88%, #93C5FD 113.5%)',
    shadowColor: '#2563EB',
    textColor: 'text-blue-300',
    tagColor: 'fill-blue-600 text-blue-400 bg-blue-600/20',
    tags: ['Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'AWS S3'],
    type: 'Team project',
    server_link: 'https://github.com/naimur-reza/diteck-server',
    client_link: 'https://github.com/naimur-reza/diteck-frontend',
    live_link: 'https://diteck.vercel.app/',
    features: [
      'Role-based dashboards for Admin and Users',
      'Secure job application system with email verification (OTP)',
      'AI chatbot for answering queries.',
      'User management and team collaboration tools',
      'Blog and service section management',
      'Image uploads integrated with AWS S3',
    ],
    techIcons: ['next', 'nodejs', 'tailwind', 'mongodb', 'aws'],
  },
  {
    title: 'Tasty Drop',
    description:
      'A full-stack food delivery platform with multiple payment methods and role-based dashboards for Admin, Rider, and Partner roles.',
    mobileDescription:
      'Food delivery platform with multiple payment methods and role-based dashboards.',
    website: 'https://tasty-drops.web.app/',
    github: 'https://github.com/BakiAbdullah/Tasty-drop-client',
    image: assets.projects.tasty,
    gradient:
      'linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)',
    shadowColor: '#DB2777',
    textColor: 'text-pink-300',
    tagColor: 'fill-pink-600 text-pink-400 bg-pink-600/20',
    tags: ['React', 'Express', 'Tailwind', 'MongoDB', 'Redux'],
    type: 'Team project',
    server_link: 'https://github.com/ImranSarkerWeb/tasty-drop-server',
    client_link: 'https://github.com/BakiAbdullah/Tasty-drop-client',
    live_link: 'https://tasty-drops.web.app/',
    features: [
      'Multiple payment methods integration',
      'Role-based dashboards (Admin, Rider, Partner)',
      'Subscription service implementation',
      'Real-time order tracking',
      'User authentication and authorization',
    ],
    techIcons: ['react', 'express', 'tailwind', 'mongodb', 'redux'],
  },
  {
    title: 'RetrieveX',
    description:
      'A community-driven platform for reporting and reclaiming lost items with user accounts, detailed reports, ownership verification, and an admin dashboard.',
    mobileDescription:
      'A community platform for reporting and reclaiming lost items with dark/light mode.',
    website: 'https://lost-and-found-live-swart.vercel.app/',
    github: 'https://github.com/naimur-reza/Lost-And-Found-Frontend',
    image: assets.projects.diteck,
    gradient:
      'linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)',
    shadowColor: '#2932CB',
    textColor: 'text-blue-300',
    tagColor: 'fill-blue-600 text-blue-400 bg-blue-600/20',
    tags: [
      'React',
      'Prisma',
      'Tailwind',
      'PostgreSQL',
      'Supabase',
      'Redux',
      'TypeScript',
    ],
    type: 'Personal project',
    server_link: 'https://github.com/naimur-reza/Lost-And-Found-Server',
    client_link: 'https://github.com/naimur-reza/Lost-And-Found-Frontend',
    live_link: 'https://lost-and-found-live-swart.vercel.app/',
    features: [
      'User authentication and profiles',
      'Lost item reporting and searching',
      'Ownership verification system',
      'Admin dashboard for moderation',
      'Dark/light mode toggle',
    ],
    techIcons: [
      'react',
      'prisma',
      'tailwind',
      'postgresql',
      'supabase',
      'redux',
      'typescript',
    ],
  },
  {
    title: 'VanishVote',
    description:
      'A minimalist poll creation platform allowing users to make anonymous, timed polls with no login required. Built for quick decisions and ephemeral feedback.',
    mobileDescription:
      'Create anonymous polls that disappear after a set time. No login needed.',
    website: 'https://vanish-vote-client-kohl.vercel.app/',
    github:
      'https://github.com/naimur-reza?tab=repositories&q=vanish&type=&language=&sort=',
    image: assets.projects.retrievex,
    gradient: 'linear-gradient(180deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
    shadowColor: '#203A43',
    textColor: 'text-cyan-300',
    tagColor: 'fill-cyan-600 text-cyan-400 bg-cyan-600/20',
    tags: ['Next.js', 'MongoDB', 'Express.js', 'Node.js', 'Tailwind CSS'],
    type: 'Personal project',
    server_link: 'https://github.com/naimur-reza/vanish-note-server',
    client_link: 'https://github.com/naimur-reza/vanish-note-client',
    live_link: 'https://vanish-vote-client-kohl.vercel.app/',
    features: [
      'Create anonymous polls without login',
      'Unique shareable links for each poll',
      'Timed expiry: 1h, 12h, or 24h',
      'Real-time results or hide until poll ends',
      'Dark/light mode toggle',
    ],
    techIcons: ['nextjs', 'mongodb', 'express', 'nodejs', 'tailwind'],
  },
  {
    title: 'Camp Sun Shine',
    description:
      'Educational platform with role-based dashboards for Instructor, Student, and Admin, featuring payment integration via Stripe for course enrollment.',
    mobileDescription:
      'Educational platform with role-based dashboards and payment integration.',
    website: 'https://campsunshine-c653c.web.app/',
    github: 'https://github.com/naimur-reza/Campsunshine-Client',
    image: assets.projects.tasty,
    gradient:
      'linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)',
    shadowColor: '#059669',
    textColor: 'text-emerald-300',
    tagColor: 'fill-emerald-600 text-emerald-400 bg-emerald-600/20',
    tags: ['React', 'Express', 'Tailwind', 'MongoDB'],
    type: 'Personal project',
    server_link: 'https://github.com/naimur-reza/Campsunshine-Server',
    client_link: 'https://github.com/naimur-reza/Campsunshine-Client',
    live_link: 'https://campsunshine-c653c.web.app/',
    features: [
      'Role-based dashboards (Instructor, Student, Admin)',
      'Course search and enrollment',
      'Stripe payment integration',
      'User authentication and profiles',
      'Course management system',
    ],
    techIcons: ['react', 'express', 'tailwind', 'mongodb'],
  },
];
