"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { realWorldTiles } from "@/content/landing";

export function RealWorld() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Real-world experience"
            title={
              <>
                Stop preparing for life.{" "}
                <span className="italic text-white/60">Start living it.</span>
              </>
            }
            description="Wayfinder ships short, real missions from startups, creators, and communities — vetted, mentored, and built for early-career humans."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {realWorldTiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-3xl overflow-hidden glass p-6 flex flex-col"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${t.tone} opacity-60`}
                />
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl glass-strong grid place-items-center">
                    <t.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge tone="neutral">{t.tag}</Badge>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-balance">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 text-pretty flex-1">
                  {t.body}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-white/55">
                  <span>2–4 weeks · mentored</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:text-white transition" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
