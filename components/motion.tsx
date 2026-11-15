"use client";

import Lenis from "lenis";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { usePathname } from "next/navigation";
import { Children, useEffect, useRef, type ReactNode } from "react";

/** Payload's easing curve, used for every entrance. */
export const ease = [0.165, 0.84, 0.44, 1] as const;

/** In-view trigger: once, a little after the element's top enters the screen. */
const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

/* -------------------------------------------------------------------------- */
/* Smooth scrolling + global motion settings                                  */
/* -------------------------------------------------------------------------- */

/**
 * Inertia scrolling (Lenis) for the whole page, plus MotionConfig so every
 * animation is skipped when the visitor prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 } });
    lenisRef.current = lenis;
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New page: start at the top without gliding there.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Thin progress bar along the top of the window. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-signal"
    />
  );
}

/** Soft fade between pages (used by app/template.tsx). */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Entrances                                                                  */
/* -------------------------------------------------------------------------- */

/** Fades and lifts its content in when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on mount instead of waiting for the element to be in view. */
  immediate?: boolean;
}) {
  const shown = { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      {...(immediate ? { animate: shown } : { whileInView: shown, viewport })}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const group: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease } },
};

const tags = { div: motion.div, ol: motion.ol, ul: motion.ul, li: motion.li } as const;

/** Container whose StaggerItem children enter one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  as = "div",
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: keyof typeof tags;
  immediate?: boolean;
}) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      variants={group}
      custom={stagger}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport })}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof tags;
}) {
  const Tag = tags[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}

/** Wraps each child in a StaggerItem that fills its grid cell. */
export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Stagger className={className} stagger={0.09}>
      {Children.toArray(children).map((child, i) => (
        <StaggerItem key={i} className="flex *:w-full">
          {child}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/**
 * Splits text into words that rise out of a mask one by one, the way large
 * headings come in on Payload. Screen readers get the plain sentence.
 */
export function SplitWords({
  text,
  immediate = false,
  delay = 0,
}: {
  text: string;
  immediate?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      aria-label={text}
      role="text"
      className="block"
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport })}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
            }}
            style={{ transformOrigin: "bottom left" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Hairline that draws itself from left to right when in view. */
export function DrawLine({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute left-0 h-px w-full origin-left bg-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 1.2, ease, delay }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Scroll-linked                                                              */
/* -------------------------------------------------------------------------- */

/** Moves its content slower or faster than the page while it passes through. */
export function Parallax({
  children,
  className,
  offset = 80,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/** Content that drifts up, shrinks slightly and fades as it scrolls off the top. */
export function ScrollFade({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { opacity, y, scale }}>
      {children}
    </motion.div>
  );
}

/** Slowly rotates/tilts its content in 3D as the page scrolls. */
export function ScrollTilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div style={reduced ? undefined : { rotateX, y }}>{children}</motion.div>
    </div>
  );
}
