import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, FinalCTA, Label, TextLink } from "@/components/ui";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.challenge } : {};
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const blocks = [
    { heading: "The Challenge", body: project.challenge },
    { heading: "Our Approach", body: project.approach },
    { heading: "The Solution", body: project.solution },
  ];

  return (
    <>
      <Container className="pb-16 pt-16 md:pb-24 md:pt-28">
        <Label>
          Case study / {project.industry}
          {project.sample ? " / Sample layout" : ""}
        </Label>
        <h1 className="display mt-5 max-w-[16ch] text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">
          {project.name}
        </h1>
        <div className="mt-12 flex aspect-[21/9] items-center justify-center border border-line glass-strong">
          <span className="label text-muted">Project image</span>
        </div>
      </Container>

      <section className="border-t border-line">
        <Container>
          {blocks.map((b) => (
            <div key={b.heading} className="grid gap-3 border-b border-line py-10 md:grid-cols-4 md:gap-0 md:py-14">
              <h2 className="text-2xl font-medium tracking-[-0.04em] md:col-span-2 md:text-3xl">
                {b.heading}
              </h2>
              <p className="max-w-[60ch] text-lg leading-relaxed text-muted md:col-span-2 md:pl-8">
                {b.body}
              </p>
            </div>
          ))}
          <div className="grid gap-3 border-b border-line py-10 md:grid-cols-4 md:gap-0 md:py-14">
            <h2 className="text-2xl font-medium tracking-[-0.04em] md:col-span-2 md:text-3xl">
              Key Features
            </h2>
            <ul className="space-y-3 text-lg md:col-span-2 md:pl-8">
              {project.features.map((f) => (
                <li key={f} className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 border-b border-line py-10 md:grid-cols-4 md:gap-0 md:py-14">
            <h2 className="text-2xl font-medium tracking-[-0.04em] md:col-span-2 md:text-3xl">
              Technology
            </h2>
            <ul className="flex flex-wrap gap-2 md:col-span-2 md:pl-8">
              {project.technology.map((t) => (
                <li key={t} className="label border border-line px-3 py-2">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 py-10 md:grid-cols-4 md:gap-0 md:py-14">
            <h2 className="text-2xl font-medium tracking-[-0.04em] md:col-span-2 md:text-3xl">
              The Outcome
            </h2>
            <div className="md:col-span-2 md:pl-8">
              <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{project.outcome}</p>
              <div className="mt-8">
                <TextLink href="/work">Back to all work</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
