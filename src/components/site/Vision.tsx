import { Reveal } from "./Reveal";

const missionPoints = [
  "To manufacture high-quality PVC pipes and fittings that meet industry standards",
  "To support farmers and builders with reliable and cost-effective solutions",
  "To maintain excellence in production, quality control, and customer service",
  "To continuously upgrade technology and processes for better efficiency",
];

const visionPoints = [
  "Continuously adopt advanced manufacturing technologies to enhance product performance and efficiency",
  "Expand our presence across India while maintaining strong roots in North India",
  "Set benchmarks in quality standards, ensuring every product reflects consistency and reliability",
  "Build a brand that customers associate with trust, value, and long-term dependability",
  "Contribute to sustainable practices by promoting efficient use of resources and minimizing waste in production",
];

export function Vision() {
  return (
    <section id="vision" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-copper/10 blur-[140px]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative space-y-32 md:space-y-40">
        {/* Mission */}
        <div id="mission" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-electric uppercase">
                <span className="h-px w-10 bg-electric" />
                Mission
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                What we <span className="text-gradient italic font-light">stand for.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
              {missionPoints.map((m, i) => (
                <Reveal key={m} delay={i * 0.07}>
                  <li className="group relative h-full bg-graphite p-7 md:p-8 flex flex-col gap-5">
                    <span className="font-display text-electric text-sm tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg md:text-xl tracking-tight leading-snug">
                      {m}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-copper uppercase">
                <span className="h-px w-10 bg-copper" />
                Vision
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Where we're <span className="text-copper italic font-light">headed.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Mridu Industries, our vision is to become one of India's most trusted and
                respected manufacturers of PVC pipes and fittings, known for our unwavering
                commitment to quality, durability, and customer satisfaction.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We aim to play a vital role in strengthening the backbone of the nation—its
                agriculture and infrastructure sectors—by providing reliable piping solutions that
                support efficient water management and long-lasting construction.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2">
                <div className="text-xs tracking-[0.4em] text-copper uppercase">
                  Our vision extends beyond growth in scale. We strive to:
                </div>
                <ul className="mt-6 space-y-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
                  {visionPoints.map((v, i) => (
                    <Reveal key={v} delay={0.35 + i * 0.05}>
                      <li className="group relative bg-graphite p-6 md:p-7 flex items-start gap-5">
                        <span className="font-display text-copper text-sm tracking-[0.3em] shrink-0 mt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base md:text-lg leading-relaxed">{v}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                Through innovation, integrity, and dedication, we envision Mridu Industries as a
                company that not only meets industry demands but shapes the future of piping
                solutions in India.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
