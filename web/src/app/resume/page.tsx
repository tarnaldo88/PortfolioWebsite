import Container from "@/components/Container";

export const metadata = {
  title: "Resume",
  description: "Resume and experience overview.",
};

export default function ResumePage() {
  return (
    <Container className="py-10 max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight">Resume</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Download a copy of my resume or review highlights below.
      </p>
      <div className="mt-4">
        <a href="/assets/resume.pdf" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
          Download PDF
        </a>
      </div>
      <div className="mt-8 space-y-4 text-sm text-muted-foreground">
        <p><strong>Role:</strong> Software Engineer</p>
        <p><strong>Focus:</strong>Full-Stack & Backend</p>
        <p><strong>Stack:</strong> React,C++, JavaScript, TypeScript, C#, Node.js,</p>
      </div>
    </Container>
  );
}
