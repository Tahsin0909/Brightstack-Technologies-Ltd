import type { Metadata } from "next";
import Link from "next/link";
import { ServiceArt } from "@/components/Art";
import { Stagger, StaggerItem } from "@/components/motion";
import { Arrow, FinalCTA, PageHero } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From a first idea to a growing digital product, Brightstack provides the expertise and support needed to move forward with confidence.",
};

export default function Services() {
  return (
    <>
      <PageHero label="Services" title="Technology Services Built Around Your Business">
        <p>
          From a first idea to a growing digital product, Brightstack provides the expertise and
          support needed to move forward with confidence.
        </p>
      </PageHero>

      <section className="border-t border-line">
        <Stagger className="gutter" stagger={0.1}>
          {services.map((s) => (
            <StaggerItem key={s.slug} className="flex *:w-full">
            <Link
              href={`/services/${s.slug}`}
              className="group grid items-center gap-6 border-b border-line glass py-8 transition-colors duration-200 last:border-b-0 hover:bg-hover md:grid-cols-4 md:gap-0 md:py-0"
            >
              <div className="md:border-r md:border-line md:p-8">
                <ServiceArt slug={s.slug} className="h-40 w-full" />
              </div>
              <div className="md:col-span-2 md:p-10">
                <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
                  {s.card}
                </p>
              </div>
              <div className="flex items-center gap-3 font-medium md:justify-end md:p-10">
                View service
                <Arrow className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <FinalCTA />
    </>
  );
}
