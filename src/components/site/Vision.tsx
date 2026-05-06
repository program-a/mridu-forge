import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section className="relative py-32 md:py-48 bg-graphite overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Block tag="Mission" accent="electric">
            <>
              To engineer the most reliable PVC pipe systems in India —
              <span className="text-gradient italic font-light"> empowering agriculture, plumbing and infrastructure </span>
              with precision-built products that stand the test of time.
            </>
          </Block>
          <Block tag="Vision" accent="copper">
            <>
              To be the most trusted name in PVC pipes across South Asia by
              <span className="text-copper italic font-light"> setting new standards </span>
              of strength, integrity and innovation in every connection we make.
            </>
          </Block>
        </div>

        {/* Marquee */}
        <Reveal>
          <div className="mt-32 overflow-hidden border-y border-hairline py-8">
            <div className="flex gap-16 whitespace-nowrap animate-marquee">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-16">
                  {["Strength", "Precision", "Reliability", "Heritage", "Engineering", "Trust"].map((w) => (
                    <span key={w} className="font-display text-6xl md:text-8xl tracking-tighter text-muted-foreground/40">
                      {w} <span className="text-electric">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Block({ tag, accent, children }: { tag: string; accent: "electric" | "copper"; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="relative p-8 md:p-12 rounded-2xl border border-hairline bg-charcoal/60 glass">
        <div className={`text-xs tracking-[0.4em] uppercase ${accent === "electric" ? "text-electric" : "text-copper"}`}>
          {tag}
        </div>
        <p className="mt-8 font-display text-3xl md:text-4xl leading-[1.1] tracking-tight">
          {children}
        </p>
      </div>
    </Reveal>
  );
}
