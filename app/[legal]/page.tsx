import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Label } from "@/components/ui";
import { legal, type LegalSlug } from "@/lib/content";

type Props = { params: Promise<{ legal: string }> };

export function generateStaticParams() {
  return Object.keys(legal).map((slug) => ({ legal: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { legal: slug } = await params;
  const page = legal[slug as LegalSlug];
  return page ? { title: page.title } : {};
}

export default async function LegalPage({ params }: Props) {
  const { legal: slug } = await params;
  const page = legal[slug as LegalSlug];
  if (!page) notFound();

  return (
    <>
      <Container className="pb-14 pt-16 md:pb-20 md:pt-28">
        <Label>Legal</Label>
        <h1 className="display mt-5 text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">{page.title}</h1>
      </Container>
      <section className="border-t border-line">
        <Container className="grid py-14 md:grid-cols-4 md:py-20">
          <div className="max-w-[65ch] md:col-span-2 md:col-start-2 md:pl-8">
            <p className="mb-12 border border-line glass-strong p-5 text-sm leading-relaxed text-muted">
              This page is a starting template. Have it reviewed by a qualified legal adviser and
              adapted to your business before publishing.
            </p>
            {page.sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="text-2xl font-medium tracking-[-0.04em]">{s.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
