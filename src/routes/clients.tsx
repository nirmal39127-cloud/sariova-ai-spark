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
          "Live and in-progress AI assistant solutions for Australian businesses, including accounting and martial arts.",
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
    desc: "A responsive website assistant that guides accounting enquiries, validates customer details and sends completed leads to the business.",
    points: [
      "Website assistant live in production",
      "Structured enquiry capture across six service categories",
      "Customer consent and input validation",
      "Email and SMS lead notifications",
      "Mobile and desktop support",
    ],
    status: "Live in production",
  },
];

const inBuild = [
  {
    sector: "Martial arts & fitness",
    title: "A Melbourne martial arts studio",
    desc: "A customer enquiry and trial-booking assistant being designed to capture class preferences, notify the owner by email and SMS, write completed leads to Google Sheets and support missed-call follow-up.",
  },
  {
    sector: "Wellness & day spa",
    title: "A Sunbury day spa",
    desc: "A treatment enquiry and booking-request assistant being migrated from Voiceflow into the Sariova platform. The first rollout delivers completed leads by email, with booking-platform integration available as a later phase.",
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
            Real businesses. <span className="text-brand">Real solutions.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            A clear view of what is live today and what is currently being designed and built. We
            label every project accurately as it progresses.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="Live solutions" title="Working in a real business today." />
          <div className="mt-12 grid max-w-2xl gap-5">
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
          <SectionHead eyebrow="In progress" title="Solutions currently taking shape." />
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
            Project status is shown accurately and updated as work progresses.
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
