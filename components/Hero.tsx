"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const titles = [
  "AI / Agent Engineer",
  "Systems Builder",
  "NeurIPS Researcher",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const cur = titles[idx];
    let timer: NodeJS.Timeout;
    if (!deleting && text === cur) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % titles.length);
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? cur.slice(0, text.length - 1)
              : cur.slice(0, text.length + 1)
          ),
        deleting ? 35 : 70
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, idx]);

  const t = (d: number) =>
    `transition-all duration-[800ms] cubic-bezier(0.16,1,0.3,1) delay-[${d}ms] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section className="relative min-h-screen flex items-center py-28 md:py-0">
      {/* Ambient blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#f97316]/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#38bdf8]/[0.03] blur-[120px] pointer-events-none" />

      <div className="content-w s-pad relative z-10 grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-20 items-center">
        {/* Text */}
        <div>
          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06] mb-8 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 status-dot" />
            <span className="text-green-400 text-xs font-medium tracking-wide">
              Available for hire — zero notice period
            </span>
          </div>

          <h1
            className={`${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Bebas Neue', sans-serif", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "100ms" }}
          >
            <span className="block text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] text-[#ededed]">
              Mukktinaadh
            </span>
            <span className="block text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] text-[#ededed]">
              Raghavarapu
            </span>
          </h1>

          {/* Typing */}
          <div
            className={`mt-5 h-8 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "200ms" }}
          >
            <span className="text-[#888] text-lg">{text}</span>
            <span className="inline-block w-[2px] h-5 bg-[#f97316] ml-0.5 animate-pulse align-middle" />
          </div>

          <p
            className={`text-[#888] text-base md:text-[1.05rem] max-w-[520px] mt-5 leading-[1.7] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "300ms" }}
          >
            I build AI systems that take real action — not chatbots that just
            talk. RAG, voice, and inference systems running{" "}
            <span className="text-[#ededed]">in production</span>.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mt-10 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "400ms" }}
          >
            <a href="#work" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div
            className={`flex items-center gap-5 mt-10 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "500ms" }}
          >
            {[
              { Icon: Github, href: "https://github.com/mukktinaadh", l: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/mukktinaadh", l: "LinkedIn" },
              { Icon: Mail, href: "mailto:mukktinaadh@gmail.com", l: "Email" },
            ].map(({ Icon, href, l }) => (
              <a
                key={l}
                href={href}
                target={l !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[#555] hover:text-[#f97316] transition-colors duration-300"
                aria-label={l}
              >
                <Icon size={19} strokeWidth={1.5} />
              </a>
            ))}
            <span className="w-px h-4 bg-white/10" />
            <a
              href="/RMN_AIML_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-[#555] hover:text-[#f97316] transition-colors duration-300 text-sm"
            >
              <FileText size={15} strokeWidth={1.5} />
              Resume
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className={`${ready ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1)", transitionDelay: "400ms" }}
        >
          <div className="relative w-[260px] h-[340px] md:w-[300px] md:h-[390px] lg:w-[340px] lg:h-[430px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f97316]/15 to-[#38bdf8]/10 blur-2xl scale-110" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image
                src="/profile.jpeg"
                alt="Mukktinaadh Raghavarapu"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#f97316]/40 rounded-tl-sm" />
            <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#f97316]/40 rounded-br-sm" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce opacity-40">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#555]">Scroll</span>
        <ArrowDown size={14} className="text-[#f97316]" />
      </div>
    </section>
  );
}
