"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Flame, Star, MessageCircle } from "lucide-react";
import { AppShell } from "@/components/preview/AppShell";
import { Badge } from "@/components/ui/Badge";

const skills = [
  { label: "Visual systems", v: 88, c: "bg-aurora-violet" },
  { label: "Storytelling", v: 74, c: "bg-aurora-cyan" },
  { label: "Empathy", v: 91, c: "bg-aurora-mint" },
  { label: "Code basics", v: 52, c: "bg-aurora-magenta" },
  { label: "Founder mindset", v: 58, c: "bg-aurora-amber" },
  { label: "AI fluency", v: 42, c: "bg-aurora-violet" },
];

const projects = [
  {
    title: "Riverbend Bakery — Brand kit",
    tag: "Design",
    tone: "violet" as const,
    cover: "from-aurora-violet/40 to-aurora-cyan/15",
    note: "Identity + social launch · live",
  },
  {
    title: "Founder interviews — Issue 02",
    tag: "Editorial",
    tone: "cyan" as const,
    cover: "from-aurora-cyan/40 to-aurora-mint/15",
    note: "3 founders · 12-min read",
  },
  {
    title: "Lumen Robotics — Landing page",
    tag: "Build",
    tone: "magenta" as const,
    cover: "from-aurora-magenta/40 to-aurora-violet/15",
    note: "Next.js · launched in 9 days",
  },
  {
    title: "OpenMic event identity",
    tag: "Design",
    tone: "amber" as const,
    cover: "from-aurora-amber/40 to-aurora-magenta/15",
    note: "Posters + motion teaser",
  },
  {
    title: "Tiny AI study assistant",
    tag: "Experiment",
    tone: "mint" as const,
    cover: "from-aurora-mint/40 to-aurora-cyan/15",
    note: "GPT prototype · 14 testers",
  },
  {
    title: "School zine — Vol. 03",
    tag: "Storytelling",
    tone: "violet" as const,
    cover: "from-aurora-violet/40 to-aurora-magenta/15",
    note: "Print + digital · 800 readers",
  },
];

const endorsements = [
  {
    by: "Ria M.",
    role: "Brand Designer @ Linear",
    quote:
      "Aanya has the rare ability to hold a system in her head and still surprise you. She's already past where I was at 22.",
  },
  {
    by: "Kai L.",
    role: "Senior video editor",
    quote:
      "Showed up curious, left with craft. Came back two weeks later with a better edit than half the people I work with.",
  },
];

export default function PortfolioPage() {
  return (
    <AppShell title="Portfolio" subtitle="A living profile. Not a resume.">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
        <div className="glass-strong rounded-3xl p-8 gradient-border">
          <div className="flex items-start gap-5">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta shadow-glow" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-3xl">Aanya R.</h2>
                <Badge tone="cyan">Cohort 01</Badge>
              </div>
              <p className="mt-1 text-sm text-white/65">
                Designer-in-progress · 17 · Bangalore
              </p>
              <p className="mt-4 text-sm text-white/80 max-w-xl text-pretty">
                I'm exploring brand systems, founder storytelling, and what
                happens when a 17-year-old gets to ship real things to real
                people.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat label="Missions shipped" value="14" />
            <Stat label="Streak" value="7d" icon={Flame} />
            <Stat label="Mentor hours" value="22" />
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-violet">
            Evolving strengths
          </p>
          <ul className="mt-4 space-y-3">
            {skills.map((s, i) => (
              <li key={s.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white/85">{s.label}</span>
                  <span className="tabular-nums text-white/55">{s.v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.v}%` }}
                    transition={{ duration: 1.2, delay: i * 0.06 }}
                    className={`h-full rounded-full ${s.c}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              Projects
            </p>
            <h3 className="font-serif text-3xl mt-1">Recent work</h3>
          </div>
          <button className="text-xs text-white/55 hover:text-white">
            View all 14 →
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-3xl overflow-hidden hover:bg-white/[0.06] transition"
            >
              <div
                className={`aspect-[5/3] bg-gradient-to-br ${p.cover} relative`}
              >
                <div className="absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-30" />
                <div className="absolute top-3 left-3">
                  <Badge tone={p.tone}>{p.tag}</Badge>
                </div>
                <Award className="absolute bottom-3 right-3 h-5 w-5 text-white/80" />
              </div>
              <div className="p-5">
                <p className="font-medium text-[15px]">{p.title}</p>
                <p className="mt-1 text-xs text-white/55">{p.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-5">
            Mentor endorsements
          </p>
          <div className="space-y-3">
            {endorsements.map((e) => (
              <div key={e.by} className="glass rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-magenta" />
                  <div>
                    <p className="text-sm font-medium">{e.by}</p>
                    <p className="text-[11px] text-white/45">{e.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-aurora-amber text-aurora-amber"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/85 text-pretty">
                  "{e.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl p-6 gradient-border bg-gradient-to-br from-aurora-violet/10 via-transparent to-aurora-cyan/10 flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> Wayfinder summary
          </p>
          <p className="mt-3 text-base text-white/85 text-pretty flex-1">
            Aanya is a high-signal designer-storyteller with founder energy.
            Strongest pull toward brand systems and editorial storytelling. Next
            growth edge: pair design with a small startup internship to compound
            into product thinking.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 text-xs text-white hover:text-aurora-cyan">
            <MessageCircle className="h-3.5 w-3.5" />
            Share this profile with someone
          </button>
        </div>
      </section>
    </AppShell>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-[11px] uppercase tracking-wider text-white/45">
        {label}
      </p>
      <p className="mt-1 font-serif text-2xl flex items-center gap-2">
        {Icon ? <Icon className="h-5 w-5 text-aurora-amber" /> : null}
        {value}
      </p>
    </div>
  );
}
