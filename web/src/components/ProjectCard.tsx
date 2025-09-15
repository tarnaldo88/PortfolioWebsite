import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-sm transition-shadow bg-white/70 dark:bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/30"
    >
      <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 flex items-center justify-center">
        {project.images?.[0] ? (
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={640}
            height={360}
            className="object-contain h-full w-full p-6"
          />
        ) : (
          <div className="text-sm text-muted-foreground">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold tracking-tight group-hover:underline underline-offset-4">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
