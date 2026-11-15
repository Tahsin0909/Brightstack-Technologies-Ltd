import type { Metadata } from "next";
import { CellGrid, FinalCTA, PageHero, Section } from "@/components/ui";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Every industry has different challenges, workflows, and users. We adapt our approach to understand the context behind the technology.",
};

export default function Industries() {
  return (
    <>
      <PageHero label="Industries" title="Technology That Adapts to Different Industries">
        <p>
          Every industry has different challenges, workflows, and users. We adapt our approach to
          understand the context behind the technology.
        </p>
      </PageHero>

      <Section>
        <CellGrid cols="md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item.title} className="glass p-6 md:p-8">
              <span className="block h-2 w-2 bg-signal" aria-hidden="true" />
              <div className="mt-16">
                <h2 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">{item.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </CellGrid>
      </Section>

      <FinalCTA
        title="Working in a Different Industry?"
        text="Tell us about your business and the challenge you are facing. We will let you know honestly whether we are the right fit."
      />
    </>
  );
}
