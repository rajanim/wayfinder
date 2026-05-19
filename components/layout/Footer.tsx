import Link from "next/link";
import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-aurora-violet via-aurora-cyan to-aurora-magenta">
                <Compass className="h-4 w-4" strokeWidth={2.4} />
              </span>
              Wayfinder
            </Link>
            <p className="mt-4 text-sm text-white/55 max-w-xs">
              The operating system for youth growth, identity, and meaningful work.
            </p>
          </div>
          <FooterCol
            title="Product"
            links={[
              { href: "/preview/feed", label: "Discovery Feed" },
              { href: "/preview/identity", label: "Identity Graph" },
              { href: "/preview/missions", label: "Missions" },
              { href: "/preview/portfolio", label: "Portfolio" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "#vision", label: "Vision" },
              { href: "#ecosystem", label: "Ecosystem" },
              { href: "#cta", label: "Partners" },
              { href: "#cta", label: "Careers" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { href: "#cta", label: "Join waitlist" },
              { href: "#cta", label: "Mentors" },
              { href: "#cta", label: "Schools" },
              { href: "#cta", label: "Investors" },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.06] pt-8 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Wayfinder Labs. A prototype, not a product.</p>
          <p>Designed for the next generation of human potential.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[13px] uppercase tracking-[0.18em] text-white/50">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
