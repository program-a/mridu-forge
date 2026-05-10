import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-pipes.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-graphite"
    >
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

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[var(--electric)]/10 blur-[120px] pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-40 md:pt-48 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground uppercase"
        >
          <span className="h-px w-10 bg-electric" />
          Home
        </motion.div>

        <h1 className="mt-8 font-display font-medium text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-[-0.05em]">
          <SplitLine delay={0.3}>Mridu Industries</SplitLine>
        </h1>

        <SplitLine delay={0.5}>
          <p className="mt-6 font-display italic font-light text-electric text-[clamp(1.75rem,4.5vw,3.5rem)] leading-tight tracking-tight">
            Strength in Every Connection.
          </p>
        </SplitLine>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Founded in 1989 in Bhiwadi, Rajasthan, Mridu Industries has grown into a trusted name in
          the manufacturing of high-quality PVC pipes and fittings. With decades of experience and a
          commitment to excellence, we provide durable and reliable solutions for agriculture and
          construction needs across North India.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Driven by quality, precision, and customer trust, our products are designed to perform
          under demanding conditions—ensuring efficiency, longevity, and value for every customer.
        </motion.p>
      </motion.div>

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
