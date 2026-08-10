import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Equipment", href: "/equipment" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/80">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}