import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Infrastructure } from "@/components/site/Infrastructure";
import { WhyUs } from "@/components/site/WhyUs";
import { Vision } from "@/components/site/Vision";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mridu Industries — PVC Pipes & Fittings · Since 1989" },
      {
        name: "description",
        content:
          "Trusted PVC pipe & fittings manufacturer from Bhiwadi, Rajasthan. 35+ years of precision engineering for agriculture, plumbing and construction across North India.",
      },
      { property: "og:title", content: "Mridu Industries — Strength in Every Connection" },
      { property: "og:description", content: "Premium PVC pipes & fittings manufactured in Bhiwadi since 1989." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-graphite text-foreground">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Infrastructure />
      <WhyUs />
      <Vision />
      <Contact />
    </main>
  );
}
