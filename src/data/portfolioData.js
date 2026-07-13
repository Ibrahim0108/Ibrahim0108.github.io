import web1 from "../assets/images/projects/web.png"
import aboutImg from "../assets/images/about.jpg";
import planetFooter from "../assets/images/footer-planet.png";
import Task from "../assets/images/projects/Task.png

export const heroData = {
  name: "Mohammed Ibrahim Rahmath",
  role: "Junior Software Engineer",
  description:
    "C# | .NET | .NET CORE | VUE.JS | SQL ",

  imageAlt: "Floating planet",
};


export const projects = [
  {
    id: 1,
    title: "Jewelry E-Commerce Platform",
    category: "Web Apps",

    // Minimum 30 characters recommended
    description:
      "Full-stack jewelry store with cart management, custom design requests, and automated email communication between customers and the business.",

    image: web1,

    tech: {
      frontend: ["React"],
      backend: ["Node.js", "Express"],
      db: ["Supabase"],
    },

    githubUrl: "",
    preview: {
      type: "live",
      url: "",
    },
  },

  {
    id: 2,
    title: "Task Management System",
    category: "Web Apps",

    // Minimum 30 characters recommended
   description:
  "A role-based educational workspace management system where teachers manage teams, assign tasks, track student progress, and students collaborate using secure invitation codes."

    image: Task,

    tech: {
      frontend: ["ASP.NET MVC"],
      backend: [".NET Core"],
      db: ["SQL Server"],
    },

    githubUrl: "https://github.com/Ibrahim0108/TaskAssignmentSystem",
    preview: {
      type: "live",
      url: "http://taskflow-manager.runasp.net/",
    },
  },

  {
    id: 3,
    title: "Personal Expense Tracker",
    category: "Web Apps",

    // Minimum 30 characters recommended
    description:
      "Expense and income tracking system with loan management, repayment reminders, monthly summaries, and detailed financial categorization.",

    image: web1,

    tech: {
      frontend: ["Vue.js"],
      backend: ["Python", "Flask"],
      db: [],
    },

    githubUrl: "",
    preview: {
      type: "live",
      url: "",
    },
  },

  {
    id: 4,
    title: "AI Chatbot Gateway",
    category: "LLM",

    // Minimum 30 characters recommended
    description:
      "Web-based chatbot connected to locally hosted AI models through dynamically exposed public endpoints for remote conversational access.",

    image: web1,

    tech: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python", "Flask"],
      db: [],
    },

    githubUrl: "",
    preview: {
      type: "live",
      url: "",
    },
  },

  {
    id: 5,
    title: "StoryForge AI",
    category: "LLM",

    // Minimum 30 characters recommended
    description:
      "RAG-powered storytelling platform that generates characters, scenes, and complete multi-stage narratives from concept to climax.",

    image: web1,

    tech: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python", "Flask"],
      db: [],
    },

    githubUrl: "",
    preview: {
      type: "live",
      url: "",
    },
  },

  {
    id: 6,
    title: "Containerized Appointment System",
    category: "Devops",

    // Minimum 30 characters recommended
    description:
      "Doctor and patient appointment platform deployed using Docker Compose with isolated frontend, backend, and database services.",

    image: web1,

    tech: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      db: ["MySQL"],
    },

    githubUrl: "",
    preview: {
      type: "youtube",
      videoId: "",
    },
  },
];

export const aboutData = {
  title: "About Me",

  paragraphs: [
    "I'm a Junior Software Engineer focused on building scalable web applications and clean backend systems with strong fundamentals.",

    "I enjoy working across the full stack — from crafting cinematic, responsive UIs to designing APIs, databases, and system architecture. I value clarity, performance, and maintainability over shortcuts."
  ],

  image: aboutImg,
  imageAlt: "Abstract space object floating",
};

export const experienceData = [
  {
    id: 1,
    role: "Junior Software Engineer",
    company: "Sigmoss Systems pvt limited",
    duration: "July 2025 - Present",
    description:
      "Working on modern web applications using React, .NET Core, and REST APIs. Focused on performance, clean architecture, and scalable backend services.",
    tech: ["C#", ".NET Core", "React", "SQL Server"],
  },
  {
    id: 2,
    role: "Junior Software developer",
    company: "Stratacache",
    duration: "November 2024 - April 2025",
    description:
      "Working on modern web applications using React, .NET Core, and REST APIs. Focused on performance, clean architecture, and scalable backend services.",
    tech: ["Vue.js", "Node.js", "React", "SQL"],
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "SYSLOG Technology",
    duration: "june 2024 - july 2023",
    description:
      "Built internal tools, dashboards, and APIs. Gained hands-on experience with full-stack development and real-world deployment workflows.",
    tech: [ "Tkinter", "Python"],
  },
];



export const footerData = {
  planetImage: planetFooter,

  contacts: [
    {
      type: "linkedin-chat",
      label: "Message",
      value: "https://www.linkedin.com/messaging/thread/new/?recipients=",
      copy: false,
    },
    {
      type: "email",
      label: "Email",
      value: "encoded",
      copy: true,
    },
    {
      type: "github",
      label: "GitHub",
      value: "https://github.com/ibrahim0108",
      copy: false,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "https://linkedin.com/in/yourusername",
      copy: false,
    },
  ],
};


export const projectTabs = [
  {
    key: "Web Apps",
    label: "Web Apps",
    short: "Web",
  },
  {
    key: "LLM",
    label: "LLM",
    short: "AI",
  },
  {
    key: "Devops",
    label: "Devops",
    short: "DevOps",
  }
];
