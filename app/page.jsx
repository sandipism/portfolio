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
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
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
