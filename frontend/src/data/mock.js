// Mock data for Katlego Seiphemo's Portfolio

export const personalInfo = {
  name: "Katlego Seiphemo",
  title: "Full Stack Developer",
  tagline: "Building Modern, Scalable & User-Friendly Applications",
  bio: "I'm a full-stack developer passionate about building modern, scalable, and user-friendly applications. I have experience with frontend technologies like HTML, CSS, JavaScript, React, and Vue, as well as backend development using Node.js, Python, Java, and their frameworks. I'm also skilled in databases and have experience building mobile applications with Flutter. I love turning complex problems into elegant solutions, integrating both web and mobile platforms, and continuously exploring new technologies to create high-quality, real-world projects.",
  email: "katlegoseiphemo@gmail.com",
  phone: "+27 67 825 6704",
  github: "https://github.com/KatlegoSeiphemo",
  linkedin: "https://www.linkedin.com/in/katlego-seiphemo-819779328",
  images: {
    portrait1: "/portrait1.jpeg",
    portrait2: "/portrait2.jpeg"
  }
};

export const skills = {
  frontend: {
    title: "Front-End",
    icon: "Monitor",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TypeScript", "Vue", "Responsive Design", "Cross-browser Compatibility"]
  },
  backend: {
    title: "Back-End",
    icon: "Server",
    items: ["Python (Flask, Django)", "Java (Spring Boot)", "Node.js", "RESTful API Development"]
  },
  tools: {
    title: "Tools & Frameworks",
    icon: "Wrench",
    items: ["Git & GitHub", "Node.js", "NPM/Yarn", "Webpack", "Babel", "Postman", "Swagger"]
  },
  databases: {
    title: "Databases & Cloud",
    icon: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Heroku", "Vercel", "AWS"]
  }
};

export const projects = [
  {
    id: 1,
    name: "Odyssey Finds",
    description: "A modern e-commerce platform featuring seamless shopping experiences, secure payment integration, and intuitive product discovery. Built with a focus on performance and user experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    github: "https://github.com/KatlegoSeiphemo/odysseyfinds.git",
    live: "#",
    featured: true
  },
  {
    id: 2,
    name: "Pathrise",
    description: "An innovative educational mobile platform revolutionizing learning experiences. Features interactive courses, progress tracking, and collaborative tools. Nominated for FNB App of the Year 2025.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    github: "https://github.com/KatlegoSeiphemo/pathrise.git",
    live: "#",
    featured: true,
    award: "Nominated for FNB App of the Year 2025"
  },
  {
    id: 3,
    name: "Stokvel Dashboard",
    description: "A fintech dashboard application designed for community savings and investment. Features group money management, contribution tracking, and investment opportunities for collective financial growth.",
    tags: ["React", "Dashboard", "Finance", "Analytics"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
    github: "https://github.com/KatlegoSeiphemo/savvystokvel.git",
    live: "#",
    featured: true
  }
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom web and mobile applications for clients across various industries."
  }
];
