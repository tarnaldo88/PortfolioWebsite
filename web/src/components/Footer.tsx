import Container from "@/components/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <Container className="py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/tarnaldo88" className="hover:underline underline-offset-4" target="_blank">GitHub</Link>
          <Link href="https://www.linkedin.com/in/arnaldo-torres/" className="hover:underline underline-offset-4" target="_blank">LinkedIn</Link>
        </div>
      </Container>
    </footer>
  );
}
