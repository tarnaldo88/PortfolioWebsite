import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
    <Head>
        <title>Arnaldo Torres | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Arnaldo Torres — building performant systems software and developer tools."
        />

        {/* Open Graph metadata */}
        <meta property="og:title" content="Arnaldo Torres | Portfolio" />
        <meta
          property="og:description"
          content="Explore modern apps, systems software, and developer tools crafted by Arnaldo Torres."
        />
        <meta
          property="og:image"
          content="https://arnaldo-torres-portfolio.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://arnaldo-torres-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter (optional, for richer previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arnaldo Torres | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore modern apps, systems software, and developer tools crafted by Arnaldo Torres."
        />
        <meta
          name="twitter:image"
          content="https://arnaldo-torres-portfolio.vercel.app/og-image.png"
        />
      </Head>
      
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Building performant systems software and developer tools.</h1>
            <p className="mt-3 text-base text-muted-foreground">
              I craft modern apps and design and implement low-level software with a focus on efficiency, concurrency, and clean architecture. Explore selected projects below or get in touch.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/projects" className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-foreground text-background">
                View Projects
              </Link>
              <Link href="/resume" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
                View Resume
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="text-sm hover:underline underline-offset-4">All projects→</Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
