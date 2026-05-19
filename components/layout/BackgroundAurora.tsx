"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function BackgroundAurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-aurora-radial opacity-80" />
      <motion.div
        className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-aurora-violet/20 blur-3xl"
        animate={{ x: ["-50%", "-40%", "-50%"], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-aurora-cyan/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-aurora-magenta/12 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.07]" />
      <div className="absolute inset-0 noise opacity-[0.35] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
