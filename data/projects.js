import careerFlowImg from '@/assets/projects/career-flow.png';
import zealCommercialImg from '@/assets/projects/Zeal-commercial.jpg';
import deepScienceVenturesImg from '@/assets/projects/deep-science-ventures.jpg';
import sliceoficelandImg from '@/assets/projects/sliceoficeland.jpg';
import blitzImg from '@/assets/projects/blitz.jpg';
import stellosPropertiesImg from '@/assets/projects/stellos-properties.jpg';
import edumentImg from '@/assets/projects/edument.jpg';
import signs89Img from '@/assets/projects/89signs.jpg';
import shiptrekImg from '@/assets/projects/shiptrek.jpg';
import jobFinderReactApplicationImg from '@/assets/projects/job-finder.png';
import videoGalleryReactApplicationImg from '@/assets/projects/video-gallery.jpg';
import booksFinderImg from '@/assets/projects/books-finder.jpg';

export const assets = {
  projects: {
    careerFlow: careerFlowImg,
    zealCommercial: zealCommercialImg,
    deepScienceVentures: deepScienceVenturesImg,
    sliceoficeland: sliceoficelandImg,
    blitz: blitzImg,
    stellosProperties: stellosPropertiesImg,
    edument: edumentImg,
    "89signs": signs89Img,
    shiptrek: shiptrekImg,
    jobFinderReactApplication: jobFinderReactApplicationImg,
    videoGalleryReactApplication: videoGalleryReactApplicationImg,
    booksFinder: booksFinderImg,
  },
};

