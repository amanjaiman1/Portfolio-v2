import {
  chatgpt,
  Zerociti,
  HoneyUncle,
  personal,
  ravi,
  github,
  live,
  tech4addiction,
  seo,
  zerociti,
  honeyuncle,
} from "../assets";

// ---------- Profile ----------
export const profile = {
  name: "Aman Jaiman",
  firstName: "Aman",
  roles: ["Creative Developer", "Web Engineer", "UI Designer"],
  tagline: "I craft eye-seducing, user-friendly experiences for the web.",
  location: "India",
  available: "Open to new work — 2026",
  email: "amanjaiman001@gmail.com",
  resume:
    "https://drive.google.com/file/d/14CtUDvA_KN2trdwElqRim023qM5iBnt7/view?usp=sharing",
};

// ---------- Navigation ----------
export const navLinks = [
  { id: "about", title: "About", index: "01" },
  { id: "work", title: "Work", index: "02" },
  { id: "experience", title: "Experience", index: "03" },
  { id: "contact", title: "Contact", index: "04" },
];

// ---------- Socials ----------
export const socials = [
  { name: "GitHub", handle: "@amanjaiman1", url: "https://github.com/amanjaiman1" },
  {
    name: "LinkedIn",
    handle: "in/aman-jaiman",
    url: "https://www.linkedin.com/in/aman-jaiman-b4a36b199/",
  },
];

// ---------- About ----------
export const about = {
  paragraphs: [
    "I'm a software developer who lives where engineering meets art — turning ideas into practical, scalable, and unmistakably delightful products.",
    "Working closely with people and brands, I shape interfaces with Java, JavaScript, Node.js, React and Three.js. I learn fast, sweat the details, and obsess over the feeling a screen leaves behind.",
  ],
  stats: [
    { value: "4+", label: "Years building" },
    { value: "22+", label: "Projects shipped" },
    { value: "250+", label: "Students taught" },
  ],
};

// ---------- Capabilities (Services) ----------
export const capabilities = [
  {
    no: "01",
    title: "Web Development",
    desc: "Fast, accessible, production-grade websites built with modern tooling and a love for clean code.",
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
  },
  {
    no: "02",
    title: "React Engineering",
    desc: "Component-driven interfaces and SPAs that stay maintainable as they scale.",
    tags: ["React", "Hooks", "Router", "State"],
  },
  {
    no: "03",
    title: "Backend & APIs",
    desc: "Reliable services and REST APIs with Node and Express, wired to real databases.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    no: "04",
    title: "Interactive & UI / UX",
    desc: "Motion, 3D and micro-interactions that turn ordinary pages into experiences.",
    tags: ["Three.js", "Framer Motion", "Figma"],
  },
];

// ---------- Tech stack ----------
export const techStack = [
  "React",
  "Node.js",
  "Express",
  "Three.js",
  "Vue.js",
  "JavaScript",
  "Java",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "Figma",
  "Git",
];

