import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sandeep Thapa Magar regarding professional opportunities, product collaboration, software projects and leadership roles.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description:
      "Contact Sandeep Thapa Magar regarding professional opportunities, product collaboration, software projects and leadership roles.",
    url: "/contact",
    siteName: "Sandeep Thapa Magar",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sandeep Thapa Magar — Operations, Product & Technology" }],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
