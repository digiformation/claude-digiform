"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    number: "01",
    label: "Brand DNA",
    agent: "ads-dna",
    description: "Extracts your brand identity and voice from your website. Produces brand-profile.json covering tone, values, visual style, and target audience.",
    output: "brand-profile.json",
  },
  {
    number: "02",
    label: "Strategy",
    agent: "creative-strategist",
    description: "Generates campaign concepts and messaging architecture. Matches platform format requirements to brand voice and business goals.",
    output: "campaign-brief.md",
  },
  {
    number: "03",
    label: "Visuals",
    agent: "visual-designer",
    description: "Creates image direction and specifications ready for AI generation. Five product photography styles: studio, lifestyle, editorial, minimal, and hero.",
    output: "image-spec.md",
  },
  {
    number: "04",
    label: "Copy",
    agent: "copy-writer",
    description: "Writes platform-native headlines, descriptions, and CTAs. Applies the copy framework most effective for each platform's algorithm.",
    output: "ad-copy.md",
  },
  {
    number: "05",
    label: "Validate",
    agent: "format-adapter",
    description: "Checks all assets against platform specs — character counts, image dimensions, video lengths, compliance rules. Flags anything that would fail review.",
    output: "ad-assets/",
  },
];

export function CreativePipelineSection() {
  const [activeStage, setActiveStage] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Creative pipeline
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Brand to brief
            <br />
            <span className="text-background/50">in one flow.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-0">
            {stages.map((stage, index) => (
              <button
                key={stage.number}
                type="button"
                onClick={() => setActiveStage(index)}
                className={`w-full text-left py-6 border-b border-background/10 transition-all duration-500 group ${
                  activeStage === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm text-background/30 mt-1">{stage.number}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-display group-hover:translate-x-1 transition-transform duration-300">
                        {stage.label}
                      </h3>
                      <span className="text-xs font-mono text-background/30">{stage.agent}</span>
                    </div>
                    {activeStage === index && (
                      <>
                        <p className="text-background/60 text-sm leading-relaxed mb-2">{stage.description}</p>
                        <span className="text-xs font-mono text-background/40">→ {stage.output}</span>
                        <div className="mt-3 h-px bg-background/20 overflow-hidden">
                          <div
                            className="h-full bg-background w-0"
                            style={{ animation: "progress 4s linear forwards" }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10 p-8 font-mono text-sm text-background/70">
              <div className="mb-6 text-background/40 text-xs">
                <span className="mr-4">$ /ads dna https://yoursite.com</span>
              </div>
              <div className="space-y-1">
                {stages.map((stage, i) => (
                  <div
                    key={stage.number}
                    className={`transition-all duration-300 ${
                      i === activeStage
                        ? "text-background"
                        : i < activeStage
                        ? "text-background/40"
                        : "text-background/20"
                    }`}
                  >
                    <span className="text-background/30 mr-3">{stage.number}</span>
                    {i < activeStage ? "✓" : i === activeStage ? "▶" : "○"}{" "}
                    {stage.label}
                    {i < activeStage && (
                      <span className="text-background/30 ml-2">→ {stage.output}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-background/10">
                <span className="text-xs text-background/40">
                  Each stage runs as a parallel Task — sequential where dependent.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
