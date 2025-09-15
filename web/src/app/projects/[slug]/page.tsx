import Container from "@/components/Container";
import { getProjectBySlug } from "@/content/projects";
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

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <Container className="py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-2 text-base text-muted-foreground">{project.shortDescription}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <div key={idx} className="rounded-md overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                <Image src={img.src} alt={img.alt} width={1200} height={675} className="w-full h-auto object-contain" />
                {img.caption && <div className="px-3 py-2 text-xs text-muted-foreground">{img.caption}</div>}
              </div>
            ))}
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 mt-2">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
              Source
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
              Live
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}
