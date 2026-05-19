"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Compass, Hammer, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { productMockups } from "@/content/landing";

export function ProductExperience() {
  return (
    <section id="product" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The product"
            title={
              <>
                A premium product layer{" "}
                <span className="italic text-white/60">around</span> a young
                person's life.
              </>
            }
            description="Discovery, identity, missions, and portfolio — woven into a single, daily product that feels alive."
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-7">
            <MockupFrame title="Discovery Feed" href="/preview/feed">
              <FeedMockup />
            </MockupFrame>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <MockupFrame title="Identity Graph" href="/preview/identity">
              <IdentityMockup />
            </MockupFrame>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <MockupFrame title="Missions" href="/preview/missions">
              <MissionsMockup />
            </MockupFrame>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7">
            <MockupFrame title="Portfolio" href="/preview/portfolio">
              <PortfolioMockup />
            </MockupFrame>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {productMockups.map((m) => (
            <Link
              key={m.title}
              href={m.href}
              className="group glass rounded-2xl p-4 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{m.title}</p>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
              </div>
              <p className="mt-2 text-xs text-white/55 text-pretty">{m.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockupFrame({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group glass rounded-3xl overflow-hidden h-full min-h-[420px] flex flex-col"
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-3 text-xs text-white/45">wayfinder.app/{title.toLowerCase().split(" ")[0]}</span>
        </div>
        <Link
          href={href}
          className="text-[11px] text-white/55 hover:text-white transition inline-flex items-center gap-1"
        >
          Open live <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="relative flex-1 p-5">{children}</div>
    </motion.div>
  );
}

function FeedMockup() {
  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="col-span-1 space-y-2">
        {["For you", "Careers", "Missions", "Mentors", "Creators"].map((l, i) => (
          <div
            key={l}
            className={`rounded-lg px-2.5 py-1.5 text-xs ${
              i === 0
                ? "bg-white text-ink-950 font-medium"
                : "text-white/55 hover:bg-white/5"
            }`}
          >
            {l}
          </div>
        ))}
      </div>
      <div className="col-span-2 space-y-3">
        {[
          {
            tag: "Mission",
            tone: "violet" as const,
            title: "Build a brand kit for a local bakery",
            why: "Matches your interest in design + storytelling",
          },
          {
            tag: "Mentor",
            tone: "cyan" as const,
            title: "Ria Mehta — Brand Designer at Linear",
            why: "Open to 30-min sessions this week",
          },
          {
            tag: "Career",
            tone: "magenta" as const,
            title: "Brand Strategist — 3 paths into the role",
            why: "Trending in your network",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <Badge tone={c.tone}>{c.tag}</Badge>
            </div>
            <p className="text-sm text-white/90 leading-tight">{c.title}</p>
            <p className="mt-1.5 text-[11px] text-white/45 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> {c.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdentityMockup() {
  return (
    <div className="relative h-full grid place-items-center">
      <svg viewBox="0 0 200 200" className="w-full max-w-[280px]">
        <defs>
          <radialGradient id="ig" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="50" fill="url(#ig)" opacity="0.6" />
        {[
          { x: 100, y: 30, c: "#7C5CFF", l: "Curiosity" },
          { x: 165, y: 80, c: "#22D3EE", l: "Design" },
          { x: 145, y: 160, c: "#F472B6", l: "Story" },
          { x: 55, y: 160, c: "#F5B86A", l: "Build" },
          { x: 35, y: 80, c: "#7CF5C5", l: "Empathy" },
        ].map((n) => (
          <g key={n.l}>
            <line x1="100" y1="100" x2={n.x} y2={n.y} stroke={n.c} strokeOpacity="0.3" />
            <circle cx={n.x} cy={n.y} r="6" fill={n.c} />
            <text x={n.x} y={n.y - 10} fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.7)">
              {n.l}
            </text>
          </g>
        ))}
        <circle cx="100" cy="100" r="5" fill="#fff" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 glass rounded-xl p-3">
        <p className="text-[11px] text-white/45 uppercase tracking-wider">
          Today's signal
        </p>
        <p className="text-xs mt-1">
          You light up around <span className="text-aurora-cyan">visual systems</span>.
        </p>
      </div>
    </div>
  );
}

function MissionsMockup() {
  return (
    <div className="space-y-2.5 h-full">
      {[
        { t: "Edit a YouTube short", s: "Due in 3 days", x: 80, tone: "violet" as const },
        { t: "Interview 3 founders", s: "In progress", x: 120, tone: "cyan" as const },
        { t: "Ship a landing page", s: "Submitted", x: 200, tone: "magenta" as const },
        { t: "Run an AI experiment", s: "Available", x: 60, tone: "amber" as const },
      ].map((m) => (
        <div key={m.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-white/10 to-transparent grid place-items-center">
            <Hammer className="h-4 w-4 text-white/70" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{m.t}</p>
            <p className="text-[11px] text-white/45">{m.s}</p>
          </div>
          <Badge tone={m.tone}>+{m.x} XP</Badge>
        </div>
      ))}
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="grid grid-cols-5 gap-3 h-full">
      <div className="col-span-2 space-y-3">
        <div className="glass rounded-xl p-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-aurora-violet to-aurora-cyan" />
            <div>
              <p className="text-sm font-medium">Aanya R.</p>
              <p className="text-[11px] text-white/45">Designer-in-progress · 17</p>
            </div>
          </div>
        </div>
        {[
          { l: "Visual systems", v: 88, c: "bg-aurora-violet" },
          { l: "Storytelling", v: 74, c: "bg-aurora-cyan" },
          { l: "Code basics", v: 52, c: "bg-aurora-magenta" },
          { l: "Collaboration", v: 91, c: "bg-aurora-mint" },
        ].map((s) => (
          <div key={s.l}>
            <div className="flex justify-between text-[11px] text-white/55 mb-1">
              <span>{s.l}</span>
              <span>{s.v}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className={`h-full rounded-full ${s.c}`} style={{ width: `${s.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-3">
        {[
          { t: "Bakery rebrand", c: "from-aurora-violet/40 to-aurora-cyan/20" },
          { t: "AI poetry tool", c: "from-aurora-magenta/40 to-aurora-amber/20" },
          { t: "School zine vol. 3", c: "from-aurora-cyan/40 to-aurora-mint/20" },
          { t: "Founder interviews", c: "from-aurora-amber/40 to-aurora-violet/20" },
        ].map((p) => (
          <div
            key={p.t}
            className={`rounded-xl border border-white/10 p-3 aspect-[5/4] bg-gradient-to-br ${p.c} flex flex-col justify-between`}
          >
            <Award className="h-4 w-4 text-white/80" />
            <p className="text-xs text-white/90">{p.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
