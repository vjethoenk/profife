export interface Project {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  github: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  desc: string;
  tech: string[];
  logo?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
