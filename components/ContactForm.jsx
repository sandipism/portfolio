"use client";

import { useState } from "react";
import { contactFormConfig } from "@/lib/contactConfig";

const initialForm = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

function buildMailtoUrl({ name, email, subject, message }) {
  const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`;
  return `mailto:${contactFormConfig.recipient}?subject=${encodeURIComponent(
    subject.trim()
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sentUrl, setSentUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => {
      if (!(name in errs)) return errs;
      const next = { ...errs };
      delete next[name];
      return next;
    });
    setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const url = buildMailtoUrl(form);
    setSentUrl(url);
    setStatus({
      type: "success",
      message:
        "Your email app should now open with your message ready — press Send there to deliver it to me.",
    });
    window.location.href = url;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-ink-800 bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          id="email"
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>
      <div className="mt-5">
        <Field
          id="subject"
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          error={errors.subject}
          required
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-ink-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded border bg-ink-950/60 px-4 py-3 text-ink-100 placeholder-ink-500 transition-colors focus:border-resilience-500 focus:outline-none ${
            errors.message ? "border-amber-500/60" : "border-ink-700"
          }`}
          placeholder="How can I help?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-amber-300">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded bg-resilience-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-resilience-500"
        >
          Send Message
        </button>
      </div>

      {status && (
        <div
          role="status"
          className={`mt-4 rounded border px-4 py-3 text-sm leading-relaxed ${
            status.type === "success"
              ? "border-resilience-500/40 bg-resilience-500/10 text-resilience-300"
              : "border-amber-500/40 bg-amber-500/10 text-amber-300"
          }`}
        >
          <p>{status.message}</p>
          {status.type === "success" && (
            <p className="mt-2">
              Nothing opened?{" "}
              <a
                href={sentUrl}
                className="font-semibold underline underline-offset-2 hover:text-resilience-400"
              >
                Open the pre-filled email
              </a>
              , or write directly to{" "}
              <a
                href={`mailto:${contactFormConfig.recipient}`}
                className="font-semibold underline underline-offset-2 hover:text-resilience-400"
              >
                {contactFormConfig.recipient}
              </a>
              .
            </p>
          )}
        </div>
      )}
    </form>
  );
}

function Field({ id, label, error, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-ink-200"
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
        className={`w-full rounded border bg-ink-950/60 px-4 py-3 text-ink-100 placeholder-ink-500 transition-colors focus:border-resilience-500 focus:outline-none ${
          error ? "border-amber-500/60" : "border-ink-700"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-amber-300">
          {error}
        </p>
      )}
    </div>
  );
}
