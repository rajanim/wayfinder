"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-violet/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
  {
    variants: {
      variant: {
        primary:
          "text-ink-950 bg-white hover:bg-white/90 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]",
        gradient:
          "text-white bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-magenta bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-glow",
        ghost:
          "text-white/85 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]",
        outline:
          "text-white border border-white/15 hover:bg-white/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Common = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = Common & { href: string; target?: string; rel?: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { className, variant, size, children, ...rest } = props as Common & {
    href?: string;
  } & Record<string, unknown>;
  const cls = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={cls}
    >
      {children}
    </button>
  );
}
