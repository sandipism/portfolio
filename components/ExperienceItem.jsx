"use client";

import { useState } from "react";

export default function ExperienceItem({ item, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = `exp-${item.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <div className="relative">
      {/* Timeline node */}
      <span
        className="absolute left-0 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-resilience-500 bg-ink-950"
        aria-hidden="true"
      />

      <div className="ml-6 rounded-lg border border-ink-800 bg-ink-900/50 sm:ml-8">
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={id}
            className="flex-1 text-left"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-resilience-300">
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    open ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <span>
                <h3 className="text-lg font-semibold text-ink-50 group-hover:text-resilience-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-resilience-300">
                  {item.employer}
                  {item.project ? ` — ${item.project}` : ""}
                </p>
                <p className="mt-0.5 text-sm text-ink-400">{item.location}</p>
              </span>
            </div>
          </button>

          <span className="shrink-0 rounded border border-ink-700 bg-ink-800/70 px-3 py-1 text-xs font-semibold text-ink-200">
            {item.period}
          </span>
        </div>

        <div id={id} className={open ? "block" : "hidden"}>
          <div className="border-t border-ink-800 px-6 pb-6 pt-4 sm:px-8">
            <ul className="space-y-3">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-300 sm:text-base">
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-resilience-500"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
