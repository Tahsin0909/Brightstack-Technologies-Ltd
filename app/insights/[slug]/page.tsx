import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, FinalCTA, Label, TextLink } from "@/components/ui";
import { articles } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Container className="pb-16 pt-16 md:pb-20 md:pt-28">
        <Label>Insights / {article.category}</Label>
        <h1 className="display mt-5 max-w-[20ch] text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">
          {article.title}
        </h1>
        <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-muted md:text-2xl">
          {article.excerpt}
        </p>
      </Container>

      <section className="border-t border-line">
        <Container className="grid py-14 md:grid-cols-4 md:py-20">
          <article className="max-w-[65ch] md:col-span-2 md:col-start-2 md:pl-8">
            {article.sections.map((s) => (
              <div key={s.heading} className="mb-12">
                <h2 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">{s.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
            <TextLink href="/insights">Back to all insights</TextLink>
          </article>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
