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
        I’m a software engineer who enjoys building performant, accessible web experiences.
        This portfolio showcases selected work across frontend, full‑stack, and AI‑assisted projects.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
        <li>Backend: Node.js, REST, Prisma</li>
        <li>Tools: GitHub, Vercel, CI/CD, Testing</li>
      </ul>
    </Container>
  );
}
