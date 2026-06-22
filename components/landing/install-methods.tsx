"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const methods = [
  {
    id: "plugin",
    label: "Plugin",
    badge: "Recommended",
    description: "Auto-updates, namespace isolation, version management.",
    steps: [
      { label: "Add to marketplace", code: "/plugin marketplace add claude-ads" },
      { label: "Install", code: "/plugin install claude-ads" },
    ],
  },
  {
    id: "bash",
    label: "bash",
    badge: "macOS / Linux",
    description: "One command. Downloads, verifies, and installs automatically.",
    steps: [
      {
        label: "Run in terminal",
        code: "curl -fsSL https://raw.githubusercontent.com/AgriciDaniel/claude-ads/main/install.sh | bash",
      },
    ],
  },
  {
    id: "powershell",
    label: "PowerShell",
    badge: "Windows",
    description: "Windows-native installer. Supports PowerShell 5.1 and 7+.",
    steps: [
      {
        label: "Run in PowerShell",
        code: "irm https://raw.githubusercontent.com/AgriciDaniel/claude-ads/main/install.ps1 | iex",
      },
    ],
  },
  {
    id: "manual",
    label: "Manual",
    badge: "Full control",
    description: "Clone the repo and run the installer yourself. For air-gapped or audited environments.",
    steps: [
      { label: "Clone", code: "git clone https://github.com/AgriciDaniel/claude-ads.git" },
      { label: "Install (macOS/Linux)", code: "cd claude-ads && ./install.sh" },
      { label: "Install (Windows)", code: "cd claude-ads; .\\install.ps1" },
    ],
  },
];

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="shrink-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Copy"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

export function InstallMethods() {
  const [activeMethod, setActiveMethod] = useState("plugin");
  const method = methods.find((m) => m.id === activeMethod) ?? methods[0];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Installation
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Three ways
            <br />
            <span className="text-muted-foreground">to install.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Method selector */}
          <div className="space-y-2">
            {methods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMethod(m.id)}
                className={`w-full text-left px-5 py-4 border transition-all duration-300 ${
                  activeMethod === m.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/10 hover:border-foreground/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{m.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeMethod === m.id
                        ? "bg-background/20 text-background"
                        : "bg-foreground/5 text-muted-foreground"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground mb-6">{method.description}</p>
            {method.steps.map((step, i) => (
              <div key={i} className="border border-foreground/10">
                <div className="px-4 py-2 border-b border-foreground/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">
                    <span className="text-foreground/30 mr-2">{i + 1}.</span>
                    {step.label}
                  </span>
                  <CopyButton code={step.code} />
                </div>
                <div className="p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground/80 whitespace-pre-wrap break-all">{step.code}</pre>
                </div>
              </div>
            ))}

            <p className="text-xs text-muted-foreground font-mono mt-6 pt-4 border-t border-foreground/10">
              After install, open Claude Code and run{" "}
              <span className="text-foreground">/ads audit</span> to start your first audit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
