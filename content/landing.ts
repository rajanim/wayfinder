import {
  Compass,
  Sparkles,
  Hammer,
  BookOpen,
  Rocket,
  Briefcase,
  Brain,
  Users,
  Building2,
  Lightbulb,
  Code2,
  Video,
  Bot,
  Palette,
  Megaphone,
  HeartHandshake,
} from "lucide-react";

export const journeySteps = [
  {
    icon: Compass,
    title: "Explore",
    body: "Map your interests, strengths, and curiosities across industries and careers.",
    tone: "violet" as const,
  },
  {
    icon: Sparkles,
    title: "Experiment",
    body: "Try short, real-world missions to discover what actually moves you.",
    tone: "cyan" as const,
  },
  {
    icon: Hammer,
    title: "Build",
    body: "Make things that matter: projects, prototypes, products, stories.",
    tone: "magenta" as const,
  },
  {
    icon: BookOpen,
    title: "Reflect",
    body: "Wayfinder learns from every action, building your living identity graph.",
    tone: "amber" as const,
  },
  {
    icon: Rocket,
    title: "Grow",
    body: "Mentors, peers, and AI guide you toward skills with future demand.",
    tone: "mint" as const,
  },
  {
    icon: Briefcase,
    title: "Work",
    body: "Step into internships, apprenticeships, and meaningful first roles.",
    tone: "violet" as const,
  },
];

export const productMockups = [
  {
    title: "Discovery Feed",
    body: "An infinite, AI-curated stream of careers, creators, missions, and mentors — tuned to who you're becoming.",
    href: "/preview/feed",
  },
  {
    title: "Identity Graph",
    body: "A living model of your interests, strengths, and how you think — visualized as a constellation that grows with you.",
    href: "/preview/identity",
  },
  {
    title: "Missions",
    body: "Short, real-world projects from startups, creators, and communities. Learn by shipping, not by sitting.",
    href: "/preview/missions",
  },
  {
    title: "Portfolio",
    body: "Your living profile. Projects, endorsements, consistency, and signal — the resume replacement.",
    href: "/preview/portfolio",
  },
];

export const realWorldTiles = [
  {
    icon: Code2,
    tag: "Build",
    title: "Ship a site for a local business",
    body: "Two-week mission. Real client. Real revenue impact. Mentor review.",
    tone: "from-aurora-violet/30 to-aurora-cyan/10",
  },
  {
    icon: Video,
    tag: "Creator",
    title: "Edit videos for a working creator",
    body: "Get into the room with creators earning a living from their craft.",
    tone: "from-aurora-magenta/30 to-aurora-amber/10",
  },
  {
    icon: Bot,
    tag: "AI",
    title: "Build an AI assistant for your school",
    body: "Use modern AI stacks to solve a problem only a student would notice.",
    tone: "from-aurora-cyan/30 to-aurora-mint/10",
  },
  {
    icon: Rocket,
    tag: "Startup",
    title: "Intern with an early-stage startup",
    body: "Work alongside founders. Move the metric. Learn ten years in ten weeks.",
    tone: "from-aurora-amber/30 to-aurora-magenta/10",
  },
  {
    icon: Palette,
    tag: "Design",
    title: "Brand a community event",
    body: "Visual identity, posters, motion. Real audience. Real feedback.",
    tone: "from-aurora-mint/30 to-aurora-cyan/10",
  },
  {
    icon: HeartHandshake,
    tag: "Community",
    title: "Lead a neighborhood initiative",
    body: "Civic problem solving. Stakeholder interviews. Real change.",
    tone: "from-aurora-violet/30 to-aurora-magenta/10",
  },
];

export const ecosystemRoles = [
  {
    icon: Users,
    name: "Students",
    body: "The hero of the platform. Discover, build, and become.",
  },
  {
    icon: HeartHandshake,
    name: "Parents",
    body: "Visibility without surveillance. Encouragement, not pressure.",
  },
  {
    icon: Building2,
    name: "Schools",
    body: "Extend learning into the real world without rebuilding curriculum.",
  },
  {
    icon: Briefcase,
    name: "Employers",
    body: "Find motivated young talent through signal, not credentials.",
  },
  {
    icon: Lightbulb,
    name: "Mentors",
    body: "Lend an hour. Shape a life. Build the next generation of your industry.",
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
    body: "Join the waitlist. Be among the first cohort to find your way.",
    cta: "Join waitlist",
    tone: "violet" as const,
  },
  {
    icon: Brain,
    title: "I want to mentor",
    body: "Give an hour. Shape a generation. Apply to mentor.",
    cta: "Apply",
    tone: "cyan" as const,
  },
  {
    icon: Building2,
    title: "I'm a school",
    body: "Bring Wayfinder to your students. Partner with us.",
    cta: "Partner",
    tone: "magenta" as const,
  },
  {
    icon: Megaphone,
    title: "I'm an investor",
    body: "Backing the operating system for human potential. Let's talk.",
    cta: "Get the deck",
    tone: "amber" as const,
  },
];
