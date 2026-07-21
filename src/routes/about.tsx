import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Nav, Footer, ContactRow, FounderPhoto, openDemo } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sariova AI" },
      {
        name: "description",
        content:
          "Sariova AI is founded by Nirmal Saria — 21 years in technology, most of it testing systems for one of Australia's biggest banks. Now building AI assistants for local businesses.",
      },
      { property: "og:title", content: "About — Sariova AI" },
    ],
  }),
  component: About,
});

const how = [
  {
    n: "1",
    title: "We show you before we tell you",
    desc: "You get a working demo, free, before any money changes hands. If the demo doesn't convince you, a sales pitch wasn't going to.",
  },
  {
    n: "2",
    title: "We'll tell you if it won't help",
    desc: "Not every business needs this. If yours doesn't, we'd rather say so than sell you something that sits there doing nothing.",
  },
  {
    n: "3",
    title: "You can call the founder",
    desc: "Not a ticket. Not a bot — ironically. Nirmal's mobile is on every page of this site.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full hero-orb" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Who you're dealing with
          </span>
          <h1 className="mt-5 max-w-3xl text-[38px] leading-[1.04] md:text-[56px]">
            You're not buying software. You're <span className="text-brand">hiring a person.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Sariova AI is a small, deliberate operation. No support queue, no offshore team, no
            account manager. When you sign up, you get the founder — Nirmal Saria — who builds,
            deploys and supports your assistant personally.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-2 to-ink p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <FounderPhoto size="lg" />
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Founder
                </span>
                <h2 className="mt-3 text-[26px] leading-tight md:text-4xl">
                  Nirmal Saria, in Melbourne.
                </h2>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-brand" strokeWidth={2.2} /> 21 years in tech ·
                  Melbourne · answers his own phone
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/75 md:text-base">
              <div>
                <h3 className="font-display text-lg font-bold text-white">The background</h3>
                <p className="mt-2">
                  Nirmal spent over two decades testing technology for one of Australia's biggest
                  banks — where "it mostly works" is never an acceptable answer.
                </p>
                <p className="mt-3">
                  Anyone can set up an AI assistant in an afternoon. The hard part is making sure it
                  holds up: that it doesn't get confused by an ordinary question, doesn't tell your
                  customer the wrong thing, and doesn't quietly stop working a month after we've
                  been paid.
                </p>
                <p className="mt-3">
                  So Sariova AI tests it the way bank systems get tested — assuming it will break,
                  and finding out how before your customers do.{" "}
                  <span className="font-semibold text-brand">
                    Banking-grade testing, on a local business budget.
                  </span>
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Why this business exists
                </h3>
                <p className="mt-2">
                  Nirmal left the bank in 2026. Two decades making sure big companies' systems
                  worked properly — then he started paying attention to the businesses down the
                  road. They were losing customers every night to a problem he already knew how to
                  fix.
                </p>
                <p className="mt-3">
                  Someone messages a plumber at 9pm with a burst pipe. No answer, so they message
                  the next plumber. That job was worth a few hundred dollars and it was gone before
                  the owner woke up. Most owners never find out.{" "}
                  <span className="font-semibold text-white">
                    You don't hear from the customer who didn't wait.
                  </span>
                </p>
                <p className="mt-3">
                  Big companies sorted this out years ago. Local businesses were told AI needed an
                  enterprise budget. It doesn't, and it hasn't for a while. Sariova AI exists to
                  close that gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-2/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> How we work
            </span>
            <h2 className="mt-4 text-[30px] leading-[1.05] md:text-4xl">
              Straight, and on your side.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {how.map((s) => (
              <div key={s.n} className="rounded-3xl border border-white/10 bg-ink-2/60 p-7">
                <span className="font-display text-5xl font-extrabold text-brand/30">{s.n}</span>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] leading-[1.05] md:text-5xl">
            Tell us what your business <span className="text-brand">does.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            Describe what people ask you all day. We'll tell you honestly whether an assistant helps
            — and if it does, we'll build you one free to prove it.
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
