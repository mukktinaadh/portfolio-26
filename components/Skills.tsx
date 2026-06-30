"use client";

import Reveal from "./AnimateOnScroll";
import { Brain, Cpu, Server, Cloud, Code, Wrench } from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "AI / ML",
    items: ["LLM APIs (Gemini, OpenAI, Anthropic)", "RAG Pipelines", "FAISS / Vector Search", "LangChain", "Agent Frameworks", "Prompt Engineering", "Model Evaluation"],
  },
  {
    icon: Cpu,
    title: "Speech / NLP",
    items: ["Whisper (STT)", "Kokoro (TTS)", "BERT / BioClinicalBERT", "LoRA / QLoRA Fine-tuning", "Latency-Constrained Inference"],
  },
  {
    icon: Code,
    title: "Languages",
    items: ["Python (primary)", "Java", "JavaScript", "TypeScript", "SQL", "C", "Go"],
  },
  {
    icon: Server,
    title: "Backend / Infra",
    items: ["FastAPI", "WebSockets", "gRPC", "REST / GraphQL", "PostgreSQL", "Redis", "Kafka", "Spring Boot"],
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "Terraform"],
  },
  {
    icon: Wrench,
    title: "Tools / MLOps",
    items: ["Claude Code", "Cursor", "MLflow", "W&B", "Prometheus", "Grafana", "pytest", "DVC"],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="py-28 md:py-36">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // technical stack
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            What I Work With
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="card glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#f97316]/[0.08] flex items-center justify-center">
                    <g.icon size={17} className="text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#ededed] uppercase tracking-[0.1em]">
                    {g.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[0.7rem] text-[#888] bg-white/[0.03] rounded-md hover:bg-[#f97316]/[0.08] hover:text-[#f97316] transition-colors duration-200 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
