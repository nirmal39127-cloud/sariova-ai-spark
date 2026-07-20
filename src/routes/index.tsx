import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageSquare,
  Phone,
  Instagram,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Mail,
  Check,
  Clock,
  MapPin,
} from "lucide-react";
import { DemoModal } from "@/components/DemoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sariova.AI",
          url: "https://sariova.ai/",
          telephone: "+61466215363",
          email: "hello@sariova.ai",
          founder: { "@type": "Person", name: "Nirmal Saria" },
          areaServed: { "@type": "City", name: "Melbourne" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Melbourne",
            addressRegion: "VIC",
            addressCountry: "AU",
          },
          description:
            "AI web assistants, phone receptionists and social DM assistants for local businesses.",
        }),
      },
    ],
  }),
  component: Home,
});

const OPEN_DEMO_EVENT = "sariova:open-demo";
const openDemo = () => window.dispatchEvent(new Event(OPEN_DEMO_EVENT));

function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  useEffect(() => {
    const handler = () => setDemoOpen(true);
    window.addEventListener(OPEN_DEMO_EVENT, handler);
    return () => window.removeEventListener(OPEN_DEMO_EVENT, handler);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Founder />
      <CTA />
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-ink">
            <Sparkles className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[15px] font-extrabold tracking-tight">
            Sariova<span className="text-brand">.AI</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Services", "#services"],
            ["How it works", "#how"],
            ["Why us", "#why"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              {label}
            </a>
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

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full hero-orb" />
      <div className="absolute -left-40 top-40 h-[360px] w-[360px] rounded-full hero-orb opacity-60" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_0_4px_rgba(31,217,138,.18)]" />
            AI for Local Business
          </span>
          <h1 className="mt-5 text-[42px] leading-[1.02] md:text-[64px]">
            Never miss a{" "}
            <span className="text-brand">customer</span> again.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Sariova.AI builds assistants that answer every web chat, phone call
            and social DM for your business — 24 hours a day, 7 days a week.
            Like a staff member who never sleeps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-display text-[15px] font-bold text-ink transition hover:brightness-110"
            >
              Try a live demo <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 font-display text-[15px] font-bold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              Talk to Nirmal
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-brand/80">
            <span>✓ Answers in seconds</span>
            <span>✓ Books appointments</span>
            <span>✓ Trained on your business</span>
          </div>
        </div>

        {/* Chat mock */}
        <div className="relative">
          <div className="mx-auto max-w-[380px] rounded-3xl bg-screen p-3 glow-ring">
            <div className="rounded-2xl bg-ink px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-ink">
                  <Sparkles className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-sm font-extrabold text-white">
                    Sariova Assistant
                  </div>
                  <div className="text-[11px] text-brand">● Online now</div>
                </div>
              </div>
            </div>
            <div className="space-y-2.5 px-2 py-4">
              <Bubble side="in">Hi! Do you have any spots free tomorrow?</Bubble>
              <Bubble side="out">
                Yes — we have 10:30am and 2:15pm available. Want me to book one for you?
              </Bubble>
              <Bubble side="in">2:15 works. Name is Jack.</Bubble>
              <Bubble side="out">
                Locked in for Jack at 2:15pm ✅ You'll get a text confirmation shortly.
              </Bubble>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-ink-soft">
              <span className="flex-1 text-[13px]">Type a message…</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-ink">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div
        className={
          isOut
            ? "max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[13.5px] leading-snug text-ink"
            : "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13.5px] leading-snug text-ink"
        }
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  const items = [
    {
      icon: MessageSquare,
      title: "Web Chat Assistant",
      desc: "A friendly chat bubble on your website that answers questions, quotes prices and captures leads while you sleep.",
    },
    {
      icon: Phone,
      title: "AI Phone Receptionist",
      desc: "Picks up every call in your business voice, books appointments and texts you the details instantly.",
    },
    {
      icon: Instagram,
      title: "Social DM Assistant",
      desc: "Answers Instagram, Facebook and WhatsApp messages the moment they land — no more lost leads at midnight.",
    },
  ];

  return (
    <section id="services" className="border-t border-white/5 bg-ink-2/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="What we build"
          title={
            <>
              One assistant.{" "}
              <span className="text-brand">Every channel your customers use.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <button
              key={title}
              onClick={openDemo}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-left transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.05]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-wash text-brand-deep">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                See it in action <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Discovery call",
      desc: "We spend 20 minutes learning your business — your services, prices, tone and the questions customers always ask.",
    },
    {
      n: "02",
      title: "We build & train",
      desc: "Within 5–7 days we deliver an assistant trained on your business, wired into your website, phone or DMs.",
    },
    {
      n: "03",
      title: "Go live & improve",
      desc: "You approve. It goes live. We monitor conversations weekly and keep sharpening it — you keep getting bookings.",
    },
  ];

  return (
    <section id="how" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              Live in a week.{" "}
              <span className="text-brand">Handled forever.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-white/10 bg-ink-2/60 p-7"
            >
              <span className="font-display text-5xl font-extrabold text-brand/30">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const items = [
    {
      icon: Zap,
      title: "Answers in seconds",
      desc: "80% of customers pick the first business that replies. Sariova.AI is always first.",
    },
    {
      icon: Clock,
      title: "24/7, no sick days",
      desc: "Weekends, holidays, 3am — every enquiry gets a warm, on-brand reply.",
    },
    {
      icon: ShieldCheck,
      title: "Built for your business",
      desc: "Not a generic chatbot. Trained on your services, prices and voice.",
    },
    {
      icon: Check,
      title: "You stay in control",
      desc: "Every booking, quote and lead lands in your inbox or CRM instantly.",
    },
  ];
  return (
    <section id="why" className="border-t border-white/5 bg-ink-2/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Why local businesses choose Sariova"
          title={
            <>
              Like hiring a great receptionist —{" "}
              <span className="text-brand">without the payroll.</span>
            </>
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="text-[17px]">{title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-2 to-ink p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <span
              aria-label="Nirmal Saria"
              className="flex h-24 w-24 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep font-display text-3xl font-extrabold text-ink shadow-lg ring-4 ring-brand/20"
            >
              NS
            </span>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Founder
              </span>
              <h2 className="mt-3 text-[26px] leading-tight md:text-4xl">
                Built and supported by{" "}
                <span className="text-brand">Nirmal Saria</span>, in Melbourne.
              </h2>
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-white/70 md:text-base">
            I've spent the last few years building AI assistants for cafés,
            clinics, tradies and salons across Melbourne. Sariova.AI is the
            same practical, no-nonsense service — with the tooling and team to
            scale beyond Melbourne. When you sign up, I'm the person who builds,
            deploys and supports your assistant. No agency handoffs.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-brand" strokeWidth={2.2} /> Melbourne, Australia
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA / Contact ---------- */
function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-20 md:py-28"
    >
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 hero-orb opacity-70" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Let's build yours
        </span>
        <h2 className="mt-5 text-[36px] leading-[1.05] md:text-5xl">
          Ready to stop missing{" "}
          <span className="text-brand">customers?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
          Book a free 20-minute discovery call. We'll show you a live demo
          tailored to your business — no commitment.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+61466215363"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-display text-base font-bold text-ink transition hover:brightness-110 sm:w-auto"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} /> Call +61 466 215 363
          </a>
          <a
            href="mailto:hello@sariova.ai"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 font-display text-base font-bold text-white transition hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
          >
            <Mail className="h-4 w-4" strokeWidth={2.5} /> hello@sariova.ai
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-ink">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-extrabold">
            Sariova<span className="text-brand">.AI</span>
          </span>
        </div>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Sariova.AI · AI Assistants for Local
          Business · Melbourne, Australia
        </p>
      </div>
    </footer>
  );
}

/* ---------- Shared ---------- */
function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[32px] leading-[1.05] md:text-5xl">{title}</h2>
    </div>
  );
}
