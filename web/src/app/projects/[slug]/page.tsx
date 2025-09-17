import Container from "@/components/Container";
import { getProjectBySlug } from "@/content/projects";
import { MarkdownContent } from "@/components/MarkdownContent";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} – Project`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
    },
  };
}

async function fetchReadme(repoUrl: string): Promise<string> {
  try {
    const repoPath = new URL(repoUrl).pathname;
    const readmeUrl = `https://raw.githubusercontent.com${repoPath}/main/README.md`;
    const response = await fetch(readmeUrl, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      // Try with master branch if main doesn't exist
      const masterUrl = `https://raw.githubusercontent.com${repoPath}/master/README.md`;
      const masterResponse = await fetch(masterUrl);
      if (masterResponse.ok) {
        return await masterResponse.text();
      }
      return '';
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error fetching README:', error);
    return '';
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  let readmeContent = '';
  if (project.repoUrl && project.repoUrl.includes('github.com')) {
    readmeContent = await fetchReadme(project.repoUrl);
  }

  return (
    <Container className="py-10 space-y-8">
      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.shortDescription}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {project.images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden border">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={630}
                className="w-full h-auto"
              />
              {img.caption && (
                <div className="p-4 text-sm text-muted-foreground">
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Project Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="list-disc pl-6 space-y-1">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-muted-foreground">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* README Content */}
      {readmeContent ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Project Documentation</h2>
          <div className="prose dark:prose-invert max-w-none p-6 rounded-lg border">
            <MarkdownContent content={readmeContent} />
          </div>
        </div>
      ) : project.repoUrl ? (
        <div className="text-muted-foreground p-4 rounded-lg border">
          No README available for this project.
        </div>
      ) : null}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-6">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View on GitHub
          </a>
        )}
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border hover:bg-accent transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </Container>
  );
}
