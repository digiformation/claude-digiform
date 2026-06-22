"use client";

const commands = [
  {
    category: "Audit",
    items: [
      { cmd: "/ads audit", args: "", description: "Full multi-platform audit across all linked accounts" },
      { cmd: "/ads audit", args: "--platform google", description: "Audit Google Ads only" },
      { cmd: "/ads audit", args: "--platform meta", description: "Audit Meta Ads only" },
      { cmd: "/ads audit", args: "--platform youtube", description: "Audit YouTube Ads only" },
      { cmd: "/ads audit", args: "--platform linkedin", description: "Audit LinkedIn Ads only" },
      { cmd: "/ads audit", args: "--platform tiktok", description: "Audit TikTok Ads only" },
      { cmd: "/ads audit", args: "--platform microsoft", description: "Audit Microsoft Ads only" },
      { cmd: "/ads audit", args: "--platform apple", description: "Audit Apple Search Ads only" },
      { cmd: "/ads audit", args: "--platform amazon", description: "Audit Amazon Ads only" },
    ],
  },
  {
    category: "Creative",
    items: [
      { cmd: "/ads dna", args: "<url>", description: "Extract brand identity from a website URL" },
      { cmd: "/ads brief", args: "", description: "Generate campaign brief from brand DNA" },
      { cmd: "/ads creative", args: "", description: "Run full creative pipeline: DNA → strategy → visuals → copy" },
      { cmd: "/ads copy", args: "--platform <name>", description: "Generate platform-specific ad copy" },
    ],
  },
  {
    category: "Math",
    items: [
      { cmd: "/ads math cpa", args: "", description: "Calculate cost per acquisition" },
      { cmd: "/ads math roas", args: "", description: "Calculate return on ad spend" },
      { cmd: "/ads math break-even", args: "", description: "Calculate break-even ROAS and max CPA" },
      { cmd: "/ads math ltv-cac", args: "", description: "Calculate LTV to CAC ratio" },
      { cmd: "/ads math acos", args: "", description: "Calculate ACOS and TACOS (Amazon)" },
      { cmd: "/ads math forecast", args: "", description: "Forecast monthly spend and conversions" },
    ],
  },
  {
    category: "Reports",
    items: [
      { cmd: "/ads report", args: "", description: "Generate PDF audit report with gauge charts" },
      { cmd: "/ads report", args: "--format md", description: "Output report as Markdown" },
      { cmd: "/ads report", args: "--format json", description: "Output raw scores as JSON" },
    ],
  },
];

export function CommandReference() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Commands
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Command reference.
          </h2>
        </div>

        <div className="space-y-12">
          {commands.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                {group.category}
              </h3>
              <div className="border border-foreground/10 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr
                        key={i}
                        className="border-b border-foreground/5 last:border-0 hover:bg-foreground/[0.02] transition-colors"
                      >
                        <td className="px-5 py-3 font-mono text-foreground/90 whitespace-nowrap w-48">
                          {item.cmd}
                        </td>
                        <td className="px-3 py-3 font-mono text-muted-foreground/70 whitespace-nowrap w-48">
                          {item.args}
                        </td>
                        <td className="px-5 py-3 text-muted-foreground leading-relaxed">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
