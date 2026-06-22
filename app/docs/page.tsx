import { Navigation } from "@/components/landing/navigation";
import { CommandReference } from "@/components/landing/command-reference";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Docs — Claude Ads",
  description: "Command reference, FAQ, and everything you need to get the most out of claude-ads.",
};

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Documentation
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            Reference
            <br />
            <span className="text-muted-foreground">& FAQ.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed">
            Every command, flag, and common question — in one place.
          </p>
        </div>
      </section>

      <CommandReference />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
