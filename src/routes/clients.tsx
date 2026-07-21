import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer, SectionHead, ContactRow, openDemo } from "@/components/SiteChrome";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Sariova AI" },
      {
        name: "description",
        content:
          "Real AI assistants delivered for Australian businesses — accounting, wellness, hospitality and finance.",
      },
      { property: "og:title", content: "Our Clients — Sariova AI" },
    ],
  }),
  component: Clients,
});

const delivered = [
  {
    sector: "Accounting",
    title: "A Melbourne accounting firm",
    desc: "The full job — an AI assistant on their website capturing client enquiries, plus everything around it to get people there.",
    points: [
      "Lead-capture assistant, live on their site",
      "Demo page and landing page",
      "Flyers and print",
      "Video ad and Facebook ad campaign",
    ],
    status: "Assistant live today",
  },
  {
    sector: "Health & wellness",
    title: "A day spa",
    desc: "An after-hours assistant that answers treatment questions and captures bookings when the phone can't be answered — which for a spa is most of the day.",
    points: [
      "After-hours assistant with lead capture",
      "Enquiries delivered straight to their inbox",
      "Rebuilt their lead email delivery when it broke",
    ],
    status: "Assistant live today",
  },
  {
    sector: "Professional services",
    title: "A Melbourne business",
    desc: "Built and deployed their assistant end to end — and turned up in person when they needed a hand with the rest of their tech.",
    points: ["Assistant built and deployed", "On-site support"],
    status: "Delivered",
  },
];

const inBuild = [
  {
    sector: "Hospitality",
    title: "A motel",
    desc: "An after-hours AI phone receptionist and web assistant — so a 10pm booking call gets answered instead of going to voicemail.",
  },
  {
    sector: "Finance",
    title: "A finance brokerage",
    desc: "An intake assistant that gathers what a broker needs before the first conversation, so nobody's chasing paperwork.",
  },
];

function Clients() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full hero-orb" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Already built. Already running.
          </span>
          <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.03] md:text-[60px]">
            Real businesses. <span className="text-brand">Live assistants.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            These are jobs we've delivered that are running today. Some clients haven't been asked
            yet whether we can use their name, so they're not here until they say yes.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="Delivered" title="Every one of these is live in a real business." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {delivered.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand/80">
                  {c.sector}
                </p>
                <h3 className="mt-1.5 text-lg">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">{c.desc}</p>
                <ul className="mt-4 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13.5px] text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">
                  ● {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-2/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="In build right now" title="On the workbench." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {inBuild.map((c) => (
              <div key={c.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-brand/80">
                  {c.sector}
                </p>
                <h3 className="mt-1.5 text-lg">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">{c.desc}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/60">
                  In progress
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/50">
            Client names on request — happy to put you in touch.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] leading-[1.05] md:text-5xl">
            Want to see one <span className="text-brand">working?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            The demos on this site are the same assistants, built the same way. Try one — it takes
            30 seconds and nobody asks for your email first.
          </p>
          <ContactRow />
          <button
            onClick={openDemo}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand"
          >
            Try a live demo <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
