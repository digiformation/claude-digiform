"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Digital Strategy & Culture",
    tagline: "Alignment before investment.",
    color: "border-t-blue",
    deliverables: [
      "Digital maturity assessment (scored 1–5 across 6 dimensions)",
      "Digital literacy program tailored to your team's existing skills",
      "Measurable transformation roadmap with OKRs and milestones",
      "Change management playbook to minimize resistance and build buy-in",
    ],
    output: "roadmap.md — phased transformation plan tied to your revenue goals",
    description:
      "75% of digital transformation initiatives fail due to cultural resistance and misaligned governance — not technology gaps. Before any tool is selected, we build the foundation: shared understanding, clear accountability, and a roadmap your team actually believes in.",
  },
  {
    number: "02",
    title: "Process Automation & Low-Code",
    tagline: "Eliminate bottlenecks. Empower your team.",
    color: "border-t-blue",
    deliverables: [
      "End-to-end process mapping using industry-standard notation",
      "Citizen developer training on no-code/low-code platforms",
      "AI workflow automations that replace manual, repetitive tasks",
      "Integration of tools your team already uses (no rip-and-replace)",
    ],
    output: "automation-map.md — before/after workflow comparison with ROI estimates",
    description:
      "Low-code platforms have made it possible for non-technical business professionals to build functional automations and integrate systems. We train your team to become the builders — so when we leave, you can keep improving without us.",
  },
  {
    number: "03",
    title: "Cybersecurity & Resilience",
    tagline: "Expand your footprint safely.",
    color: "border-t-blue",
    deliverables: [
      "CIS Controls IG1 implementation — the SME-friendly security baseline",
      "Vulnerability assessment and prioritized remediation plan",
      "Regulatory compliance checklist (GDPR, NIS2)",
      "Incident response playbook for your team to follow",
    ],
    output: "security-posture.md — risk register + prioritized action list",
    description:
      "Every new digital capability you add is also a new attack surface. Enterprise security frameworks are too expensive and complex for most SMEs — CIS Controls Implementation Group 1 is specifically designed for organizations without a dedicated security team. We implement it.",
  },
  {
    number: "04",
    title: "Funding Advisory",
    tagline: "Your transformation, EU-financed.",
    color: "border-t-blue",
    deliverables: [
      "Grant eligibility assessment against current EU and national schemes",
      "Application preparation and submission support",
      "Project compliance management throughout the grant period",
      "Reimbursement claim preparation and submission",
    ],
    output: "grant-plan.md — eligible investments + maximum funding calculation",
    description:
      "Tight working capital should not be a barrier to transformation. EU schemes like the Digitalise your SME Grant can provide up to €120,000 — covering 50% of eligible investments in hardware, software, cybersecurity, and consulting fees. We guide you through the entire process.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      id={`service-${service.number}`}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-24 py-16 lg:py-24 border-b border-foreground/10 last:border-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="mb-2" style={{ borderTop: "3px solid var(--blue)", width: "3rem" }} />
        <span className="font-mono text-xs text-muted-foreground mb-4 block">{service.number}</span>
        <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-8 italic">{service.tagline}</p>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </div>

      <div className={isEven ? "" : "lg:order-1"}>
        <div className="border border-foreground/10 p-8 h-full">
          <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">Deliverables</h4>
          <ul className="space-y-4 mb-8">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--blue)" }} />
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-foreground/10 pt-6">
            <span className="text-xs font-mono text-muted-foreground block mb-1">Output</span>
            <span className="text-sm font-mono text-muted-foreground/60">→ {service.output}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesDetail() {
  return (
    <section className="relative py-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {services.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
