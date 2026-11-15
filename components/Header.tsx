"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";
import { ease } from "./motion";
import { Arrow, ButtonFaces } from "./ui";

const dropItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

const links = [
  { href: "/work", label: "Our Work" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false); // services drop-down (desktop)
  const [mobile, setMobile] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const close = () => {
    setMenu(false);
    setMobile(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onScroll = () => setAtTop(window.scrollY < 30);
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  // Over the home hero the header takes the hero's dark theme, like Payload.
  const overHero = pathname === "/" && atTop && !menu && !mobile;
  const solid = !atTop || menu || mobile;

  return (
    <div
      className="fixed inset-x-0 top-0 z-40"
      data-theme={overHero ? "dark" : undefined}
      onMouseLeave={() => setMenu(false)}
    >
      {/* Page dim behind the open drop-down */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 -z-10 bg-fg transition-opacity duration-150 ${menu ? "opacity-15" : "opacity-0"}`}
      />
      <header
        className={`relative transition-colors duration-300 ${solid ? "bg-bg" : "bg-transparent"} ${mobile ? "border-b border-line" : ""}`}
      >
        <div className="gutter flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link href="/" onClick={close} aria-label="Brightstack home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Brightstack"
              width={615}
              height={96}
              priority
              className="logo-img h-5 w-auto"
            />
          </Link>

          <nav aria-label="Main" className="hidden h-full flex-1 items-center gap-6 whitespace-nowrap pl-10 min-[1170px]:flex">
            <button
              type="button"
              aria-expanded={menu}
              aria-controls="services-panel"
              onClick={() => setMenu((v) => !v)}
              onMouseEnter={() => setMenu(true)}
              className="relative flex h-full items-center gap-2"
            >
              Services
              <Arrow className={`h-2 w-2 transition-transform duration-150 ${menu ? "rotate-90" : "rotate-[135deg]"}`} />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-fg transition-opacity ${menu ? "opacity-100" : "opacity-0"}`}
              />
            </button>
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  onMouseEnter={() => setMenu(false)}
                  className="relative flex h-full items-center"
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-fg ${active ? "opacity-100" : "opacity-0"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={close}
              className="pl-btn hidden whitespace-nowrap text-sm sm:flex [&_.pl-btn__face]:gap-6 [&_.pl-btn__face]:px-4 [&_.pl-btn__face]:py-2.5"
            >
              <ButtonFaces>Start a Conversation</ButtonFaces>
            </Link>
            <button
              type="button"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
              className="flex h-10 w-10 items-center justify-center border border-line min-[1170px]:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-fg transition-transform ${mobile ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-fg transition-transform ${mobile ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop services drop-down */}
        <AnimatePresence>
        {menu ? (
        <motion.div
          id="services-panel"
          key="services-panel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
          transition={{ duration: 0.35, ease }}
          className="glass-strong absolute inset-x-0 top-full hidden min-[1170px]:block"
        >
          <motion.div
            className="gutter grid grid-cols-4 pb-10 pt-10"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.05 }}
          >
            <motion.div variants={dropItem} className="pr-8">
              <p className="text-2xl leading-tight tracking-[-0.04em]">
                Technology services built around your business.
              </p>
              <Link
                href="/services"
                onClick={close}
                className="grow-line mt-6 inline-flex items-center gap-2 pb-1 text-sm"
              >
                All services <Arrow />
              </Link>
            </motion.div>
            <div className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-10">
              {services.map((s) => (
                <motion.div key={s.slug} variants={dropItem} className="flex *:w-full">
                <Link
                  href={`/services/${s.slug}`}
                  onClick={close}
                  className="grow-line group flex flex-col justify-between gap-4 pb-8"
                >
                  <span className="flex items-start justify-between gap-4 text-xl font-medium tracking-[-0.04em]">
                    {s.nav}
                    <Arrow className="mt-1.5 transition-transform duration-150 group-hover:translate-x-2.5 group-hover:-translate-y-2.5" />
                  </span>
                  <span className="text-sm leading-snug text-muted">{s.card}</span>
                </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        ) : null}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
        {mobile ? (
          <motion.div
            key="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease }}
            className="gutter absolute inset-x-0 top-full z-40 h-[calc(100dvh-var(--header-height))] overflow-y-auto bg-bg pb-10 min-[1170px]:hidden"
          >
            <p className="label pt-6 text-muted">Services</p>
            <ul className="mt-2">
              {services.map((s, i) => (
                <motion.li
                  key={s.slug}
                  className="border-b border-line"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="flex items-center justify-between py-3.5 text-lg"
                  >
                    {s.nav}
                    <Arrow />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="label pt-8 text-muted">Company</p>
            <ul className="mt-2">
              {[{ href: "/services", label: "All Services" }, ...links, { href: "/contact", label: "Contact" }].map(
                (l, i) => (
                  <motion.li
                    key={l.href}
                    className="border-b border-line"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={close}
                      className="flex items-center justify-between py-3.5 text-lg"
                    >
                      {l.label}
                      <Arrow />
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>
        ) : null}
        </AnimatePresence>
      </header>
    </div>
  );
}
