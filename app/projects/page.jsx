import Reveal from "@/components/Reveal";
import { SectionWrapper, SectionHeading } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects and assignments by Sandip Acharya — river basin flood control masterplanning, independent project evaluation, post-earthquake housing recovery, and seismic vulnerability assessment of schools and health posts.",
};

export default function ProjectsPage() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects & Assignments"
        description="A selection of projects and assignments spanning flood risk assessment, independent evaluation, post-disaster recovery, and seismic vulnerability assessment."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 40}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
