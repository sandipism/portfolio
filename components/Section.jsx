export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-resilience-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}
