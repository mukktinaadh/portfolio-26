"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 s-pad">
      <div className="content-w flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[#555] text-xs">
          Built by{" "}
          <span className="text-[#f97316]">Mukktinaadh Raghavarapu</span>
        </p>
        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: "https://github.com/mukktinaadh" },
            { Icon: Linkedin, href: "https://linkedin.com/in/mukktinaadh" },
            { Icon: Mail, href: "mailto:mukktinaadh@gmail.com" },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#f97316] transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
