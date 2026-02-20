export type Lang = "en" | "he";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm",
      name: "Baruch Yankovitz",
      roles: [
        "Backend Developer",
        "AI Solutions Builder",
        "Vibe Coder",
        "Full-Stack Engineer",
      ],
      cta: "View Projects",
      contact: "Contact Me",
      achievements: [
        { value: "8+", label: "Production Apps" },
        { value: "12+", label: "Technologies" },
        { value: "6", label: "Languages" },
        { value: "SaaS", label: "to Real-time" },
      ],
    },
    about: {
      title: "About Me",
      description:
        "I'm a backend-focused developer who builds production-grade systems — from SaaS platforms to real-time applications. I specialize in Node.js, TypeScript, and cloud architecture, with a growing obsession for AI-powered solutions. I don't just write code — I engineer products that solve real problems.",
      highlight1: "Backend & API Architecture",
      highlight1desc: "Designing scalable REST APIs, WebSocket systems, and microservices with Node.js, Express, and Next.js",
      highlight2: "AI & Automation",
      highlight2desc: "Building intelligent solutions with LangChain, Claude API, Gemini, and custom AI pipelines",
      highlight3: "Full Product Delivery",
      highlight3desc: "From database design to payment integration to deployment — I ship complete, working products",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Technologies I work with daily",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Things I've built",
      viewCode: "View Code",
      liveDemo: "Live Demo",
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Looking for my next challenge. Let's talk.",
      email: "Email",
      phone: "Phone",
      or: "or find me on",
    },
    footer: {
      built: "Built with Next.js, Three.js & too much coffee",
      rights: "All rights reserved",
    },
  },
  he: {
    nav: {
      about: "\u05e2\u05dc\u05d9",
      skills: "\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d5\u05ea",
      projects: "\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9\u05dd",
      contact: "\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8",
    },
    hero: {
      greeting: "\u05d4\u05d9\u05d9, \u05d0\u05e0\u05d9",
      name: "\u05d1\u05e8\u05d5\u05da \u05d9\u05e0\u05e7\u05d5\u05d1\u05d9\u05e5",
      roles: [
        "Backend Developer",
        "AI Solutions Builder",
        "Vibe Coder",
        "Full-Stack Engineer",
      ],
      cta: "\u05dc\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9\u05dd",
      contact: "\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8",
      achievements: [
        { value: "8+", label: "\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d5\u05ea \u05d1\u05e4\u05e8\u05d5\u05d3\u05e7\u05e9\u05df" },
        { value: "12+", label: "\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d5\u05ea" },
        { value: "6", label: "\u05e9\u05e4\u05d5\u05ea \u05ea\u05db\u05e0\u05d5\u05ea" },
        { value: "SaaS", label: "\u05e2\u05d3 Real-time" },
      ],
    },
    about: {
      title: "\u05e7\u05e6\u05ea \u05e2\u05dc\u05d9",
      description:
        "\u05d0\u05e0\u05d9 \u05de\u05e4\u05ea\u05d7 \u05d1\u05e7-\u05d0\u05e0\u05d3 \u05e9\u05d1\u05d5\u05e0\u05d4 \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d1\u05e8\u05de\u05ea \u05e4\u05e8\u05d5\u05d3\u05e7\u05e9\u05df \u2014 \u05de\u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d5\u05ea SaaS \u05d5\u05e2\u05d3 \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d5\u05ea real-time. \u05d0\u05e0\u05d9 \u05de\u05ea\u05de\u05d7\u05d4 \u05d1-Node.js, TypeScript \u05d5\u05d0\u05e8\u05db\u05d9\u05d8\u05e7\u05d8\u05d5\u05e8\u05ea \u05e2\u05e0\u05df, \u05e2\u05dd \u05d0\u05d5\u05d1\u05e1\u05e1\u05d9\u05d4 \u05d2\u05d5\u05d1\u05e8\u05ea \u05dc\u05e4\u05ea\u05e8\u05d5\u05e0\u05d5\u05ea \u05de\u05d1\u05d5\u05e1\u05e1\u05d9 AI. \u05d0\u05e0\u05d9 \u05dc\u05d0 \u05e1\u05ea\u05dd \u05db\u05d5\u05ea\u05d1 \u05e7\u05d5\u05d3 \u2014 \u05d0\u05e0\u05d9 \u05de\u05d4\u05e0\u05d3\u05e1 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e9\u05e4\u05d5\u05ea\u05e8\u05d9\u05dd \u05d1\u05e2\u05d9\u05d5\u05ea \u05d0\u05de\u05d9\u05ea\u05d9\u05d5\u05ea.",
      highlight1: "\u05d0\u05e8\u05db\u05d9\u05d8\u05e7\u05d8\u05d5\u05e8\u05ea Backend & API",
      highlight1desc: "\u05ea\u05db\u05e0\u05d5\u05df REST APIs \u05e1\u05e7\u05d9\u05d9\u05dc\u05d1\u05d9\u05dc\u05d9\u05d9\u05dd, \u05de\u05e2\u05e8\u05db\u05d5\u05ea WebSocket \u05d5\u05de\u05d9\u05e7\u05e8\u05d5\u05e1\u05e8\u05d5\u05d5\u05d9\u05e1\u05d9\u05dd \u05e2\u05dd Node.js, Express \u05d5-Next.js",
      highlight2: "AI \u05d5\u05d0\u05d5\u05d8\u05d5\u05de\u05e6\u05d9\u05d4",
      highlight2desc: "\u05d1\u05e0\u05d9\u05d9\u05ea \u05e4\u05ea\u05e8\u05d5\u05e0\u05d5\u05ea \u05d7\u05db\u05de\u05d9\u05dd \u05e2\u05dd LangChain, Claude API, Gemini \u05d5\u05e6\u05d9\u05e0\u05d5\u05e8\u05d5\u05ea AI \u05de\u05d5\u05ea\u05d0\u05de\u05d9\u05dd \u05d0\u05d9\u05e9\u05d9\u05ea",
      highlight3: "\u05de\u05e1\u05d9\u05e8\u05ea \u05de\u05d5\u05e6\u05e8 \u05de\u05dc\u05d0\u05d4",
      highlight3desc: "\u05de\u05ea\u05db\u05e0\u05d5\u05df \u05d1\u05e1\u05d9\u05e1 \u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05d3\u05e8\u05da \u05d0\u05d9\u05e0\u05d8\u05d2\u05e8\u05e6\u05d9\u05d9\u05ea \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05d5\u05e2\u05d3 \u05d3\u05d9\u05e4\u05dc\u05d5\u05d9 \u2014 \u05d0\u05e0\u05d9 \u05de\u05e9\u05d7\u05e8\u05e8 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e9\u05dc\u05de\u05d9\u05dd \u05d5\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd",
    },
    skills: {
      title: "\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d5\u05ea",
      subtitle: "\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d5\u05ea \u05e9\u05d0\u05e0\u05d9 \u05e2\u05d5\u05d1\u05d3 \u05d0\u05d9\u05ea\u05df \u05d9\u05d5\u05de\u05d9\u05d5\u05de\u05d9\u05ea",
    },
    projects: {
      title: "\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9\u05dd \u05e0\u05d1\u05d7\u05e8\u05d9\u05dd",
      subtitle: "\u05d3\u05d1\u05e8\u05d9\u05dd \u05e9\u05d1\u05e0\u05d9\u05ea\u05d9",
      viewCode: "\u05e7\u05d5\u05d3 \u05de\u05e7\u05d5\u05e8",
      liveDemo: "\u05d3\u05de\u05d5 \u05d7\u05d9",
    },
    contact: {
      title: "\u05d1\u05d5\u05d0\u05d5 \u05e0\u05d3\u05d1\u05e8",
      subtitle: "\u05de\u05d7\u05e4\u05e9 \u05d0\u05ea \u05d4\u05d0\u05ea\u05d2\u05e8 \u05d4\u05d1\u05d0. \u05d1\u05d5\u05d0\u05d5 \u05e0\u05d3\u05d1\u05e8.",
      email: "\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",
      phone: "\u05d8\u05dc\u05e4\u05d5\u05df",
      or: "\u05d0\u05d5 \u05de\u05e6\u05d0\u05d5 \u05d0\u05d5\u05ea\u05d9 \u05d1-",
    },
    footer: {
      built: "\u05e0\u05d1\u05e0\u05d4 \u05e2\u05dd Next.js, Three.js \u05d5\u05d9\u05d5\u05ea\u05e8 \u05de\u05d3\u05d9 \u05e7\u05e4\u05d4",
      rights: "\u05db\u05dc \u05d4\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05e9\u05de\u05d5\u05e8\u05d5\u05ea",
    },
  },
} as const;

export type Translations = typeof translations.en;
