import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import { profile } from "@/data/profile";
import { aboutSummary } from "@/data/about";
import { coreCompetencies } from "@/data/competencies";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";

const COMPETENCY_ICONS = {
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  droplets: (
    <>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </>
  ),
  map: (
    <>
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </>
  ),
  "clipboard-list": (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </>
  ),
  "bar-chart": (
    <>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </>
  ),
  briefcase: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  presentation: (
    <>
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </>
  ),
  "file-text": (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div
          className="contour-lines absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-5 py-20">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-resilience-500/30 bg-resilience-500/10 px-4 py-1.5 text-sm font-medium text-resilience-300">
              <span className="h-2 w-2 rounded-full bg-resilience-400" />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-resilience-400">
                {profile.name.split(" ")[1]}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-4 text-xl font-semibold text-ink-100 sm:text-2xl lg:text-3xl">
              {profile.professionalTitle}
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-resilience-300 sm:text-base">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300">
              {aboutSummary.shortIntro}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded bg-resilience-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-resilience-500"
              >
                View My Work
              </Link>
              <Link
                href="/cv/Sandip_Acharya_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded border border-ink-600 bg-ink-800/60 px-6 py-3 text-sm font-semibold text-ink-100 transition-colors hover:border-resilience-500 hover:text-resilience-300"
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
            </div>
          </Reveal>
        </div>

        {/* Bottom motif */}
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-resilience-500/40 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* CORE COMPETENCIES */}
      <SectionWrapper id="competencies" className="border-t border-ink-800/60">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What I Do"
          description="A focused set of capabilities spanning disaster risk reduction, flood risk management, and resilient engineering."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.map((c, i) => (
            <Reveal key={c.title} delay={i * 40}>
              <div className="group h-full rounded-lg border border-ink-800 bg-ink-900/60 p-5 transition-colors hover:border-resilience-500/50 hover:bg-ink-900">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-resilience-500/30 bg-resilience-500/10 text-resilience-400">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {COMPETENCY_ICONS[c.icon]}
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-ink-50">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {c.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
