import {
    mobile,
    backend,
    creator,
    web,
    chatgpt,
    ravi,
    reactjs,
    nodejs,
    honeyuncle,
    tech4addiction,
    seo,
    zerociti,
    Zerociti,
    HoneyUncle,
    threejs,
    express,
    vue,
    github,
    personal,
    live
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX Designer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      title: "React",
      icon: reactjs,
    },
    {
      title: "Node",
      icon: nodejs,
    },
    {
      title: "Express",
      icon: express,
    },
    {
      title: "Three.JS",
      icon: threejs,
    },
    {
      title: "Vue.JS",
      icon: vue,
    },
  ];
  
  
  const experiences = [
    {
      title: "Wordpress Developer",
      company_name: "Tech4Addiction.com",
      icon: tech4addiction,
      iconBg: "#383E56",
      date: "March 2021 - August 2021",
      points: [
        "Developed and maintained web applications using Wordpress technology.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Maintained Page's layouts and Categories to easily update #Tech News(Pages)",
      ],
    },
    {
      title: "Search Engine Optimization",
      company_name: "Coursera",
      icon: seo,
      iconBg: "#E6DEDD",
      date: "July 2021 - Oct 2021",
      points: [
        "Learnt Search Engine Optimization from Coursera",
        "Gained a deep understanding of the strategies and techniques necessary to optimize websites for search engines and drive organic traffic.",
        "This course is the importance of staying up-to-date with the latest trends and best practices in SEO.",
      ],
    },
    {
      title: "Wordpress Developer",
      company_name: "Zerociti",
      icon: zerociti,
      iconBg: "#E6DEDD",
      date: "April 2022 - Oct 2022",
      points: [
        "A Stunning & Responsive e-commerce website that was created using WordPress and further customised with Javascript and CSS.",
        "Includes pages, such as the Shop page, FAQ page, About Us page, and Contact page.",
        "The payment system is added as it covered with integrated payment pages that make simply to make purchases safely and conveniently.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "HoneyUncle",
      icon: honeyuncle,
      iconBg: "#FFDF00",
      date: "Oct 2022 - Dec 2022",
      points: [
        "Created a website utilising well-known web development tools including HTML, CSS, jQuery, and Bootstrap.",
        "To make it simple for parents to traverse the website and identify the courses they were interested in, the layout and design were optimised.",
        "Parents could quickly browse the available courses, pick the ones they desired, and enrol their children using the user-friendly enrollment system in only a few clicks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Aman is champ, straight forward to his goals and whatever he choose, never let it leave without completing. ",
      name: "Ravi Pathak",
      designation: "ASE Intern",
      company: "Techion",
      image: ravi,
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "GPT-2.0",
      description:
        "This is an AI chatBOT which is reponsible for answering questions ask by user.Bases on chatGPT-3 language model to generate responses.",
      tags: [
        {
          name: "Vanilla",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: chatgpt,
      source_code_link: "https://github.com/amanjaiman1/GPT_2.0",
      minImg: github,
    },
    {
      name: "Zerociti",
      description:
        "An E-commerce Website , fully responsible which allow users to shop new fashionable wearings and handled easy payment methods.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "SiteCountry",
          color: "pink-text-gradient",
        },
      ],
      image: Zerociti,
      source_code_link: "https://zerociti.com/",
      minImg: live,
    },
    {
      name: "HoneyUncle",
      description:
        "With well-known web development tools and completely responsive, this website's main goal was to enable parents to sign their kids up for e-courses provided by Honeyuncle",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: HoneyUncle,
      source_code_link: "https://github.com/amanjaiman1/InternHoneyUncle",
      minImg: github,
    },
    {
      name: "Personal Portfolio",
      description:
        "Hey look! , This is it, you are surfing ON 😗",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://github.com/amanjaiman1/Porfolio-v1",
      minImg: github,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };