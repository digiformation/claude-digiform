import { Navigation } from "@/components/landing/navigation";
import { PlatformsGrid } from "@/components/landing/platforms-grid";
import { CreativePipelineSection } from "@/components/landing/creative-pipeline-section";
import { FinancialCalculatorsSection } from "@/components/landing/financial-calculators-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Features — Claude Ads",
  description: "250+ checks across 8 ad platforms. Creative pipeline. Financial calculators. All in Claude Code.",
};

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Everything claude-ads does
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            250+ checks.
            <br />
            <span className="text-muted-foreground">8 platforms.</span>
            <br />
            One command.
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Audit agents, a creative pipeline, and financial calculators — all running locally in Claude Code with no API keys or external dependencies.
          </p>
        </div>
      </section>

      <PlatformsGrid />
      <CreativePipelineSection />
      <FinancialCalculatorsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
