import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Infrastructure } from "@/components/site/Infrastructure";
import { Vision } from "@/components/site/Vision";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mridu Industries — PVC Pipes & Fittings · Since 1989" },
      {
        name: "description",
        content:
          "Mridu Industries — Strength in Every Connection. Founded in 1989 in Bhiwadi, Rajasthan, manufacturing high-quality PVC pipes and fittings for agriculture and construction across North India.",
      },
      {
        property: "og:title",
        content: "Mridu Industries — Strength in Every Connection",
      },
      {
        property: "og:description",
        content: "PVC pipes & fittings manufactured in Bhiwadi since 1989.",
      },
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
      <Vision />
      <WhyUs />
      <Contact />
      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-graphite border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display text-2xl tracking-tight">Mridu Industries</div>
          <div className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Mridu Industries · Bhiwadi, Rajasthan
          </div>
        </div>
        <div className="text-xs text-muted-foreground tracking-[0.3em]">
          STRENGTH IN EVERY CONNECTION
        </div>
      </div>
    </footer>
  );
}
