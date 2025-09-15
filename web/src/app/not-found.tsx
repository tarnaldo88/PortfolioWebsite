import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">404 – Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">Sorry, we couldn’t find that page.</p>
      <div className="mt-6">
        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
          Go home
        </Link>
      </div>
    </Container>
  );
}
