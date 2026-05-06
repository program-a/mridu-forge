import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import agImg from "@/assets/product-agricultural.jpg";
import plImg from "@/assets/product-plumbing.jpg";
import ftImg from "@/assets/product-fittings.jpg";
import csImg from "@/assets/product-custom.jpg";

const products = [
  { id: "01", title: "Agricultural Pipes", tag: "Irrigation Grade", img: agImg, desc: "High-strength PVC engineered for sustained farm irrigation across diverse soil and weather conditions." },
  { id: "02", title: "Plumbing Pipes", tag: "Pressure Tested", img: plImg, desc: "Premium plumbing solutions for residential, commercial and high-rise construction projects." },
  { id: "03", title: "PVC Fittings", tag: "Precision Joinery", img: ftImg, desc: "Leak-proof fittings molded with micron-level accuracy for every connection that matters." },
  { id: "04", title: "Custom Solutions", tag: "Built to Spec", img: csImg, desc: "Bespoke pipe systems engineered to meet specialized industrial and infrastructure demands." },
];

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // 4 cards, slide horizontally (desktop only via responsive). Use a simple translateX.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="products" className="relative bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-48 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-electric" />
                02 — Engineered Catalogue
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Pipes that <span className="text-gradient italic font-light">perform.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Four product categories. One uncompromising standard. Every length
              tested, every fitting precision-molded, every system built to last.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll showcase (desktop) */}
      <div ref={ref} className="hidden md:block relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-8 pl-10 pr-10 will-change-transform">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
            <div className="shrink-0 w-[20vw] grid place-items-center">
              <a href="#contact" className="group inline-flex flex-col items-start">
                <span className="text-xs tracking-[0.4em] text-muted-foreground">END OF RANGE</span>
                <span className="mt-2 font-display text-3xl">Need a quote? →</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile stack */}
      <div className="md:hidden px-6 pb-24 space-y-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} mobile />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p, mobile }: { p: (typeof products)[number]; mobile?: boolean }) {
  return (
    <div
      className={`group relative shrink-0 overflow-hidden rounded-2xl border border-hairline bg-graphite ${
        mobile ? "w-full aspect-[4/5]" : "w-[70vw] md:w-[55vw] lg:w-[42vw] h-[78vh]"
      }`}
    >
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
        <span className="text-[10px] tracking-[0.4em] text-muted-foreground">{p.id}</span>
        <span className="px-3 py-1 text-[10px] tracking-[0.3em] rounded-full border border-hairline glass">
          {p.tag.toUpperCase()}
        </span>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
        <h3 className="font-display text-3xl md:text-5xl tracking-tight">{p.title}</h3>
        <p className="mt-3 text-muted-foreground max-w-md text-sm md:text-base">{p.desc}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-electric">
          DISCOVER
          <span className="h-px w-8 bg-electric" />
        </div>
      </div>
    </div>
  );
}
