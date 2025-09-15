import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    slug: "portfolio-website",
    shortDescription: "Modern portfolio built with Next.js, TypeScript, and Tailwind.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    tags: ["frontend", "nextjs", "design"],
    status: "in_progress",
    featured: true,
    highlights: ["App Router", "Dark mode", "SEO metadata"],
    repoUrl: "https://github.com/",
    liveUrl: "#",
    images: [
      { src: "/next.svg", alt: "Next.js logo" }
    ],
  },
  {
    id: "p2",
    title: "E-commerce Store",
    slug: "ecommerce-store",
    shortDescription: "Headless commerce demo with product listings, cart, and checkout.",
    techStack: ["Next.js", "Stripe", "Prisma"],
    tags: ["fullstack", "stripe"],
    status: "released",
    featured: true,
    highlights: ["Server Actions", "Optimized images"],
    repoUrl: "https://github.com/",
    liveUrl: "#",
    images: [
      { src: "/globe.svg", alt: "Globe icon" }
    ],
  },
  {
    id: "p3",
    title: "Chatbot Assistant",
    slug: "chatbot-assistant",
    shortDescription: "Conversational assistant using streaming responses and RAG.",
    techStack: ["Next.js", "OpenAI", "Pinecone"],
    tags: ["ai", "rAG", "nextjs"],
    status: "released",
    featured: false,
    repoUrl: "https://github.com/",
    liveUrl: "#"
  }
];

export function getAllTags(): string[] {
  const set = new Set<string>();
  projects.forEach(p => p.tags.forEach(t => set.add(t)));
  return Array.from(set).sort();
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
