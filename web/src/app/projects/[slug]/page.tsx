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

async function fetchReadme(repoUrl: string): Promise<{ content: string; baseUrl: string | null }> {
  try {
    const repoPath = new URL(repoUrl).pathname;
    const mainReadmeUrl = `https://raw.githubusercontent.com${repoPath}/main/README.md`;
    const response = await fetch(mainReadmeUrl, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      // Try with master branch if main doesn't exist
      const masterReadmeUrl = `https://raw.githubusercontent.com${repoPath}/master/README.md`;
      const masterResponse = await fetch(masterReadmeUrl);
      if (masterResponse.ok) {
        const content = await masterResponse.text();
        const baseUrl = `https://raw.githubusercontent.com${repoPath}/master/`;
        return { content, baseUrl };
      }
      return { content: '', baseUrl: null };
    }
    
    const content = await response.text();
    const baseUrl = `https://raw.githubusercontent.com${repoPath}/main/`;
    return { content, baseUrl };
  } catch (error) {
    console.error('Error fetching README:', error);
    return { content: '', baseUrl: null };
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  let readmeContent = '';
  let readmeBaseUrl: string | null = null;
  if (project.repoUrl && project.repoUrl.includes('github.com')) {
    const { content, baseUrl } = await fetchReadme(project.repoUrl);
    readmeContent = content;
    readmeBaseUrl = baseUrl;
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, idx) => (
            <figure key={idx} className="rounded-lg overflow-hidden border bg-muted/10">
              <div className="relative aspect-[4/3] bg-background">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
              {img.caption && (
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/60">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* README Content */}
      {readmeContent ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Project Documentation</h2>
          <div className="p-6 rounded-lg border overflow-x-auto">
            <MarkdownContent content={readmeContent} baseUrl={readmeBaseUrl ?? undefined} />
          </div>
        </div>
      ) : project.repoUrl ? (
        <div className="text-muted-foreground p-4 rounded-lg border">
          No README available for this project.
        </div>
      ) : null}

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
