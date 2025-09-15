import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { getAllTags, projects } from "@/content/projects";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "A curated selection of projects and case studies.",
};

function TagLink({ tag, selected }: { tag: string; selected: boolean }) {
  const href = selected ? "/projects" : `/projects?tag=${encodeURIComponent(tag)}`;
  return (
    <Link
      href={href}
      className={
        `text-xs rounded-full border px-3 py-1 transition-colors ` +
        (selected
          ? "bg-foreground text-background border-transparent"
          : "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10")
      }
      aria-current={selected ? "true" : undefined}
    >
      {tag}
    </Link>
  );
}

export default function ProjectsPage({ searchParams }: { searchParams: { tag?: string } }) {
  const tag = searchParams?.tag ?? "";
  const tags = getAllTags();
  const filtered = tag ? projects.filter((p) => p.tags.includes(tag)) : projects;

  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-sm text-muted-foreground">Explore selected work. Filter by tag.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <TagLink tag="All" selected={!tag} />
        {tags.map((t) => (
          <TagLink key={t} tag={t} selected={t === tag} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />)
        )}
      </div>
    </Container>
  );
}
