"use client";

import { useState } from "react";
import { contactFormConfig } from "@/lib/contactConfig";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactFormConfig.endpoint) {
      setStatus(
        "This form is not yet connected to a sending service. Please use the contact details below to reach me directly."
      );
      return;
    }
    try {
      const res = await fetch(contactFormConfig.endpoint, {
        method: contactFormConfig.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(
        data.success
          ? "Thank you — your message has been sent."
          : "There was a problem sending your message. Please try again or email me directly."
      );
    } catch {
      setStatus(
        "There was a problem sending your message. Please try again or email me directly."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-ink-800 bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
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
          className="w-full rounded border border-ink-700 bg-ink-950/60 px-4 py-3 text-ink-100 placeholder-ink-500 transition-colors focus:border-resilience-500 focus:outline-none"
          placeholder="How can I help?"
        />
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
        <p
          role="status"
          className="mt-4 rounded border border-ink-700 bg-ink-800/60 px-4 py-3 text-sm text-ink-200"
        >
          {status}
        </p>
      )}
    </form>
  );
}

function Field({ id, label, ...props }) {
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
        {...props}
        className="w-full rounded border border-ink-700 bg-ink-950/60 px-4 py-3 text-ink-100 placeholder-ink-500 transition-colors focus:border-resilience-500 focus:outline-none"
      />
    </div>
  );
}
