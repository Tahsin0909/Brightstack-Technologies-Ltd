import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Container, FinalCTA, PageHero } from "@/components/ui";
import { articles, insightCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thoughts on technology, product development, digital transformation, and the challenges businesses face when building digital products.",
};

export default function Insights() {
  return (
    <>
      <PageHero label="Insights" title="Ideas, Technology & Perspectives">
        <p>
          We share thoughts on technology, product development, digital transformation, and the
          challenges businesses face when building digital products.
        </p>
      </PageHero>

      <section className="border-t border-line">
        <Container className="py-6">
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {insightCategories.map((c) => (
              <li key={c} className="label border border-line glass px-3 py-2 text-muted">
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container>
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group grid gap-3 border-b border-line glass py-8 transition-colors duration-200 last:border-b-0 hover:bg-hover md:grid-cols-4 md:gap-0 md:py-12"
            >
              <p className="label pt-2 text-muted md:pl-6">{a.category}</p>
              <div className="md:col-span-2 md:pl-8">
                <h2 className="text-2xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                  {a.title}
                </h2>
                <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-muted">
                  {a.excerpt}
                </p>
              </div>
              <div className="flex items-start gap-3 font-medium md:justify-end md:pr-6 md:pt-2">
                Read article
                <Arrow className="mt-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
