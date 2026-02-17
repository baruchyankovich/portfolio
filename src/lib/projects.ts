export interface Project {
  id: string;
  title: { en: string; he: string };
  description: { en: string; he: string };
  tech: string[];
  github?: string;
  live?: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "mailflow",
    title: {
      en: "MailFlow - Email Marketing SaaS",
      he: "MailFlow - \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05ea \u05e9\u05d9\u05d5\u05d5\u05e7 \u05de\u05d9\u05d9\u05dc\u05d9\u05dd",
    },
    description: {
      en: "Full-stack email marketing platform with campaign management, CSV import, analytics dashboard, HMAC-signed unsubscribe tokens, and Stripe billing integration.",
      he: "\u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05ea \u05e9\u05d9\u05d5\u05d5\u05e7 \u05de\u05d9\u05d9\u05dc\u05d9\u05dd \u05de\u05dc\u05d0\u05d4 \u05e2\u05dd \u05e0\u05d9\u05d4\u05d5\u05dc \u05e7\u05de\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd, \u05d9\u05d9\u05d1\u05d5\u05d0 CSV, \u05d3\u05e9\u05d1\u05d5\u05e8\u05d3 \u05d0\u05e0\u05dc\u05d9\u05d8\u05d9\u05e7\u05e1, \u05d8\u05d5\u05e7\u05e0\u05d9 \u05d4\u05e1\u05e8\u05d4 \u05de\u05d0\u05d5\u05d1\u05d8\u05d7\u05d9\u05dd \u05d5\u05d0\u05d9\u05e0\u05d8\u05d2\u05e8\u05e6\u05d9\u05d9\u05ea \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05e2\u05dd Stripe.",
    },
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend"],
    github: "https://github.com/baruchyankovich/mailflow",
    gradient: "from-blue-500 to-cyan-400",
    icon: "\u2709\ufe0f",
  },
  {
    id: "light",
    title: {
      en: "Light - In-Store Testing System",
      he: "Light - \u05de\u05e2\u05e8\u05db\u05ea \u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05d1\u05d7\u05e0\u05d5\u05ea",
    },
    description: {
      en: "Real-time in-store testing platform with Docker containerization, Socket.io live updates, dual payment processing (Stripe + PayPal), and Jewish prayer times integration.",
      he: "\u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05ea \u05d1\u05d3\u05d9\u05e7\u05d5\u05ea \u05d1\u05d7\u05e0\u05d5\u05ea \u05d1\u05d6\u05de\u05df \u05d0\u05de\u05ea \u05e2\u05dd Docker, \u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd \u05d7\u05d9\u05d9\u05dd \u05d1-Socket.io, \u05e2\u05d9\u05d1\u05d5\u05d3 \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05db\u05e4\u05d5\u05dc \u05d5\u05d0\u05d9\u05e0\u05d8\u05d2\u05e8\u05e6\u05d9\u05d9\u05ea \u05d6\u05de\u05e0\u05d9 \u05ea\u05e4\u05d9\u05dc\u05d4.",
    },
    tech: ["React", "Express", "MongoDB", "Docker", "Socket.io", "Stripe"],
    gradient: "from-purple-500 to-pink-400",
    icon: "\ud83d\udca1",
  },
  {
    id: "synagogue",
    title: {
      en: "Synagogue Management Platform",
      he: "\u05de\u05e2\u05e8\u05db\u05ea \u05e0\u05d9\u05d4\u05d5\u05dc \u05d1\u05ea\u05d9 \u05db\u05e0\u05e1\u05ea",
    },
    description: {
      en: "Full-stack platform for synagogue management with event booking, member management, payment processing, and automated email notifications.",
      he: "\u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4 \u05dc\u05e0\u05d9\u05d4\u05d5\u05dc \u05d1\u05ea\u05d9 \u05db\u05e0\u05e1\u05ea \u05e2\u05dd \u05d4\u05d6\u05de\u05e0\u05ea \u05d0\u05d9\u05e8\u05d5\u05e2\u05d9\u05dd, \u05e0\u05d9\u05d4\u05d5\u05dc \u05d7\u05d1\u05e8\u05d9\u05dd, \u05e2\u05d9\u05d1\u05d5\u05d3 \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05d5\u05d4\u05ea\u05e8\u05d0\u05d5\u05ea \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9\u05d5\u05ea \u05d1\u05de\u05d9\u05d9\u05dc.",
    },
    tech: ["React", "Express", "MongoDB", "Redux", "Stripe", "JWT"],
    github: "https://github.com/baruchyankovich/synagogue-backend",
    gradient: "from-amber-500 to-orange-400",
    icon: "\ud83c\udfdb\ufe0f",
  },
  {
    id: "construction",
    title: {
      en: "Construction Project Manager",
      he: "\u05de\u05e2\u05e8\u05db\u05ea \u05e0\u05d9\u05d4\u05d5\u05dc \u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9 \u05d1\u05e0\u05d9\u05d9\u05d4",
    },
    description: {
      en: "Enterprise project management system for construction companies, built with .NET backend and TypeScript frontend with role-based access control.",
      he: "\u05de\u05e2\u05e8\u05db\u05ea \u05e0\u05d9\u05d4\u05d5\u05dc \u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9\u05dd \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea \u05d1\u05e0\u05d9\u05d9\u05d4, \u05e2\u05dd \u05d1\u05e7-\u05d0\u05e0\u05d3 .NET \u05d5\u05e4\u05e8\u05d5\u05e0\u05d8 TypeScript \u05e2\u05dd \u05d1\u05e7\u05e8\u05ea \u05d4\u05e8\u05e9\u05d0\u05d5\u05ea \u05dc\u05e4\u05d9 \u05ea\u05e4\u05e7\u05d9\u05d3.",
    },
    tech: [".NET", "C#", "TypeScript", "SQL Server", "REST API"],
    github: "https://github.com/baruchyankovich/ConstructionSystem",
    gradient: "from-emerald-500 to-teal-400",
    icon: "\ud83c\udfd7\ufe0f",
  },
  {
    id: "daily-recorder",
    title: {
      en: "Daily Recorder - AI Transcription",
      he: "Daily Recorder - \u05ea\u05de\u05dc\u05d5\u05dc AI",
    },
    description: {
      en: "Automated daily audio recording system with AI-powered transcription, summarization, and WhatsApp notification delivery.",
      he: "\u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05e7\u05dc\u05d8\u05ea \u05e9\u05de\u05e2 \u05d9\u05d5\u05de\u05d9\u05ea \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9\u05ea \u05e2\u05dd \u05ea\u05de\u05dc\u05d5\u05dc \u05de\u05d1\u05d5\u05e1\u05e1 AI, \u05e1\u05d9\u05db\u05d5\u05dd \u05d5\u05e9\u05dc\u05d9\u05d7\u05ea \u05d4\u05ea\u05e8\u05d0\u05d5\u05ea \u05dc-WhatsApp.",
    },
    tech: ["Python", "AI/ML", "WhatsApp API", "Audio Processing"],
    gradient: "from-red-500 to-rose-400",
    icon: "\ud83c\udfa4",
  },
];

