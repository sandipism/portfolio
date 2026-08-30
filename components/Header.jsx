"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-800 bg-ink-950/90 backdrop-blur"
          : "border-transparent bg-ink-950/60"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded border border-resilience-500/50 bg-resilience-500/10 text-resilience-400 transition-colors group-hover:bg-resilience-500/20">
            SA
          </span>
          <span className="text-ink-50">
            Sandip{" "}
            <span className="text-resilience-400">Acharya</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-resilience-500/15 text-resilience-300"
                      : "text-ink-200 hover:bg-ink-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-2">
            <Link
              href="/cv/Sandip_Acharya_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded border border-resilience-400 bg-resilience-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-resilience-500"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-ink-800 text-ink-100 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="border-t border-ink-800 bg-ink-950 px-5 py-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded px-3 py-2.5 text-base font-medium ${
                    active
                      ? "bg-resilience-500/15 text-resilience-300"
                      : "text-ink-100 hover:bg-ink-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/cv/Sandip_Acharya_CV.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded border border-resilience-400 bg-resilience-600 px-4 py-3 text-sm font-semibold text-white hover:bg-resilience-500"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
