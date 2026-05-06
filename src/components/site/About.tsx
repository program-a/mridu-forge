import { Reveal } from "./Reveal";

const milestones = [
  { year: "1989", title: "Founded in Bhiwadi", text: "Mridu Industries was established with a single extrusion line and a vision for quality." },
  { year: "2002", title: "Second Manufacturing Unit", text: "Expanded capacity to serve the booming agricultural sector across Rajasthan." },
  { year: "2014", title: "Plumbing & Construction Range", text: "Entered the urban infrastructure market with high-pressure plumbing systems." },
  { year: "2024", title: "Three Modern Facilities", text: "Today, three units engineer pipes trusted across North India." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-graphite overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-copper" />
                01 — Our Story
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Three decades of <span className="text-gradient italic font-light">precision.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
                From a single workshop in Bhiwadi to three modern facilities,
                Mridu Industries has spent 35+ years perfecting one craft —
                engineering pipes that move water, power agriculture, and
                build modern India.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
                <Card label="Sector" value="Agriculture & Construction" />
                <Card label="Region" value="North India" />
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-[14px] md:left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-hairline to-transparent" />
            <div className="space-y-12 md:space-y-16">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-16">
                    <span className="absolute left-0 top-3 h-7 w-7 md:h-9 md:w-9 rounded-full border border-hairline bg-charcoal grid place-items-center">
                      <span className="h-2 w-2 rounded-full bg-electric animate-pulse-glow" />
                    </span>
                    <div className="font-display text-electric text-sm tracking-[0.3em]">{m.year}</div>
                    <div className="mt-2 font-display text-2xl md:text-3xl tracking-tight">{m.title}</div>
                    <p className="mt-3 text-muted-foreground max-w-lg">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5 rounded-xl border border-hairline bg-charcoal/60">
      <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{label}</div>
      <div className="mt-2 font-display text-base">{value}</div>
    </div>
  );
}
