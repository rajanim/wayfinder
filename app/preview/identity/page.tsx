"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Sparkles } from "lucide-react";
import { AppShell } from "@/components/preview/AppShell";
import { Badge } from "@/components/ui/Badge";

const IdentityGraphCanvas = dynamic(
  () => import("@/components/three/IdentityGraphCanvas"),
  { ssr: false },
);

type Trait = {
  label: string;
  color: string;
  category: string;
  strength: number;
  evidence: string[];
  growth: string;
};

const traits: Trait[] = [
  {
    label: "Visual systems",
    color: "#7C5CFF",
    category: "Strength",
    strength: 88,
    evidence: [
      "Shipped 3 brand explorations in the last 30 days",
      "Saves 4× more design references than peers",
      "Mentor endorsement from Ria M.",
    ],
    growth: "Try a 2-week brand mission to push toward 95.",
  },
  {
    label: "Storytelling",
    color: "#22D3EE",
    category: "Strength",
    strength: 74,
    evidence: [
      "Long-form reflections after 6 of 8 missions",
      "High engagement on your founder interviews",
    ],
    growth: "Pair with the 'Founder narratives' creator track.",
  },
  {
    label: "Founder mindset",
    color: "#F472B6",
    category: "Emerging",
    strength: 58,
    evidence: [
      "Interviewed 3 early-stage founders this month",
      "Joined the Builders cohort in March",
    ],
    growth: "Apply for a startup internship mission.",
  },
  {
    label: "AI fluency",
    color: "#F5B86A",
    category: "Curiosity",
    strength: 42,
    evidence: [
      "Completed 2 AI experiment missions",
      "Asks deeper-than-average AI questions in mentor sessions",
    ],
    growth: "Wayfinder will surface one AI mission per week.",
  },
  {
    label: "Empathy",
    color: "#7CF5C5",
    category: "Strength",
    strength: 91,
    evidence: [
      "Peer reviews consistently rate you in top 5%",
      "Strong collaboration signal across 4 group missions",
    ],
    growth: "Consider mentor-track. You're closer than you think.",
  },
];

export default function IdentityPage() {
  const [open, setOpen] = React.useState<Trait | null>(null);

  return (
    <AppShell title="Identity Graph" subtitle="A living model of who you're becoming">
      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="relative glass rounded-3xl overflow-hidden min-h-[520px]">
          <div className="absolute inset-0">
            <IdentityGraphCanvas />
          </div>
          <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3 pointer-events-none">
            <div className="glass-strong rounded-2xl p-4 max-w-xs">
              <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan">
                Snapshot
              </p>
              <p className="mt-1 text-sm">
                28 active signals · 5 emerging strengths · 1 mentor match this
                week
              </p>
            </div>
            <div className="glass-strong rounded-2xl px-3 py-2 text-[11px] text-white/55">
              Updated 12s ago
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 glass-strong rounded-2xl p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-violet">
              Today's signal
            </p>
            <p className="mt-1 text-sm text-white/85">
              You light up around{" "}
              <span className="text-aurora-cyan">visual systems</span>. Wayfinder
              is preparing two missions that lean into that.
            </p>
          </div>
        </div>

        <aside className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 px-2">
            Click a trait
          </p>
          {traits.map((t) => (
            <button
              key={t.label}
              onClick={() => setOpen(t)}
              className="w-full text-left glass rounded-2xl p-4 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: t.color,
                      boxShadow: `0 0 16px ${t.color}80`,
                    }}
                  />
                  <span className="text-sm font-medium">{t.label}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/45">
                  {t.category}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${t.strength}%`,
                      background: t.color,
                    }}
                  />
                </div>
                <span className="text-xs tabular-nums text-white/55">
                  {t.strength}
                </span>
              </div>
            </button>
          ))}
        </aside>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 h-full w-full max-w-md glass-strong border-l border-white/[0.08] p-6 overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge tone="violet">{open.category}</Badge>
                  <h3 className="mt-3 font-serif text-3xl">{open.label}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 w-40 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          width: `${open.strength}%`,
                          background: open.color,
                        }}
                      />
                    </div>
                    <span className="text-sm text-white/75">{open.strength}</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="h-9 w-9 rounded-full glass grid place-items-center text-white/70 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <section className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Evidence
                </p>
                <ul className="mt-3 space-y-2.5">
                  {open.evidence.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-white/80 glass rounded-xl p-3"
                    >
                      <Sparkles className="h-4 w-4 mt-0.5 text-aurora-cyan flex-none" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8 rounded-2xl p-5 gradient-border bg-gradient-to-br from-aurora-violet/10 to-aurora-cyan/10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Growth path
                </p>
                <p className="mt-2 text-sm text-white/85">{open.growth}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-xs text-white hover:text-aurora-cyan transition">
                  See related missions →
                </button>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
}
