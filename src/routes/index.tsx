import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Infrastructure } from "@/components/site/Infrastructure";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LOGO_IMAGE,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },

      { property: "og:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:url", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { itemProp: "image", content: OG_IMAGE },

      { name: "twitter:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Manufacturer",
              "@id": `${SITE_URL}#manufacturer`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: LOGO_IMAGE,
              image: OG_IMAGE,
              description: DEFAULT_DESCRIPTION,
              foundingDate: "1989",
            },
            {
              "@type": "ItemList",
              "@id": `${SITE_URL}#products`,
              name: "Mridu Industries — PVC Pipes & Fittings",
              numberOfItems: 4,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Product",
                    name: "Agricultural PVC Pipes",
                    description: "Agricultural pipes for irrigation and water management.",
                    brand: { "@id": `${SITE_URL}#organization` },
                    manufacturer: { "@id": `${SITE_URL}#organization` },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Product",
                    name: "Plumbing PVC Pipes",
                    description: "Plumbing pipes for residential and commercial use.",
                    brand: { "@id": `${SITE_URL}#organization` },
                    manufacturer: { "@id": `${SITE_URL}#organization` },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Product",
                    name: "PVC Fittings",
                    description: "Durable PVC fittings for secure and leak-proof connections.",
                    brand: { "@id": `${SITE_URL}#organization` },
                    manufacturer: { "@id": `${SITE_URL}#organization` },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "Product",
                    name: "Custom PVC Solutions",
                    description: "Custom solutions tailored to specific project requirements.",
                    brand: { "@id": `${SITE_URL}#organization` },
                    manufacturer: { "@id": `${SITE_URL}#organization` },
                  },
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE_URL}#breadcrumbs`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${SITE_URL}#about`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Products",
                  item: `${SITE_URL}#products`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Infrastructure",
                  item: `${SITE_URL}#infrastructure`,
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Why Choose Us",
                  item: `${SITE_URL}#why`,
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact",
                  item: `${SITE_URL}#contact`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}#faq`,
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where is Mridu Industries located?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mridu Industries is headquartered at G1/387 Industrial Area Bhiwadi, District Alwar, Rajasthan – 301019, India, with three manufacturing units across Rajasthan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What products does Mridu Industries manufacture?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We manufacture a comprehensive range of PVC pipes and fittings including agricultural pipes for irrigation and water management, plumbing pipes for residential and commercial use, durable PVC fittings, and custom solutions tailored to specific project requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When was Mridu Industries founded?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mridu Industries was established in 1989 in Bhiwadi, Rajasthan, with a vision to deliver dependable piping solutions for India's agricultural and construction sectors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where do you supply your products?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our products are supplied across North India including Rajasthan, Haryana, Punjab, Delhi NCR, and Uttar Pradesh, serving farmers, builders, contractors, and infrastructure developers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I contact Mridu Industries for orders?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Email mriduindus@gmail.com or call 8800539069 for inquiries, orders, or partnerships.",
                  },
                },
              ],
            },
          ],
        }),
      },
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
          <div className="font-display text-2xl tracking-tight">{SITE_NAME}</div>
          <div className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} {SITE_NAME} · Bhiwadi, Rajasthan
          </div>
        </div>
        <div className="text-xs text-muted-foreground tracking-[0.3em]">
          STRENGTH IN EVERY CONNECTION
        </div>
      </div>
    </footer>
  );
}
