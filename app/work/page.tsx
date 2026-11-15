import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { CellGrid, FinalCTA, PageHero, Section } from "@/components/ui";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work reflects the way we combine technology, design, and problem-solving to create solutions for real-world needs.",
};

export default function Work() {
  const hasSamples = projects.some((p) => p.sample);
  return (
    <>
      <PageHero label="Our work" title="Ideas Turned Into Working Products">
        <p>
          Every project begins with a different challenge. Our work reflects the way we combine
          technology, design, and problem-solving to create solutions for real-world needs.
        </p>
      </PageHero>

      <Section>
        {hasSamples ? (
          <p className="mb-8 max-w-[70ch] border border-line glass-strong p-5 text-sm leading-relaxed text-muted">
            The cards marked Sample layout show how a case study will be presented. Replace them
            with real projects in <code className="font-mono text-fg">lib/content.ts</code>.
          </p>
        ) : null}
        <CellGrid cols="md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </CellGrid>
      </Section>

      <FinalCTA />
    </>
  );
}
