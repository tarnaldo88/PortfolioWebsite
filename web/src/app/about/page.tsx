import Container from "@/components/Container";

export const metadata = {
  title: "About",
  description: "About me, my skills, and background.",
};

export default function AboutPage() {
  return (
    <Container className="py-10 prose prose-neutral dark:prose-invert max-w-3xl">
      <h1>About</h1>
      <p>
      I’m a software developer passionate about building everything 
      from low-level systems to sleek, user-facing applications. My projects range from a Redis-like database server, 
      a custom Unix shell, and a network packet sniffer to modern apps like a cross-platform fitness tracker (React Native + Firebase) 
      and a movie discovery website built with Next.js 14, TypeScript, and Tailwind CSS. I enjoy designing efficient, maintainable code, whether I’m working with raw sockets and concurrency or creating smooth, accessible UIs. My goal is to keep growing as a full-stack engineer — deepening my expertise in backend systems, distributed computing, and scalable APIs while continuing to deliver great UX on the frontend.
      </p>
      <h2>Skills</h2>
      <ul>
      <li>Frontend: Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui</li>
  <li>Mobile: React Native, Expo, Firebase Authentication</li>
  <li>Backend & Systems: C/C++ (C++17), POSIX/Linux programming, Sockets, Multithreading, Protocol Parsing (RESP)</li>
  <li>Networking & Tools: Raw Socket Capture, Wireshark-style Packet Analysis, REST APIs</li>
  <li>Development: Git/GitHub, Make, Cross-Platform Builds, Vercel, CI/CD</li>
      </ul>
    </Container>
  );
}
