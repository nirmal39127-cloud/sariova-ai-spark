import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";

type Industry = {
  key: string;
  emoji: string;
  label: string;
  desc: string;
  opener: string;
};

const INDUSTRIES: Industry[] = [
  {
    key: "plumbing",
    emoji: "🔧",
    label: "Emergency Plumbing",
    desc: "Callouts, quotes & bookings",
    opener: "G'day! Emergency Plumbing Co. — what's going on at your place?",
  },
  {
    key: "dental",
    emoji: "🦷",
    label: "Dental Clinic",
    desc: "Checkups, emergencies & bookings",
    opener: "Hi, welcome to Brighton Family Dental! How can I help you today?",
  },
  {
    key: "cafe",
    emoji: "☕",
    label: "Café",
    desc: "Hours, menu & bookings",
    opener: "Hey! Sunday Lane Café here — chasing a booking, catering, or just a question?",
  },
  {
    key: "salon",
    emoji: "💇",
    label: "Hair Salon",
    desc: "Services & appointments",
    opener: "Hi lovely! Bloom Hair Studio — after a cut, colour or something else?",
  },
  {
    key: "gym",
    emoji: "🏋️",
    label: "Gym",
    desc: "Trials, memberships & classes",
    opener: "Hey! Northside Strength Gym — keen for a free 7-day trial, or got a question first?",
  },
  {
    key: "mechanic",
    emoji: "🔩",
    label: "Mechanic",
    desc: "Servicing, roadworthy & repairs",
    opener: "G'day mate, Fair Dinkum Auto — what's the car doing?",
  },
];

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [industry, setIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm p-0 sm:items-center sm:p-4">
      <div className="relative flex h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-ink-2 shadow-2xl sm:h-[80vh] sm:rounded-3xl">
        <button
          onClick={onClose}
          aria-label="Close demo"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
        {industry ? (
          <ChatView industry={industry} onBack={() => setIndustry(null)} />
        ) : (
          <IndustryPicker onPick={setIndustry} />
        )}
      </div>
    </div>
  );
}

function IndustryPicker({ onPick }: { onPick: (i: Industry) => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="px-6 pt-8 pb-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Live demo
        </span>
        <h3 className="mt-3 font-display text-2xl font-extrabold text-white">
          Pick a business.
          <br />
          <span className="text-brand">Chat with its AI assistant.</span>
        </h3>
        <p className="mt-2 text-sm text-white/60">
          These are real, working assistants. Yours will be built the same way — trained on your
          business.
        </p>
      </div>
      <div className="grid gap-2 px-4 pb-6">
        {INDUSTRIES.map((i) => (
          <button
            key={i.key}
            onClick={() => onPick(i)}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-brand/40 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-wash text-xl">
              {i.emoji}
            </span>
            <div className="flex-1">
              <div className="font-display text-sm font-extrabold text-white">{i.label}</div>
              <div className="text-xs text-white/55">{i.desc}</div>
            </div>
            <ArrowRight
              className="h-4 w-4 text-brand opacity-0 transition group-hover:opacity-100"
              strokeWidth={2.5}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ChatView({ industry, onBack }: { industry: Industry; onBack: () => void }) {
  const initial: UIMessage[] = [
    {
      id: "welcome",
      role: "assistant",
      parts: [{ type: "text", text: industry.opener }],
    },
  ];

  const { messages, sendMessage, status } = useChat({
    id: industry.key,
    messages: initial,
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { industry: industry.key },
    }),
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-white/10 bg-ink px-5 py-4">
        <button onClick={onBack} className="text-xs font-semibold text-white/60 hover:text-white">
          ← Back
        </button>
        <div className="flex flex-1 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-ink">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-extrabold text-white">{industry.label}</div>
            <div className="text-[11px] text-brand">● AI assistant online</div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-ink px-4 py-5">
        {messages.map((m) => {
          const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
          const isUser = m.role === "user";
          return (
            <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={
                  isUser
                    ? "max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[14px] leading-snug text-ink"
                    : "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[14px] leading-snug text-ink"
                }
              >
                {text || (busy ? "…" : "")}
              </div>
            </div>
          );
        })}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-ink">
              <span className="inline-flex gap-1">
                <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
              </span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={submit} className="border-t border-white/10 bg-ink-2 p-3">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-ink-soft"
            disabled={busy}
            autoFocus
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-ink transition hover:brightness-110 disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-white/40">
          Live demo · Powered by Sariova AI
        </p>
      </form>
    </div>
  );
}

function Dot({ delay = "0ms" }: { delay?: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-ink/60"
      style={{ animationDelay: delay }}
    />
  );
}
