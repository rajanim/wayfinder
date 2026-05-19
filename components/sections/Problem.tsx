"use client";

import * as React from "react";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { problemStats, oldVsNew } from "@/content/landing";
import { cn } from "@/lib/cn";

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const inView = useInView(ref, { once: true });
  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          const display = to % 1 === 0 ? Math.round(v) : v.toFixed(1);
          ref.current.textContent = `${display}${suffix ?? ""}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, mv]);
  return <span ref={ref}>0{suffix ?? ""}</span>;
}

export function Problem() {
  return (
    <section id="problem" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title={
              <>
                A generation is being asked to choose careers{" "}
                <span className="italic text-white/60">before</span> they
                understand themselves.
              </>
            }
            description="Education optimizes for memorization. The world optimizes for adaptability. The gap between them is where young potential gets lost."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {problemStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <GlassCard className="h-full">
                <p className="font-serif text-6xl gradient-text">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-white/65 text-pretty">
                  {s.label}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          {oldVsNew.map((col, idx) => (
            <Reveal key={col.label} delay={idx * 0.1}>
              <div
                className={cn(
                  "relative h-full rounded-3xl p-8 overflow-hidden",
                  col.tone === "violet"
                    ? "gradient-border bg-gradient-to-br from-aurora-violet/[0.08] via-transparent to-aurora-cyan/[0.06]"
                    : "glass",
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                    {col.label}
                  </p>
                  {col.tone === "violet" ? (
                    <span className="text-[11px] text-aurora-cyan">
                      The new path
                    </span>
                  ) : (
                    <span className="text-[11px] text-white/40">
                      What we left behind
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start gap-3 text-[15px]"
                    >
                      {col.tone === "violet" ? (
                        <Check className="h-5 w-5 mt-0.5 text-aurora-cyan flex-none" />
                      ) : (
                        <X className="h-5 w-5 mt-0.5 text-white/30 flex-none" />
                      )}
                      <span
                        className={cn(
                          col.tone === "violet"
                            ? "text-white/90"
                            : "text-white/45 line-through decoration-white/15",
                        )}
                      >
                        {it}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
