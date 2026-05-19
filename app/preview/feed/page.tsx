"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Hammer,
  Users,
  Lightbulb,
  Briefcase,
  Bookmark,
  Share2,
  TrendingUp,
} from "lucide-react";
import { AppShell } from "@/components/preview/AppShell";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const filters = [
  { label: "For you", icon: Sparkles },
  { label: "Missions", icon: Hammer },
  { label: "Mentors", icon: Lightbulb },
  { label: "Careers", icon: Briefcase },
  { label: "Creators", icon: Users },
];

const feed = [
  {
    tag: "Mission",
    tone: "violet" as const,
    title: "Design a brand kit for a neighborhood bakery",
    body: "Two weeks. Real client. Real revenue impact. Mentor reviews each milestone.",
    meta: ["2 weeks", "+120 XP", "Mentored"],
    why: "Matches your interest in design + storytelling",
    creator: { name: "Riverbend Bakery", color: "from-aurora-violet to-aurora-cyan" },
  },
  {
    tag: "Mentor",
    tone: "cyan" as const,
    title: "Ria Mehta — Brand Designer at Linear",
    body: "Open to 30-minute portfolio reviews this week. Specializes in early-career design.",
    meta: ["30 min sessions", "4.9 ★", "12 open slots"],
    why: "Aligned with your top strength: visual systems",
    creator: { name: "RM", color: "from-aurora-cyan to-aurora-magenta" },
  },
  {
    tag: "Career",
    tone: "magenta" as const,
    title: "Brand Strategist — three real paths into the role",
    body: "Includes salary signals, day-in-the-life from working strategists, and 6 starter missions.",
    meta: ["Trending", "9 min read", "3 missions inside"],
    why: "Top growth role 2026–2030 in your region",
    creator: { name: "WF", color: "from-aurora-magenta to-aurora-amber" },
  },
  {
    tag: "Creator",
    tone: "amber" as const,
    title: "How Aanya (17) built her first $1k client project",
    body: "A founder-style interview with another Wayfinder student. Tactics, mindset, what to skip.",
    meta: ["8 min", "Student story", "Inspiring"],
    why: "People with your signal also loved this",
    creator: { name: "AR", color: "from-aurora-amber to-aurora-mint" },
  },
];

const signals = [
  { label: "Visual systems", trend: "+38%", color: "bg-aurora-violet" },
  { label: "Storytelling", trend: "+22%", color: "bg-aurora-cyan" },
  { label: "Founder mindset", trend: "+14%", color: "bg-aurora-magenta" },
  { label: "AI fluency", trend: "+9%", color: "bg-aurora-amber" },
];

const tagByFilter = ["", "Mission", "Mentor", "Career", "Creator"];

export default function FeedPage() {
  const [active, setActive] = React.useState(0);

  const visibleFeed =
    active === 0 ? feed : feed.filter((c) => c.tag === tagByFilter[active]);

  return (
    <AppShell title="Discovery Feed" subtitle="Curated for who you're becoming">
      <div className="grid xl:grid-cols-[1fr_320px] gap-6">
        <div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hidden pb-1">
            {filters.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={f.label}
                  onClick={() => setActive(i)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shrink-0 transition",
                    isActive
                      ? "bg-white text-ink-950"
                      : "glass text-white/75 hover:bg-white/[0.06]",
                  )}
                >
                  <f.icon className="h-4 w-4" />
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-4">
            {visibleFeed.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-3xl p-6 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${c.creator.color} grid place-items-center text-xs font-semibold text-white shrink-0`}
                  >
                    {c.creator.name.slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge tone={c.tone}>{c.tag}</Badge>
                      <span className="text-[11px] text-white/40">
                        {c.creator.name}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl leading-tight text-balance">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65 text-pretty">
                      {c.body}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-white/55">
                      {c.meta.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <p className="text-[11px] text-white/45 flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-aurora-cyan" />
                        {c.why}
                      </p>
                      <div className="flex items-center gap-2 text-white/45">
                        <button className="hover:text-white transition">
                          <Bookmark className="h-4 w-4" />
                        </button>
                        <button className="hover:text-white transition">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass rounded-3xl p-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan">
              Today's signals
            </p>
            <p className="mt-2 text-sm text-white/65">
              What your activity is teaching Wayfinder about you, this week.
            </p>
            <ul className="mt-5 space-y-3">
              {signals.map((s) => (
                <li key={s.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/75">{s.label}</span>
                    <span className="text-aurora-mint inline-flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {s.trend}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.color}`}
                      style={{ width: `${40 + Math.random() * 50}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-5 gradient-border bg-gradient-to-br from-aurora-violet/10 via-transparent to-aurora-cyan/10">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-violet">
              Why these picks
            </p>
            <p className="mt-2 text-sm text-white/80">
              You spent 41 minutes this week exploring{" "}
              <span className="text-aurora-cyan">brand systems</span> and{" "}
              <span className="text-aurora-magenta">founder interviews</span>.
              Wayfinder is suggesting one mission, one mentor, one career, and
              one peer story — calibrated to that arc.
            </p>
            <button className="mt-4 text-xs text-white/65 hover:text-white">
              See how Wayfinder thinks →
            </button>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
