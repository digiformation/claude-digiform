import { Navigation } from "@/components/landing/navigation";
import { ContactForm } from "@/components/landing/contact-form";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "Contact — Digiform",
  description: "Book a free 45-minute discovery call with Digiform. We'll map your processes, identify transformation levers, and outline a funding strategy.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="relative pt-40 pb-8 lg:pt-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Get in touch
          </span>
          <h1 className="text-5xl lg:text-8xl font-display tracking-tight leading-[0.95]">
            Let's talk
            <br />
            <span className="text-muted-foreground">transformation.</span>
          </h1>
        </div>
      </section>

      <ContactForm />
      <FooterSection />
    </main>
  );
}
