import { Reveal } from "./Reveal";

const reasons = [
  {
    n: "01",
    title: "Proven Experience and Trust",
    body: "Since our establishment in 1989, we have built a strong reputation based on trust and long-term relationships. Our customers rely on us not just for products, but for consistency and dependability.",
  },
  {
    n: "02",
    title: "Superior Product Quality",
    body: "We use high-grade raw materials and follow strict quality control processes at every stage of manufacturing. Each pipe and fitting is tested for strength, durability, and performance to ensure it meets industry standards.",
  },
  {
    n: "03",
    title: "Robust Manufacturing Infrastructure",
    body: "With three well-equipped manufacturing units in Rajasthan, we have the capacity to handle large-scale production while maintaining precision and quality. Our modern machinery and streamlined processes ensure efficiency and timely delivery.",
  },
  {
    n: "04",
    title: "Customer-Centric Approach",
    body: "We focus on understanding the unique requirements of our customers and providing solutions that meet their specific needs. Our commitment to service ensures smooth communication, reliable supply, and long-term satisfaction.",
  },
  {
    n: "05",
    title: "Wide Application and Reliability",
    body: "Our products are trusted across agricultural and construction sectors. From irrigation systems to building infrastructure, our PVC pipes and fittings are designed for versatility and long-term performance.",
  },
  {
    n: "06",
    title: "Consistency and Timely Delivery",
    body: "We understand the importance of time in both farming and construction projects. Our efficient supply chain and production capabilities ensure that orders are fulfilled on schedule without compromising quality.",
  },
  {
    n: "07",
    title: "Commitment to Growth and Innovation",
    body: "We continuously strive to improve our processes, expand our capabilities, and stay aligned with evolving industry standards. This forward-looking approach allows us to deliver better products and greater value over time.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 md:py-48 bg-graphite overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-electric" />
                Why Choose Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Reasons to <span className="text-gradient italic font-light">partner with us.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                Choosing Mridu Industries means partnering with a company that combines experience,
                quality, and reliability in every product we deliver.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                With over three decades of expertise in the PVC manufacturing industry, we
                understand the practical needs of farmers, builders, and contractors. Our products
                are designed to perform consistently in real-world conditions—whether it's
                irrigation systems in rural fields or plumbing networks in urban construction
                projects.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
              {reasons.map((r, i) => (
                <Reveal key={r.n} delay={i * 0.05}>
                  <li className="group relative bg-charcoal/60 p-8 md:p-10 hover:bg-charcoal transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="font-display text-electric text-sm tracking-[0.3em] shrink-0 pt-2">
                        {r.n}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                          {r.title}
                        </h3>
                        <p className="mt-3 text-muted-foreground leading-relaxed">{r.body}</p>
                      </div>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
