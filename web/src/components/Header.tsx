import Link from "next/link";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  // { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10 dark:border-white/10">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Image src="/logoblue.png" alt="Logo" width={52} height={52} />
          <Link href="/" className="font-semibold tracking-tight">          
            <span className="text-lg">Arnaldo Torres Portfolio</span>
          </Link>
          <nav aria-label="Main Navigation" className="hidden md:flex gap-4 sm:gap-6 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
