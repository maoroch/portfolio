export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  stack: string[];
  architecture: string;
  result: string;
  category: "crm" | "frontend" | "backend" | "ai" | "fullstack" | "uiux";
  featured: boolean;
  year: number;
  link?: string;
  github?: string;
  image?: string | null;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishedAt: string;
  featured: boolean;
  slug: string;
}
