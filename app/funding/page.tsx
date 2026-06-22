import { Navigation } from "@/components/landing/navigation";
import { GrantExplainer } from "@/components/landing/grant-explainer";
import { EligibilitySection } from "@/components/landing/eligibility-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Funding — Digiform",
  description: "Up to €120,000 in EU grant funding for SME digital transformation. Digiform guides you from application to reimbursement.",
};

export default function FundingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-0 lg:pt-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            EU grant funding
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            Up to €120,000
            <br />
            <span className="text-muted-foreground">in EU grant funding.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed">
            Capital cost should never be the reason your business doesn't transform. EU co-financing can cover up to 50% of your eligible investment.
          </p>
        </div>
      </section>

      <GrantExplainer />
      <EligibilitySection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
