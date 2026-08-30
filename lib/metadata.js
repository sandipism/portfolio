import { profile } from "@/data/profile";

const siteUrl = "https://sandip-acharya.com.np";
const siteName = `${profile.name} | ${profile.professionalTitle}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${profile.name}`,
  },
  description:
    "Civil Engineer and Disaster Risk & Resilience Specialist based in Kathmandu, Nepal. 8 years of experience across disaster risk reduction, flood risk management, resilient infrastructure, post-disaster recovery, and GIS-based risk assessment and hazard mapping.",
  keywords: [
    "Sandip Acharya",
    "Disaster Risk Reduction",
    "Flood Risk Management",
    "Resilient Infrastructure",
    "Civil Engineer Nepal",
    "GIS",
    "Hazard Mapping",
    "Post-Disaster Recovery",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: siteName,
    description:
      "Civil Engineer and Disaster Risk & Resilience Specialist — Emergency Preparedness, Flood Risk & Post-Disaster Recovery.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: "Sandip Acharya — Disaster Risk & Resilience Specialist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Civil Engineer and Disaster Risk & Resilience Specialist based in Kathmandu, Nepal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export { siteUrl, siteName };
