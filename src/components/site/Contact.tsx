import { Reveal } from "./Reveal";

const details = [
  {
    label: "Email",
    value: "mriduindus@gmail.com",
    href: "mailto:mriduindus@gmail.com",
  },
  {
    label: "Phone",
    value: "8800539069",
    href: "tel:+918800539069",
  },
  {
    label: "Address",
    value: "HEAD OFFICE — G1/387 Industrial Area Bhiwadi, District Alwar, Rajasthan – 301019",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-copper/10 blur-[140px]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-copper" />
                Contact Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Let's <span className="text-gradient italic font-light">connect.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 space-y-2">
                <div className="font-display text-2xl md:text-3xl tracking-tight">
                  Mridu Industries
                </div>
                <div className="text-muted-foreground">Bhiwadi, Rajasthan, India</div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                For inquiries, orders, or partnerships:
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.2 + i * 0.07}>
                  <div className="group p-8 md:p-10 rounded-2xl border border-hairline bg-graphite hover:border-electric/40 transition-colors">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                          {d.label}
                        </div>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="mt-3 block font-display text-xl md:text-2xl tracking-tight break-words hover:text-electric transition-colors"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <div className="mt-3 font-display text-xl md:text-2xl tracking-tight leading-snug break-words">
                            {d.value}
                          </div>
                        )}
                      </div>
                      <span className="text-electric shrink-0 mt-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10 rounded-2xl overflow-hidden border border-hairline aspect-[16/9] bg-graphite">
                <iframe
                  title="Mridu Industries location"
                  src="https://www.google.com/maps?q=G1%2F387+Industrial+Area+Bhiwadi+Alwar+Rajasthan+301019&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  style={{
                    filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.95)",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
