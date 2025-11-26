export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export interface Education {
  school: string;
  location: string;
  degrees: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'code' | 'data' | 'creative';
  link: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'stats' | 'game' | 'cs' | 'marketing';
  tech: string[];
  link?: string;
  demoUrl?: string;
}