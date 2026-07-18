import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Sandeep Thapa Magar’s experience across operations leadership, product development, software engineering and team enablement.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience",
    description:
      "Explore Sandeep Thapa Magar’s experience across operations leadership, product development, software engineering and team enablement.",
    url: "/experience",
    siteName: "Sandeep Thapa Magar",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sandeep Thapa Magar — Operations, Product & Technology" }],
  },
};

export default function ExperienceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
