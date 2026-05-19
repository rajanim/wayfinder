"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystemRoles } from "@/content/landing";

export function Ecosystem() {
  const [active, setActive] = React.useState(0);
  const orbit = ecosystemRoles.slice(1);
  const center = ecosystemRoles[0];

  return (
    <section id="ecosystem" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The ecosystem"
            title={
              <>
                One platform.{" "}
                <span className="italic text-white/60">Every stakeholder</span>{" "}
                in a young person's life.
              </>
            }
            description="Trust, safety, and growth — orchestrated across the people who matter."
            align="center"
          />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              {[140, 180].map((r) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="3 6"
                />
              ))}
            </svg>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {orbit.map((role, i) => {
                const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
                const r = 42;
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                const isActive = i === active;
                return (
                  <motion.button
                    key={role.name}
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className={`glass-strong rounded-2xl p-3 flex items-center gap-2 transition-all ${
                        isActive ? "shadow-glow ring-1 ring-aurora-violet/40" : ""
                      }`}
                    >
                      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/15 to-white/0 grid place-items-center">
                        <role.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium pr-1">{role.name}</span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-center glass-strong rounded-3xl p-6 w-44 shadow-glow">
                <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta grid place-items-center">
                  <center.icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-3 text-sm font-medium">{center.name}</p>
                <p className="mt-1 text-[11px] text-white/55">
                  At the center of every loop
                </p>
              </div>
            </div>
          </div>

          <Reveal>
            <div className="glass-strong rounded-3xl p-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan">
                Role: {orbit[active].name}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-balance">
                {orbit[active].body}
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-white/65">
                <li className="flex gap-3">
                  <span className="text-aurora-cyan">→</span>
                  Verified, safe, and privacy-first by design
                </li>
                <li className="flex gap-3">
                  <span className="text-aurora-cyan">→</span>
                  Signal visibility without surveillance
                </li>
                <li className="flex gap-3">
                  <span className="text-aurora-cyan">→</span>
                  Continuous, contextual collaboration
                </li>
              </ul>
              <div className="mt-8 grid grid-cols-4 gap-1.5">
                {orbit.map((r, i) => (
                  <button
                    key={r.name}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition ${
                      i === active ? "bg-white" : "bg-white/15 hover:bg-white/30"
                    }`}
                    aria-label={`Show ${r.name}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
