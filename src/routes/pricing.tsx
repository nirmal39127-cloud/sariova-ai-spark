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
          "Clear starting pricing for Sariova website lead assistants, with custom quotes for booking, calendar and missed-call integrations.",
      },
      { property: "og:title", content: "Pricing — Sariova AI" },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    tag: "Where most people start",
    title: "Website Lead Assistant",
    price: "From $750 setup + $199 /month",
    points: [
      "Assistant trained on your business, live on your website",
      "Leads delivered to you by email and SMS",
      "Answers common questions and captures complete enquiries 24/7",
      "We keep it updated as your business changes",
    ],
    featured: true,
  },
  {
    tag: "For classes, appointments and availability",
    title: "Booking & calendar integration",
    price: "Quoted per integration",
    points: [
      "Adds an agreed booking or availability workflow to your assistant",
      "Google Calendar, Outlook Calendar or Square options",
      "Final scope depends on the platform, access and confirmation rules",
      "Quoted after a short workflow review",
    ],
    featured: false,
  },
  {
    tag: "When your workflow needs more",
    title: "Custom workflow",
    price: "Let's talk",
    points: [
      "Google Sheets lead capture and tailored notifications",
      "Missed-call SMS follow-up, subject to phone-provider compatibility",
      "Conversion websites, landing pages and client-specific integrations",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "Why does the price vary?",
    a: "The Website Lead Assistant has a clear starting price. The quote changes only when you need extra workflows, such as calendar booking, Square, Google Sheets or missed-call follow-up.",
  },
  {
    q: "Is the demo really free?",
    a: "Yes. We build it, you try it, you decide. No card, no contract, no obligation. If you don't want it, we've lost an afternoon and you've lost nothing.",
  },
  {
    q: "What's the monthly for?",
    a: "It covers ongoing hosting, platform monitoring, maintenance and reasonable updates when your services, hours or business details change.",
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
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Clear starting price
          </span>
          <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.03] md:text-[60px]">
            Clear starting price. <span className="text-brand">Tailored when needed.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Start with a practical website assistant. If you need calendar booking, Square,
            missed-call recovery or a custom workflow, we scope that clearly before we build it.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Pricing"
            title={
              <>
                Start simple. <span className="text-brand">Add what your business needs.</span>
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
            The Website Lead Assistant has a clear starting price. Integrations and custom
            workflows are quoted only after we understand the systems involved.
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
            Start with an assistant that <span className="text-brand">fits your business.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            We can show you how a Sariova assistant would fit your business, then agree the right
            setup before we begin.
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
