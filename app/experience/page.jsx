import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";
import { experience } from "@/data/experience";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience of Sandip Acharya — Assistant Project Engineer at Yachiyo Engineering, Team Leader at Social Welfare Council, Project Engineer, independent consultant, and Civil Engineer across Nepal.",
};

export default function ExperiencePage() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Career Timeline"
        description="Eight years of professional experience across flood risk management, disaster risk reduction, post-disaster recovery, and resilient infrastructure — from field-level recovery to river basin flood control."
      />

      <div className="relative mx-auto mt-12 max-w-3xl">
        {/* Timeline line */}
        <span
          className="absolute left-0 top-0 h-full w-px -translate-x-1/2 bg-ink-800"
          aria-hidden="true"
        />
        <div className="space-y-6">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <ExperienceItem item={item} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
