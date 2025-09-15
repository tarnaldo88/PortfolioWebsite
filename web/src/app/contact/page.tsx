"use client";

import Container from "@/components/Container";
import { useState } from "react";

export const metadata = {
  title: "Contact",
  description: "Get in touch for opportunities or collaboration.",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // Placeholder form handler; later wire to Formspree/Netlify/Vercel Forms
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Basic honeypot check
    const honey = (form.elements.namedItem("company") as HTMLInputElement).value;
    if (honey) return; // bot
    setSubmitted(true);
  }

  return (
    <Container className="py-10 max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-sm text-muted-foreground">Use the form to reach out.</p>
      {submitted ? (
        <div className="mt-6 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm">Thanks! I’ll get back to you soon.</div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required name="name" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
            </div>
          </div>
          <div className="hidden">
            <label>Company</label>
            <input name="company" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">Send</button>
        </form>
      )}
    </Container>
  );
}
