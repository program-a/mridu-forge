import { Reveal } from "./Reveal";
import infraImg from "@/assets/infrastructure.jpg";

const cells = [
  { code: "U-01", name: "Bhiwadi Plant Alpha", spec: "Extrusion · 200mm capacity" },
  { code: "U-02", name: "Bhiwadi Plant Beta", spec: "Injection Moulding · Fittings" },
  { code: "U-03", name: "Bhiwadi Plant Gamma", spec: "Storage & Dispatch Hub" },
  { code: "QC-01", name: "Quality Lab", spec: "Pressure & Impact Testing" },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-32 md:py-48 bg-graphite overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
              <span className="h-px w-10 bg-copper" />
              03 — Infrastructure
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
              Built to <span className="text-copper italic font-light">scale.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Three units. Modern extrusion lines. In-house quality testing.
              A dispatch network engineered for uninterrupted supply.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Image panel */}
          <Reveal className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-hairline group">
            <img
              src={infraImg}
              loading="lazy"
              alt="Modern PVC extrusion line at Mridu Industries"
              className="w-full h-full object-cover aspect-[16/11] group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-muted-foreground">LIVE FEED</div>
                <div className="font-display text-2xl mt-1">Extrusion · Line 02</div>
              </div>
              <div className="glass rounded-full px-4 py-2 text-xs flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
                Operational
              </div>
            </div>
          </Reveal>

          {/* Dashboard cells */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {cells.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.07}>
                <div className="group h-full p-6 rounded-2xl border border-hairline bg-charcoal/60 hover-lift">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-muted-foreground">
                    {c.code}
                    <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                  </div>
                  <div className="mt-10 font-display text-xl tracking-tight">{c.name}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{c.spec}</div>
                  <div className="mt-6 h-px bg-gradient-to-r from-electric to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
