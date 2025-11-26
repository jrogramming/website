import { Experience, Education, Skill, Project } from './types';
import { Gamepad2, BarChart3, Database, Megaphone, Terminal, Cpu } from 'lucide-react';

export const EDUCATION: Education[] = [
  {
    school: "University of Virginia",
    location: "Charlottesville, VA",
    degrees: [
      "B.A. Applied Statistics (Data Science & Analytics), minor in CS",
      "M.S. Statistics"
    ]
  }
];

export const AWARDS = [
  { title: "Echols Scholar", desc: "Honors Program in the UVA College of Arts & Sciences" },
  { title: "Tri-Alpha Honor Society", desc: "National Honor Society for First-Generation College Students" },
  { title: "Catalyst Program", desc: "Selective Arts & Sciences Career Readiness and Leadership Program" }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 9, category: 'code', link: "#projects" },
  { name: "R / Shiny", level: 8, category: 'data', link: "#projects" },
  { name: "Game Dev (C#)", level: 7, category: 'creative', link: "#projects" },
  { name: "SQL", level: 7, category: 'data', link: "#projects" },
  { name: "Marketing Strategy", level: 8, category: 'creative', link: "#projects" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "playgo",
    role: "Product Marketing Analyst",
    company: "Playgo AI",
    location: "Seattle, WA",
    date: "June 2025 – August 2025",
    description: [
      "Leveraged engagement data for root cause analysis on user behavior for a custom free-to-play app.",
      "Designed 50+ deliverables and tested strategies to attract content creators.",
      "Developed workflows to manage community outreaches and track engagement metrics."
    ]
  },
  {
    id: "uva-ta",
    role: "CS 4730: Computer Game Design Teaching Assistant",
    company: "UVA Computer Science Department",
    location: "Charlottesville, VA",
    date: "Jan 2025 – Present",
    description: [
      "Teach Unity (C#) and PICO-8 (Lua) to 50+ students.",
      "Created class materials informed by performance metrics and real-time feedback.",
      "Used Git to track students’ progress and monitor development iterations."
    ]
  },
  {
    id: "jad",
    role: "Shipping and Marketing Manager",
    company: "Just Another Day",
    location: "Tokyo, Japan",
    date: "Jan 2024 – March 2025",
    description: [
      "Managed end-to-end retail product lifecycle for a 20-item set by coordinating across art, writing, and editing departments.",
      "Planned and executed 4 major advertising campaigns, generating $5.6K in revenue.",
      "Conducted competitive analysis and market research to refine strategy."
    ]
  },
  {
    id: "scholars",
    role: "Lead Technologist",
    company: "Scholars’ Lab Makerspace",
    location: "Charlottesville, VA",
    date: "Sept 2023 – Present",
    description: [
      "Manage a team of 15 student technologists.",
      "Guide visitors in developing projects and solving complex, hands-on technical challenges.",
      "Design workshops, tutorials, and technical demonstrations."
    ]
  },
  {
    id: "andeco",
    role: "Data Analyst Intern",
    company: "ANDECO",
    location: "McLean, VA",
    date: "June 2024 – August 2024",
    description: [
      "Processed large data sets (critical minerals, employment) in Databricks with 150k+ entries.",
      "Collaborated with data engineers to design effective data ingestion pipelines for 18 Shiny app demos.",
      "Developed 8 data play card sets and a repeatable BI dashboard pipeline with dynamic PySpark visualizations."
    ]
  },
  {
    id: "infinite",
    role: "Digital Marketing Intern",
    company: "Infinite Horizons",
    location: "Singapore",
    date: "Oct 2021 – Aug 2023",
    description: [
      "Fulfilled 250+ book/merch orders, raising $14K+ for charity.",
      "Created 300+ social media posts across Twitter/X and Tumblr tracking engagement.",
      "Developed an Excel automation with lookup formulas to manage contributor info."
    ]
  },
  {
    id: "toys",
    role: "E-Communications Retail Lead",
    company: "Toys for Less",
    location: "Alexandria, VA",
    date: "Jan 2012 – Present",
    description: [
      "Support daily retail and e-commerce operations by managing Amazon listings.",
      "Gather and organize sales data from Amazon dashboards to identify purchasing trends."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "stats-1",
    title: "Statistics Showcase",
    description: "Data analysis and dashboard projects featuring ggplot2 and Shiny. Interactive visualizations exploring complex datasets.",
    category: "stats",
    tech: ["R", "Shiny", "ggplot2"],
    link: "#"
  },
  {
    id: "games-1",
    title: "Twilight Tower",
    description: "A whimsical vertical platformer developed in Unity. Climb the tower, avoid obstacles, and reach the top in this atmospheric adventure.",
    category: "game",
    tech: ["C#", "Unity", "WebGL"],
    link: "https://github.com/m1ra-k/twilight-tower",
    demoUrl: "https://m1ra-k.github.io/twilight-tower/"
  },
  {
    id: "cs-1",
    title: "Database Analytics",
    description: "Database design and analytics dashboards using structured data and complex SQL queries.",
    category: "cs",
    tech: ["SQL", "PostgreSQL", "Python"],
    link: "#"
  },
  {
    id: "mkt-1",
    title: "Marketing Campaigns",
    description: "Campaigns, content strategy, and analytics reports demonstrating cross-domain insight and high engagement rates.",
    category: "marketing",
    tech: ["Google Analytics", "Social Media", "Excel"],
    link: "#"
  }
];

export const CATEGORIES = [
  { id: 'stats', label: 'Statistics', icon: BarChart3, color: 'text-pink-dark' },
  { id: 'game', label: 'Games', icon: Gamepad2, color: 'text-blue-500' },
  { id: 'cs', label: 'Comp Sci', icon: Terminal, color: 'text-green-600' },
  { id: 'marketing', label: 'Marketing', icon: Megaphone, color: 'text-purple-500' },
];