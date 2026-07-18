import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sandeep Thapa Magar’s background, working approach, leadership experience, technical skills and professional interests.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description:
      "Learn about Sandeep Thapa Magar’s background, working approach, leadership experience, technical skills and professional interests.",
    url: "/about",
    siteName: "Sandeep Thapa Magar",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sandeep Thapa Magar — Operations, Product & Technology" }],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
