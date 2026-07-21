import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Phone, Mail } from "lucide-react";
import type { ReactNode } from "react";

export const OPEN_DEMO_EVENT = "sariova:open-demo";
export const openDemo = () => window.dispatchEvent(new Event(OPEN_DEMO_EVENT));

const NAV = [
  ["Demos", "/"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Our Clients", "/clients"],
  ["About", "/about"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-ink">
            <Sparkles className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[15px] font-extrabold tracking-tight">
            Sariova <span className="text-brand">AI</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition hover:text-white [&.active]:text-brand"
              activeOptions={{ exact: href === "/" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          onClick={openDemo}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-bold text-ink transition hover:brightness-110"
        >
          Try demo <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}

export function ContactRow() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href="tel:+61466215363"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-display text-base font-bold text-ink transition hover:brightness-110 sm:w-auto"
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} /> Call · 0466 215 363
      </a>
      <a
        href="mailto:info@sariova.com.au?subject=AI%20assistant%20for%20my%20business"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 font-display text-base font-bold text-white transition hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
      >
        <Mail className="h-4 w-4" strokeWidth={2.5} /> info@sariova.com.au
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-ink">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-extrabold">
            Sariova <span className="text-brand">AI</span>
          </span>
        </div>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Sariova AI · AI Assistants for Local Business · Melbourne,
          Australia
        </p>
      </div>
    </footer>
  );
}

export function SectionHead({
  eyebrow,
  title,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[32px] leading-[1.05] md:text-5xl">{title}</h2>
    </div>
  );
}

/* Reusable founder photo — used on home + about. */
export function FounderPhoto({ size = "lg" }: { size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "h-28 w-28" : "h-20 w-20";
  return (
    <img
      src="/nirmal-saria.jpg"
      alt="Nirmal Saria, founder of Sariova AI"
      className={`${dim} flex-none rounded-2xl object-cover shadow-lg ring-4 ring-brand/20`}
    />
  );
}
