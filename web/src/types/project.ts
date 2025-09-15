export type ProjectStatus = "released" | "in_progress" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTestimonial {
  name: string;
  role?: string;
  quote: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription?: string;
  role?: string;
  techStack: string[];
  responsibilities?: string[];
  highlights?: string[];
  images?: ProjectImage[];
  video?: { url: string; poster?: string };
  repoUrl?: string;
  liveUrl?: string;
  startDate?: string;
  endDate?: string;
  featured?: boolean;
  status: ProjectStatus;
  tags: string[];
  metrics?: ProjectMetric[];
  challenges?: string;
  outcomes?: string;
  testimonials?: ProjectTestimonial[];
}
