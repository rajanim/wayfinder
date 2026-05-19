"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Node = {
  x: number;
  y: number;
  r: number;
  color: string;
  delay: number;
};

const PALETTE = ["#7C5CFF", "#22D3EE", "#F472B6", "#F5B86A", "#7CF5C5"];

function generateNodes(count: number, radius: number): Node[] {
  const nodes: Node[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const r = Math.sqrt(t) * radius;
    const a = i * golden;
    nodes.push({
      x: 200 + Math.cos(a) * r,
      y: 200 + Math.sin(a) * r,
      r: 2.5 + ((i * 37) % 10) * 0.45,
      color: PALETTE[i % PALETTE.length],
      delay: (i % 12) * 0.2,
    });
  }
  return nodes;
}

export default function IdentityGraphCanvas() {
  const nodes = React.useMemo(() => generateNodes(34, 150), []);
  const lines = React.useMemo(() => {
    const out: { a: Node; b: Node; key: string }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 70) out.push({ a: nodes[i], b: nodes[j], key: `${i}-${j}` });
      }
    }
    return out;
  }, [nodes]);

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full max-h-[640px] max-w-[640px]"
        >
          <defs>
            <radialGradient id="ig-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
            </radialGradient>
            {PALETTE.map((c, i) => (
              <radialGradient key={c} id={`ig-glow-${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={c} stopOpacity="0.9" />
                <stop offset="100%" stopColor={c} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>

          <circle cx="200" cy="200" r="110" fill="url(#ig-core)" opacity="0.55" />

          <g stroke="#8A7BFF" strokeOpacity="0.18" strokeWidth="0.6">
            {lines.map((l) => (
              <line key={l.key} x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y} />
            ))}
          </g>

          <g>
            {nodes.map((n, i) => (
              <g key={i}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r * 3}
                  fill={`url(#ig-glow-${i % PALETTE.length})`}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.color}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 3 + (i % 4),
                    repeat: Infinity,
                    delay: n.delay,
                    ease: "easeInOut",
                  }}
                />
              </g>
            ))}
          </g>

          <motion.circle
            cx={200}
            cy={200}
            initial={{ r: 4, opacity: 0.9 }}
            fill="#ffffff"
            animate={{ r: [4, 6, 4], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 grid place-items-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 140, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full max-h-[640px] max-w-[640px]">
          {[120, 160, 195].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray={i % 2 ? "2 8" : "3 10"}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
