import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-20 text-center">
      <div
        className="grid-pattern mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-ink-700 bg-ink-900"
        aria-hidden="true"
      >
        <span className="text-2xl font-bold text-resilience-400">404</span>
      </div>
      <h1 className="text-3xl font-bold text-ink-50">Page not found</h1>
      <p className="mt-3 text-ink-300">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded bg-resilience-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-resilience-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
