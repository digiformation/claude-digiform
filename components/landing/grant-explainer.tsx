"use client";

import { useEffect, useRef, useState } from "react";

export function GrantExplainer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            The grant explained
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Digitalise your SME
            <br />
            <span className="text-muted-foreground">Grant Scheme.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: explanation */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The EU co-finances digital transformation investments for registered SMEs through national grant schemes. The goal is to remove the capital cost barrier that prevents smaller businesses from modernizing.
            </p>

            <div className="space-y-6">
              {[
                { label: "Maximum grant", value: "€120,000 per project" },
                { label: "Co-financing rate", value: "Up to 50% of eligible costs" },
                { label: "What's covered", value: "Hardware, software, cybersecurity, digital strategy consulting" },
                { label: "Who qualifies", value: "Registered SMEs (under 250 employees) in eligible EU member states" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 py-4 border-b border-foreground/5">
                  <span className="text-sm text-muted-foreground w-40 shrink-0">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: grant card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="border p-8 font-mono text-sm"
              style={{ borderColor: "var(--blue)", background: "var(--blue-light)" }}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Example: SME Digital Transformation Project
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: "Total investment", value: "€80,000", dim: false },
                  { label: "Eligible investment", value: "€80,000", dim: false },
                  { label: "Grant (50%)", value: "−€40,000", dim: false, accent: true },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline">
                    <span className={row.dim ? "text-muted-foreground" : ""}>{row.label}</span>
                    <span
                      className={`font-medium ${row.accent ? "" : ""}`}
                      style={row.accent ? { color: "var(--blue)" } : {}}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-foreground/20 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">Your net cost</span>
                  <span className="text-2xl font-display">€40,000</span>
                </div>
              </div>

              <div className="border-t border-foreground/10 pt-4 text-xs text-muted-foreground">
                Covers: CRM system · low-code platform · cybersecurity baseline · digital strategy consulting
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              Digiform's consulting fees are eligible expenses under the scheme. Your investment with us can be partially reimbursed by the grant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
