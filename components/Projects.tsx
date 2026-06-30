"use client";

import Reveal from "./AnimateOnScroll";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "VoiceOps",
    tagline: "Real-time voice agent — listens, retrieves, responds in <3 seconds",
    status: "Live & Open Source",
    statusColor: "chip-green",
    description:
      "Full-stack voice agent: Whisper STT (local) -> FAISS RAG -> Gemini 2.5 Flash -> Kokoro TTS (local), streamed over WebSockets. VAD preprocessing reduced false positives by 95%. Runs at ~$0.04/month demo scale, ~$12/month at 10K conversations — deliberately architected around free-tier and local models.",
    tech: ["Whisper", "FAISS", "Gemini 2.5", "Kokoro TTS", "FastAPI", "WebSocket", "Docker"],
    metrics: ["<3s E2E latency", "95% noise reduction", "~$0.04/mo cost"],
    github: "https://github.com/mukktinaadh/voiceagent",
    featured: true,
  },
  {
    title: "AI Scheduling Agent",
    tagline: "Production healthcare scheduling — 300+ daily assignments, 90%+ accuracy",
    status: "Live in Production",
    statusColor: "chip-green",
    description:
      "LangChain agent + RAG pipeline auto-assigns field workers to patient visits. Handles natural language commands — override assignments, reschedule visits, update patient data. Built end-to-end on FastAPI + PostgreSQL + Redis + AWS. Cut manual dispatcher workload by ~60%.",
    tech: ["LangChain", "RAG", "FastAPI", "PostgreSQL", "Redis", "AWS"],
    metrics: ["300+ daily assigns", "90%+ accuracy", "~60% workload cut"],
    company: "MyOnsiteHealthcare",
    featured: true,
  },
  {
    title: "Houston Research Agent",
    tagline: "Designed and shipped a new agent for a YC-backed platform — in a single sitting",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Reverse-engineered Houston's codebase conventions and built a complete 9th agent — Research — covering competitive intelligence, market research, prospect dossiers, and due diligence. 8 skills, 2 scheduled routines, full schema docs. 955 lines across 12 files, all passing internal checks.",
    tech: ["TypeScript", "Agent Architecture", "Open Source"],
    metrics: ["955 lines added", "8 skills", "12 files"],
    github: "https://github.com/gethouston/houston/pull/573",
    featured: true,
  },
  {
    title: "PyroQueue",
    tagline: "Distributed task queue from scratch — no Celery, no RQ",
    status: "Shipped",
    statusColor: "chip-cyan",
    description:
      "Redis-backed distributed task queue with priority queues via sorted sets, exponential backoff retry, dead-letter queue, and live monitoring dashboard. Load tested at 893 req/sec with p99 <170ms under 100 concurrent workers, 0% failure rate.",
    tech: ["Python", "Redis", "FastAPI", "Prometheus", "Grafana", "Docker"],
    metrics: ["893 req/sec", "p99 <170ms", "0% failure"],
    github: "https://github.com/mukktinaadh/PyroQueue",
  },
  {
    title: "Veriblock-FL",
    tagline: "Privacy-preserving federated learning with zk-SNARK verification",
    status: "Published Paper",
    statusColor: "chip-orange",
    description:
      "Byzantine fault-tolerant federated learning with zk-SNARK gradient verification. gRPC cuts inter-node overhead 10% vs REST. Maintained liveness under 30% simulated node failure.",
    tech: ["PyTorch", "gRPC", "zk-SNARKs", "Federated Learning", "Blockchain"],
    metrics: ["30% fault tolerance", "zk-SNARK verified", "Published"],
    github: "https://github.com/mukktinaadh/Veriblock-FL",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // shipped work
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-[#888] text-sm mt-3 max-w-md">
            Production systems, open-source contributions, and infrastructure — no demos, no toys.
          </p>
        </Reveal>

        {/* Featured — full width cards */}
        <div className="mt-14 space-y-6">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card glass rounded-2xl p-7 md:p-9">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#ededed]">
                          {p.title}
                        </h3>
                        <span className={`chip ${p.statusColor}`}>{p.status}</span>
                      </div>
                      <p className="text-[#ededed]/80 text-sm font-medium">
                        {p.tagline}
                      </p>
                      {p.company && (
                        <p className="text-[#f97316] text-xs mt-1 font-medium">{p.company}</p>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#555] hover:text-[#f97316] hover:bg-[#f97316]/10 transition-all"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#888] text-sm leading-[1.7] mb-5 max-w-3xl">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.metrics.map((m) => (
                      <span key={m} className="chip chip-cyan">{m}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip chip-neutral">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
        </div>

        {/* Other projects — 2-col grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card glass rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-semibold text-[#ededed]">{p.title}</h3>
                      <span className={`chip ${p.statusColor}`}>{p.status}</span>
                    </div>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#555] hover:text-[#f97316] transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-[#ededed]/80 text-sm font-medium mb-2">{p.tagline}</p>
                  <p className="text-[#888] text-sm leading-[1.7] mb-4 flex-grow">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.metrics.map((m) => (
                      <span key={m} className="chip chip-cyan">{m}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip chip-neutral">{t}</span>
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
