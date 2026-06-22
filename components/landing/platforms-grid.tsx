"use client";

import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    name: "Google Ads",
    checks: 80,
    color: "bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    features: ["Search & PMax", "AI Max campaigns", "Quality Score"],
    highlights: ["Broad Match + Smart Bidding check", "AI Max coverage gaps", "Conversion tracking audit"],
  },
  {
    name: "Meta Ads",
    checks: 50,
    color: "bg-purple-500/10 border-purple-500/20",
    dot: "bg-purple-400",
    features: ["Pixel + CAPI", "Andromeda system", "GEM + Lattice"],
    highlights: ["Entity-ID clustering predictor", "Silent video detection", "Creative diversity (70/20/10)"],
  },
  {
    name: "YouTube Ads",
    checks: 15,
    color: "bg-rose-500/10 border-rose-500/20",
    dot: "bg-rose-400",
    features: ["Shorts ads", "Demand Gen", "CTV"],
    highlights: ["Brand safety controls", "Skippable vs non-skippable", "Audience targeting depth"],
  },
  {
    name: "LinkedIn Ads",
    checks: 27,
    color: "bg-cyan-500/10 border-cyan-500/20",
    dot: "bg-cyan-400",
    features: ["B2B targeting", "TLA assessment", "Lead Gen Forms"],
    highlights: ["ABM tier structure", "Thought leader ads", "Matched audiences quality"],
  },
  {
    name: "TikTok Ads",
    checks: 28,
    color: "bg-green-500/10 border-green-500/20",
    dot: "bg-green-400",
    features: ["Creative quality", "Smart+ campaigns", "TikTok Shop"],
    highlights: ["Hook rate benchmarks", "Post-USDS structure checks", "Creator marketplace signals"],
  },
  {
    name: "Microsoft Ads",
    checks: 24,
    color: "bg-orange-500/10 border-orange-500/20",
    dot: "bg-orange-400",
    features: ["Copilot chat ads", "CTV campaigns", "Google import"],
    highlights: ["Import completeness check", "Audience network opt-in", "Copilot ad eligibility"],
  },
  {
    name: "Apple Ads",
    checks: "35+",
    color: "bg-zinc-500/10 border-zinc-500/20",
    dot: "bg-zinc-400",
    features: ["Custom Product Pages", "Max Conversions", "AdAttributionKit"],
    highlights: ["Dual attribution audit", "CPP relevance scoring", "AAK privacy framework"],
  },
  {
    name: "Amazon Ads",
    checks: "30+",
    color: "bg-amber-500/10 border-amber-500/20",
    dot: "bg-amber-400",
    features: ["Sponsored Products", "Sponsored Brands", "ACOS + TACOS"],
    highlights: ["Bid strategy alignment", "ACOS vs TACOS benchmarks", "Brand halo attribution"],
  },
];

function PlatformCard({ platform, index }: { platform: typeof platforms[0]; index: number }) {
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
      className={`border rounded-sm p-6 transition-all duration-700 hover-lift ${platform.color} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${platform.dot}`} />
          <h3 className="font-medium">{platform.name}</h3>
        </div>
        <span className="font-mono text-sm text-muted-foreground">{platform.checks} checks</span>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {platform.features.map((f) => (
          <span key={f} className="text-xs font-mono px-2 py-1 bg-background/50 rounded-full text-muted-foreground">
            {f}
          </span>
        ))}
      </div>

      <ul className="space-y-1">
        {platform.highlights.map((h) => (
          <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-foreground/30 mt-0.5">—</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlatformsGrid() {
  return (
    <section id="platforms" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Platform coverage
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            8 platforms.
            <br />
            <span className="text-muted-foreground">250+ checks.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
