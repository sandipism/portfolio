import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Sandip Acharya, Disaster Risk & Resilience Specialist based in Kathmandu, Nepal.",
};

export default function ContactPage() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        description="For consulting, collaboration, or professional enquiries, please reach out."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <h3 className="text-lg font-semibold text-ink-50">
              {profile.name}
            </h3>
            <p className="mt-1 text-resilience-300">
              {profile.professionalTitle}
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Location
                </p>
                <p className="mt-1 text-ink-100">{profile.location}</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Phone
                </p>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-1 block text-ink-100 transition-colors hover:text-resilience-300"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block break-all text-ink-100 transition-colors hover:text-resilience-300"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Registration
                </p>
                <p className="mt-1 text-sm text-ink-300">
                  {profile.necRegistration.council} ·{" "}
                  {profile.necRegistration.title} ·{" "}
                  {profile.necRegistration.number}
                </p>
              </li>
            </ul>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded border border-resilience-500/40 bg-resilience-500/10 px-5 py-3 text-sm font-semibold text-resilience-300 transition-colors hover:bg-resilience-500/20"
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
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
