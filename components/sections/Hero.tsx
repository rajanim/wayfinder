"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EyebrowBadge } from "@/components/ui/Badge";

const IdentityGraphCanvas = dynamic(
  () => import("@/components/three/IdentityGraphCanvas"),
  { ssr: false, loading: () => <CanvasFallback /> },
);

function CanvasFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-64 w-64 rounded-full bg-gradient-to-br from-aurora-violet/30 via-aurora-cyan/20 to-aurora-magenta/20 blur-2xl animate-pulse-glow" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <EyebrowBadge>An AI navigator for the next generation</EyebrowBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] text-balance"
            >
              Helping young people{" "}
              <span className="italic text-white/90">discover</span>{" "}
              <span className="gradient-text">meaningful work</span> before they
              become lost in the system.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg text-white/65 text-pretty"
            >
              Wayfinder is an AI-powered platform for identity discovery,
              real-world experiences, mentorship, and career alignment — built
              for the 14–24 generation, not the system before them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button href="/preview/feed" variant="gradient" size="lg">
                Explore your path
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#cta" variant="ghost" size="lg">
                Join waitlist
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex items-center gap-6 text-xs text-white/40"
            >
              <div className="flex -space-x-2">
                {["#7C5CFF", "#22D3EE", "#F472B6", "#F5B86A"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-ink-950"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p>
                <span className="text-white/70">12,400+</span> students on the
                waitlist
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="relative aspect-square w-full max-w-[640px] mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-violet/20 via-aurora-cyan/10 to-aurora-magenta/10 blur-3xl" />
            <div className="relative h-full w-full">
              <IdentityGraphCanvas />
            </div>
            <FloatingChip
              className="absolute top-6 left-2 sm:left-6"
              label="Strength: storytelling"
              tone="violet"
              delay={1.2}
            />
            <FloatingChip
              className="absolute top-1/3 -right-2 sm:right-2"
              label="Curiosity: AI x design"
              tone="cyan"
              delay={1.6}
            />
            <FloatingChip
              className="absolute bottom-12 left-4"
              label="Mission complete: brand kit"
              tone="magenta"
              delay={2.0}
            />
            <FloatingChip
              className="absolute bottom-2 right-6"
              label="Mentor matched: Ria, Brand Designer"
              tone="amber"
              delay={2.4}
            />
          </motion.div>
        </div>

        <ScrollHint />
      </div>
    </section>
  );
}

function FloatingChip({
  label,
  tone,
  className,
  delay = 0,
}: {
  label: string;
  tone: "violet" | "cyan" | "magenta" | "amber";
  className?: string;
  delay?: number;
}) {
  const tones: Record<string, string> = {
    violet: "border-aurora-violet/40 text-aurora-violet",
    cyan: "border-aurora-cyan/40 text-aurora-cyan",
    magenta: "border-aurora-magenta/40 text-aurora-magenta",
    amber: "border-aurora-amber/40 text-aurora-amber",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`pointer-events-none select-none ${className ?? ""}`}
    >
      <div
        className={`glass rounded-full px-3 py-1.5 text-[11px] flex items-center gap-1.5 ${tones[tone]}`}
      >
        <Sparkles className="h-3 w-3" />
        <span className="text-white/80">{label}</span>
      </div>
    </motion.div>
  );
}

function ScrollHint() {
  return (
    <Link
      href="#problem"
      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition"
    >
      Scroll
      <span className="h-px w-10 bg-white/30" />
    </Link>
  );
}
