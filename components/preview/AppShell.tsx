"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Sparkles,
  Hammer,
  Award,
  Network,
  Search,
  Bell,
  Settings,
  Home,
} from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/preview/feed", label: "Feed", icon: Sparkles },
  { href: "/preview/identity", label: "Identity", icon: Network },
  { href: "/preview/missions", label: "Missions", icon: Hammer },
  { href: "/preview/portfolio", label: "Portfolio", icon: Award },
];

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh flex">
      <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-white/[0.06] p-4 sticky top-0 h-dvh">
        <Link href="/" className="flex items-center gap-2 px-3 py-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta shadow-glow">
            <Compass className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-semibold tracking-tight">Wayfinder</span>
        </Link>

        <nav className="mt-6 flex-1 space-y-1">
          {navItems.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                  active
                    ? "bg-white/[0.06] text-white shadow-inset-hair"
                    : "text-white/55 hover:text-white hover:bg-white/[0.04]",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="glass rounded-2xl p-4">
          <p className="text-[11px] uppercase tracking-wider text-aurora-cyan">
            Today
          </p>
          <p className="mt-1 text-sm">7-day streak. Keep going.</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan"
              />
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="mt-4 flex items-center gap-2 px-3 py-2 text-xs text-white/40 hover:text-white"
        >
          <Home className="h-3.5 w-3.5" /> Back to site
        </Link>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-ink-950/70 border-b border-white/[0.06]">
          <div className="flex items-center gap-4 px-5 lg:px-8 py-4">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                {subtitle ?? "Preview"}
              </p>
              <h1 className="font-serif text-2xl">{title}</h1>
            </div>
            <div className="hidden md:flex items-center gap-2 glass rounded-full px-3 py-2 w-72">
              <Search className="h-4 w-4 text-white/40" />
              <input
                className="bg-transparent flex-1 text-sm outline-none placeholder:text-white/30"
                placeholder="Search Wayfinder…"
              />
              <kbd className="text-[10px] text-white/40 border border-white/10 rounded px-1.5 py-0.5">
                ⌘K
              </kbd>
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/10">
              <Bell className="h-4 w-4 text-white/70" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.04] border border-white/10">
              <Settings className="h-4 w-4 text-white/70" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta" />
          </div>

          <nav className="lg:hidden flex gap-1 px-3 pb-3 overflow-x-auto scrollbar-hidden">
            {navItems.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs",
                    active
                      ? "bg-white text-ink-950"
                      : "bg-white/[0.04] text-white/65",
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
