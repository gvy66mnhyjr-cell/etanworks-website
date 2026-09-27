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
    <nav className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div className="container mx-auto flex items-start justify-between px-4 py-3 sm:px-6 sm:py-4">
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
          className={`pointer-events-auto hidden items-center gap-6 rounded-full bg-black/80 px-5 py-3 backdrop-blur-sm transition-all duration-300 lg:flex xl:gap-8 ${
            showFullNav
              ? "translate-y-0 opacity-100"
              : "-translate-y-24 pointer-events-none opacity-0"
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

        {/* Mobile Quote Button */}
        <Link
          href="/#contact"
          className="pointer-events-auto rounded-full bg-yellow-500 px-4 py-2.5 text-xs font-semibold text-black shadow-lg transition hover:bg-yellow-400 sm:px-5 sm:py-3 sm:text-sm lg:hidden"
        >
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}