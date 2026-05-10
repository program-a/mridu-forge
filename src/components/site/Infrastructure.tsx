import { Reveal } from "./Reveal";

const facilities = [
  { code: "01", title: "Modern extrusion and molding machinery" },
  { code: "02", title: "Quality testing labs" },
  { code: "03", title: "Efficient storage and dispatch systems" },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-32 md:py-48 bg-graphite overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-copper/10 blur-[120px]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-copper" />
                Infrastructure
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Built to <span className="text-copper italic font-light">scale.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                With three advanced manufacturing units in Rajasthan, Mridu Industries has the
                capacity to meet large-scale demands while maintaining strict quality standards.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <Reveal delay={0.2}>
              <div className="text-xs tracking-[0.4em] text-electric uppercase">
                Our facilities are equipped with
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
              {facilities.map((f, i) => (
                <Reveal key={f.code} delay={0.25 + i * 0.07}>
                  <div className="group relative h-full bg-charcoal/60 p-8 md:p-10 hover-lift">
                    <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-muted-foreground">
                      {f.code}
                      <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                    </div>
                    <div className="mt-12 font-display text-xl md:text-2xl tracking-tight leading-snug">
                      {f.title}
                    </div>
                    <div className="mt-6 h-px bg-gradient-to-r from-electric to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2 max-w-2xl">
                This robust infrastructure enables us to deliver consistent products on time to our
                customers across North India.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
