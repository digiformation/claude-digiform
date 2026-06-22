"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What EU grants are currently available for SMEs?",
    a: "The most relevant scheme is the Digitalise your SME Grant Scheme, which provides up to €120,000 per project with 50% co-financing. Availability varies by EU member state. National and regional schemes may also apply — Digiform identifies all relevant options for your location and business type.",
  },
  {
    q: "Do I need to spend the money first and then claim it back?",
    a: "Most EU grant schemes operate on a reimbursement basis — you incur the costs, submit evidence, and receive the grant payment. Some schemes offer advance payments for part of the grant. Digiform manages the claim process and helps you plan cash flow accordingly.",
  },
  {
    q: "How long does the application process take?",
    a: "From initial assessment to submitted application typically takes 4–8 weeks. Grant decisions vary by scheme and member state — typically 2–4 months. Digiform prepares applications in parallel with starting your transformation work so you don't lose time waiting.",
  },
  {
    q: "Can Digiform guarantee my application will succeed?",
    a: "No — and any consultant who claims otherwise is not being honest. We perform a thorough eligibility assessment before committing to an application, and we only proceed if we believe your project is strongly eligible. Our track record on applications we do submit is strong.",
  },
  {
    q: "Are Digiform's consulting fees an eligible expense?",
    a: "Yes. Digital strategy consulting fees are typically eligible under the Digitalise your SME scheme. This means part of what you pay Digiform can be reimbursed by the grant, effectively reducing the net cost of your transformation.",
  },
  {
    q: "What if my business is not based in an EU country?",
    a: "The EU schemes apply to businesses registered in EU member states. If you are based in a non-EU country (e.g. UK post-Brexit), equivalent national schemes may still exist. Contact us and we'll identify the most relevant funding options for your location.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span className="flex items-start gap-4">
          <span className="font-mono text-sm text-muted-foreground mt-1 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium group-hover:text-muted-foreground transition-colors">
            {faq.q}
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-1 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed pl-10">{faq.a}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            FAQ
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
            Grant questions answered.
          </h2>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
