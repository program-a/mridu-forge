import { Reveal } from "./Reveal";

const strengths = [
  "Decades of industry experience",
  "Consistent product quality",
  "Strong distribution network",
  "Customer-centric approach",
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
                About Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Three decades of <span className="text-gradient italic font-light">precision.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mridu Industries was established in 1989 with a vision to deliver dependable piping
                solutions to support India's growing agricultural and construction sectors.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Starting from Bhiwadi, Rajasthan, the company has steadily expanded its operations
                and today operates three manufacturing units across Rajasthan, equipped with modern
                machinery and quality control systems.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We specialize in manufacturing a wide range of PVC pipes and fittings that are
                widely used by farmers, builders, contractors, and infrastructure developers across
                North India.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4">
                <div className="text-xs tracking-[0.4em] text-electric uppercase">
                  Our strength lies in
                </div>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
                  {strengths.map((s, i) => (
                    <li
                      key={s}
                      className="group relative bg-charcoal/60 p-6 md:p-7 flex items-start gap-4"
                    >
                      <span className="font-display text-electric text-sm tracking-[0.3em] shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg md:text-xl tracking-tight">{s}</span>
                      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                At Mridu Industries, we believe in building long-term relationships by delivering
                products that customers can rely on for years.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
