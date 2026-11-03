"use client";

import { useEffect, useState } from "react";

type Token = { text: string; className?: string };

// Cada línea es una lista de fragmentos con su color.
const lines: Token[][] = [
  [
    { text: "const ", className: "text-brand-light" },
    { text: "brief = " },
    { text: "await ", className: "text-brand-light" },
    { text: "loadBriefing(" },
    { text: '"tienda.json"', className: "text-amber-300" },
    { text: ");" },
  ],
  [],
  [
    { text: "const ", className: "text-brand-light" },
    { text: "specs = " },
    { text: "await ", className: "text-brand-light" },
    { text: "Promise.all([" },
  ],
  [{ text: "  architect(brief), designer(brief)," }],
  [{ text: "  content(brief), integrations(brief)," }],
  [{ text: "]);" }],
  [],
  [{ text: "await ", className: "text-brand-light" }, { text: "review(implement(specs));" }],
  [{ text: "// → 4 subagentes en paralelo", className: "text-cream/45" }],
  [{ text: "// → loop de revisión hasta PASS", className: "text-cream/45" }],
];

// Posición de inicio de cada línea dentro del texto completo (+1 por el salto de línea).
const lineLengths = lines.map((line) => line.reduce((sum, t) => sum + t.text.length, 0));
const lineStarts = lineLengths.map((_, i) =>
  lineLengths.slice(0, i).reduce((sum, len) => sum + len + 1, 0),
);
const totalChars = lineStarts[lines.length - 1] + lineLengths[lines.length - 1];

export function CodeWindow() {
  const [typed, setTyped] = useState(0);
  const done = typed >= totalChars;

  useEffect(() => {
    if (done) return;
    const step = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? totalChars : 1;
    const id = window.setInterval(() => {
      setTyped((n) => Math.min(n + step, totalChars));
    }, 28);
    return () => window.clearInterval(id);
  }, [done]);

  return (
    <div className="animate-floaty overflow-hidden rounded-2xl border border-cream/10 bg-ink-2 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-2 border-b border-cream/10 px-5 py-3.5">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[12.5px] text-cream/50">orchestrator.ts</span>
      </div>

      {/* El texto completo queda en el DOM para lectores de pantalla y buscadores */}
      <pre className="sr-only">
        {lines.map((line) => line.map((t) => t.text).join("")).join("\n")}
      </pre>

      <pre
        aria-hidden="true"
        className="min-h-[310px] overflow-x-auto px-5 py-6 font-mono text-[12px] leading-[1.9] text-cream/90 sm:px-6 sm:text-[13.5px]"
      >
        {lines.map((line, i) => {
          const visible = Math.min(Math.max(typed - lineStarts[i], 0), lineLengths[i]);
          if (typed < lineStarts[i]) return null;

          const nextStart = lineStarts[i + 1] ?? Infinity;
          const hasCursor = done ? i === lines.length - 1 : typed < nextStart;

          let offset = 0;
          return (
            <div key={i}>
              {line.map((t, j) => {
                const part = t.text.slice(0, Math.max(visible - offset, 0));
                offset += t.text.length;
                return part ? (
                  <span key={j} className={t.className}>
                    {part}
                  </span>
                ) : null;
              })}
              {hasCursor && (
                <span className="ml-0.5 inline-block h-[1.1em] w-2 translate-y-[3px] animate-blink bg-brand-light" />
              )}
              {lineLengths[i] === 0 && " "}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
