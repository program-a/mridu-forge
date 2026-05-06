import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-pipes.jpg";
import { Counter } from "./Counter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-graphite">
      {/* Background image with parallax */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mridu Industries PVC pipe manufacturing facility"
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/70 to-graphite" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </motion.div>

      {/* Vignette glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[var(--electric)]/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-48 pb-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase"
        >
          <span className="h-px w-10 bg-electric" />
          Bhiwadi · Rajasthan · Est. 1989
        </motion.div>

        {/* Headline */}
        <h1 className="mt-8 font-display font-medium text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-[-0.05em]">
          <SplitLine delay={0.3}>Strength</SplitLine>
          <SplitLine delay={0.45}>
            in every <span className="italic font-light text-electric">connection.</span>
          </SplitLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          A trusted PVC pipe & fittings manufacturer engineering the
          infrastructure of modern India — for over three decades.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-graphite font-medium text-sm transition-all hover:gap-5"
          >
            Explore Products
            <ArrowRight />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-hairline text-sm hover:bg-charcoal transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden glass"
        >
          <Stat value={35} suffix="+" label="Years of Excellence" />
          <Stat value={3} label="Manufacturing Units" />
          <Stat value={100} suffix="%" label="Trusted Across North India" tag="Reliability" />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-muted-foreground">
        SCROLL
        <span className="block w-px h-10 bg-gradient-to-b from-electric to-transparent" />
      </div>
    </section>
  );
}

function SplitLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({ value, suffix, label, tag }: { value: number; suffix?: string; label: string; tag?: string }) {
  return (
    <div className="bg-graphite/80 backdrop-blur p-8 md:p-10 relative">
      <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3 uppercase">
        {tag ?? "Heritage"}
      </div>
      <div className="font-display text-5xl md:text-6xl tracking-tight">
        <Counter to={value} suffix={suffix} />
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
