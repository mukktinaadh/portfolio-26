"use client";

import Reveal from "./AnimateOnScroll";
import { Github, GitPullRequest } from "lucide-react";

const contributions = [
  {
    id: "langchain-38970",
    title: "LangChain",
    repo: "langchain-ai/langchain",
    tagline: "Lazy loaded transformers to optimize Core import times",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Fixed a critical performance bug in langchain-core by lazy-loading the massive transformers library inside the get_tokenizer method instead of at the module level. This surgically cut 300-500ms of dead latency off the app startup time for any application importing BaseChatModel.",
    tech: ["Python", "Performance Optimization", "Architecture"],
    metrics: ["Bug Fix", "Startup Time Improvement", "90k+ Stars Repo"],
    github: "https://github.com/langchain-ai/langchain/pull/38970",
  },
  {
    id: "langgraph-8364",
    title: "LangGraph",
    repo: "langchain-ai/langgraph",
    tagline: "Fixed msgpack serialization for PurePath and range objects",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Added native msgpack serialization and strict-mode deserialization support for pathlib.PurePath variants (PurePosixPath, PureWindowsPath) and range objects in LangGraph's checkpoint system, fixing a crash during state persistence.",
    tech: ["Python", "msgpack", "Serialization"],
    metrics: ["Bug Fix", "State Persistence"],
    github: "https://github.com/langchain-ai/langgraph/pull/8364",
  },
  {
    id: "openai-python-3512",
    title: "OpenAI Python SDK",
    repo: "openai/openai-python",
    tagline: "Fixed streaming connection destruction regression (TCP FIN after [DONE])",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Restored the critical response body drain after SSE [DONE] events in both sync and async streaming paths. Without this, h11 cannot parse the HTTP/1.1 chunked terminator, causing httpcore to destroy connections with TCP FIN instead of returning them to the pool — spiking downstream_remote_disconnect errors on enterprise proxies.",
    tech: ["Python", "httpx", "h11", "SSE Streaming"],
    metrics: ["Regression Fix", "Connection Pooling"],
    github: "https://github.com/openai/openai-python/pull/3512",
  },
  {
    id: "litellm-33373",
    title: "LiteLLM",
    repo: "BerriAI/litellm",
    tagline: "Fixed core routing for OpenAI GPT-5.6 reasoning models",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Patched a critical proxy routing failure in LiteLLM where the new OpenAI GPT-5.6 reasoning models crashed when executing function calls. Automatically bridges tool execution requests to the /v1/responses endpoint seamlessly.",
    tech: ["Python", "OpenAI API", "API Proxy"],
    metrics: ["Bug Fix", "Routing"],
    github: "https://github.com/BerriAI/litellm/pull/33373",
  },
  {
    id: "autogen-7959",
    title: "Microsoft AutoGen",
    repo: "microsoft/autogen",
    tagline: "Optimized Azure AI agent for parallel tool execution",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Implemented a critical machine-level performance optimization in the Azure AI Agent by replacing sequential loops with asynchronous concurrency (asyncio.gather), significantly reducing execution latency when multiple tools are dispatched simultaneously.",
    tech: ["Python", "AsyncIO", "Azure OpenAI"],
    metrics: ["Performance", "Concurrency"],
    github: "https://github.com/microsoft/autogen/pull/7959",
  },
  {
    id: "autogen-7954",
    title: "Microsoft AutoGen",
    repo: "microsoft/autogen",
    tagline: "Fixed core configuration parsing for Azure deployments and extra_body",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Patched a critical bug where OpenAIChatCompletionClient threw ValueErrors on custom Azure deployment names. Also fixed silent dropping of `extra_body` configs when loaded via AutoGen Studio JSON by injecting it through the Pydantic schemas and client initialization pipeline.",
    tech: ["Python", "Pydantic", "Azure OpenAI"],
    metrics: ["Core Architecture", "High Priority"],
    github: "https://github.com/microsoft/autogen/pull/7954",
  },
  {
    id: "crewai-6547",
    title: "CrewAI",
    repo: "crewAIInc/crewAI",
    tagline: "Built native async support for kickoff callbacks",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Architected `aprepare_kickoff` and refactored the `akickoff` execution engine to properly await asynchronous `before_kickoff_callbacks` and `after_kickoff_callbacks`, resolving a critical concurrency state corruption issue in highly-parallelized agent deployments.",
    tech: ["Python", "Asyncio", "Agent Frameworks"],
    metrics: ["Concurrency", "Engine Refactor"],
    github: "https://github.com/crewAIInc/crewAI/pull/6547",
  },
  {
    id: "litellm-33217",
    title: "LiteLLM",
    repo: "BerriAI/litellm",
    tagline: "Fixed Vertex AI and Azure param mapping issues",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Resolved edge cases in parameter mapping when passing custom configuration payloads between Vertex AI and Azure LLM endpoints, ensuring cross-platform stability.",
    tech: ["Python", "API Integration", "Vertex AI"],
    metrics: ["Bug Fix"],
    github: "https://github.com/BerriAI/litellm/pull/33217",
  },
  {
    id: "litellm-33216",
    title: "LiteLLM",
    repo: "BerriAI/litellm",
    tagline: "Added missing Azure audio and realtime model pricing aliases",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Added undated pricing aliases for azure/gpt-audio-mini and azure/gpt-realtime-mini to the model cost map, resolving silent cost tracking failures for enterprise Azure deployments using audio and realtime endpoints.",
    tech: ["Python", "Azure OpenAI", "Cost Tracking"],
    metrics: ["Bug Fix", "Pricing"],
    github: "https://github.com/BerriAI/litellm/pull/33216",
  },
  {
    id: "litellm-31785",
    title: "LiteLLM",
    repo: "BerriAI/litellm",
    tagline: "Eliminated phantom assistant messages after tool calls",
    status: "Open PR",
    statusColor: "chip-orange",
    description:
      "Fixed a subtle bug where blank assistant messages were silently injected after tool_calls in the message history, corrupting multi-turn conversations and causing downstream model confusion on providers that validate message ordering strictly.",
    tech: ["Python", "LLM Proxy", "Message Pipeline"],
    metrics: ["Bug Fix", "Message Integrity"],
    github: "https://github.com/BerriAI/litellm/pull/31785",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-28 md:py-36 bg-[#0a0a0a]">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // giving back
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Open Source Impact
          </h2>
          <p className="text-[#888] text-sm mt-3 max-w-xl">
            I don't just use AI frameworks—I build the infrastructure powering them. Here are my core contributions to the world's most widely used AI libraries.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {contributions.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <div className="card glass rounded-2xl p-7 md:p-9 border border-white/[0.05] hover:border-[#f97316]/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-[#ededed]">
                        {c.title}
                      </h3>
                      <span className={`chip ${c.statusColor}`}>{c.status}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#ededed]/80 text-sm font-medium mb-1">
                      <GitPullRequest size={14} className="text-[#888]" />
                      <span>{c.repo}</span>
                    </div>
                    <p className="text-[#f97316] text-xs font-medium">
                      {c.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {c.github && (
                      <a
                        href={c.github}
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
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {c.metrics.map((m) => (
                    <span key={m} className="chip chip-cyan">{m}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {c.tech.map((t) => (
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
