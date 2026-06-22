import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "Ionian Sails",
    sector: "Yacht Charter",
    location: "Piraeus, Greece",
    headline: "From WhatsApp bookings to a fully automated charter operation",
    stats: [
      { value: "68%", label: "admin reduction" },
      { value: "€85k", label: "EU grant" },
      { value: "12 weeks", label: "engagement" },
    ],
    href: "/case-studies/ionian-sails",
    tags: ["Process Automation", "EU Funding", "CRM"],
    fictional: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Case studies
          </span>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8">
            Real businesses.
            <br />
            <span className="text-muted-foreground">Measurable results.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Every engagement starts with processes, not software. Here's what that looks like in practice.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {caseStudies.map((study, i) => (
            <a
              key={i}
              href={study.href}
              className="group block border-t border-foreground/10 py-12 lg:py-16 hover:bg-foreground/[0.02] -mx-6 lg:-mx-12 px-6 lg:px-12 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                {/* Meta */}
                <div className="shrink-0 lg:w-48">
                  <p className="text-xs font-mono text-muted-foreground">{study.sector}</p>
                  <p className="text-xs font-mono text-muted-foreground">{study.location}</p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {study.client}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{study.headline}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 border border-foreground/10 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {study.fictional && (
                      <span className="text-xs font-mono px-3 py-1 border border-yellow-400/40 text-yellow-600">
                        Fictional
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 lg:gap-12 shrink-0">
                  {study.stats.map((stat, j) => (
                    <div key={j}>
                      <p className="text-2xl font-display">{stat.value}</p>
                      <p className="text-xs font-mono text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <ArrowUpRight className="hidden lg:block w-6 h-6 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
