"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { journeySteps } from "@/content/landing";
import { cn } from "@/lib/cn";

export function NewModel() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  const toneMap: Record<string, string> = {
    violet: "from-aurora-violet/40 to-aurora-violet/0 text-aurora-violet",
    cyan: "from-aurora-cyan/40 to-aurora-cyan/0 text-aurora-cyan",
    magenta: "from-aurora-magenta/40 to-aurora-magenta/0 text-aurora-magenta",
    amber: "from-aurora-amber/40 to-aurora-amber/0 text-aurora-amber",
    mint: "from-aurora-mint/40 to-aurora-mint/0 text-aurora-mint",
  };

  return (
    <section className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The new model"
            title={
              <>
                A continuous loop, not a one-shot{" "}
                <span className="italic text-white/60">decision</span>.
              </>
            }
            description="Wayfinder reframes career as an evolving system: explore, experiment, build, reflect, grow, work — then loop again, smarter every time."
            align="center"
          />
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute top-8 left-0 right-0 h-px bg-white/[0.08] hidden md:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-8 left-0 h-px bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-magenta hidden md:block shadow-[0_0_24px_2px_rgba(124,92,255,0.5)]"
          />

          <ol className="grid gap-5 md:grid-cols-6 md:gap-3">
            {journeySteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative">
                  <div className="hidden md:flex items-center justify-center">
                    <div
                      className={cn(
                        "relative z-10 h-16 w-16 rounded-full glass-strong grid place-items-center",
                        "bg-gradient-to-b",
                        toneMap[step.tone],
                      )}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-5 md:text-center">
                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-full glass grid place-items-center bg-gradient-to-b",
                          toneMap[step.tone],
                        )}
                      >
                        <step.icon className="h-5 w-5" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                        Step {i + 1}
                      </p>
                    </div>
                    <h3 className="font-serif text-2xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/55 text-pretty">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
