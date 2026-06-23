import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const challenge = [
  {
    number: "01",
    title: "Maintenance schedules on paper and WhatsApp",
    description: "Upcoming haul-outs, antifouling cycles, and annual surveys were tracked across handwritten notebooks and a shared WhatsApp group. Technicians arrived for jobs that weren't ready. Boats left the yard without completing all scheduled work.",
  },
  {
    number: "02",
    title: "No parts inventory visibility",
    description: "Staff walked to the warehouse to check stock before every job. Parts were ordered twice, or not ordered at all. Two peak-season jobs were delayed three weeks waiting for antifouling paint that was already in a different storage bay.",
  },
  {
    number: "03",
    title: "Missed service reminders cost repeat customers",
    description: "Annual haul-outs, engine services, and safety inspections were due dates that lived in a single shared calendar. When the calendar owner was on leave, reminders weren't sent. Three long-standing customers moved to competitors who proactively contacted them.",
  },
  {
    number: "04",
    title: "Workshop hours not tracked against jobs",
    description: "Technicians logged hours on paper timesheets submitted weekly. By the time a job ran over budget, it was already finished. No visibility into which job types were unprofitable until the end of each quarter.",
  },
  {
    number: "05",
    title: "€65k EU grant left unclaimed",
    description: "Aegean Boatworks had been operating for 11 years with no awareness that ESPA digitization grants applied to boatyards. No adviser had ever flagged the opportunity.",
  },
];

const process = [
  {
    number: "01",
    title: "Workshop audit",
    duration: "2 weeks",
    description: "We mapped the full job lifecycle — from customer intake through haul-out, work completion, and launch. We found 18 manual steps and 4 points where work stalled waiting for information that already existed somewhere in the business but couldn't be accessed.",
  },
  {
    number: "02",
    title: "Workflow redesign",
    duration: "1 week",
    description: "Before recommending any software, we restructured the workflows. Redundant steps were eliminated. The new process had 9 steps instead of 18, removed all paper handoffs, and created a single source of truth for job status accessible to every technician.",
  },
  {
    number: "03",
    title: "Technology selection",
    duration: "1 week",
    description: "With the redesigned workflows as a spec, we selected tools to serve them: a marine job management system, inventory platform with warehouse bin locations, and a customer-facing service portal. Every tool was chosen because a specific workflow step required it.",
  },
  {
    number: "04",
    title: "Implementation & training",
    duration: "6 weeks",
    description: "Systems were configured to the new workflows. All 8 staff were trained in two cohorts. Go-live was timed for late autumn — outside peak haul-out season — to allow the team to build confidence before the spring rush.",
  },
  {
    number: "05",
    title: "Funding secured",
    duration: "Parallel track",
    description: "The ESPA digitization grant application was prepared and submitted in parallel with implementation. Approval arrived 9 weeks after submission — €65,000 applied directly against the project investment.",
  },
];

const solution = [
  {
    title: "Digital job management",
    description: "Every job from intake to launch tracked in a single system. Technicians see their daily work queue on a tablet. Job status visible in real time to the front office without walking to the workshop.",
  },
  {
    title: "Parts inventory with bin locations",
    description: "Stock levels, reorder points, and physical warehouse locations for every part. Technicians check availability from their tablet before starting a job. Auto-alerts when stock falls below reorder thresholds.",
  },
  {
    title: "Customer service portal",
    description: "Boat owners view their full maintenance history, upcoming service dates, and live job progress. Automated reminders sent 8 weeks and 2 weeks before each scheduled service — no manual follow-up required.",
  },
  {
    title: "Workshop analytics",
    description: "Hours per job tracked in real time against estimate. Technician utilisation rate, average job duration by service type, and margin per job — reported weekly. Unprofitable job types identified within the first month.",
  },
];

const results = [
  { value: "71%", label: "reduction in admin hours per job" },
  { value: "€65k", label: "EU grant secured" },
  { value: "0", label: "missed service reminders since launch" },
  { value: "23%", label: "increase in repeat customer bookings" },
];

export default function AegeanBoatworksCaseStudy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation darkHero />

      {/* Hero */}
      <section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Boat Maintenance</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Greece</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">Process Automation</span>
            <span className="text-xs font-mono px-3 py-1.5 border border-background/20 text-background/60">EU Funding</span>
          </div>

          <h1 className="text-[clamp(3rem,8vw,7rem)] font-display leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Aegean Boatworks
          </h1>

          <p className="text-xl text-background/60 max-w-2xl leading-relaxed mb-16">
            A Piraeus boatyard servicing 140+ vessels annually eliminated paper-based job tracking, ended missed service reminders, and secured €65,000 in EU funding — going live before the spring haul-out season.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-background/10">
            {[
              { label: "Vessels/year", value: "140+" },
              { label: "Team", value: "8 staff" },
              { label: "Location", value: "Piraeus, GR" },
              { label: "Engagement", value: "10 weeks" },
            ].map((item, i) => (
              <div key={i} className={`px-8 py-6 ${i < 3 ? "border-r border-background/10" : ""}`}>
                <p className="text-xs font-mono text-background/40 mb-2">{item.label}</p>
                <p className="text-lg font-display">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://aegean-boatworks.digiform.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-mono text-background/70 hover:text-background border border-background/20 hover:border-background/40 px-5 py-3 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
              Live demo available — explore the platform
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
              Every problem traced back to the same origin: manual processes built for a 20-boat operation trying to support a 140-boat workload. The boatyard had grown — the systems hadn't.
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
              <span className="text-muted-foreground">One connected boatyard.</span>
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

      {/* Demo callout */}
      <section className="relative py-16 lg:py-20 border-y border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-3">Interactive demo</p>
            <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-2">
              The platform described above is live.
            </h3>
            <p className="text-muted-foreground max-w-xl">
              Explore the staff job board, move jobs through the workflow, manage parts inventory, and view the workshop analytics dashboard — all running on real data.
            </p>
          </div>
          <a
            href="https://aegean-boatworks.digiform.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 shrink-0 border border-foreground/20 px-6 py-4 text-sm font-mono hover:bg-foreground hover:text-background transition-all duration-300 group"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
            Open demo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-24 lg:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Results
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Measured outcomes.
              <br />
              <span className="text-muted-foreground">Six months post-launch.</span>
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
              "Every year we said we needed a system. Every year we bought something that didn't stick because the process underneath it was broken. Digiform fixed the process first — the system was almost the easy part. The grant covered most of it anyway."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <span className="font-display text-lg">S</span>
              </div>
              <div>
                <p className="font-medium">Stavros Alexiou</p>
                <p className="text-sm text-muted-foreground font-mono">Managing Director, Aegean Boatworks</p>
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
