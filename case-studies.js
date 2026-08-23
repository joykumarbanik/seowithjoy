/**
 * CASE STUDIES DATA
 * -----------------
 * This is the only file you need to touch to add, remove, or edit case
 * studies on the site. Each object in CASE_STUDIES becomes one card.
 *
 * Fields marked "SAMPLE — replace with real data" are placeholders built
 * from your CV. Swap in your real numbers, screenshots, and links whenever
 * you have them — nothing else on the page needs to change.
 *
 * To add a new case study, copy one block (from "{" to "},") and edit it.
 */

const CASE_STUDIES = [
  {
    client: "Gadgeterians",
    tag: "eCommerce · Consumer Electronics · Bangladesh",
    url: "gadgeterians.com",
    problem:
      "A Bangladeshi consumer electronics retailer needed stronger organic visibility for high-intent product and category pages against larger, better-known competitors.",
    approach: [
      "Rebuilt category and collection page SEO structure around real search intent",
      "Ran ongoing technical audits and Schema/structured data implementation",
      "Built topical content clusters to establish category authority",
    ],
    results: [
      { value: "50–60%", label: "organic traffic growth (SAMPLE — replace with real figure)" },
      { value: "↑", label: "keyword rankings across priority categories" },
    ],
  },
  {
    client: "Novaireluxe",
    tag: "eCommerce · Shopify · Belgium",
    url: "novaireluxe.com",
    problem:
      "A Belgian Shopify store needed an SEO/AEO/GEO content system that could scale across product lines while staying visible in AI-driven answer engines.",
    approach: [
      "Built an SEO + AEO/GEO content workflow tailored to Shopify's structure",
      "Optimised content for AI Overviews and generative answer engines",
      "Established a repeatable content and internal-linking system for new product lines",
    ],
    results: [
      { value: "AEO", label: "content structured for AI Overview visibility (SAMPLE — replace with real figure)" },
      { value: "↑", label: "organic sessions from targeted content clusters" },
    ],
  },
  {
    client: "International SEO Portfolio",
    tag: "eCommerce & Local · USA · UK · at Ecomclips",
    url: "beanproducts.com · chefstuff.co.uk · +3 more",
    problem:
      "Managed SEO simultaneously for Bean Products (USA), Gentlemens Bands (USA), Chef Stuff (UK), Onsen Secret (USA), and Nicholls Entertainment (UK) — each with different audiences, platforms, and competitive landscapes.",
    approach: [
      "Ran technical audits, keyword research, and competitor analysis per account",
      "Applied AEO/GEO techniques to earn placement in Google AI Overviews",
      "Delivered monthly GA4 reporting and led client strategy meetings",
    ],
    results: [
      { value: "50–60%", label: "average organic traffic growth across managed accounts" },
      { value: "Multiple", label: "keywords ranked inside Google AI Overviews" },
    ],
  },
];
