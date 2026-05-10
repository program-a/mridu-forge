/**
 * Centralized site-wide SEO constants.
 *
 * Social crawlers require absolute image URLs. On Netlify, set VITE_SITE_URL
 * to the live domain (for example: https://mriduindustries.com). If it is not
 * set, we fall back to Netlify's URL env vars during prerender and then to the
 * production domain.
 */

const rawSiteUrl =
  import.meta.env.VITE_SITE_URL ||
  (typeof process !== "undefined" ? process.env.URL || process.env.DEPLOY_PRIME_URL : undefined) ||
  "https://mriduindustries.com";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_NAME = "Mridu Industries";
export const SITE_TAGLINE = "Strength in Every Connection";

export const DEFAULT_TITLE = `${SITE_NAME} — PVC Pipes & Fittings · Since 1989`;
export const DEFAULT_DESCRIPTION =
  "Mridu Industries is a trusted PVC pipes and fittings manufacturer in Bhiwadi, Rajasthan since 1989. Three manufacturing units delivering high-quality agricultural pipes, plumbing pipes, and durable PVC fittings across North India.";

export const DEFAULT_KEYWORDS = [
  "Mridu Industries",
  "PVC pipes manufacturer",
  "PVC fittings manufacturer",
  "PVC pipes Bhiwadi",
  "PVC pipes Rajasthan",
  "agricultural PVC pipes",
  "plumbing PVC pipes",
  "irrigation pipes North India",
  "ISI marked PVC pipes",
  "PVC pipe supplier India",
].join(", ");

export const ORG = {
  legalName: SITE_NAME,
  alternateName: "MRIDU",
  email: "mriduindus@gmail.com",
  phone: "+91-88005-39069",
  phoneDisplay: "8800539069",
  founded: "1989",
  street: "G1/387 Industrial Area Bhiwadi",
  locality: "Bhiwadi",
  region: "Rajasthan",
  postalCode: "301019",
  country: "IN",
  countryName: "India",
  district: "Alwar",
  geo: { lat: 28.2095, lng: 76.8634 },
} as const;

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT =
  "Mridu Industries — premium PVC pipes & fittings · Strength · Reliability · Trust";
export const LOGO_IMAGE = `${SITE_URL}/mridhu.jpeg`;
