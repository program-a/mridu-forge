import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  LOGO_IMAGE,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },

      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "author", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      { name: "application-name", content: SITE_NAME },
      { name: "generator", content: "TanStack Start" },

      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "color-scheme", content: "dark light" },
      { name: "theme-color", content: "#0a0a0b" },
      { name: "format-detection", content: "telephone=yes, address=yes" },

      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Bhiwadi, Rajasthan" },
      { name: "geo.position", content: "28.2095;76.8634" },
      { name: "ICBM", content: "28.2095, 76.8634" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },

      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: SITE_NAME },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "mobile-web-app-capable", content: "yes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/jpeg", href: "/mridhu.jpeg" },
      { rel: "shortcut icon", href: "/mridhu.jpeg" },
      { rel: "apple-touch-icon", href: "/mridhu.jpeg" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "dns-prefetch", href: "https://www.google.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              name: SITE_NAME,
              alternateName: "MRIDU",
              legalName: SITE_NAME,
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: LOGO_IMAGE,
                width: 774,
                height: 245,
              },
              image: OG_IMAGE,
              description: DEFAULT_DESCRIPTION,
              foundingDate: "1989",
              foundingLocation: {
                "@type": "Place",
                name: "Bhiwadi, Rajasthan, India",
              },
              email: "mriduindus@gmail.com",
              telephone: "+91-88005-39069",
              areaServed: [
                "North India",
                "Rajasthan",
                "Haryana",
                "Punjab",
                "Delhi",
                "Uttar Pradesh",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "G1/387 Industrial Area Bhiwadi",
                addressLocality: "Bhiwadi",
                addressRegion: "Rajasthan",
                postalCode: "301019",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "mriduindus@gmail.com",
                  telephone: "+91-88005-39069",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "mriduindus@gmail.com",
                  telephone: "+91-88005-39069",
                  areaServed: "IN",
                },
              ],
            },
            {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}#localbusiness`,
              name: SITE_NAME,
              image: OG_IMAGE,
              logo: LOGO_IMAGE,
              url: SITE_URL,
              email: "mriduindus@gmail.com",
              telephone: "+91-88005-39069",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "G1/387 Industrial Area Bhiwadi",
                addressLocality: "Bhiwadi",
                addressRegion: "Rajasthan",
                postalCode: "301019",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.2095,
                longitude: 76.8634,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: DEFAULT_DESCRIPTION,
              inLanguage: "en-IN",
              publisher: { "@id": `${SITE_URL}#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
