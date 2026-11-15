import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/content";
import ThemeSwitcher from "./ThemeSwitcher";
import { Reveal } from "./motion";
import { Container } from "./ui";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/work", label: "Our Work" },
      { href: "/industries", label: "Industries" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.nav })),
  },
  {
    title: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/cookie-policy", label: "Cookie Policy" },
    ],
  },
];

/** Payload's footer: always dark, four columns on the grid lines. */
export default function Footer() {
  return (
    <footer data-theme="dark" className="relative z-10 overflow-hidden bg-bg text-fg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="gutter h-full">
          <div className="relative h-full">
            {[0, 25, 50, 75, 100].map((left, i) => (
              <div
                key={left}
                className={`absolute inset-y-0 w-px bg-line ${i > 0 && i < 4 ? "hidden md:block" : ""}`}
                style={{ left: `${left}%`, transform: i === 4 ? "translateX(-1px)" : undefined }}
              />
            ))}
          </div>
        </div>
      </div>

      <Container className="relative grid gap-y-12 pb-16 pt-16 md:grid-cols-2 lg:grid-cols-4 lg:pt-32">
        {columns.map((col, i) => (
          <Reveal key={col.title} delay={i * 0.08}>
          <nav aria-label={col.title} className="md:pl-6 lg:pr-6">
            <p className="label mb-8 lg:mb-[4.5rem]">{col.title}</p>
            <ul className="flex flex-col gap-4">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-[#d0d0d0]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </Reveal>
        ))}
        <Reveal delay={0.24} className="md:pl-6 lg:pr-6">
          <p className="label mb-8 lg:mb-[4.5rem]">Stay connected</p>
          <p className="max-w-[34ch] text-[15px] leading-snug text-muted">{site.description}</p>
          <Link
            href="/contact"
            className="group mt-6 flex items-center justify-between border-y border-line py-4 text-fg"
          >
            Start a conversation
            <span aria-hidden="true" className="rotate-45 transition-transform group-hover:translate-x-1.5">
              ↑
            </span>
          </Link>
          <div className="mt-8">
            <ThemeSwitcher />
          </div>
        </Reveal>
      </Container>

      <Container className="relative pb-12 pt-8 lg:pb-24">
        <Image
          src="/logo.png"
          alt=""
          width={615}
          height={96}
          className="logo-img h-auto w-full opacity-[0.08]"
        />
        <p className="mt-10 text-sm text-muted">
          © 2026 {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
