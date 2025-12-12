const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Front-End Projects" },
  { value: 4, suffix: "+", label: "Team Projects Completed" },
  { value: 7, suffix: "", label: "Months of Experience" },
  { value: 1, suffix: "", label: "Internship Bootcamp" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/html.png",
  },
  {
    imgPath: "/images/logos/css.png",
  },
  {
    imgPath: "/images/logos/javascript.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/gsap.png",
  },
  {
    imgPath: "/images/logos/ts.png",
  },
  {
    imgPath: "/images/logos/nextjs.jpg",
  },
  {
    imgPath: "/images/logos/tanstack.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const projects = [
  {
    id: 1,
    title: "Whispyr CRM",
    subtitle: "Enterprise Customer Relationship Management Platform",
    description:
      "Comprehensive enterprise-grade CRM system revolutionizing how sales teams manage leads, communicate with customers, and track performance. Built with cutting-edge technologies, it features real-time collaboration, AI-powered assistance, and intelligent automation to streamline complex sales workflows.",
    role: "Frontend Developer",
    scale: "600+ components, 120+ custom hooks",
    imagePath: "/images/WhispyrAi.png",
    liveUrl: "https://www.whispyrai.com/",
    githubUrl: null,
    featured: true,
    techStack: [
      {
        category: "Frontend",
        technology: "Next.js 15 • React 19 • TypeScript 5.8 • Tailwind CSS v4",
      },
      {
        category: "State Management",
        technology:
          "Zustand • TanStack Query (with smart caching) • React Hook Form",
      },
      {
        category: "Backend",
        technology: "Supabase (PostgreSQL + Realtime) • Supabase Auth",
      },
      {
        category: "UI/UX",
        technology: "shadcn/ui • Framer Motion • GSAP • Lucide Icons",
      },
      {
        category: "Rich Text",
        technology: "Tiptap • Y.js • React Markdown • KaTeX",
      },
      {
        category: "Data Visualization",
        technology: "Chart.js • Recharts • ExcelJS • Date-fns",
      },
    ],
    highlights: [
      "Enterprise-Scale Architecture with 600+ modular components",
      "Real-Time Collaboration with instant multi-user synchronization",
      "100% TypeScript coverage with comprehensive type safety",
      "Performance optimized with code splitting and intelligent caching",
    ],
  },
  {
    id: 2,
    title: "iPhone 15 Pro Showcase",
    subtitle: "Immersive 3D Product Experience",
    description:
      "Interactive Apple iPhone 15 Pro product showcase featuring real-time 3D rendering using Three.js and React Three Fiber. Implemented sophisticated scroll-triggered animations with GSAP, responsive design with Tailwind CSS 4, and production monitoring with Sentry.",
    imagePath: "/images/project1.png",
    liveUrl: "https://apple-iphone15pro-li91.vercel.app/",
    githubUrl: null,
    featured: false,
    techStack: [
      { category: "Frontend Framework", technology: "React 19 with Vite 6" },
      {
        category: "3D Graphics",
        technology: "Three.js with React Three Fiber & Drei",
      },
      { category: "Animations", technology: "GSAP (GreenSock)" },
      { category: "Styling", technology: "Tailwind CSS 4" },
      {
        category: "3D Models",
        technology: "GLTF format with dynamic textures & materials",
      },
      { category: "Performance Monitoring", technology: "Sentry" },
      { category: "Deployment", technology: "Vercel" },
    ],
  },
  {
    id: 3,
    title: "Business Management Platform",
    subtitle: "Modern Business Solution",
    description:
      "Comprehensive business management platform designed to streamline operations and improve productivity.",
    imagePath: "/images/project2.png",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    techStack: [
      { category: "Frontend", technology: "React • JavaScript" },
      { category: "Styling", technology: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    title: "E-commerce Application",
    subtitle: "Full-Featured Shopping Experience",
    description:
      "Modern e-commerce application with seamless shopping experience and secure payment integration.",
    imagePath: "/images/project3.png",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    techStack: [
      { category: "Frontend", technology: "React • Next.js" },
      { category: "Styling", technology: "Tailwind CSS" },
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/dawwud1_/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100005168138500",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://linkedin.com/in/seifelden-hesham/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/seifXXII",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  socialImgs,
  navLinks,
  projects,
};
