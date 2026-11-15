import type { Metadata } from "next";
import { CellGrid, FinalCTA, Label, PageHero, Section, SectionHead } from "@/components/ui";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Brightstack Technologies is a technology company focused on helping businesses build digital products that solve meaningful problems.",
};

export default function About() {
  return (
    <>
      <PageHero label="About us" title="Technology With Purpose. Partnerships With Impact.">
        <p>
          Brightstack Technologies is a technology company focused on helping businesses build
          digital products that solve meaningful problems.
        </p>
        <p>
          We bring together strategy, design, and engineering to create solutions that are
          practical for today and prepared for tomorrow.
        </p>
      </PageHero>

      <Section id="our-story">
        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
          <div className="md:col-span-2 md:pr-10">
            <Label>Our story</Label>
            <h2 className="display mt-5 text-[1.75rem] md:text-5xl">Why We Exist</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed md:col-span-2 md:pl-8 md:text-xl">
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              Technology should make business easier, not more complicated.
            </p>
            <p className="text-muted">
              Brightstack Technologies was built around a simple idea: businesses deserve
              technology partners who listen, understand their challenges, and build solutions
              around real needs.
            </p>
            <p className="text-muted">
              We approach every project with curiosity, responsibility, and a commitment to
              delivering work we can stand behind.
            </p>
          </div>
        </div>
      </Section>

      <Section id="mission-vision">
        <CellGrid cols="md:grid-cols-2">
          <div className="glass p-6 md:p-12">
            <Label>Our mission</Label>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-[-0.04em] md:text-3xl">
              To help businesses use technology with confidence by creating reliable digital
              solutions that solve real problems and create lasting value.
            </p>
          </div>
          <div className="glass p-6 md:p-12">
            <Label>Our vision</Label>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-[-0.04em] md:text-3xl">
              To become a trusted technology partner for organizations building the next
              generation of digital products and services.
            </p>
          </div>
        </CellGrid>
      </Section>

      <Section id="our-values">
        <SectionHead label="Our values" title="What Guides Our Work" />
        <ul className="mt-14 border-t border-line">
          {values.map((v) => (
            <li
              key={v.title}
              className="grid gap-2 border-b border-line py-7 md:grid-cols-4 md:gap-0 md:py-9"
            >
              <h3 className="text-2xl font-medium tracking-[-0.04em] md:col-span-2 md:text-3xl">
                {v.title}
              </h3>
              <p className="max-w-[60ch] text-lg leading-relaxed text-muted md:col-span-2 md:pl-8">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCTA />
    </>
  );
}
