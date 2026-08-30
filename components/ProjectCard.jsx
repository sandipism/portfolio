"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const id = `proj-${project.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <article className="flex h-full flex-col rounded-lg border border-ink-800 bg-ink-900/60 p-6 transition-colors hover:border-resilience-500/50">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-resilience-500/30 bg-resilience-500/10 px-3 py-1 text-xs font-semibold text-resilience-300">
          {project.year}
        </span>
        <span className="rounded border border-ink-700 bg-ink-800/70 px-2.5 py-1 text-xs text-ink-300">
          {project.client}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-50">
        {project.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-resilience-300">
        {project.role}
        {project.scope ? ` — ${project.scope}` : ""}
      </p>

      <div className="mt-4 flex flex-1 items-end">
        <div className="w-full">
          {open && (
            <div className="mb-4 border-t border-ink-800 pt-4">
              <p className="text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={id}
            className="inline-flex items-center gap-2 text-sm font-semibold text-resilience-400 transition-colors hover:text-resilience-300"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            {open ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
    </article>
  );
}
