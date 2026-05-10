/**
 * Centralized site-wide SEO constants.
 * Update SITE_URL once the production domain is finalized.
 */

export const SITE_URL = "https://mriduindustries.com";

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

export const OG_IMAGE = `${SITE_URL}/banner.jpeg`;
export const OG_IMAGE_ALT =
  "Mridu Industries — premium PVC pipes & fittings · Strength · Reliability · Trust";
export const LOGO_IMAGE = `${SITE_URL}/mridhu.jpeg`;
