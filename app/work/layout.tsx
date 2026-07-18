import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore selected projects by Sandeep Thapa Magar, including Mech Hevan and an Employee Management System.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work",
    description:
      "Explore selected projects by Sandeep Thapa Magar, including Mech Hevan and an Employee Management System.",
    url: "/work",
    siteName: "Sandeep Thapa Magar",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sandeep Thapa Magar — Operations, Product & Technology" }],
  },
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
