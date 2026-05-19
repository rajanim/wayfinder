import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Globe, Mail } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Wayfinder",
  description:
    "A prototype by Rajani Maski exploring AI-guided early-career pathways for ages 14–24.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A prototype, by{" "}
                <span className="gradient-text">Rajani Maski</span>.
              </>
            }
            description="A working sketch of what AI-guided early-career discovery could feel like — built nights and weekends, shared as a conversation starter."
          />

          <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
            <div className="space-y-6 text-white/75 text-pretty leading-relaxed">
              <p>
                Wayfinder started as a question I kept circling after fifteen
                years building search and discovery systems: if AI can match a
                person to the right document in milliseconds, why can&apos;t it
                help a seventeen-year-old find the right{" "}
                <span className="text-white">early-career path</span>?
              </p>
              <p>
                Most career platforms treat young people as job-seekers. This
                one treats them as humans still figuring out who they are —
                with{" "}
                <span className="text-white">identity, missions, and mentorship</span>{" "}
                in a single, continuous loop.
              </p>
              <p>
                It&apos;s a prototype. The product is fictional, the conviction
                is real. If it resonates — as a student, a parent, a school, a
                mentor, or someone who wants to build this for real — I&apos;d
                love to hear from you.
              </p>
            </div>

            <GlassCard className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta shadow-glow grid place-items-center text-lg font-serif">
                  RM
                </div>
                <div>
                  <p className="font-medium text-white">Rajani Maski</p>
                  <p className="text-xs text-white/55">
                    Staff Software Engineer, AI
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-white/65 text-pretty leading-relaxed">
                Fifteen-plus years in information retrieval, search ranking,
                deep learning, and agentic systems. Currently architecting
                generative discovery infrastructure at Shutterstock —
                500M+ assets, 25 languages, production scale.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                <LinkRow
                  href="https://www.linkedin.com/in/rajanimaski/"
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                  hint="connect"
                />
                <LinkRow
                  href="https://rajanim.github.io/"
                  icon={<Globe className="h-4 w-4" />}
                  label="rajanim.github.io"
                  hint="more about me"
                />
                <LinkRow
                  href="mailto:rajani.maski@gmail.com"
                  icon={<Mail className="h-4 w-4" />}
                  label="rajani.maski@gmail.com"
                  hint="say hi"
                />
              </div>
            </GlassCard>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-3">
            <Button href="/" variant="gradient" size="lg">
              See the prototype
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/#cta" variant="ghost" size="lg">
              Join the waitlist
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LinkRow({
  href,
  icon,
  label,
  hint,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  hint: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:bg-white/[0.06] transition"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04] text-white/80">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/90 truncate">{label}</p>
        <p className="text-[11px] text-white/45">{hint}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition" />
    </Link>
  );
}
