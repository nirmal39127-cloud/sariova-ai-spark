import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone, Instagram, Megaphone, ArrowRight } from "lucide-react";
import { Nav, Footer, SectionHead, ContactRow, openDemo } from "@/components/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sariova AI" },
      {
        name: "description",
        content:
          "AI web assistants, phone receptionists, social DM assistants and marketing creative for local businesses.",
      },
      { property: "og:title", content: "Services — Sariova AI" },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: MessageSquare,
    tag: "Most popular",
    title: "AI web assistant",
    desc: "A chat assistant on your website, trained on your services, prices and tone. It answers questions, qualifies the person, and captures their details — day or night.",
    points: [
      "Answers in seconds, at 9pm and on Sundays",
      "Their name and number sent straight to your phone",
      "Trained on your business, not a generic FAQ",
    ],
  },
  {
    icon: Phone,
    tag: "For businesses that live on the phone",
    title: "AI phone receptionist",
    desc: "Answers the calls you can't. Takes the enquiry, gets the details, and sends it to you — instead of a voicemail nobody leaves.",
    points: [
      "Answers after hours and when you're on the tools",
      "Books people in or takes a message",
      "Every call summarised to your inbox",
    ],
  },
  {
    icon: Instagram,
    tag: "Where the DMs actually land",
    title: "Social & DM assistant",
    desc: "The same assistant answering your Facebook, Instagram and WhatsApp messages. Your customers are already messaging you there at 9pm — this answers them.",
    points: [
      "Facebook Messenger and Instagram DMs",
      "WhatsApp Business",
      "One assistant across every channel",
    ],
  },
  {
    icon: Megaphone,
    tag: "Beyond the bot",
    title: "Marketing & creative",
    desc: "Getting the assistant right is half of it. We also build the things that point people at it.",
    points: ["Landing and demo pages", "Flyers and print", "Video ads", "Facebook ad campaigns"],
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us about your business",
    desc: "A quick chat or a look at your website. What you do, what people ask, what you charge.",
  },
  {
    n: "2",
    title: "We build you a working demo — free",
    desc: "Not a slide deck. A real assistant trained on your business that you can talk to and judge for yourself.",
  },
  {
    n: "3",
    title: "Love it? It goes live",
    desc: "We put it on your site and channels and keep it updated. Don't love it? You've lost nothing.",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Nav />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full hero-orb" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> What we build
          </span>
          <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.03] md:text-[60px]">
            More than a <span className="text-brand">chatbot.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Not one of those pop-ups that never understands the question. It knows your prices, your
            hours and your services — because Sariova AI sits down and sets it up with them.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Services"
            title={
              <>
                Pick one, or start with a <span className="text-brand">demo and see.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(({ icon: Icon, tag, title, desc, points }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-wash text-brand-deep">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand/80">
                  {tag}
                </p>
                <h3 className="mt-1.5 text-xl">{title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[14px] text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-2/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="How it works" title="Simple, and free to try." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl border border-white/10 bg-ink-2/60 p-7">
                <span className="font-display text-5xl font-extrabold text-brand/30">{s.n}</span>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-7 text-center md:p-10">
            <h3 className="text-xl md:text-2xl">You don't manage any of it</h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/65">
              There's no dashboard to learn and nothing to install. When your prices or hours
              change, you send a text and we change it. You are never locked out of your own
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-[32px] leading-[1.05] md:text-5xl">
            Not sure which one you <span className="text-brand">need?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            Call and describe your business. If an assistant won't help you, we'll tell you that —
            it's a short conversation and it costs you nothing.
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
