import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";

export const metadata = {
  title: "Publications",
  description:
    "Publications and research by Sandip Acharya — multi-criteria assessment of seismic vulnerability of public school buildings using AHP, weighted sum model, and GIS-based disaster risk reduction.",
};

export default function PublicationsPage() {
  return (
    <SectionWrapper id="publications">
      <SectionHeading
        eyebrow="Publications"
        title="Publications & Research"
        description="Research on seismic vulnerability of critical infrastructure, multi-criteria decision methods (AHP, WSM), and GIS-based disaster risk reduction."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {publications.map((publication, i) => (
          <Reveal key={publication.title} delay={i * 60}>
            <PublicationCard publication={publication} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
