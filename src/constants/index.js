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
  { name: "Twitter", handle: "@AMANJAIMAN6", url: "https://twitter.com/AMANJAIMAN6" },
  {
    name: "Instagram",
    handle: "@are.jaiman_sahab",
    url: "https://www.instagram.com/are.jaiman_sahab/",
  },
  { name: "Facebook", handle: "aman.jaiman", url: "https://www.facebook.com/aman.jaiman.94" },
];

// ---------- About ----------
export const about = {
  paragraphs: [
    "I'm a software developer who lives where engineering meets art — turning ideas into practical, scalable, and unmistakably delightful products.",
    "Working closely with people and brands, I shape interfaces with Java, JavaScript, Node.js, React and Three.js. I learn fast, sweat the details, and obsess over the feeling a screen leaves behind.",
  ],
  stats: [
    { value: "3+", label: "Years building" },
    { value: "15+", label: "Projects shipped" },
    { value: "5", label: "Happy teams" },
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
export const projects = [
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
  {
    name: "Dusk",
    colorA: "#b9a7ff",
    colorB: "#ff9fc4",
    distort: 0.48,
    metalness: 0.8,
    roughness: 0.15,
  },
];
