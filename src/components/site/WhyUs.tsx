import { Reveal } from "./Reveal";

const items = [
  { n: "01", t: "35+ Years of Heritage", d: "Three decades of consistent quality and trust built across generations." },
  { n: "02", t: "Superior Material Quality", d: "Premium-grade PVC compounds tested for tensile strength and durability." },
  { n: "03", t: "Timely Delivery", d: "An efficient dispatch network spanning North India ensures zero downtime." },
  { n: "04", t: "Modern Infrastructure", d: "Three production units running modern extrusion and moulding technology." },
  { n: "05", t: "Customer Trust", d: "Long-term partnerships with farmers, contractors and distributors." },
  { n: "06", t: "Reliable Distribution", d: "Robust supply across Rajasthan, Haryana, Punjab, Delhi NCR and beyond." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-electric" />
                04 — Why Mridu
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-6xl leading-[0.9] tracking-tight">
                Why builders choose <span className="text-gradient italic font-light">us.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                Six reasons rooted in three decades of consistency, craft and care.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.05}>
                <div className="group relative p-8 md:p-10 bg-graphite h-full overflow-hidden">
                  <div className="font-display text-7xl md:text-8xl text-muted-foreground/15 leading-none">
                    {it.n}
                  </div>
                  <div className="mt-6 font-display text-2xl tracking-tight">{it.t}</div>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{it.d}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
