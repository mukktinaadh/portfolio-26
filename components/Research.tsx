"use client";

import Reveal from "./AnimateOnScroll";
import { Award, FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    badge: "NeurIPS 2026",
    badgeClass: "chip-orange",
    status: "Under Review",
    title: "SCAR: SLO-Constrained Anytime Reasoning for Language Model Agents",
    desc: "LLM inference controller optimizing accuracy under strict per-query latency SLOs. Tested on MATH-500, AIME 2025, GPQA. Directly informed VoiceOps's sub-3-second design.",
    link: "https://openreview.net",
    icon: Award,
  },
  {
    badge: "IF: 9.15",
    badgeClass: "chip-green",
    status: "Published — IJSDR Vol. 11 Issue 4, Apr 2026",
    title: "Veriblock-FL: A Blockchain-Based Verifiable Federated Learning Framework Using zk-SNARKs",
    desc: "Privacy-preserving FL framework with zero-knowledge proofs for model aggregation integrity verification.",
    icon: FileText,
  },
  {
    badge: "Preprint",
    badgeClass: "chip-cyan",
    status: "ResearchSquare / Sciety",
    title: "NeuroChainOps — Privacy-Preserving Blockchain MLOps for Federated NAS",
    desc: "Blockchain-based MLOps framework for federated neural architecture search with privacy guarantees.",
    icon: FileText,
  },
];

export default function Research() {
  return (
    <section id="research" className="py-28 md:py-36">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // publications
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Research
          </h2>
          <p className="text-[#888] text-sm mt-3 max-w-md">
            Research that directly informs production engineering decisions.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {papers.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card glass rounded-2xl p-6 md:p-8 flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f97316]/[0.08] flex items-center justify-center mt-0.5">
                  <p.icon size={20} className="text-[#f97316]" strokeWidth={1.5} />
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className={`chip ${p.badgeClass}`}>{p.badge}</span>
                    <span className="text-[#555] text-[0.7rem] font-[var(--font-mono)]">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-[#ededed] font-semibold text-base leading-snug mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-[1.65]">{p.desc}</p>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[#555] hover:text-[#f97316] transition-colors mt-1"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
