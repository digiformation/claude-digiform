"use client";

const eligible = [
  "Hardware purchases (servers, devices, peripherals)",
  "Software licences and SaaS tools (annual, upfront)",
  "Cybersecurity tools and implementation",
  "Process automation and low-code platform subscriptions",
  "Digital strategy consulting fees",
  "Employee training for digital tools",
  "Website and e-commerce infrastructure",
];

const notEligible = [
  "Ongoing SaaS subscriptions (monthly, after grant period)",
  "Internal staff costs or salaries",
  "Marketing campaigns and advertising spend",
  "General-purpose hardware (not used for digital transformation)",
  "Travel and accommodation costs",
  "VAT (if recoverable by the company)",
];

export function EligibilitySection() {
  return (
    <section className="relative py-16 lg:py-24 bg-foreground/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What's covered
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight">
            Eligible and ineligible expenses.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Eligible */}
          <div className="border border-foreground/10 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--blue)" }}>
                ✓
              </div>
              <h3 className="font-medium">Eligible expenses</h3>
            </div>
            <ul className="space-y-4">
              {eligible.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--blue)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not eligible */}
          <div className="border border-foreground/10 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-foreground/20">
                ✕
              </div>
              <h3 className="font-medium">Not eligible</h3>
            </div>
            <ul className="space-y-4">
              {notEligible.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8 font-mono">
          Eligibility criteria vary by member state and scheme. Digiform performs a full eligibility assessment before any application is submitted.
        </p>
      </div>
    </section>
  );
}
