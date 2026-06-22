import { Navigation } from "@/components/landing/navigation";
import { InstallMethods } from "@/components/landing/install-methods";
import { SupportedEnvironments } from "@/components/landing/supported-environments";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Install — Claude Ads",
  description: "Three ways to install claude-ads: plugin marketplace, bash one-liner, or PowerShell. Running in 30 seconds.",
};

export default function InstallsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Get started
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            30 seconds
            <br />
            <span className="text-muted-foreground">to first audit.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed">
            Pick your install method. No API keys, no accounts, no configuration files.
          </p>
        </div>
      </section>

      <InstallMethods />
      <SupportedEnvironments />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
