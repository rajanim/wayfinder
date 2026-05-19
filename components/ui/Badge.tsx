import * as React from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  children,
  tone = "violet",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "violet" | "cyan" | "magenta" | "amber" | "mint" | "neutral";
}) {
  const tones: Record<string, string> = {
    violet: "text-aurora-violet bg-aurora-violet/10 border-aurora-violet/20",
    cyan: "text-aurora-cyan bg-aurora-cyan/10 border-aurora-cyan/20",
    magenta: "text-aurora-magenta bg-aurora-magenta/10 border-aurora-magenta/20",
    amber: "text-aurora-amber bg-aurora-amber/10 border-aurora-amber/20",
    mint: "text-aurora-mint bg-aurora-mint/10 border-aurora-mint/20",
    neutral: "text-white/75 bg-white/[0.05] border-white/10",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function EyebrowBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-aurora-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
      {children}
    </div>
  );
}
