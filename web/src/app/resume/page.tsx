import Container from "@/components/Container";
import fs from 'fs';
import path from 'path';
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata = {
  title: "Resume",
  description: "Resume and experience overview.",
};

async function getResumeContent() {
  const filePath = path.join(process.cwd(), 'public', 'resume.md');
  const fileContent = await fs.promises.readFile(filePath, 'utf8');
  return fileContent;
}

export default async function ResumePage() {
  const markdown = await getResumeContent();

  return (
    <Container className="py-10 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="mt-2 text-muted-foreground">
            Professional experience and skills overview
          </p>
        </div>
        <a 
          href="/resume.pdf" 
          className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          download
        >
          Download PDF
        </a>
      </div>

      <div className="contact-info mb-8 space-y-2">
        <div>✉️ Email: tarnaldo88@gmail.com</div>
        <div>🔗 LinkedIn: <a href="https://linkedin.com/in/arnaldo-torres/" className="hover:underline">Arnaldo Torres</a></div>
        <div>🔗 GitHub: <a href="https://github.com/tarnaldo88" className="hover:underline">Arnaldo's GitHub</a></div>
      </div>
      
      <div className="markdown-body">
        <MarkdownContent content={markdown} />
      </div>
    </Container>
  );
}
