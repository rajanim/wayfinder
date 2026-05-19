"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  variants = fadeUp,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
