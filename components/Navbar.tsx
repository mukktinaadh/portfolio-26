"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#opensource" },
  { label: "Research", href: "#research" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = links.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(ids[i]);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.04] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="content-w s-pad flex items-center justify-between">
        <a
          href="#"
          className="text-[1.6rem] font-bold tracking-tight leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-[#f97316]">R</span>
          <span className="text-[#ededed]">MN</span>
          <span className="text-[#f97316]">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.75rem] uppercase tracking-[0.15em] transition-colors duration-300 ${
                active === l.href.slice(1)
                  ? "text-[#f97316]"
                  : "text-[#888] hover:text-[#ededed]"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:mukktinaadh@gmail.com" className="btn-primary text-xs py-2 px-5">
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-[#ededed]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/[0.04]">
          <div className="flex flex-col py-6 px-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[0.8rem] uppercase tracking-[0.15em] text-[#888] hover:text-[#f97316] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
