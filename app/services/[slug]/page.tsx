import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceArt } from "@/components/Art";
import {
  BigLink,
  CellGrid,
  Container,
  FinalCTA,
  Label,
  Section,
  SectionHead,
} from "@/components/ui";
import { process, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.intro } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* 1. Hero */}
      <Container className="grid items-end gap-10 pb-16 pt-16 md:pb-24 md:pt-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Label>Services / {service.title}</Label>
          <h1 className="display mt-5 text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">{service.headline}</h1>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            {service.intro}
          </p>
        </div>
        <div className="border border-line glass p-6 lg:col-span-4">
          <ServiceArt slug={service.slug} className="h-48 w-full" />
        </div>
      </Container>

      {/* 2 and 3. What it includes, who it is for */}
      <Section>
        <CellGrid cols="md:grid-cols-2">
          <div className="glass p-6 md:p-10">
            <Label>What the service includes</Label>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-6 md:p-10">
            <Label>Who it is for</Label>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed">
              {service.audience.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-fg" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CellGrid>
      </Section>

      {/* 4. Approach */}
      <Section>
        <SectionHead label="Our approach" title="A Clear Process From Idea to Delivery" />
        <CellGrid cols="sm:grid-cols-2 lg:grid-cols-5" className="mt-14">
          {process.map((p) => (
            <div key={p.step} className="glass p-6">
              <span className="label text-muted">Step {p.step}</span>
              <h3 className="mt-8 text-xl font-medium tracking-[-0.04em]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </CellGrid>
      </Section>

      {/* 5. Capabilities */}
      <Section>
        <SectionHead label="Capabilities" title="What We Can Build" />
        <ul className="mt-14 grid border-l border-t border-line *:border-r *:border-b *:border-line sm:grid-cols-2 lg:grid-cols-4">
          {service.capabilities.map((c) => (
            <li key={c} className="glass px-6 py-5 text-lg font-medium">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. FAQ */}
      <Section>
        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
          <div className="md:col-span-2 md:pr-10">
            <Label>Frequently asked questions</Label>
            <h2 className="display mt-5 text-[1.75rem] md:text-5xl">Questions and Answers</h2>
          </div>
          <div className="border-t border-line md:col-span-2 md:ml-8">
            {service.faqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="relative h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-fg after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:bg-fg after:transition-transform group-open:after:rotate-90"
                  />
                </summary>
                <p className="max-w-[60ch] pb-6 text-lg leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Other services */}
      <Section>
        <Label>More services</Label>
        <div className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
          {others.map((s) => (
            <BigLink key={s.slug} href={`/services/${s.slug}`} className="md:text-base">
              {s.nav}
            </BigLink>
          ))}
        </div>
      </Section>

      {/* 7. Contact CTA */}
      <FinalCTA
        title={`Talk to Us About ${service.title}`}
        text="Tell us about your project, challenge, or idea. We will review your message and help you understand the next steps."
      />
    </>
  );
}
