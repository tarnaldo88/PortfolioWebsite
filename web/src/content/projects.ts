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
    title: "Redis Server & Redis Client",
    slug: "redis-server-client",
    shortDescription: "Redis Server and Client built in C++.",
    techStack: ["C++", "Redis", "Redis"],
    tags: ["CLI", "redis", "c++", "multithreading", "algorithms", "networking", "design patterns", "sockets"],
    status: "released",
    featured: true,
    highlights: ["Server Actions", "multi-threading"],
    repoUrl: "https://github.com/tarnaldo88/Redis-Server",
    liveUrl: "#",
    images: [
      { src: "/RedisTorres.png", alt: "redis serverq icon" }
    ],
  },
  {
    id: "p3",
    title: "Unix Shell in C",
    slug: "unix-shell",
    shortDescription: "An interactive shell that reads a command line, tokenizes it, and dispatches built-in commands",
    techStack: ["C", "memory management", "algorithms", "networking", "design patterns"],
    tags: ["C", "Z Shell", "Unix"],
    status: "released",
    featured: true,
    repoUrl: "https://github.com/tarnaldo88/Build-Z-Shell",
    liveUrl: "#",
    images: [
      { src: "/TorresShell.png", alt: "z shell icon" }
    ]
  },
  
  {
    id: "p4",
    title: "Network Packet Sniffer like WireShark",
    slug: "network-sniffer",
    shortDescription: "A lightweight, Windows-focused network packet sniffer with a clean Tkinter GUI. It captures IPv4 traffic using raw sockets and presents a color-coded, filterable view of packets with a details pane for deeper inspection.",
    techStack: ["python", "networking", "Pinecone"],
    tags: ["networking", "python", "GUI", "sockets"],
    status: "released",
    featured: true,
    repoUrl: "https://github.com/tarnaldo88/Network-Packet-Sniffer",
    liveUrl: "#",
    images: [
      { src: "/TorresShark.png", alt: "network sniffer icon" }
    ]
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
