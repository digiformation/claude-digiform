"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    stat: "75%",
    title: "of digital transformations fail",
    body: "Not because of bad technology — because of misaligned governance and cultural inertia. The tool is rarely the problem. The process always is.",
    source: "MIT Sloan Management Review",
  },
  {
    stat: "First",
    title: "optimize processes, then choose tools",
    body: "Most companies fall into tool fixation: buy the software, force employees to adapt. We do the opposite. We map and optimize your workflows first, then select tools that fit what you actually do.",
    source: "Digiform methodology",
  },
  {
    stat: "SME",
    title: "specific — not enterprise lite",
    body: "Enterprise frameworks don't scale down. SMEs face a 'liability of smallness' — resource constraints, skills gaps, investment uncertainty. Our approach is built from the ground up for organizations of 10–250 people.",
    source: "Digiform approach",
  },
];

export function PhilosophySection() {
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
    <section
      id="approach"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our philosophy
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Processes first.
            <br />
            <span className="text-muted-foreground">Technology second.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.stat}
              className={`border border-foreground/10 p-8 transition-all duration-700 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <span className="text-5xl lg:text-6xl font-display text-blue" style={{ color: "var(--blue)" }}>
                  {pillar.stat}
                </span>
              </div>
              <h3 className="font-medium text-lg mb-3 leading-snug">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.body}</p>
              <span className="text-xs font-mono text-muted-foreground/50">{pillar.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
