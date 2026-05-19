import * as React from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  className,
  children,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      {...props}
      className={cn(
        "glass rounded-3xl p-6 transition-all duration-500",
        hover && "hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
