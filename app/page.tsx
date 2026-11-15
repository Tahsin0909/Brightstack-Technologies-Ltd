import Link from "next/link";
import { HeroStack, ServiceArt } from "@/components/Art";
import {
  DrawLine,
  Reveal,
  ScrollFade,
  ScrollTilt,
  SplitWords,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import ProjectCard from "@/components/ProjectCard";
import {
  Arrow,
  BigLink,
  CellGrid,
  Container,
  Crosshair,
  FinalCTA,
  HeroGlow,
  HeroLines,
  Label,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui";
import { process, projects, services, whyBrightstack } from "@/lib/content";

export default function Home() {
  const ticker = [...services, ...services];
  return (
    <>
      {/* Hero: always dark, like Payload's home hero */}
      <section
        data-theme="dark"
        className="relative -mt-[var(--header-height)] overflow-hidden bg-bg pt-[var(--header-height)]"
      >
        <HeroGlow />
        <HeroLines />
        <Container className="relative z-[2] grid min-h-[50vh] items-center gap-12 py-16 lg:min-h-[75vh] lg:grid-cols-4 lg:gap-0">
          <ScrollFade className="flex flex-col gap-8 lg:col-span-1">
            <Reveal immediate y={12} delay={0.15}>
              <Label>Brightstack Technologies Ltd</Label>
            </Reveal>
            <h1 className="display text-[2.5rem] md:text-[4rem] lg:w-[180%] 2xl:text-[5rem]">
              <SplitWords text="Technology Built for Real Business Growth." immediate delay={0.25} />
            </h1>
            <Reveal immediate delay={0.75}>
              <p className="text-lg leading-snug text-muted lg:w-[150%] md:text-xl">
                Brightstack Technologies helps businesses turn ideas into reliable digital
                products. From strategy and design to development and ongoing support, we build
                technology that is practical, scalable, and ready for what comes next.
              </p>
            </Reveal>
            <Stagger immediate stagger={0.12} className="flex flex-col sm:flex-row lg:flex-col">
              <StaggerItem className="flex flex-1 *:w-full">
                <BigLink href="/contact" sides={false} className="!bg-transparent">
                  Start a Conversation
                </BigLink>
              </StaggerItem>
              <StaggerItem className="-mt-px flex flex-1 *:w-full sm:mt-0 lg:-mt-px">
                <BigLink href="/services" sides={false} className="!bg-transparent">
                  Explore Our Services
                </BigLink>
              </StaggerItem>
            </Stagger>
          </ScrollFade>
          <ScrollTilt className="lg:col-span-2 lg:col-start-3">
            <HeroStack className="mx-auto w-full max-w-[640px]" />
          </ScrollTilt>
        </Container>

        {/* Service ticker, in place of Payload's logo showcase */}
        <Reveal immediate delay={1.2} className="relative z-[2] pb-10 pt-4">
          <div aria-hidden="true">
          <p className="label text-center text-muted">What we build</p>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
            <div className="flex w-max animate-ticker">
              {ticker.map((s, i) => (
                <span key={i} className="flex items-center gap-12 py-3 pl-12 text-xl tracking-[-0.04em] text-fg/70">
                  {s.title}
                  <span className="h-1.5 w-1.5 bg-signal" />
                </span>
              ))}
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      {/* Trust statement */}
      <Section>
        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
          <h2 className="display text-[1.75rem] md:col-span-2 md:pr-10 md:text-5xl">
            <SplitWords text="A Technology Partner You Can Build With" />
          </h2>
          <Reveal
            delay={0.2}
            className="space-y-6 text-xl leading-snug tracking-[-0.02em] md:col-span-2 md:pl-8 md:text-2xl"
          >
            <p>
              Great technology is not just about writing code. It is about understanding the
              problem, making the right decisions, and delivering solutions that create real
              value.
            </p>
            <p className="text-muted">
              At Brightstack Technologies, we work closely with our clients to build digital
              solutions that support their goals today and adapt to their needs tomorrow.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* What we do */}
      <Section>
        <SectionHead label="What we do" title="Digital Solutions for Modern Businesses">
          <p>
            We combine technology, design, and business understanding to create digital
            experiences that are useful, reliable, and built to grow.
          </p>
        </SectionHead>
        <CellGrid cols="md:grid-cols-2 lg:grid-cols-3" className="mt-14">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col bg-bg transition-colors duration-150 hover:bg-hover"
            >
              <Arrow className="absolute right-5 top-5 h-4 w-4 text-muted opacity-50 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg group-hover:opacity-100" />
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="pr-8 text-2xl font-medium tracking-[-0.04em]">{s.nav}</h3>
                <p className="mt-3 leading-snug text-muted">{s.card}</p>
              </div>
              <div className="relative ml-6 border-l border-t border-line p-6 md:ml-8">
                <div className="scanline opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                <ServiceArt slug={s.slug} className="relative h-40 w-full" />
              </div>
            </Link>
          ))}
        </CellGrid>
        <div className="grid md:grid-cols-3">
          <BigLink href="/services" className="-mt-px md:col-start-3">
            Explore All Services
          </BigLink>
        </div>
      </Section>

      {/* Why Brightstack */}
      <Section>
        <SectionHead label="Why Brightstack" title="Built Around Partnership, Not Just Projects" />
        <CellGrid className="mt-14">
          {whyBrightstack.map((item, i) => (
            <div key={item.title} className="group relative bg-bg p-6 transition-colors duration-150 hover:bg-hover md:p-8">
              <span className="mono text-sm text-muted">0{i + 1}</span>
              <div className="mt-16">
                <h3 className="text-xl font-medium tracking-[-0.04em] md:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-snug text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </CellGrid>
      </Section>

      {/* How we work */}
      <Section>
        <SectionHead label="How we work" title="A Clear Process From Idea to Delivery">
          <p>
            Every project is different, but a clear process helps us stay focused on what matters:
            delivering the right solution.
          </p>
        </SectionHead>
        <Stagger as="ol" stagger={0.12} className="relative mt-14">
          {process.map((p, i) => (
            <StaggerItem
              as="li"
              key={p.step}
              className="relative grid gap-2 py-7 md:grid-cols-4 md:gap-0 md:py-10"
            >
              {i === 0 ? <DrawLine className="top-0" /> : null}
              <DrawLine className="bottom-0" delay={0.15 + i * 0.12} />
              <span className="mono pt-1.5 text-sm text-muted">{p.step}</span>
              <h3 className="text-2xl font-medium tracking-[-0.04em] md:pl-8 md:text-3xl">{p.title}</h3>
              <p className="max-w-[60ch] text-lg leading-snug text-muted md:col-span-2 md:pl-8">
                {p.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Featured work */}
      <Section>
        <SectionHead label="Featured work" title="Work Built Around Real Challenges">
          <p>
            Explore selected projects and discover how we approach different business challenges
            through technology and thoughtful product development.
          </p>
        </SectionHead>
        <CellGrid cols="md:grid-cols-3" className="mt-14">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </CellGrid>
        <div className="grid md:grid-cols-3">
          <BigLink href="/work" className="-mt-px md:col-start-3">
            View Our Work
          </BigLink>
        </div>
      </Section>

      {/* Mission statement, Payload "Statement" block */}
      <section className="relative">
        <Container className="py-16 lg:py-24 2xl:py-32">
          <Reveal y={40} className="relative border-y border-line px-6 py-20 text-center md:px-[12.5%] md:py-28">
            <div className="scanline" />
            <Crosshair className="-left-2 -top-2" />
            <Crosshair className="-right-2 -top-2" />
            <Crosshair className="-bottom-2 -left-2" />
            <Crosshair className="-bottom-2 -right-2" />
            <div className="relative">
              <Label>Why we exist</Label>
              <p className="display mx-auto mt-6 max-w-[22ch] text-[2rem] md:text-[4rem]">
                <SplitWords
                  text="Technology should make business easier, not more complicated."
                  delay={0.3}
                />
              </p>
              <p className="mx-auto mt-8 max-w-[56ch] text-lg leading-snug text-muted md:text-xl">
                Brightstack Technologies was built around a simple idea: businesses deserve
                technology partners who listen, understand their challenges, and build solutions
                around real needs.
              </p>
              <div className="mt-8">
                <TextLink href="/about">Read our story</TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
