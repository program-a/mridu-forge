import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#vision", label: "Vision" },
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
        <a
          href="#home"
          aria-label="Mridu Industries — Home"
          className="flex items-center gap-3 group"
        >
          <div className="bg-white rounded-md overflow-hidden ring-1 ring-hairline group-hover:ring-electric/40 transition-shadow">
            <img
              src="/mridhu.jpeg"
              alt="Mridu Industries logo"
              fetchPriority="high"
              decoding="async"
              className="block h-8 md:h-9 w-auto px-2 py-1.5"
              width={774}
              height={245}
            />
          </div>
          <div className="hidden sm:block leading-tight border-l border-hairline pl-3">
            <div className="font-display font-semibold tracking-[0.3em] text-[10px] text-muted-foreground">
              INDUSTRIES
            </div>
            <div className="font-display tracking-[0.3em] text-[9px] text-muted-foreground/60 mt-0.5">
              BHIWADI · RAJASTHAN
            </div>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-3 right-3 bottom-1 h-px bg-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 grid place-items-center border border-hairline rounded-md"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
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
