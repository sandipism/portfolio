import Link from "next/link";
import { profile } from "@/data/profile";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-ink-50">
              Sandip{" "}
              <span className="text-resilience-400">Acharya</span>
            </p>
            <p className="mt-1 text-sm text-resilience-300">
              {profile.professionalTitle}
            </p>
            <p className="mt-3 text-sm text-ink-300">{profile.location}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink-200 transition-colors hover:text-resilience-300"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                  className="text-ink-200 transition-colors hover:text-resilience-300"
                >
                  {profile.phone}
                </a>
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="md:justify-self-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-200 transition-colors hover:text-resilience-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
              Connect
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-200 transition-colors hover:text-resilience-300"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-800 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-ink-400">
            © {new Date().getFullYear()} Sandip Acharya. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Civil Engineering · Post-Disaster Recovery · Resilient
            Infrastructure · Disaster Risk Reduction · Flood Risk &amp;
            Hydrological Analysis · GIS &amp; Evidence-Based Risk Assessment
          </p>
        </div>
      </div>
    </footer>
  );
}
