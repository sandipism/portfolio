import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Education",
  description:
    "Education of Sandip Acharya — MSc in Disaster Risk Management from Pulchowk Campus, Institute of Engineering, Tribhuvan University, and BE in Civil Engineering from Sagarmatha Engineering College.",
};

export default function EducationPage() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic Background"
        description="Graduate and undergraduate qualifications in disaster risk management and civil engineering."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 60}>
            <article className="rounded-lg border border-ink-800 bg-ink-900/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-ink-50">
                  {item.degree}
                </h3>
                <span className="rounded border border-ink-700 bg-ink-800/70 px-3 py-1 text-xs font-semibold text-ink-200">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 font-medium text-resilience-300">
                {item.institution}
              </p>
              <p className="text-sm text-ink-400">{item.location}</p>

              {item.thesis && (
                <div className="mt-5 rounded-md border border-resilience-500/30 bg-resilience-500/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-resilience-400">
                    Thesis
                  </p>
                  <p className="mt-1 font-medium italic text-ink-100">
                    {item.thesis.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {item.thesis.description}
                  </p>
                </div>
              )}

              {item.coursework && (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    Relevant Coursework
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {item.coursework.map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-ink-700 bg-ink-800/70 px-3 py-1 text-sm text-ink-200"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {/* Professional membership */}
      <div className="mx-auto mt-12 max-w-3xl">
        <Reveal>
          <div className="rounded-lg border border-resilience-500/40 bg-resilience-500/10 p-6 text-center sm:p-8">
            <svg
              className="mx-auto h-10 w-10 text-resilience-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <h3 className="mt-3 text-lg font-semibold text-ink-50">
              {profile.necRegistration.council}
            </h3>
            <p className="mt-1 font-medium text-resilience-300">
              {profile.necRegistration.title}
            </p>
            <p className="text-sm text-ink-300">
              {profile.necRegistration.number}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
