"use client";

import { useEffect, useState } from "react";
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
  const [showFullNav, setShowFullNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowFullNav(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowFullNav(true);
      } else {
        // Scrolling down
        setShowFullNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto flex items-start justify-between px-6 py-4">
        {/* Persistent Logo */}
        <Link
          href="/"
          aria-label="Etanworks Home"
          className="pointer-events-auto rounded-lg bg-black/80 p-2 backdrop-blur-sm"
        >
          <Logo />
        </Link>

        {/* Full Navigation */}
        <div
          className={`pointer-events-auto hidden items-center gap-8 rounded-full bg-black/80 px-6 py-3 backdrop-blur-sm transition-all duration-300 md:flex ${
            showFullNav
              ? "translate-y-0 opacity-100"
              : "-translate-y-24 opacity-0 pointer-events-none"
          }`}
        >
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