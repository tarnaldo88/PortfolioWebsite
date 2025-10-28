import Container from "@/components/Container";
import { getProjectBySlug } from "@/content/projects";
import { MarkdownContent } from "@/components/MarkdownContent";
import ProjectImageGallery from "@/components/ProjectImageGallery";
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
        <ProjectImageGallery images={project.images} />
      )}
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6 pt-6">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg 
              className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.36.309.681.919.681 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
        )}
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-base font-semibold rounded-md border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-background transition-colors shadow-sm"
          >
            Live Demo
          </a>
        )}
      </div>
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

    </Container>
  );
}
