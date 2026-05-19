"use client";

import * as React from "react";
import { motion } from "framer-motion";

const LAYERS = [
  { label: "Interests", color: "#7C5CFF", radius: 60, count: 6, dur: 60 },
  { label: "Behavior", color: "#22D3EE", radius: 95, count: 8, dur: -80 },
  { label: "Skills", color: "#F472B6", radius: 130, count: 10, dur: 100 },
  { label: "Market", color: "#F5B86A", radius: 165, count: 12, dur: -120 },
  { label: "Opportunities", color: "#7CF5C5", radius: 200, count: 14, dur: 140 },
];

export default function AlignmentEngineCanvas() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="-240 -240 480 480" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#7C5CFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
          </radialGradient>
          {LAYERS.map((l, i) => (
            <radialGradient key={l.label} id={`gl-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={l.color} stopOpacity="0.95" />
              <stop offset="100%" stopColor={l.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Core glow */}
        <circle cx="0" cy="0" r="50" fill="url(#core)" />
        <motion.circle
          cx={0}
          cy={0}
          initial={{ r: 14, opacity: 0.95 }}
          fill="#ffffff"
          animate={{ r: [12, 16, 12], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit rings + nodes */}
        {LAYERS.map((layer, i) => (
          <g key={layer.label}>
            <circle
              cx="0"
              cy="0"
              r={layer.radius}
              fill="none"
              stroke={layer.color}
              strokeOpacity="0.22"
              strokeDasharray="2 6"
            />
            <motion.g
              animate={{ rotate: layer.dur > 0 ? 360 : -360 }}
              transition={{
                duration: Math.abs(layer.dur),
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              {Array.from({ length: layer.count }).map((_, n) => {
                const angle = (n / layer.count) * Math.PI * 2;
                const x = Math.cos(angle) * layer.radius;
                const y = Math.sin(angle) * layer.radius;
                const isHighlight = n % 3 === 0;
                return (
                  <g key={n} transform={`translate(${x} ${y})`}>
                    <circle
                      r={isHighlight ? 12 : 8}
                      fill={`url(#gl-${i})`}
                    />
                    <motion.circle
                      r={isHighlight ? 4 : 2.6}
                      fill={layer.color}
                      animate={{
                        opacity: [0.45, 1, 0.45],
                      }}
                      transition={{
                        duration: 2 + (n % 4),
                        repeat: Infinity,
                        delay: (n % 6) * 0.25,
                        ease: "easeInOut",
                      }}
                    />
                  </g>
                );
              })}
            </motion.g>
          </g>
        ))}

        {/* Outer label arcs */}
        <g fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="var(--font-sans)">
          {LAYERS.map((l, i) => (
            <text
              key={l.label}
              x="0"
              y={-(l.radius + 8)}
              textAnchor="middle"
              opacity={0.6}
            >
              {l.label.toUpperCase()}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
