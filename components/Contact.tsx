"use client";

import Reveal from "./AnimateOnScroll";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mukktinaadh@gmail.com",
    href: "mailto:mukktinaadh@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@mukktinaadh",
    href: "https://github.com/mukktinaadh",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/mukktinaadh",
    href: "https://linkedin.com/in/mukktinaadh",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9676349758",
    href: "tel:+919676349758",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="divider mb-28" />
      <div className="content-w s-pad">
        <Reveal>
          <p className="text-[#f97316] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase mb-3">
            // let&apos;s talk
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] text-[#ededed] leading-[0.95] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-[#888] text-base max-w-lg mb-14 leading-[1.7]">
            Open to AI/ML engineering, agent engineering, and research roles.
            Immediate availability, zero notice period. Let&apos;s build something that matters.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={80 + i * 70}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group card glass rounded-xl p-5 flex items-center gap-4 block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f97316]/[0.08] flex items-center justify-center group-hover:bg-[#f97316]/[0.15] transition-colors">
                    <c.icon size={18} className="text-[#f97316]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-[#555] text-[0.65rem] uppercase tracking-[0.15em] mb-0.5">{c.label}</p>
                    <p className="text-[#ededed] text-sm truncate group-hover:text-[#f97316] transition-colors">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-[#555] group-hover:text-[#f97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                  />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="card glass rounded-xl p-8 flex flex-col items-center justify-center text-center h-full dot-bg">
              <div className="w-16 h-16 rounded-full bg-[#f97316]/[0.08] flex items-center justify-center mb-5">
                <MapPin size={28} className="text-[#f97316]" strokeWidth={1.5} />
              </div>
              <p
                className="text-2xl text-[#ededed] mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                India — Remote First
              </p>
              <p className="text-[#888] text-sm mb-8">Comfortable across timezones</p>
              <a
                href="mailto:mukktinaadh@gmail.com"
                className="btn-primary w-full text-center block"
              >
                Say Hello
              </a>
              <div className="flex gap-3 mt-5">
                <a href="/RMN_AIML_Resume.pdf" target="_blank" className="btn-outline text-xs py-2 px-4">
                  AI/ML Resume
                </a>
                <a href="/RMN_SDE_Resume.pdf" target="_blank" className="btn-outline text-xs py-2 px-4">
                  SDE Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
