import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, SplitWords, Stagger, StaggerGrid, StaggerItem } from "./motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`gutter w-full ${className}`}>{children}</div>;
}

/**
 * Full-height vertical grid lines on a 4-column rhythm, inset by the page
 * gutter (Payload's BackgroundGrid). Five lines on desktop, edges only on phones.
 */
export function GridLines({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-0 ${className}`}>
      <div className="gutter h-full">
        <div className="relative h-full">
          {[0, 25, 50, 75, 100].map((left, i) => (
            <div
              key={left}
              className={`line-in absolute inset-y-0 w-px bg-line ${i > 0 && i < 4 ? "hidden md:block" : ""}`}
              style={{ left: `${left}%`, marginLeft: i === 4 ? -1 : undefined, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Same lines, absolutely positioned, fading in from the top (hero use). */
export function HeroLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <div className="gutter h-full">
        <div className="hero-lines relative h-full">
          {[0, 25, 50, 75, 100].map((left, i) => (
            <div
              key={left}
              className={`line-in absolute inset-y-0 ${i > 0 && i < 4 ? "hidden md:block" : ""}`}
              style={{
                left: `${left}%`,
                marginLeft: i === 4 ? -1 : undefined,
                animationDelay: `${0.2 + i * 0.12}s`,
                background: `linear-gradient(to bottom, transparent ${[80, 160, 200, 160, 80][i]}px, var(--line) 240px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Payload-style home backdrop: drifting coloured light seen through vertical
 * fluted glass, CRT rows and grain, with a heavy vignette. Sits behind the
 * hero only.
 */
export function HeroGlow() {
  return (
    <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="hero-glow__blobs">
        <span className="hero-glow__blob hero-glow__blob--a" />
        <span className="hero-glow__blob hero-glow__blob--b" />
        <span className="hero-glow__blob hero-glow__blob--c" />
      </div>
      <div className="hero-glow__flutes" />
      <div className="hero-glow__crt" />
      <div className="hero-glow__grain" />
      <div className="hero-glow__vignette" />
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 13 13"
      className={`h-3 w-3 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M1 12 12.5.5M1 .5h11.5V12" />
    </svg>
  );
}

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`crosshair ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 0v20M0 10h20" />
    </svg>
  );
}

/**
 * Payload's default button: bordered block, mono label and arrow. On hover the
 * label tilts up and away while a filled copy slides up from below.
 */
export function BigLink({
  href,
  children,
  variant = "outline",
  className = "",
  sides = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
  /** false hides the left/right borders so the button sits on the grid lines. */
  sides?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`pl-btn ${variant === "solid" ? "pl-btn--solid" : "bg-bg"} ${sides ? "" : "border-x-0"} ${className}`}
    >
      <ButtonFaces>{children}</ButtonFaces>
    </Link>
  );
}

export function ButtonFaces({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="pl-btn__face">
        <span>{children}</span>
        <Arrow className="pl-arrow" />
      </span>
      <span aria-hidden="true" className="pl-btn__face pl-btn__face--hover">
        <span>{children}</span>
        <Arrow className="pl-arrow" />
      </span>
    </>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="grow-line group inline-flex items-center gap-2 pb-1 font-medium"
    >
      {children}
      <Arrow className="pl-arrow group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="label text-muted">{children}</p>;
}

/** Block wrapper with Payload's block spacing (8rem / 6rem / 4rem). */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className="relative">
      <Container className={`py-16 lg:py-24 2xl:py-32 ${className}`}>{children}</Container>
    </section>
  );
}

/** Section heading with the title on the left and supporting text on the right. */
export function SectionHead({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-4 md:gap-0">
      <div className="md:col-span-2 md:pr-10">
        {label ? (
          <Reveal y={12}>
            <Label>{label}</Label>
          </Reveal>
        ) : null}
        <h2 className={`display text-[1.75rem] md:text-5xl ${label ? "mt-5" : ""}`}>
          <SplitWords text={title} delay={0.1} />
        </h2>
      </div>
      {children ? (
        <Reveal
          delay={0.25}
          className="max-w-[60ch] text-lg leading-snug text-muted md:col-span-2 md:pl-8 md:pt-8 md:text-xl"
        >
          {children}
        </Reveal>
      ) : null}
    </div>
  );
}

export function PageHero({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-line">
      <Container className="grid gap-8 pb-16 pt-16 md:grid-cols-4 md:gap-0 md:pb-24 md:pt-28">
        <div className="md:col-span-3 md:pr-10">
          <Reveal immediate y={12} delay={0.1}>
            <Label>{label}</Label>
          </Reveal>
          <h1 className="display mt-6 max-w-[18ch] text-[2.5rem] md:text-[4rem] 2xl:text-[5rem]">
            <SplitWords text={title} immediate delay={0.2} />
          </h1>
        </div>
        {children ? (
          <Reveal
            immediate
            delay={0.55}
            className="space-y-5 text-lg leading-snug text-muted md:col-span-2 md:col-start-3 md:mt-10 md:pl-8 md:text-xl"
          >
            {children}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

/** Hairline grid of equal cells. */
export function CellGrid({
  children,
  cols = "md:grid-cols-2 lg:grid-cols-4",
  className = "",
}: {
  children: ReactNode;
  cols?: string;
  className?: string;
}) {
  return (
    <StaggerGrid
      className={`grid border-l border-t border-line *:border-r *:border-b *:border-line ${cols} ${className}`}
    >
      {children}
    </StaggerGrid>
  );
}

/**
 * Payload's call-to-action block: copy on the left, a hatched scanline panel
 * with crosshair corners on the right holding stacked buttons.
 */
export function FinalCTA({
  title = "Have an Idea Worth Building?",
  text = "Whether you are starting with an early idea, improving an existing product, or looking for a long-term technology partner, our team is ready to start the conversation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-4 md:gap-0 lg:py-24 2xl:py-32">
        <div className="md:col-span-2 md:pr-10">
          <h2 className="display text-[1.75rem] md:text-5xl">
            <SplitWords text={title} />
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-[48ch] text-lg leading-snug text-muted md:text-xl">{text}</p>
          </Reveal>
        </div>
        <Reveal className="relative py-16 md:col-span-2 md:py-24" y={0} delay={0.1}>
          <div className="absolute inset-0 border-y border-line md:-right-[var(--gutter-h)]">
            <div className="scanline" />
          </div>
          <Crosshair className="-left-2 -top-2" />
          <Crosshair className="-bottom-2 -left-2" />
          <Stagger className="relative flex flex-col md:px-[12.5%]" stagger={0.12}>
            <StaggerItem className="flex *:w-full">
              <BigLink href="/contact" variant="solid">
                Talk to Our Team
              </BigLink>
            </StaggerItem>
            <StaggerItem className="-mt-px flex *:w-full">
              <BigLink href="/services">Explore Our Services</BigLink>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}
