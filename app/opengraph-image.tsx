import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wayfinder — the operating system for youth potential";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(124,92,255,0.5), transparent 60%), radial-gradient(50% 40% at 80% 20%, rgba(34,211,238,0.4), transparent 60%), radial-gradient(60% 60% at 60% 100%, rgba(244,114,182,0.4), transparent 60%), #05060A",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background:
                "linear-gradient(135deg, #7C5CFF, #22D3EE, #F472B6)",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 600 }}>Wayfinder</div>
        </div>

        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
            display: "flex",
          }}
        >
          Helping young people discover meaningful work before they become lost
          in the system.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.65)",
            fontSize: 22,
          }}
        >
          <div>An AI navigator for the next generation</div>
          <div>wayfinder.app</div>
        </div>
      </div>
    ),
    size,
  );
}
