import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/projects" },
  { name: "Equipment", href: "/equipment" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {<div className="hidden items-center gap-8 md:flex">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
    >
      {link.name}
    </Link>
  ))}
</div>}

        {<Link
  href="/#contact"
  className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
>
  Request a Quote
</Link>}
      </div>
    </nav>
  );
}