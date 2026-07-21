import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer, SectionHead, ContactRow, openDemo } from "@/components/SiteChrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sariova AI" },
      {
        name: "description",
        content:
          "Transparent pricing for AI web assistants and phone receptionists. Free working demo before you pay anything.",
      },
      { property: "og:title", content: "Pricing — Sariova AI" },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    tag: "Where most people start",
    title: "Web assistant",
    price: "From $299 setup + $99 /month",
    points: [
      "Assistant trained on your business, live on your website",
      "Leads sent to you by email, SMS or WhatsApp",
      "Answers 24/7, including weekends and holidays",
      "We keep it updated as your business changes",
    ],
    featured: true,
  },
  {
    tag: "For phone-heavy businesses",
    title: "Phone receptionist",
    price: "Varies by solution",
    points: [
      "Priced on your call volume and what it plugs into — quoted after your free demo",
      "Everything in the web assistant",
      "An AI receptionist that answers your calls",
      "Takes bookings and messages instead of voicemail",
    ],
    featured: false,
  },
  {
    tag: "Everything else",
    title: "Custom",
    price: "Let's talk",
    points: [
      "Social and WhatsApp assistants",
      "Landing pages, flyers, video ads, ad campaigns",
      "Anything that doesn't fit a box above",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "Why does the price vary?",
    a: "A one-page cafe and a multi-site clinic aren't the same job. The number moves with how much your business needs it to know and what it has to plug into.",
  },
  {
    q: "Is the demo really free?",
    a: "Yes. We build it, you try it, you decide. No card, no contract, no obligation. If you don't want it, we've lost an afternoon and you've lost nothing.",
  },
  {
    q: "What's the monthly for?",
    a: "Keeping it running, keeping it accurate, and changing it when your prices, hours or services change. An assistant giving out last year's prices is worse than no assistant.",
  },
  {
    q: "Am I locked in?",
    a: "No. It's month to month.",
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full hero-orb" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> No quotes, no discovery calls
          </span>
          <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.03] md:text-[60px]">
            No quotes. No <span className="text-brand">discovery call.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Here's where it starts. The exact number comes after a free demo you've already tried
            and liked — not before.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Pricing"
            title={
              <>
                Free working demo first — <span className="text-brand">always.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.title}
                className={
                  p.featured
                    ? "rounded-3xl border border-brand/40 bg-brand/[0.06] p-7"
                    : "rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                }
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand/80">{p.tag}</p>
                <h3 className="mt-1.5 text-2xl">{p.title}</h3>
                <p className="mt-3 font-display text-lg font-bold text-brand">{p.price}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[14px] text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/50">
            Every price varies based on what your business actually needs. You get an exact number
            after your free demo — never before.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-2/40 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead eyebrow="Straight answers" title="The questions people ask." />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-[17px]">{f.q}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] leading-[1.05] md:text-5xl">
            Try it before you spend a <span className="text-brand">cent.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            We'll build you a free working demo trained on your business. You'll know if it's worth
            $99 a month before we ever send you an invoice.
          </p>
          <ContactRow />
          <button
            onClick={openDemo}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand"
          >
            Or try a live demo <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
