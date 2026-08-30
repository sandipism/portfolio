import Link from "next/link";
import { profile } from "@/data/profile";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
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
            <p className="text-sm text-ink-300">
              Professional and social links will appear here.
            </p>
            <a
              href="/cv/Sandip_Acharya_CV.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 rounded border border-resilience-500/40 bg-resilience-500/10 px-4 py-2 text-sm font-semibold text-resilience-300 transition-colors hover:bg-resilience-500/20"
            >
              Download CV
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
