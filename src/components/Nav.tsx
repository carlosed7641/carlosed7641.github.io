"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-line bg-cream/80 text-ink shadow-[0_1px_0_rgb(38_34_30/0.07)] backdrop-blur-[14px]"
          : "border-transparent bg-transparent text-cream"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6"
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span
            className={`grid size-9 place-items-center rounded-lg text-[13px] font-bold transition-colors duration-300 ${
              scrolled ? "bg-ink text-cream" : "bg-cream/10 text-cream ring-1 ring-cream/15"
            }`}
          >
            {profile.initials}
          </span>
          <span className="text-[15px] font-semibold">{profile.name}</span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-[15px] md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    scrolled ? "text-muted hover:text-ink" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className={`rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors ${
              scrolled
                ? "border-ink hover:bg-ink hover:text-cream"
                : "border-cream/30 hover:border-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
