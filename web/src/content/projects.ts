import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Proper Form",
    slug: "proper-form-fitness",
    shortDescription: "Fitness, nutrition, and workout tracking app built with React Native, TypeScript, AWS, Firebase, and Proper-Form-API.",
    techStack: ["ReactNative", "TypeScript", "AWS", "Firebase", "Proper-Form-API"],
    tags: ["frontend", "reactjs", "full-stack", "aws", "firebase", "api"],
    status: "released",
    featured: true,
    highlights: ["Android", "Realtime Chat", "Nutrition Tracker", "Workout Tracker", "Progress Tracker"],
    repoUrl: "https://github.com/",
    liveUrl: "#",
    images: [
      { src: "/properformLogo.png", alt: "proper form logo" }
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
