"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Intern — Product Engineer",
    company: "MyOnsiteHealthcare",
    period: "Feb 2026 – May 2026",
    location: "Onsite",
    highlights: [
      "Designed and shipped an AI-powered healthcare scheduling system — live in production; RAG pipeline over patient records and staff availability auto-assigns field workers to visits at 90%+ accuracy, cutting manual dispatcher workload by ~60% across 300+ daily visit assignments.",
      "Built multimodal-compatible AI agent (LangChain + LLM) executing scheduling commands via natural language — override assignments, reschedule visits, update patient data, answer schedule queries — integrated end-to-end with FastAPI + PostgreSQL + Redis on AWS.",
      "Engineered agentic CI/CD automation system: Cursor AI ingests user script + pipeline template + preset prompt, autonomously adapts the pipeline to the project via GitLab MCP, pushes code, triggers runs, detects failures, auto-rolls back, and re-attempts with fixes — zero manual intervention.",
    ],
    tech: [
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "RAG",
      "GitLab CI/CD",
    ],
  },
  {
    title: "Volunteer AI Engineer",
    company: "Google Developer Group (GDG)",
    period: "Oct 2024 – Sep 2025",
    location: "Remote",
    highlights: [
      "Built Java/Python ML tooling adopted by 200+ students across 5+ hackathons; improved model training accuracy 10–15% via optimized preprocessing pipelines.",
      "Mentored 15+ contributors on W&B experiment tracking and MLOps practices.",
    ],
    tech: ["Python", "Java", "W&B", "MLOps"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-divider mb-24" />
      <div className="content-width">
        <AnimateOnScroll>
          <p className="text-accent-orange font-mono text-sm tracking-widest uppercase mb-3">
            // where i&apos;ve worked
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-16"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Experience
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-orange/50 via-accent-orange/20 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full border-2 border-accent-orange bg-bg-primary hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-orange" />
                  </div>

                  <div className="glass rounded-xl p-6 md:p-8 hover-lift card-glow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-accent-orange font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-text-secondary text-sm font-mono">
                          {exp.period}
                        </p>
                        <p className="text-text-muted text-xs">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                        >
                          <span className="text-accent-orange mt-1.5 flex-shrink-0">
                            <Briefcase size={12} />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono text-accent-orange bg-accent-orange/10 rounded-full border border-accent-orange/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