// ---------- Experience ----------
export const experiences = [
  {
    title: "Instructor — DSA",
    company: "Gyan Ganga Institute of Technology & Sciences",
    accent: "#a8ecd0",
    date: "May 2024 — Nov 2024",
    isInstructor: true,
    points: [
      "Instructed Data Structures & Algorithms to 250+ students over a focused 6-month program.",
      "Broke down complex topics — trees, graphs, dynamic programming — into intuitive, example-driven lessons.",
      "Mentored students through problem-solving, coding practice and technical interview preparation.",
    ],
  },
  {
    title: "Founder & Engineer",
    company: "Stealth Startup",
    accent: "#ff9fc4",
    date: "Jun 2025 — Present",
    points: [
      "Building a product end-to-end in stealth mode — owning vision, design, architecture and engineering.",
      "Shipping fast on a modern React/Next.js stack, sweating every detail from data layer to the last pixel.",
      "Iterating quickly with real feedback to turn a personal idea into a real, scalable product.",
    ],
  },
  {
    title: "Front End Engineer",
    company: "Optus Edtech",
    accent: "#b9a7ff",
    date: "May 2024 — Apr 2025",
    points: [
      "Engineered responsive, accessible interfaces for an EdTech platform used by learners every day.",
      "Built a reusable React component library and design-system primitives that sped up delivery.",
      "Partnered with design and backend to ship polished, performant UI with smooth, purposeful motion.",
    ],
  },
  {
    title: "Front End Developer",
    company: "HoneyUncle",
    icon: honeyuncle,
    accent: "#ffc8a2",
    date: "Oct 2022 — Dec 2022",
    points: [
      "Built a responsive site with HTML, CSS, jQuery and Bootstrap.",
      "Optimised layout and design so parents could easily browse courses.",
      "Shipped a friendly enrollment flow — pick a course and sign up in a few clicks.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Zerociti",
    icon: zerociti,
    accent: "#b9a7ff",
    date: "Apr 2022 — Oct 2022",
    points: [
      "Crafted a stunning, responsive e-commerce store on WordPress, customised with JS & CSS.",
      "Designed core pages — Shop, FAQ, About and Contact.",
      "Integrated secure, convenient payment pages for safe checkout.",
    ],
  },
  {
    title: "Search Engine Optimization",
    company: "Coursera",
    icon: seo,
    accent: "#a8ecd0",
    date: "Jul 2021 — Oct 2021",
    points: [
      "Completed an in-depth SEO program on Coursera.",
      "Learned strategies to optimise sites for search and drive organic traffic.",
      "Embraced the habit of staying current with evolving SEO best practices.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Tech4Addiction",
    icon: tech4addiction,
    accent: "#9fd6ff",
    date: "Mar 2021 — Aug 2021",
    points: [
      "Developed and maintained web applications on WordPress.",
      "Implemented responsive design with cross-browser compatibility.",
      "Maintained page layouts and categories for fast Tech-News updates.",
    ],
  },
];

// ---------- Projects ----------
// Newest first. Images for the 2026 projects live in /public/projects and are
// referenced by path (uploaded manually), so they work without an import.
export const projects = [
  {
    name: "Aevoura",
    year: "2026",
    role: "Template Studio",
    description:
      "A commercial storefront for premium website templates — browse the collection, try a real live demo, then buy the source or commission a custom build. Every order composes a structured email, so it sells properly without a payment gateway.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    image: "/projects/aevoura.webp",
    link: "https://aevoura.vercel.app",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "Aabha",
    year: "2026",
    role: "Jewellery House",
    description:
      "An editorial site for a jewellery house that never sells online — there is no cart, and every action on the page ends in a telephone call. Four complete art directions ship from a single codebase.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
    image: "/projects/aabha.webp",
    link: "https://temp-jwel.vercel.app/",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "Section",
    year: "2026",
    role: "Architecture Studio",
    description:
      "An architecture portfolio drawn like a building section — a twelve-scene film with a travelling elevation rail, a 1:200 plan that draws itself and a draggable before-and-after threshold.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    image: "/projects/section.webp",
    link: "https://temp-interior.vercel.app/",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "Point of View",
    year: "2026",
    role: "Personal Brand",
    description:
      "A personal-brand site for an educator, built as an editorial magazine that argues its case across twenty sections — five switchable themes and email-first CTAs that convert without a checkout.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    image: "/projects/pointofview.webp",
    link: "https://temp-marketing-eight.vercel.app/",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "Warlife",
    year: "2026",
    role: "Personal Blog",
    description:
      "A personal blogging website where I share stories, learnings and ideas — fast, content-first and a joy to read, with buttery page transitions.",
    tags: ["Astro", "Tailwind CSS", "Framer Motion"],
    image: "/projects/warlife.jpg",
    link: "https://warlife.in",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "FrankCalculator",
    year: "2026",
    role: "FinTech",
    description:
      "A multipurpose financial calculator suite — including a workers' comp settlement calculator — that turns complex money math into clear, instant answers.",
    tags: ["Astro", "Tailwind CSS"],
    image: "/projects/frankcalculator.jpg",
    link: "https://frankcalculator.com",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "SortandVisualize",
    year: "2026",
    role: "Algo Visualizer",
    description:
      "A sorting-algorithm visualizer packed with ultra features — real-time animation, 3D visuals and fine-grained controls that make algorithms click.",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
    image: "/projects/sortandvisualize.jpg",
    link: "https://sortandvisualize.com",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "GPT-2.0",
    year: "2023",
    role: "AI Chatbot",
    description:
      "An AI chatbot that answers user questions, built on a GPT-3 language model to generate responses.",
    tags: ["Vanilla", "Vite", "Express"],
    image: chatgpt,
    link: "https://github.com/amanjaiman1/GPT_2.0",
    linkIcon: github,
    linkLabel: "Source",
  },
  {
    name: "Personal Portfolio",
    year: "2023",
    role: "Creative Dev",
    description:
      "The previous iteration of my personal portfolio — playful, interactive and built from scratch.",
    tags: ["React", "Vite", "Three.js", "Tailwind"],
    image: personal,
    link: "https://github.com/amanjaiman1/Porfolio-v1",
    linkIcon: github,
    linkLabel: "Source",
  },
  {
    name: "Zerociti",
    year: "2022",
    role: "E-commerce",
    description:
      "A fully responsive e-commerce experience letting users shop fashion and check out with easy, secure payments.",
    tags: ["WordPress", "JavaScript", "SiteCountry"],
    image: Zerociti,
    link: "https://zerociti.com/",
    linkIcon: live,
    linkLabel: "Live",
  },
  {
    name: "HoneyUncle",
    year: "2022",
    role: "Front End",
    description:
      "A responsive platform that lets parents enroll their kids into e-courses, built with well-known web tooling.",
    tags: ["JavaScript", "Bootstrap", "SCSS"],
    image: HoneyUncle,
    link: "https://github.com/amanjaiman1/InternHoneyUncle",
    linkIcon: github,
    linkLabel: "Source",
  },
];

// ---------- Testimonials ----------
export const testimonials = [
  {
    quote:
      "Aman is a champ — straightforward about his goals, and whatever he sets his mind to, he never leaves it without finishing.",
    name: "Ravi Pathak",
    designation: "ASE Intern",
    company: "Techion",
    image: ravi,
  },
];

// ---------- Blob mixer presets (Blobmixer-inspired) ----------
export const blobPresets = [
  {
    name: "Dusk",
    colorA: "#b9a7ff",
    colorB: "#ff9fc4",
    distort: 0.48,
    metalness: 0.8,
    roughness: 0.15,
  },
  {
    name: "Aurora",
    colorA: "#b9a7ff",
    colorB: "#9fd6ff",
    distort: 0.42,
    metalness: 0.9,
    roughness: 0.12,
  },
  {
    name: "Blossom",
    colorA: "#ff9fc4",
    colorB: "#ffc8a2",
    distort: 0.55,
    metalness: 0.65,
    roughness: 0.2,
  },
  {
    name: "Mint Oil",
    colorA: "#a8ecd0",
    colorB: "#9fd6ff",
    distort: 0.6,
    metalness: 1.0,
    roughness: 0.06,
  },
];
