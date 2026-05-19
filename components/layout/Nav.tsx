"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#product", label: "Product" },
  { href: "#engine", label: "AI Engine" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#vision", label: "Vision" },
  { href: "/preview/feed", label: "Live Preview" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-glow"
              : "border border-transparent",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-semibold tracking-tight"
          >
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta shadow-glow">
              <Compass className="h-4 w-4 text-white" strokeWidth={2.4} />
            </span>
            <span className="text-[15px]">Wayfinder</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] text-white/70 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button href="#cta" variant="ghost" size="sm">
              Sign in
            </Button>
            <Button href="#cta" size="sm">
              Join waitlist
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Button href="#cta" variant="ghost" size="sm">
                    Sign in
                  </Button>
                  <Button href="#cta" size="sm">
                    Join waitlist
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
