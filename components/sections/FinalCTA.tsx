"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ctaPaths } from "@/content/landing";
import { cn } from "@/lib/cn";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function FinalCTA() {
  const [path, setPath] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    if (!WEB3FORMS_KEY) {
      setError("Email service not configured.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Wayfinder waitlist: ${ctaPaths[path].title}`,
          from_name: "Wayfinder Waitlist",
          email,
          audience: ctaPaths[path].title,
          message: `New waitlist signup from "${ctaPaths[path].title}": ${email}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Join the first cohort"
            title={
              <>
                The next generation is{" "}
                <span className="gradient-text">already arriving</span>. Help us
                meet them where they are.
              </>
            }
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.1fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-3">
            {ctaPaths.map((p, i) => {
              const active = i === path;
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => {
                    setPath(i);
                    setSubmitted(false);
                    setError(null);
                  }}
                  className={cn(
                    "text-left rounded-3xl p-5 transition-all duration-300",
                    active
                      ? "glass-strong gradient-border shadow-glow"
                      : "glass hover:bg-white/[0.06]",
                  )}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-xl grid place-items-center mb-4",
                    p.tone === "violet" && "bg-aurora-violet/15 text-aurora-violet",
                    p.tone === "cyan" && "bg-aurora-cyan/15 text-aurora-cyan",
                    p.tone === "magenta" && "bg-aurora-magenta/15 text-aurora-magenta",
                    p.tone === "amber" && "bg-aurora-amber/15 text-aurora-amber",
                  )}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-xs text-white/55 text-pretty">
                    {p.body}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-10 flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.18em] text-aurora-cyan">
              {ctaPaths[path].title}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-balance">
              {ctaPaths[path].body}
            </h3>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  className="mt-8"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      disabled={submitting}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@somewhere.com"
                      className="flex-1 h-12 rounded-full bg-white/[0.04] border border-white/10 px-5 text-sm placeholder:text-white/30 focus:outline-none focus:border-aurora-violet/50 focus:ring-2 focus:ring-aurora-violet/30 transition disabled:opacity-50"
                    />
                    <Button variant="gradient" size="lg" disabled={submitting}>
                      {submitting ? "Sending…" : ctaPaths[path].cta}
                      {!submitting && <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>
                  {error && (
                    <p className="mt-3 text-xs text-aurora-magenta">{error}</p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 flex items-center gap-3 rounded-2xl border border-aurora-mint/20 bg-aurora-mint/10 px-5 py-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-aurora-mint/20 text-aurora-mint">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">You're on the list.</p>
                    <p className="text-xs text-white/55">
                      We'll reach out as soon as the first cohort opens.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-6 text-[11px] text-white/40">
              By joining, you agree to receive occasional updates. We respect
              your inbox and your time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
