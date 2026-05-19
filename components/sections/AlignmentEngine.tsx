"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Brain, Cpu, Heart, Users, TrendingUp, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const AlignmentEngineCanvas = dynamic(
  () => import("@/components/three/AlignmentEngineCanvas"),
  { ssr: false, loading: () => <div className="absolute inset-0" /> },
);

const layers = [
  { icon: Heart, label: "Interests", color: "text-aurora-violet" },
  { icon: Cpu, label: "Behavior", color: "text-aurora-cyan" },
  { icon: Brain, label: "Skills", color: "text-aurora-magenta" },
  { icon: TrendingUp, label: "Market demand", color: "text-aurora-amber" },
  { icon: Users, label: "Mentor network", color: "text-aurora-mint" },
  { icon: Briefcase, label: "Opportunities", color: "text-white" },
];

const recommendations = [
  {
    title: "Try a 2-week brand mission",
    why: "Your design signal is rising 38% MoM",
    tone: "violet" as const,
  },
  {
    title: "Meet Ria, Brand Designer @ Linear",
    why: "Aligned across taste + storytelling",
    tone: "cyan" as const,
  },
  {
    title: "Explore: Brand Strategist path",
    why: "Top growth role 2026–2030",
    tone: "magenta" as const,
  },
];

export function AlignmentEngine() {
  return (
    <section id="engine" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The intelligence layer"
            title={
              <>
                An AI engine that{" "}
                <span className="gradient-text">aligns who you are</span> with
                where the world is going.
              </>
            }
            description="Six signal layers, continuously learning, producing one human-readable recommendation at a time."
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
          <Reveal className="order-2 lg:order-1">
            <ul className="space-y-3">
              {layers.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className={`grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] ${l.color}`}>
                    <l.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{l.label}</p>
                    <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${30 + i * 11}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.06 }}
                        className="h-full bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-magenta"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square w-full max-w-[560px] mx-auto">
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-aurora-violet/15 via-aurora-cyan/10 to-aurora-magenta/15 blur-3xl" />
              <div className="relative h-full w-full">
                <AlignmentEngineCanvas />
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[min(420px,90%)] space-y-2">
              {recommendations.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="glass-strong rounded-xl p-3 flex items-center gap-3"
                >
                  <Badge tone={r.tone}>Match</Badge>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{r.title}</p>
                    <p className="text-[11px] text-white/45 truncate">{r.why}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
