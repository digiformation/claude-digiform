"use client";

const verified = [
  { name: "Claude Code", note: "Primary target environment" },
];

const experimental = [
  { name: "Codex CLI", note: "Compatible via Claude API backend" },
  { name: "Cursor", note: "Agent mode with claude-code MCP" },
  { name: "Windsurf", note: "Agent mode" },
  { name: "Gemini CLI", note: "Via MCP bridge (experimental)" },
  { name: "Goose", note: "Block-based execution" },
];

export function SupportedEnvironments() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Compatibility
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight">
            Where it runs.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Verified */}
          <div className="border border-foreground/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <h3 className="font-medium">Verified</h3>
            </div>
            <div className="space-y-3">
              {verified.map((env) => (
                <div key={env.name} className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm">{env.name}</span>
                  <span className="text-xs text-muted-foreground text-right">{env.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experimental */}
          <div className="border border-foreground/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h3 className="font-medium">Experimental</h3>
            </div>
            <div className="space-y-3">
              {experimental.map((env) => (
                <div key={env.name} className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm">{env.name}</span>
                  <span className="text-xs text-muted-foreground text-right">{env.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8 font-mono">
          Skill designed for the{" "}
          <a
            href="https://github.com/AgentSkillsProject/open-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Agent Skills open standard
          </a>
          . Any environment that supports the standard should work.
        </p>
      </div>
    </section>
  );
}
