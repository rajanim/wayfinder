"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { EyebrowBadge } from "@/components/ui/Badge";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative py-40 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-violet/[0.06] to-transparent" />
        <ParticleField />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <EyebrowBadge>The long view</EyebrowBadge>
        </Reveal>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] text-balance"
        >
          The operating system for{" "}
          <span className="italic">youth growth,</span>{" "}
          <span className="gradient-text">identity,</span> and{" "}
          <span className="italic text-white/80">meaningful work</span>.
        </motion.h2>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-white/65 text-pretty">
            A category-defining company built for the generation that will
            inherit the future of work — and the responsibility of designing it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ParticleField() {
  const particles = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="absolute inset-0">
      {particles.map((i) => {
        const left = `${(i * 37) % 100}%`;
        const top = `${(i * 53) % 100}%`;
        const size = 1 + (i % 3);
        const duration = 6 + (i % 6);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{ left, top, width: size, height: size }}
            animate={{
              opacity: [0.15, 0.7, 0.15],
              y: [0, -16, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 8) * 0.4,
            }}
          />
        );
      })}
    </div>
  );
}
