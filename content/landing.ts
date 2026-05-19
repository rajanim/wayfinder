import {
  Compass,
  Sparkles,
  Hammer,
  BookOpen,
  Rocket,
  Briefcase,
  Brain,
  Building2,
  Code2,
  Video,
  Bot,
  Palette,
  Megaphone,
  HeartHandshake,
} from "lucide-react";

export const journeySteps = [
  { icon: Compass, title: "Explore", tone: "violet" as const },
  { icon: Sparkles, title: "Experiment", tone: "cyan" as const },
  { icon: Hammer, title: "Build", tone: "magenta" as const },
  { icon: BookOpen, title: "Reflect", tone: "amber" as const },
  { icon: Rocket, title: "Grow", tone: "mint" as const },
  { icon: Briefcase, title: "Work", tone: "violet" as const },
];

export const realWorldTiles = [
  {
    icon: Code2,
    tag: "Build",
    title: "Ship a site for a local business",
    body: "Two weeks. Real client. Real revenue.",
    tone: "from-aurora-violet/30 to-aurora-cyan/10",
  },
  {
    icon: Video,
    tag: "Creator",
    title: "Edit videos for a working creator",
    body: "Inside the room with creators earning a living.",
    tone: "from-aurora-magenta/30 to-aurora-amber/10",
  },
  {
    icon: Bot,
    tag: "AI",
    title: "Build an AI assistant for your school",
    body: "Solve a problem only a student sees.",
    tone: "from-aurora-cyan/30 to-aurora-mint/10",
  },
  {
    icon: Rocket,
    tag: "Startup",
    title: "Intern with an early-stage startup",
    body: "Ship beside founders. Ten years in ten weeks.",
    tone: "from-aurora-amber/30 to-aurora-magenta/10",
  },
  {
    icon: Palette,
    tag: "Design",
    title: "Brand a community event",
    body: "Identity, posters, motion. Real audience.",
    tone: "from-aurora-mint/30 to-aurora-cyan/10",
  },
  {
    icon: HeartHandshake,
    tag: "Community",
    title: "Lead a neighborhood initiative",
    body: "Civic problem solving. Real change.",
    tone: "from-aurora-violet/30 to-aurora-magenta/10",
  },
];

export const problemStats = [
  { value: 63, suffix: "%", label: "of graduates work outside their field of study" },
  { value: 75, suffix: "%", label: "of teens feel unprepared for the future of work" },
  { value: 1.8, suffix: "B", label: "young people entering the workforce by 2030" },
];

export const oldVsNew = [
  {
    label: "Old system",
    tone: "neutral" as const,
    items: [
      "Choose a career at 17",
      "Memorize. Comply. Test.",
      "Resumes built from credentials",
      "One path. One answer.",
      "Education ends at graduation",
    ],
  },
  {
    label: "Wayfinder",
    tone: "violet" as const,
    items: [
      "Discover yourself through experience",
      "Make. Reflect. Iterate.",
      "Portfolios built from real work",
      "Many paths. Yours.",
      "Learning is a lifelong loop",
    ],
  },
];

export const ctaPaths = [
  {
    icon: Sparkles,
    title: "I'm a student",
    body: "Be among the first cohort to find your way.",
    cta: "Join waitlist",
    tone: "violet" as const,
  },
  {
    icon: Brain,
    title: "I want to mentor",
    body: "Give an hour. Shape a generation.",
    cta: "Apply",
    tone: "cyan" as const,
  },
  {
    icon: Building2,
    title: "I'm a school",
    body: "Bring Wayfinder to your students.",
    cta: "Partner",
    tone: "magenta" as const,
  },
  {
    icon: Megaphone,
    title: "I'm an investor",
    body: "Backing the operating system for human potential.",
    cta: "Get the deck",
    tone: "amber" as const,
  },
];
