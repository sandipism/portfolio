import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import { aboutSummary } from "@/data/about";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About",
  description:
    "Learn about Sandip Acharya, a Nepal-based Civil Engineer and Disaster Risk & Resilience Specialist with 8 years of experience across disaster risk reduction, flood risk management, and resilient infrastructure.",
};

export default function AboutPage() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title={aboutSummary.heading}
        description={
          "Civil Engineer and Disaster Risk & Resilience Specialist based in Kathmandu, Nepal."
        }
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="prose-article text-base leading-relaxed text-ink-300">
            <p>{aboutSummary.professionalSummary}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-ink-800 bg-ink-900/60 p-6">
            <h3 className="text-lg font-semibold text-ink-50">Profile</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Name</dt>
                <dd className="text-ink-100">{profile.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Title</dt>
                <dd className="text-right text-ink-100">
                  {profile.professionalTitle}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Location</dt>
                <dd className="text-ink-100">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Nationality</dt>
                <dd className="text-ink-100">{profile.nationality}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Email</dt>
                <dd className="break-all text-ink-100">{profile.email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Phone</dt>
                <dd className="text-ink-100">{profile.phone}</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-md border border-resilience-500/30 bg-resilience-500/10 p-4">
              <p className="text-sm font-semibold text-resilience-300">
                {profile.necRegistration.council}
              </p>
              <p className="mt-1 text-sm text-ink-100">
                {profile.necRegistration.title}
              </p>
              <p className="text-sm text-ink-300">
                {profile.necRegistration.number}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Key themes */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-ink-50">
          Areas of Focus
        </h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {aboutSummary.keyThemes.map((theme) => (
            <span
              key={theme}
              className="rounded-full border border-ink-800 bg-ink-900/60 px-4 py-1.5 text-sm text-ink-200"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
