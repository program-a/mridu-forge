import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-graphite/70 border-b border-hairline" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-md border border-hairline overflow-hidden grid place-items-center bg-charcoal">
            <span className="text-electric font-display font-bold text-lg leading-none">M</span>
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold tracking-tight text-base">MRIDU</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">INDUSTRIES</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 bottom-1 h-px bg-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-hairline rounded-full hover:bg-foreground hover:text-graphite transition-all duration-300"
        >
          Get a Quote
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric animate-pulse-glow" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center border border-hairline rounded-md"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-6 pb-8 mt-3 bg-graphite/95 backdrop-blur-xl border-t border-hairline space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 border-b border-hairline text-lg font-display"
            >
              {l.label}
              <span className="text-electric">→</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
