import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CalendarDays,
  MessageSquare,
  PanelsTopLeft,
  PhoneCall,
} from "lucide-react";
import { Nav, Footer, SectionHead, ContactRow, openDemo } from "@/components/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sariova AI" },
      {
        name: "description",
        content:
          "Website assistants, trial and booking workflows, missed-call follow-up and lead delivery for local businesses.",
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
    title: "Website lead assistant",
    desc: "A branded assistant on your website that understands your services, answers common questions and collects a complete enquiry — day or night.",
    points: [
      "Answers in seconds, at 9pm and on Sundays",
      "Collects the name, mobile, email and enquiry details you need",
      "Configured around your business — not a generic FAQ",
    ],
  },
  {
    icon: CalendarCheck,
    tag: "For classes, services and appointments",
    title: "Trial & booking requests",
    desc: "Guide a visitor through the right service, class or treatment choice, then capture their preferred date and time for your team to confirm.",
    points: [
      "Suitable for trials, consultations, treatments and appointments",
      "Capture the customer details and preferred time in one flow",
      "Confirmation language that matches your real availability process",
    ],
  },
  {
    icon: CalendarDays,
    tag: "When you need live availability",
    title: "Booking & calendar integration",
    desc: "Connect the assistant to an approved booking or calendar workflow so customers can request or book into the times you make available.",
    points: [
      "Square booking workflows where the account and access support it",
      "Google Calendar or Outlook Calendar for agreed availability rules",
      "Designed around your booking process, access permissions and confirmation requirements",
    ],
  },
  {
    icon: PhoneCall,
    tag: "For businesses that cannot miss enquiries",
    title: "Missed-call follow-up",
    desc: "When a business mobile is not answered, send the caller one helpful SMS that brings them to the same assistant to complete their enquiry.",
    points: [
      "A secure link back to your branded assistant",
      "Designed around your nominated phone provider and call-forwarding setup",
      "The completed enquiry follows the same notification process",
    ],
  },
  {
    icon: BellRing,
    tag: "So every lead reaches the right person",
    title: "Lead notifications & workflow",
    desc: "Deliver completed leads to the right place: email, SMS and, where needed, a Google Sheet your team can work from.",
    points: [
      "Clear enquiry summaries sent immediately",
      "Email and SMS notifications for the owner or team",
      "Google Sheets lead capture for simple day-to-day follow-up",
    ],
  },
  {
    icon: PanelsTopLeft,
    tag: "A website that supports the assistant",
    title: "Conversion website & landing pages",
    desc: "A modern, fast website or campaign page that explains your offer clearly and gives visitors a simple path to enquire or book.",
    points: [
      "Mobile-first pages built around your real customer journey",
      "Assistant, forms and calls-to-action placed where they help most",
      "Content that your business can keep current as it grows",
    ],
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
            A practical assistant for <span className="text-brand">every enquiry.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            We create customer enquiry flows that fit the way your business actually works — from a
            website chat through to booking requests, notifications and missed-call follow-up.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Services"
            title={
              <>
                Start with the right <span className="text-brand">customer journey.</span>
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
