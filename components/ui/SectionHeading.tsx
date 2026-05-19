import * as React from "react";
import { cn } from "@/lib/cn";
import { EyebrowBadge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <EyebrowBadge>{eyebrow}</EyebrowBadge>}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-white/65 max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
