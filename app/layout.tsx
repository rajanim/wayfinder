import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BackgroundAurora } from "@/components/layout/BackgroundAurora";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayfinder — The operating system for youth potential",
  description:
    "AI-powered identity discovery, real-world experiences, mentorship, and career alignment for the next generation.",
  metadataBase: new URL("https://wayfinder.example.com"),
  openGraph: {
    title: "Wayfinder",
    description:
      "Helping young people discover meaningful work before they become lost in the system.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayfinder",
    description:
      "Helping young people discover meaningful work before they become lost in the system.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <BackgroundAurora />
        {children}
      </body>
    </html>
  );
}
