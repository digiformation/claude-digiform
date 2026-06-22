import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const challenge = [
  {
    number: "01",
    title: "Bookings via WhatsApp & email",
    description: "Enquiries arrived across three channels with no central log. Staff re-typed the same information into spreadsheets multiple times per booking.",
  },
  {
    number: "02",
    title: "Manual availability tracking",
    description: "A shared Google Sheet tracked fleet availability. Double-bookings occurred twice in peak season, costing €9,200 in refunds and reputation damage.",
  },
  {
    number: "03",
    title: "No customer history",
    description: "Repeat customers had to re-submit preferences every charter. 40% of returning guests went to competitors offering a more seamless experience.",
  },
  {
    number: "04",
    title: "Admin consuming peak-season capacity",
    description: "Three staff spent an average of 4.2 hours per booking on coordination, contract preparation, and pre-charter communications.",
  },
  {
    number: "05",
    title: "€85k EU grant left unclaimed",
    description: "Ionian Sails qualified for ESPA digitization funding but had never applied. No advisor had flagged the opportunity in four years of operation.",
  },
];

const process = [
  {
    number: "01",
    title: "Process audit",
    duration: "2 weeks",
    description: "We mapped every step of the booking lifecycle — from first enquiry to post-charter review. We identified 23 manual handoffs and 6 points where information was duplicated across systems.",
  },
  {
    number: "02",
    title: "Workflow redesign",
    duration: "1 week",
    description: "Before selecting any software, we redesigned the workflows. Redundant handoffs were eliminated. The new process required 6 steps instead of 23 — a 74% reduction in internal touchpoints.",
  },
  {
    number: "03",
    title: "Technology selection",
    duration: "1 week",
    description: "With clear process requirements defined, we selected tools to serve them: a booking engine, CRM, e-signature platform, and a revenue dashboard. No tool was chosen without a mapped workflow justifying it.",
  },
  {
    number: "04",
    title: "Implementation & training",
    duration: "8 weeks",
    description: "Systems were configured to the redesigned workflows, not the other way around. All three staff were trained. Go-live happened in shoulder season to allow for adjustment before peak.",
  },
  {
    number: "05",
    title: "Funding secured",
    duration: "Parallel track",
    description: "We prepared and submitted the ESPA digitization grant application in parallel with implementation. Approval came 11 weeks after submission — €85,000 offset against the project cost.",
  },
];

const solution = [
  {
    title: "Online booking platform",
    description: "Real-time fleet availability, instant confirmation, automated deposit collection. Integrated directly with the CRM.",
  },
  {
    title: "CRM & customer journeys",
    description: "Full customer history, automated pre-charter communications, post-charter follow-up sequences, and repeat-customer recognition.",
  },
  {
    title: "Digital contracts",
    description: "Charter agreements generated automatically from booking data. Signed digitally. Stored and retrievable in seconds.",
  },
  {
    title: "Revenue dashboard",
    description: "Seasonal forecasting, OTA vs direct booking split, fleet utilisation rate, and per-charter margin — all in one view.",
  },
];

const results = [
  { value: "68%", label: "reduction in admin hours per booking" },
  { value: "€85k", label: "EU grant secured" },
  { value: "34%", label: "increase in direct bookings vs OTA" },
  { value: "0", label: "double-bookings since launch" },
];

export default function AegeanSailsCaseStudy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Yacht Charter</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Greece</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Process Automation</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">EU Funding</span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Ionian Sails
          </h1>

          <p className="text-xl text-background/60 max-w-2xl leading-relaxed mb-16">
            A 12-vessel yacht charter company based in Piraeus eliminated double-bookings, recovered 68% of staff admin time, and secured €85,000 in EU funding — without disrupting a single peak-season week.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-background/10">
            {[
              { label: "Fleet", value: "12 vessels" },
              { label: "Team", value: "3 staff" },
              { label: "Location", value: "Piraeus, GR" },
              { label: "Engagement", value: "12 weeks" },
            ].map((item, i) => (
              <div key={i} className={`px-8 py-6 ${i < 3 ? "border-r border-background/10" : ""}`}>
                <p className="text-xs font-mono text-background/40 mb-2">{item.label}</p>
                <p className="text-lg font-display">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              The challenge
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl">
              Five problems.
              <br />
              <span className="text-muted-foreground">One root cause.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every problem traced back to the same origin: processes designed for a two-boat operation trying to support a twelve-boat business. The technology wasn't the issue — the workflows were.
            </p>
          </div>

          <div>
            {challenge.map((item) => (
              <div key={item.number} className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-10 lg:py-14 border-b border-foreground/10">
                <div className="shrink-0 w-12">
                  <span className="font-mono text-sm text-muted-foreground">{item.number}</span>
                </div>
                <div className="flex-1 grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
                  <h3 className="text-2xl lg:text-3xl font-display group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — dark */}
      <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              The Digiform process
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Processes first.
              <br />
              <span className="text-background/50">Technology second.</span>
            </h2>
          </div>

          <div>
            {process.map((step) => (
              <div key={step.number} className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-10 lg:py-14 border-b border-background/10">
                <div className="shrink-0 w-12">
                  <span className="font-mono text-sm text-background/40">{step.number}</span>
                </div>
                <div className="flex-1 grid lg:grid-cols-3 gap-4 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-display mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <span className="text-xs font-mono text-background/40">{step.duration}</span>
                  </div>
                  <p className="lg:col-span-2 text-background/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What was built
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Four systems.
              <br />
              <span className="text-muted-foreground">One connected operation.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {solution.map((item, i) => (
              <div key={i} className="bg-background p-10 lg:p-14 group hover:bg-foreground/[0.02] transition-colors">
                <span className="font-mono text-xs text-muted-foreground mb-6 block">0{i + 1}</span>
                <h3 className="text-2xl lg:text-3xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-24 lg:py-32 border-y border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Results
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Measured outcomes.
              <br />
              <span className="text-muted-foreground">Eight months post-launch.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground/10">
            {results.map((result, i) => (
              <div key={i} className={`px-8 py-12 lg:py-16 ${i < results.length - 1 ? "border-r border-foreground/10" : ""}`}>
                <p className="text-[clamp(2.5rem,5vw,4rem)] font-display leading-none mb-3">{result.value}</p>
                <p className="text-sm text-muted-foreground leading-snug">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[clamp(1.5rem,4vw,3rem)] font-display leading-[1.2] tracking-tight mb-10">
              "We'd been told we needed a new booking system for years. Digiform was the first team that told us we needed new processes first — and proved it by showing us exactly where the hours were going. The grant was a bonus we hadn't even considered."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <span className="font-display text-lg">N</span>
              </div>
              <div>
                <p className="font-medium">Nikos Papadopoulos</p>
                <p className="text-sm text-muted-foreground font-mono">Founder, Ionian Sails</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Work with us
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
                Similar challenges?
                <br />
                <span className="text-muted-foreground">Let's talk.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                size="lg"
                className="text-white px-8 h-14 text-base rounded-full group"
                style={{ background: "var(--blue)" }}
                asChild
              >
                <a href="/contact">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 group"
                asChild
              >
                <a href="/case-studies">
                  All case studies
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
