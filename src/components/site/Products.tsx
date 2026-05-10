import { Reveal } from "./Reveal";
import agImg from "@/assets/product-agricultural.jpg";
import plImg from "@/assets/product-plumbing.jpg";
import ftImg from "@/assets/product-fittings.jpg";
import csImg from "@/assets/product-custom.jpg";

const products = [
  {
    id: "01",
    title: "Agricultural pipes for irrigation and water management",
    img: agImg,
  },
  {
    id: "02",
    title: "Plumbing pipes for residential and commercial use",
    img: plImg,
  },
  {
    id: "03",
    title: "Durable PVC fittings for secure and leak-proof connections",
    img: ftImg,
  },
  {
    id: "04",
    title: "Custom solutions tailored to specific project requirements",
    img: csImg,
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-charcoal py-32 md:py-48 overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-electric" />
                Our Products
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
              We manufacture a comprehensive range of PVC pipes and fittings designed to meet
              diverse applications:
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-20 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            All our products are manufactured using high-grade raw materials and are tested to
            ensure strength, durability, and performance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: (typeof products)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-graphite aspect-[4/3]">
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent" />
      <div className="absolute top-6 left-6 right-6">
        <span className="text-[10px] tracking-[0.4em] text-muted-foreground">{p.id}</span>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight">
          {p.title}
        </h3>
      </div>
    </div>
  );
}
