"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  size: string;
  challenge: string;
  grantInterest: boolean;
};

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  size: "",
  challenge: "",
  grantInterest: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Discovery call request — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nSize: ${form.size} employees\nGrant interest: ${form.grantInterest ? "Yes" : "No"}\n\nChallenge:\n${form.challenge}`
    );
    window.location.href = `mailto:hello@digiform.gr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-foreground/10 bg-transparent px-4 py-3 text-sm font-sans focus:outline-none focus:border-foreground/30 transition-colors placeholder:text-muted-foreground/50";

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Form */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Book a discovery call
            </span>

            {submitted ? (
              <div className="border border-foreground/10 p-8">
                <h3 className="text-2xl font-display mb-4">Thanks — we'll be in touch.</h3>
                <p className="text-muted-foreground">Your email client should have opened with a pre-filled message. If not, email us directly at <a href="mailto:hello@digiform.gr" className="underline underline-offset-4">hello@digiform.gr</a>.</p>
                <p className="text-sm text-muted-foreground mt-4 font-mono">We respond within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Maria Papadaki"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Ltd."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="maria@acme.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">Company size *</label>
                  <select
                    required
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select employee count</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-250">51–250 employees</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">What's your biggest challenge? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="E.g. Our sales process is still mostly manual, we're losing time to admin work and can't scale…"
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    id="grantInterest"
                    checked={form.grantInterest}
                    onChange={(e) => setForm({ ...form, grantInterest: e.target.checked })}
                    className="mt-0.5 w-4 h-4 border border-foreground/20 cursor-pointer"
                  />
                  <label htmlFor="grantInterest" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I'm interested in EU grant funding for my transformation project
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white h-14 text-base rounded-full group"
                  style={{ background: "var(--blue)" }}
                >
                  Book discovery call
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center font-mono">
                  Free · 45 minutes · no commitment
                </p>
              </form>
            )}
          </div>

          {/* What happens next */}
          <div className="lg:pt-24">
            <h3 className="text-2xl font-display mb-8">What happens next.</h3>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "We review your submission",
                  body: "Within 24 hours, one of our consultants reads your message and prepares context-specific questions.",
                },
                {
                  step: "02",
                  title: "45-minute discovery call",
                  body: "We map your current processes, understand your goals, and discuss which transformation levers make most sense for your business.",
                },
                {
                  step: "03",
                  title: "Transformation brief",
                  body: "Within one week, you receive a no-commitment brief: recommended services, indicative timeline, estimated costs, and any applicable grant funding.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="font-mono text-sm text-muted-foreground/50 mt-1 shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-foreground/10">
              <p className="text-sm text-muted-foreground font-mono">
                Prefer email?{" "}
                <a href="mailto:hello@digiform.gr" className="text-foreground underline underline-offset-4">
                  hello@digiform.gr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
