import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import { skillGroups, languages } from "@/data/skills";

export const metadata = {
  title: "Skills",
  description:
    "Technical skills of Sandip Acharya — GIS and geospatial analysis, engineering software, design and drafting tools, and data and programming across flood risk, hydrology, and structural engineering.",
};

export default function SkillsPage() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Skills & Tools"
        description="The software, tools, and technical capabilities I use across GIS, engineering analysis, design, and data work."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 50}>
            <div className="h-full rounded-lg border border-ink-800 bg-ink-900/60 p-6">
              <h3 className="text-lg font-semibold text-resilience-300">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => <SkillTag key={skill} skill={skill} />)}
              </div>
              {group.nested?.map((nested) => (
                <div key={nested.parent} className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {nested.parent}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2.5">
                    {nested.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Languages */}
      <div className="mx-auto mt-14 max-w-3xl">
        <SectionHeading
          eyebrow="Languages"
          title="Languages"
          align="center"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {languages.map((lang, i) => (
            <Reveal key={lang.language} delay={i * 50}>
              <div className="rounded-lg border border-ink-800 bg-ink-900/60 p-6 text-center">
                <p className="text-lg font-semibold text-ink-50">
                  {lang.language}
                </p>
                <p className="mt-1 text-sm text-resilience-300">{lang.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SkillTag({ skill }) {
  return (
    <span className="rounded-full border border-ink-700 bg-ink-800/70 px-3.5 py-1.5 text-sm text-ink-100">
      {skill}
    </span>
  );
}