export const projects = [
  {
    title: "CareerFlow",
    description: "A full-stack job application tracking platform that helps users manage applications, track their progress, organize interviews, and monitor their job search from one dashboard.",
    mobileDescription: "Job application tracker with drag-and-drop workflow, interviews, and secure authentication.",
    website: "https://job-application-tracker-next-js.vercel.app/",
    github: "",
    image: assets.projects.careerFlow,
    gradient: "linear-gradient(188.62deg, #0F172A 49.9%, #2563EB 81.7%, #3B82F6 93.88%, #93C5FD 113.5%)",
    shadowColor: "#2563EB",
    textColor: "text-blue-300",
    tagColor: "fill-blue-600 text-blue-400 bg-blue-600/20",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "dnd-kit",
      "MongoDB",
      "Mongoose",
      "Better Auth"
    ],
    type: "Full-stack project",
    server_link: "",
    client_link: "",
    live_link: "https://job-application-tracker-next-js.vercel.app/",
    features: [
      "User registration and login",
      "Google and GitHub authentication",
      "User-specific dashboard",
      "Create, edit, and delete job applications",
      "Drag-and-drop application status management",
      "Real-time application summary",
      "Schedule, edit, and delete interviews",
      "Upcoming interviews and dashboard integration",
      "Update name, email, and password from Settings",
      "AI Tools, Documents, and Analytics pages marked as Work in Progress"
    ],
    techIcons: [
      "next",
      "typescript",
      "tailwind",
      "shadcn",
      "dndkit",
      "mongodb",
      "mongoose",
      "betterauth"
    ]
  },
  {
    title: "Zeal Commercial",
    description: "A CMS-driven commercial real estate platform built with Webflow, featuring advanced property search, AI-powered investment summaries, and seamless lead management.",
    mobileDescription: "A CMS-driven commercial real estate platform built with Webflow, featuring advanced property search, AI-powered investment summaries, and seamless lead management.",
    website: "https://zeal-commercial.webflow.io",
    github: "",
    image: assets.projects.zealCommercial,
    gradient: "linear-gradient(188.62deg, #111827 49.9%, #0F766E 81.7%, #14B8A6 93.88%, #99F6E4 113.5%)",
    shadowColor: "#14B8A6",
    textColor: "text-teal-300",
    tagColor: "fill-teal-600 text-teal-400 bg-teal-600/20",
    tags: [
      "Webflow",
      "JavaScript",
      "CMS",
      "Finsweet",
      "GoHighLevel",
      "Chatbase Ai",
      "OpenAI"
    ],
    type: "Webflow Development",
    server_link: "",
    client_link: "",
    live_link: "https://zeal-commercial.webflow.io",
    features: [
      "Advanced Property Search",
      "Dynamic CMS",
      "AI Investment Summary",
      "Multi-Language Support",
      "GoHighLevel Integration",
      "Property Filters"
    ],
    techIcons: [
      "webflow",
      "javascript",
      "cms",
      "finsweet",
      "gohighlevel",
      "chatbase",
      "openai"
    ]
  },
  {
    title: "Deep Science Ventures",
    description: "A large-scale Figma to Webflow project with dynamic CMS architecture, search, filtering, sorting, and responsive layouts.",
    mobileDescription: "A large-scale Figma to Webflow project with dynamic CMS architecture, search, filtering, sorting, and responsive layouts.",
    website: "https://deep-science-ventures-hmg.webflow.io/",
    github: "",
    image: assets.projects.deepScienceVentures,
    gradient: "linear-gradient(188.62deg, #1E1B4B 49.9%, #6D28D9 81.7%, #8B5CF6 93.88%, #DDD6FE 113.5%)",
    shadowColor: "#8B5CF6",
    textColor: "text-violet-300",
    tagColor: "fill-violet-600 text-violet-400 bg-violet-600/20",
    tags: [
      "Webflow",
      "JavaScript",
      "CMS"
    ],
    type: "Figma to Webflow",
    server_link: "",
    client_link: "",
    live_link: "https://deep-science-ventures-hmg.webflow.io/",
    features: [
      "Figma to Webflow",
      "Dynamic Pages",
      "Search System",
      "Filter and Sort",
      "CMS Blog System",
      "Responsive Layout"
    ],
    techIcons: [
      "webflow",
      "javascript",
      "cms"
    ]
  },
  {
    title: "Sliceoficeland",
    description: "A content driven website with advanced search, category filtering, and dynamic CMS pages.",
    mobileDescription: "A content driven website with advanced search, category filtering, and dynamic CMS pages.",
    website: "https://sliceoficeland.is/",
    github: "",
    image: assets.projects.sliceoficeland,
    gradient: "linear-gradient(188.62deg, #1C1917 49.9%, #C2410C 81.7%, #F97316 93.88%, #FED7AA 113.5%)",
    shadowColor: "#F97316",
    textColor: "text-orange-300",
    tagColor: "fill-orange-600 text-orange-400 bg-orange-600/20",
    tags: [
      "Webflow",
      "JavaScript",
      "CMS"
    ],
    type: "Webflow Development",
    server_link: "",
    client_link: "",
    live_link: "https://sliceoficeland.is/",
    features: [
      "Advanced Search",
      "Category Filters",
      "Dynamic CMS Pages",
      "Blog System",
      "Responsive Design"
    ],
    techIcons: [
      "webflow",
      "javascript",
      "cms"
    ]
  },
  {
    title: "Blitz",
    description: "A 13+ page website developed from Figma with responsive layouts and scalable CMS architecture.",
    mobileDescription: "A 13+ page website developed from Figma with responsive layouts and scalable CMS architecture.",
    website: "https://blitz-on.webflow.io/",
    github: "",
    image: assets.projects.blitz,
    gradient: "linear-gradient(188.62deg, #052E16 49.9%, #15803D 81.7%, #22C55E 93.88%, #BBF7D0 113.5%)",
    shadowColor: "#22C55E",
    textColor: "text-green-300",
    tagColor: "fill-green-600 text-green-400 bg-green-600/20",
    tags: [
      "Webflow",
      "CMS",
      "HTML",
      "CSS"
    ],
    type: "Figma to Webflow",
    server_link: "",
    client_link: "",
    live_link: "https://blitz-on.webflow.io/",
    features: [
      "13+ Pages",
      "Figma to Webflow",
      "CMS Integration",
      "Responsive Design",
      "Multi-page Structure"
    ],
    techIcons: [
      "webflow",
      "cms",
      "html",
      "css"
    ]
  },
  {
    title: "Stellos Properties",
    description: "A premium real estate website built with a focus on user experience and responsive layouts.",
    mobileDescription: "A premium real estate website built with a focus on user experience and responsive layouts.",
    website: "https://www.stellosproperties.com/",
    github: "",
    image: assets.projects.stellosProperties,
    gradient: "linear-gradient(188.62deg, #3F0D24 49.9%, #BE185D 81.7%, #EC4899 93.88%, #FBCFE8 113.5%)",
    shadowColor: "#EC4899",
    textColor: "text-pink-300",
    tagColor: "fill-pink-600 text-pink-400 bg-pink-600/20",
    tags: [
      "Webflow",
      "HTML",
      "CSS"
    ],
    type: "Webflow Development",
    server_link: "",
    client_link: "",
    live_link: "https://www.stellosproperties.com/",
    features: [
      "Real Estate Listings",
      "Responsive Design",
      "Premium UI",
      "Property Showcase",
      "Multi-page Structure"
    ],
    techIcons: [
      "webflow",
      "html",
      "css"
    ]
  },
  {
    title: "Edument",
    description: "A multi-page educational website with CMS-powered blogs and responsive design.",
    mobileDescription: "A multi-page educational website with CMS-powered blogs and responsive design.",
    website: "https://www.edument.se/kontakt",
    github: "",
    image: assets.projects.edument,
    gradient: "linear-gradient(188.62deg, #450A0A 49.9%, #B91C1C 81.7%, #EF4444 93.88%, #FECACA 113.5%)",
    shadowColor: "#EF4444",
    textColor: "text-red-300",
    tagColor: "fill-red-600 text-red-400 bg-red-600/20",
    tags: [
      "Webflow",
      "CMS"
    ],
    type: "Webflow Development",
    server_link: "",
    client_link: "",
    live_link: "https://www.edument.se/kontakt",
    features: [
      "Multi-page Website",
      "CMS Blog System",
      "Contact Form",
      "Responsive Design",
      "Dynamic Content Management"
    ],
    techIcons: [
      "webflow",
      "cms"
    ]
  },
  {
    title: "89signs",
    description: "A modern business website built to showcase branding and services with a clean user experience.",
    mobileDescription: "A modern business website built to showcase branding and services with a clean user experience.",
    website: "https://www.89signs.co.za/",
    github: "",
    image: assets.projects["89signs"],
    gradient: "linear-gradient(188.62deg, #172554 49.9%, #4338CA 81.7%, #6366F1 93.88%, #C7D2FE 113.5%)",
    shadowColor: "#6366F1",
    textColor: "text-indigo-300",
    tagColor: "fill-indigo-600 text-indigo-400 bg-indigo-600/20",
    tags: [
      "Webflow",
      "HTML",
      "CSS"
    ],
    type: "Webflow Development",
    server_link: "",
    client_link: "",
    live_link: "https://www.89signs.co.za/",
    features: [
      "Multi-page Structure",
      "Service Showcase",
      "Responsive Design",
      "Clean Navigation",
      "Brand-focused Layout"
    ],
    techIcons: [
      "webflow",
      "html",
      "css"
    ]
  },
  {
    title: "Shiptrek",
    description: "A modern logistics landing page featuring a custom JavaScript-powered cost calculator and responsive design.",
    mobileDescription: "A modern logistics landing page featuring a custom JavaScript-powered cost calculator and responsive design.",
    website: "https://shiptrek.webflow.io/",
    github: "",
    image: assets.projects.shiptrek,
    gradient: "linear-gradient(188.62deg, #083344 49.9%, #0891B2 81.7%, #06B6D4 93.88%, #A5F3FC 113.5%)",
    shadowColor: "#06B6D4",
    textColor: "text-cyan-300",
    tagColor: "fill-cyan-600 text-cyan-400 bg-cyan-600/20",
    tags: [
      "Webflow",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    type: "Figma to Webflow",
    server_link: "",
    client_link: "",
    live_link: "https://shiptrek.webflow.io/",
    features: [
      "Custom Cost Calculator",
      "JavaScript Integrations",
      "Responsive Design",
      "High-Converting Landing Page",
      "Figma to Webflow"
    ],
    techIcons: [
      "webflow",
      "javascript",
      "html",
      "css"
    ]
  },
  {
    title: "Job Finder React Application",
    description: "A MERN job management platform with search, filtering, sorting, and CRUD functionality built using React and Express.js.",
    mobileDescription: "A MERN job management platform with search, filtering, sorting, and CRUD functionality built using React and Express.js.",
    website: "https://crud-job-finder-application.netlify.app/",
    github: "",
    image: assets.projects.jobFinderReactApplication,
    gradient: "linear-gradient(188.62deg, #422006 49.9%, #B45309 81.7%, #F59E0B 93.88%, #FDE68A 113.5%)",
    shadowColor: "#F59E0B",
    textColor: "text-amber-300",
    tagColor: "fill-amber-600 text-amber-400 bg-amber-600/20",
    tags: [
      "React",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "REST API"
    ],
    type: "MERN Stack Development",
    server_link: "",
    client_link: "",
    live_link: "https://crud-job-finder-application.netlify.app/",
    features: [
      "CRUD Operations",
      "Category Filters",
      "Remote Jobs",
      "Internship Listings",
      "Job Search",
      "Salary Sorting"
    ],
    techIcons: [
      "react",
      "reduxtoolkit",
      "expressjs",
      "mongodb",
      "restapi"
    ]
  },
  {
    title: "Video Gallery React Application",
    description: "A React and Express.js powered video gallery application with CRUD functionality and dynamic related video suggestions.",
    mobileDescription: "A React and Express.js powered video gallery application with CRUD functionality and dynamic related video suggestions.",
    website: "https://video-gallery-application.netlify.app/",
    github: "",
    image: assets.projects.videoGalleryReactApplication,
    gradient: "linear-gradient(188.62deg, #1F2937 49.9%, #4B5563 81.7%, #9CA3AF 93.88%, #E5E7EB 113.5%)",
    shadowColor: "#9CA3AF",
    textColor: "text-gray-300",
    tagColor: "fill-gray-600 text-gray-400 bg-gray-600/20",
    tags: [
      "React",
      "Express.js",
      "REST API"
    ],
    type: "React Development",
    server_link: "",
    client_link: "",
    live_link: "https://video-gallery-application.netlify.app/",
    features: [
      "Add Videos",
      "Edit Videos",
      "Delete Videos",
      "Related Videos",
      "Dynamic Content"
    ],
    techIcons: [
      "react",
      "expressjs",
      "restapi"
    ]
  },
  {
    title: "Books Finder",
    description: "A React-based book discovery application featuring real-time search, sorting, and favorite management.",
    mobileDescription: "A React-based book discovery application featuring real-time search, sorting, and favorite management.",
    website: "https://react-books-finder.vercel.app/",
    github: "",
    image: assets.projects.booksFinder,
    gradient: "linear-gradient(188.62deg, #2E1065 49.9%, #7E22CE 81.7%, #A855F7 93.88%, #E9D5FF 113.5%)",
    shadowColor: "#A855F7",
    textColor: "text-purple-300",
    tagColor: "fill-purple-600 text-purple-400 bg-purple-600/20",
    tags: [
      "React",
      "JavaScript",
      "CSS"
    ],
    type: "React Development",
    server_link: "",
    client_link: "",
    live_link: "https://react-books-finder.vercel.app/",
    features: [
      "Real-Time Search",
      "Price Sorting",
      "Favorites System",
      "State Management"
    ],
    techIcons: [
      "react",
      "javascript",
      "css"
    ]
  }
];
