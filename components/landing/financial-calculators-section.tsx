"use client";

import { useEffect, useRef, useState } from "react";

const calculators = [
  {
    name: "CPA Calculator",
    command: "/ads math cpa",
    formula: "Spend ÷ Conversions",
    inputs: ["Total spend", "Conversion count", "Target CPA"],
    output: "Cost per acquisition vs. target benchmark",
    description: "Calculates your actual CPA, compares to your target, and flags campaigns exceeding the 3× kill rule threshold.",
  },
  {
    name: "ROAS Calculator",
    command: "/ads math roas",
    formula: "Revenue ÷ Spend",
    inputs: ["Ad revenue", "Ad spend", "Target ROAS"],
    output: "ROAS ratio with platform-specific benchmarks",
    description: "Computes ROAS across platforms and applies industry-specific benchmarks. E-commerce targets differ from lead gen.",
  },
  {
    name: "Break-Even Analysis",
    command: "/ads math break-even",
    formula: "Fixed Costs ÷ (Price − Variable Cost)",
    inputs: ["Gross margin", "Blended CPA", "Average order value"],
    output: "Break-even ROAS and max allowed CPA",
    description: "Derives the minimum ROAS and maximum CPA your margins can sustain before campaigns run at a loss.",
  },
  {
    name: "LTV:CAC Ratio",
    command: "/ads math ltv-cac",
    formula: "LTV ÷ CAC",
    inputs: ["Average LTV", "Customer acquisition cost", "Payback period"],
    output: "LTV:CAC ratio with health grade",
    description: "Industry rule of thumb is 3:1 or better. Grades your ratio and projects payback period at current spend.",
  },
  {
    name: "ACOS / TACOS",
    command: "/ads math acos",
    formula: "Ad Spend ÷ Ad Revenue (ACOS) · Ad Spend ÷ Total Revenue (TACOS)",
    inputs: ["Ad spend", "Ad-attributed revenue", "Total store revenue"],
    output: "ACOS and TACOS with Amazon benchmarks",
    description: "Dual-metric view for Amazon Ads. TACOS captures organic halo — critical for Sponsored Products strategy.",
  },
  {
    name: "Budget Forecasting",
    command: "/ads math forecast",
    formula: "Daily Budget × 30.4 × Efficiency Factor",
    inputs: ["Daily budget", "Historical CPA", "Target monthly conversions"],
    output: "Monthly spend projection and conversion forecast",
    description: "Projects monthly outcomes from daily budget. Accounts for platform learning phase waste in first 2 weeks.",
  },
];

function CalculatorCard({ calc, index }: { calc: typeof calculators[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border border-foreground/10 p-6 transition-all duration-700 hover-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium">{calc.name}</h3>
        <span className="font-mono text-xs text-muted-foreground">{calc.command}</span>
      </div>
      <p className="text-sm font-mono text-muted-foreground mb-4 bg-foreground/5 px-3 py-2 rounded-sm">
        {calc.formula}
      </p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{calc.description}</p>
      <div className="text-xs text-muted-foreground/60 font-mono border-t border-foreground/5 pt-3">
        → {calc.output}
      </div>
    </div>
  );
}

export function FinancialCalculatorsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            PPC math
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Built-in calculators.
            <br />
            <span className="text-muted-foreground">No spreadsheet required.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {calculators.map((calc, index) => (
            <CalculatorCard key={calc.name} calc={calc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
