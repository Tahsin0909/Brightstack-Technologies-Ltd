import Link from "next/link";
import type { Project } from "@/lib/content";
import { Arrow } from "./ui";

/** Payload card: flat surface, lifts to the hover elevation, corner arrow lights up. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col bg-bg transition-colors duration-150 hover:bg-hover"
    >
      <Arrow className="absolute right-5 top-5 h-4 w-4 text-muted opacity-50 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg group-hover:opacity-100" />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="label text-muted">{project.industry}</p>
        <h3 className="mt-4 pr-8 text-2xl font-medium tracking-[-0.04em]">{project.name}</h3>
        <dl className="mt-6 space-y-4 text-[15px] leading-snug">
          <div>
            <dt className="label text-muted">Challenge</dt>
            <dd className="mt-1.5">{project.challenge}</dd>
          </div>
          <div>
            <dt className="label text-muted">Solution</dt>
            <dd className="mt-1.5">{project.solution}</dd>
          </div>
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technology.map((t) => (
            <li key={t} className="mono border border-line px-2 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>
      </div>
      {/* Replace this panel with a real project image. */}
      <div className="relative ml-6 flex aspect-[4/3] items-center justify-center border-l border-t border-line bg-panel md:ml-8">
        <div className="scanline" />
        <svg
          aria-hidden="true"
          viewBox="0 0 120 90"
          className="relative h-20 w-28 text-muted"
          fill="none"
          stroke="currentColor"
        >
          <rect x="1" y="1" width="118" height="88" strokeDasharray="4 4" />
          <path d="m1 70 34-30 26 22 20-16 38 30" />
          <circle cx="88" cy="24" r="8" />
        </svg>
        {project.sample ? (
          <span className="mono absolute left-4 top-4 border border-line bg-bg px-2 py-1 text-xs">
            Sample layout
          </span>
        ) : null}
      </div>
    </Link>
  );
}
