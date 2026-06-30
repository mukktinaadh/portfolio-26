"use client";

import Reveal from "./AnimateOnScroll";

const traits = [
  {
    title: "Ships fast",
    desc: "Built VoiceOps in a week. Went from cloning an unfamiliar repo to an open PR on a YC-backed project in a single sitting.",
  },
  {
    title: "Production over demos",
    desc: "Both flagship projects are live and actually used — not just portfolio pieces.",
  },
  {
    title: "Research-grounded",
    desc: "NeurIPS submission on latency-constrained inference directly informed VoiceOps's sub-3-second design.",
  },
  {
    title: "Cost-conscious",
    desc: "VoiceOps deliberately architected around free-tier + local models — $0.04/mo demo, $12/mo at 50x scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // how i work
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95] mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            About Me
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-16 items-start">
          <Reveal delay={100}>
            <div className="space-y-5 text-[#888] text-[0.95rem] leading-[1.75]">
              <p>
                Recent CS graduate from{" "}
                <span className="text-[#ededed]">Parul University</span> (2026),
                specializing in Big Data Analytics. I operate at the intersection of{" "}
                <span className="text-[#f97316]">AI research and systems engineering</span>{" "}
                — building things that are both theoretically sound and production-ready.
              </p>
              <p>
                I&apos;ve shipped a{" "}
                <span className="text-[#ededed]">real-time voice agent</span> that responds
                in under 3 seconds, a{" "}
                <span className="text-[#ededed]">healthcare scheduling system</span>{" "}
                handling 300+ daily assignments in production, and a{" "}
                <span className="text-[#ededed]">complete agent for a YC-backed platform</span>{" "}
                — built unprompted, in a single sitting.
              </p>
              <p>
                My NeurIPS 2026 research on latency-constrained LLM inference
                directly informed my production engineering decisions. I don&apos;t
                separate research from building — one feeds the other.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {traits.map((t, i) => (
              <Reveal key={t.title} delay={150 + i * 80}>
                <div className="card glass rounded-xl p-5">
                  <h3 className="text-[#ededed] font-semibold text-sm mb-1.5">{t.title}</h3>
                  <p className="text-[#888] text-[0.8rem] leading-[1.6]">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
