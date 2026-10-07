export default function PublicationCard({ publication }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-ink-800 bg-ink-900/60 p-6 transition-colors hover:border-resilience-500/50">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-resilience-500/30 bg-resilience-500/10 px-3 py-1 text-xs font-semibold text-resilience-300">
          {publication.year}
        </span>
        {publication.pages && (
          <span className="rounded border border-ink-700 bg-ink-800/70 px-2.5 py-1 text-xs text-ink-300">
            pp. {publication.pages}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-50">
        {publication.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-resilience-300">
        {publication.authors.join(", ")}
      </p>

      <p className="mt-1 text-sm text-ink-400">{publication.venue}</p>

      <p className="mt-4 text-sm leading-relaxed text-ink-300">
        {publication.description}
      </p>

      {publication.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-ink-700 bg-ink-800/70 px-3 py-1 text-sm text-ink-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5">
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-resilience-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-resilience-500"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          Read Paper
        </a>
      </div>
    </article>
  );
}
