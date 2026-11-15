import type { Metadata } from "next";
import { BigLink, Label, PageHero, Section } from "@/components/ui";
import { jobs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "At Brightstack Technologies, we believe good work comes from people who are curious, responsible, and willing to keep learning.",
};

export default function Careers() {
  return (
    <>
      <PageHero label="Careers" title="Build What Matters With Us">
        <p>
          At Brightstack Technologies, we believe good work comes from people who are curious,
          responsible, and willing to keep learning.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
          <div className="md:col-span-2 md:pr-10">
            <Label>Culture</Label>
            <h2 className="display mt-5 text-[1.75rem] md:text-5xl">A Place to Learn and Contribute</h2>
          </div>
          <p className="max-w-[60ch] text-lg leading-relaxed text-muted md:col-span-2 md:pl-8 md:text-xl">
            We value collaboration, open communication, and people who care about solving
            problems. We aim to create an environment where team members can contribute ideas,
            develop their skills, and take pride in their work.
          </p>
        </div>
      </Section>

      <Section id="open-positions">
        <Label>Open positions</Label>
        {jobs.length > 0 ? (
          <ul className="mt-8 border-t border-line">
            {jobs.map((job) => (
              <li key={job.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-4 md:gap-0">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">{job.title}</h3>
                  <p className="label mt-3 text-muted">
                    {job.department} / {job.type} / {job.location}
                  </p>
                </div>
                <div className="md:col-span-2 md:pl-8">
                  <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{job.description}</p>
                  <ul className="mt-4 space-y-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex gap-4">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <BigLink href="/contact" className="mt-6 max-w-xs">
                    Apply
                  </BigLink>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 grid gap-8 border border-line glass p-6 md:grid-cols-4 md:gap-0 md:p-12">
            <h3 className="display text-3xl md:col-span-2 md:pr-10 md:text-5xl">
              No Role That Fits Right Now?
            </h3>
            <div className="md:col-span-2 md:pl-8">
              <p className="max-w-[56ch] text-lg leading-relaxed text-muted md:text-xl">
                We are always interested in connecting with talented people. Send us your
                information and tell us how you could contribute.
              </p>
              <BigLink href="/contact" variant="solid" className="mt-8 max-w-sm">
                Send Us Your Information
              </BigLink>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
