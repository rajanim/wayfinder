"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, User, CheckCircle2, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/preview/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type Status = "Available" | "In progress" | "Submitted";

type Mission = {
  id: string;
  title: string;
  brief: string;
  status: Status;
  client: string;
  mentor: string;
  duration: string;
  xp: number;
  tone: "violet" | "cyan" | "magenta" | "amber" | "mint";
  deliverables: string[];
  skills: string[];
};

const missions: Mission[] = [
  {
    id: "m1",
    title: "Design a brand kit for a neighborhood bakery",
    brief: "Logo, color, typography, and one social asset. Real client. Real launch.",
    status: "Available",
    client: "Riverbend Bakery",
    mentor: "Ria Mehta — Brand Designer @ Linear",
    duration: "2 weeks",
    xp: 120,
    tone: "violet",
    deliverables: ["Logo system", "Color & type", "Social launch post", "Mentor review"],
    skills: ["Visual systems", "Storytelling"],
  },
  {
    id: "m2",
    title: "Edit a YouTube short for a working creator",
    brief: "60-second cut from raw footage. Pacing, sound, text — your call.",
    status: "Available",
    client: "Noor — Travel creator (180k)",
    mentor: "Kai L. — Senior editor",
    duration: "1 week",
    xp: 60,
    tone: "amber",
    deliverables: ["Final cut", "Thumbnail option", "Process notes"],
    skills: ["Pacing", "Visual rhythm"],
  },
  {
    id: "m3",
    title: "Interview 3 early-stage founders",
    brief: "Source, schedule, run 30-min interviews. Publish 800-word piece.",
    status: "In progress",
    client: "Wayfinder Editorial",
    mentor: "Aanya R. — Editor-in-chief",
    duration: "3 weeks",
    xp: 140,
    tone: "cyan",
    deliverables: ["3 interview recordings", "Edited article", "Reflection"],
    skills: ["Storytelling", "Empathy"],
  },
  {
    id: "m4",
    title: "Ship a landing page for a student club",
    brief: "Brief, design, build, launch. Bonus: a 10-second motion moment.",
    status: "In progress",
    client: "Lumen Robotics Club",
    mentor: "Devansh G. — Engineer",
    duration: "2 weeks",
    xp: 110,
    tone: "magenta",
    deliverables: ["Live URL", "Source files", "Loom walkthrough"],
    skills: ["Code basics", "Visual systems"],
  },
  {
    id: "m5",
    title: "Build a tiny AI assistant for your school",
    brief: "Pick one painful workflow. Solve it with a modern AI stack.",
    status: "Available",
    client: "Your school, your call",
    mentor: "Mira P. — AI engineer",
    duration: "3 weeks",
    xp: 180,
    tone: "mint",
    deliverables: ["Prototype", "5-user test", "Demo video"],
    skills: ["AI fluency", "Founder mindset"],
  },
  {
    id: "m6",
    title: "Brand kit for a campus event",
    brief: "Identity + 3 posters + 1 motion teaser for a 200-person event.",
    status: "Submitted",
    client: "OpenMic — student showcase",
    mentor: "Ria Mehta",
    duration: "Done in 9 days",
    xp: 120,
    tone: "violet",
    deliverables: ["Identity", "Posters", "Motion teaser"],
    skills: ["Visual systems", "Collaboration"],
  },
];

const columns: { label: Status; tone: string }[] = [
  { label: "Available", tone: "text-aurora-violet" },
  { label: "In progress", tone: "text-aurora-cyan" },
  { label: "Submitted", tone: "text-aurora-mint" },
];

export default function MissionsPage() {
  const [open, setOpen] = React.useState<Mission | null>(null);

  return (
    <AppShell title="Missions" subtitle="Real-world work, sized for your week">
      <div className="grid lg:grid-cols-3 gap-5">
        {columns.map((col) => {
          const items = missions.filter((m) => m.status === col.label);
          return (
            <div key={col.label} className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <p className={`text-[11px] uppercase tracking-[0.18em] ${col.tone}`}>
                  {col.label}
                </p>
                <span className="text-[11px] text-white/40">
                  {items.length}
                </span>
              </div>
              <div className="space-y-3">
                {items.map((m) => (
                  <motion.button
                    key={m.id}
                    onClick={() => setOpen(m)}
                    whileHover={{ y: -2 }}
                    className="w-full text-left glass rounded-2xl p-4 hover:bg-white/[0.06] transition"
                  >
                    <div className="flex items-center justify-between">
                      <Badge tone={m.tone}>+{m.xp} XP</Badge>
                      <span className="text-[11px] text-white/45">
                        {m.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[15px] leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/55 line-clamp-2">
                      {m.brief}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/45">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="h-3 w-3" /> {m.mentor.split(" — ")[0]}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 h-full w-full max-w-lg glass-strong border-l border-white/[0.08] p-6 overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge tone={open.tone}>+{open.xp} XP</Badge>
                    <Badge tone="neutral">{open.status}</Badge>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl text-balance leading-tight">
                    {open.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="h-9 w-9 rounded-full glass grid place-items-center text-white/70 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-5 text-sm text-white/75 text-pretty">{open.brief}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Meta label="Client" value={open.client} />
                <Meta label="Mentor" value={open.mentor} />
                <Meta label="Duration" icon={Clock} value={open.duration} />
                <Meta label="Format" value="Solo · async + 1:1" />
              </div>

              <section className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Deliverables
                </p>
                <ul className="mt-3 space-y-2">
                  {open.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 glass rounded-xl px-3 py-2.5 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-aurora-mint" />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Strengthens
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {open.skills.map((s) => (
                    <Badge key={s} tone="cyan">
                      {s}
                    </Badge>
                  ))}
                </div>
              </section>

              <div className="mt-10 flex gap-3">
                <Button variant="gradient" size="lg" className="flex-1">
                  {open.status === "Available" ? "Accept mission" : "Open workspace"}
                </Button>
                <Button variant="ghost" size="lg">
                  Save
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
}

function Meta({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="glass rounded-xl p-3">
      <p className="text-[10px] uppercase tracking-wider text-white/40">
        {label}
      </p>
      <p className="mt-1 text-sm flex items-center gap-1.5">
        {Icon ? <Icon className="h-3.5 w-3.5 text-white/55" /> : null}
        {value}
      </p>
    </div>
  );
}
