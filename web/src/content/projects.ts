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
    highlights: ["Realtime Chat", "Nutrition Tracker", "Workout Tracker", "Progress Tracker"],
    repoUrl: "https://github.com/tarnaldo88/Proper-Form-Firebase",
    liveUrl: "#",
    images: [
      { 
        src: "/properformLogo.png", 
        alt: "Proper Form App Logo",
        caption: "App Logo"
      },
      {
        src: "/Pform/userFlow.png",
        alt: "Proper Form User Flow",
        caption: "User Experience Diagram"
      },
      {
        src: "/Pform/nutHome.png",
        alt: "Proper Form Nutrition Tracker",
        caption: "Nutrition Tracking Dashboard"
      },
      {
        src: "/Pform/foodentry.png",
        alt: "Proper Form food entry",
        caption: "Nutrition Tracking Entry Form, where users can add food items to their nutrition log"
      },
      {
        src: "/Pform/nutjournal.png",
        alt: "Proper Form journal",
        caption: "Nutrition Journal where users can view their nutrition log, and view their daily caloric intake, as well as carbs, sugar and protein"
      },
      {
        src: "/Pform/comHome.png",
        alt: "Proper Form Chat Feature",
        caption: "Realtime Chat with Trainers"
      },
      {
        src: "/Pform/chatselect.png",
        alt: "Proper Form Chat select",
        caption: "Realtime Chat with Trainers"
      },
      {
        src: "/Pform/exHome.png",
        alt: "Proper Form Workout Tracker",
        caption: "Workout Tracking Dashboard"
      },
      {
        src: "/Pform/exselect.png",
        alt: "Proper Form Exercise Selector",
        caption: "Exercise Selector (same format for the stretches section)"
      },
      {
        src: "/Pform/exworkoutlist.png",
        alt: "Proper Form Exercise list",
        caption: "List of available exercises for user to select from. Same layout for the stretches section."
      },
      {
        src: "/Pform/exExample.png",
        alt: "Proper Form Exercise example",
        caption: "When user selects an exercise, it opens a modal with the exercise details"
      },
      {
        src: "/Pform/routineSelect.png",
        alt: "Proper Form Routine Select",
        caption: " When user selects Routine Generator, they are presented with the different areas of the body to select from. As they select areas they are moved down into the generator. They can also touch areas selected to remove from generator before finalizing with the generate button."
      },
    ]
  },
  {
    id: "p2",
    title: "Redis Server",
    slug: "redis-server",
    shortDescription: "Redis Server built from scratch in C++.",
    techStack: ["C++", "Redis", "Multithreading", "Algorithms", "Networking", "Design Patterns", "Sockets"],
    tags: ["CLI", "redis", "c++", "multithreading", "algorithms", "networking", "design patterns", "sockets"],
    status: "released",
    featured: true,
    highlights: ["Server Actions", "multi-threading"],
    repoUrl: "https://github.com/tarnaldo88/Redis-Server",
    liveUrl: "#",
    images: [
      { src: "/RedisTorres.png", alt: "redis serverq icon" },
      // { src: "/redis/overview.png", alt: "redis overview", caption: "Redis Server Features & Overview" },
      // { src: "/redis/supcmds.png", alt: "redis commands", caption: "Redis Server Commands that are currently supported. Implementation of additional commands in progress." },
      // { src: "/redis/redisclient.png", alt: "redis client overview", caption: "Redis Client Overview" },
    ],
  },
  {
    id: "p3",
    title: "Redis Client",
    slug: "redis-client",
    shortDescription: "Redis Client built from scratch in C++.",
    techStack: ["C++", "Redis", "Multithreading", "Algorithms", "Networking", "Design Patterns", "Sockets"],
    tags: ["CLI", "redis", "c++", "multithreading", "algorithms", "networking", "design patterns", "sockets"],
    status: "released",
    featured: true,
    highlights: ["Server Actions", "multi-threading"],
    repoUrl: "https://github.com/tarnaldo88/Redis-Client",
    liveUrl: "#",
    images: [
      { src: "/redis/RedisClientTorres.png", alt: "redis client icon" },
      // { src: "/redis/overview.png", alt: "redis overview", caption: "Redis Server Features & Overview" },
      // { src: "/redis/supcmds.png", alt: "redis commands", caption: "Redis Server Commands that are currently supported. Implementation of additional commands in progress." },
      // { src: "/redis/redisclient.png", alt: "redis client overview", caption: "Redis Client Overview" },
    ],
  },
  {
    id: "p4",
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
      { src: "/TorresShell.png", alt: "torres C shell icon" },
    ]
  },
  
  {
    id: "p5",
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
  },
  {
    id: "p6",
    title: "What To Watch?",
    slug: "what-to-watch",
    shortDescription: "A movie recommendation website that uses the moviedb API to search for movies and display them in a carousel.",
    techStack: ["react", "nextjs", "moviedb API"],
    tags: ["react", "nextjs", "moviedb API"],
    status: "released",
    featured: true,
    repoUrl: "https://github.com/tarnaldo88/What-To-Watch",
    liveUrl: "#",
    images: [
      { src: "/whatWatch/WhatToWatchLogo.png", alt: "what to watch logo" },
      {
        src: "/whatWatch/home.png",
        alt: "home screen",
        caption: "Home Screen of What To Watch, with search bar, movie carousel, and movie suggestions below."
      },
      {
        src: "/whatWatch/btmHome.png",
        alt: "bottom home screen",
        caption: "Bottom portion of the Home Screen containing movie suggestions, upcoming movies, and popular movies"
      },
      {
        src: "/whatWatch/mouse.png",
        alt: "mouse over",
        caption: "When user mouses over a movie tile, a description of that movie appears."
      },
      {
        src: "/whatWatch/searchOpt.png",
        alt: "search options",
        caption: "Dropdown genre options for search bar. Further assisting the user in finding a movie they can watch."
      },
      {
        src: "/whatWatch/searchResult.png",
        alt: "search result",
        caption: "Search results based on user's search query. Pulled from the moviedb API."
      },
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
