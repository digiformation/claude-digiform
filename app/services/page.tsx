import { Navigation } from "@/components/landing/navigation";
import { ServicesDetail } from "@/components/landing/services-detail";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Services — Digiform",
  description: "Four transformation disciplines: Digital Strategy, Process Automation, Cybersecurity, and Funding Advisory. Built for SMEs.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What we do
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            Four disciplines.
            <br />
            <span className="text-muted-foreground">One transformation.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Strategy, automation, security, and funding — delivered as an integrated engagement, not a stack of disconnected projects.
          </p>
        </div>
      </section>

      <ServicesDetail />
      <HowItWorksSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
