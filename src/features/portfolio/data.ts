import type { Experience, Project, SkillGroup } from "./types";

export const navigationLinks = ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"];

export const aboutParagraphs = [
  "I got introduced to programming during my junior secondary school days after seeing what my older brother was building on his computer. What started as simple curiosity quickly turned into genuine interest and excitement for creating things with code.",
  "I began with HTML and CSS, building small projects and learning how websites come together. Soon after, I moved into JavaScript where development became more interactive and engaging. As my skills grew, I expanded into Node.js, Express, and EJS, learning how frontend and backend systems connect to form complete applications.",
  "I'm continuously improving by building projects and exploring new concepts. Frontend development is what I enjoy the most — bringing ideas to life through clean, responsive interfaces and creating experiences that feel smooth and natural to use.",
  "Outside coding, I enjoy gaming, watching movies, exploring tech trends, and working on creative skills like graphic design and video editing. Staying curious and learning new things keeps helping me grow both as a developer and a problem solver.",
];

export const skillGroups: SkillGroup[] = [
  { icon: "fa-code", title: "Frontend", values: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Framer Motion", "UI/UX Principles"] },
  { icon: "fa-server", title: "Backend", values: ["Node.js", "Express.js", "Next.js App Router", "Server Actions", "REST APIs", "Authentication", "API Integration", "Database Integration", "EJS", "Server Architecture"] },
  { icon: "fa-screwdriver-wrench", title: "Tools", values: ["Git", "GitHub", "Vercel", "VS Code", "Chrome DevTools", "Postman", "Figma (Basics)", "npm"] },
];

export const projects: Project[] = [
  { title: "Weather App", description: "Built using HTML, CSS, and JavaScript with API integration to fetch real-time weather data. Provides current weather, forecasts, and responsive UI for a smooth experience.", technologies: "HTML, CSS, JS", caseStudy: "This project focuses on teaching me how to fetch data from external APIs and display it dynamically. I worked on optimizing the UI for mobile and desktop, and learned to handle asynchronous requests effectively.", href: "https://weatherly-rouge-mu.vercel.app/weather", image: "/images/weatherly.png" },
  { title: "Logistics Management Website", description: "A full-stack logistics platform built with Node.js, Express, and EJS. Tracks shipments, manages deliveries, and provides a fast, responsive user experience.", technologies: "Node.js, Express, EJS, JS, HTML, CSS", caseStudy: "I focused on creating a dynamic backend that interacts smoothly with the frontend, handling forms, routes, and data rendering efficiently. Learned a lot about structuring full-stack apps and optimizing performance.", href: "https://dgcc-tech-logistics.vercel.app/", image: "/images/logistics.png" },
];

export const experiences: Experience[] = [
  { image: "/images/education_2.jpg", label: "Education & Learning", title: "DGCC Tech Diploma Program", description: "Currently pursuing a diploma in web development under DGCC Tech, where I've gained hands-on experience building projects and mastering practical skills. Learned HTML, CSS, JavaScript, Node.js, Express, and EJS while working on real-world applications and exercises.", learning: "Full-stack development, responsive design, server-side rendering with EJS, and project-based problem solving.", duplicatedLearning: "Frontend & Backend development, API integration, responsive design, and project-based learning.", caseStudy: "During my studies, I've created several projects such as a Weather App and a Logistics Management Website. These projects helped me understand full-stack development concepts, learn server-side rendering with EJS, and practice connecting frontends with backend logic." },
  { reverse: true, image: "/images/education.jpg", label: "Learning Milestone", title: "Junior Secondary Programming", description: "First exposure to programming in junior secondary school by following my brother’s projects. Started with HTML and CSS, creating small projects that sparked my interest in web development.", learning: "Basic web structure, styling, and foundational coding logic.", caseStudy: "These early projects were simple but taught me problem-solving, patience, and how to learn independently — skills that continue to guide my development journey today." },
];