export const skillCategories = [
  {
    name: { en: "Backend", he: "Backend" },
    skills: ["Node.js", "Express", "Next.js", "REST APIs", "WebSocket", "GraphQL"],
    color: "text-green-400",
  },
  {
    name: { en: "Frontend", he: "Frontend" },
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "text-blue-400",
  },
  {
    name: { en: "Database", he: "\u05d1\u05e1\u05d9\u05e1\u05d9 \u05e0\u05ea\u05d5\u05e0\u05d9\u05dd" },
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "SQL Server"],
    color: "text-yellow-400",
  },
  {
    name: { en: "DevOps", he: "DevOps" },
    skills: ["Docker", "Git", "Vercel", "AWS", "CI/CD", "Linux"],
    color: "text-orange-400",
  },
  {
    name: { en: "AI / ML", he: "AI / ML" },
    skills: ["LangChain", "Claude API", "Gemini API", "Ollama", "RAG"],
    color: "text-purple-400",
  },
  {
    name: { en: "Languages", he: "\u05e9\u05e4\u05d5\u05ea" },
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "SQL"],
    color: "text-cyan-400",
  },
  {
    name: { en: "Integrations", he: "\u05d0\u05d9\u05e0\u05d8\u05d2\u05e8\u05e6\u05d9\u05d5\u05ea" },
    skills: ["Stripe", "PayPal", "Resend", "Socket.io", "Cloudinary"],
    color: "text-pink-400",
  },
];
