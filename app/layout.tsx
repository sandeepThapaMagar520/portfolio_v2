import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionObserver } from "./components/motion/MotionObserver";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandeepthapamagar.com.np"),
  title: {
    default: "Sandeep Thapa Magar — Operations, Product & Technology",
    template: "%s | Sandeep Thapa Magar",
  },
  description:
    "Portfolio of Sandeep Thapa Magar, combining operations leadership, product thinking and software engineering to build practical digital products.",
  alternates: {
    canonical: "/",
  },
  keywords: ["Sandeep Thapa Magar", "Chief Operating Officer", "Software Engineer", "Product Strategy", "Nepal"],
  authors: [{ name: "Sandeep Thapa Magar", url: "https://sandeepthapamagar.com.np" }],
  creator: "Sandeep Thapa Magar",
  openGraph: {
    title: "Sandeep Thapa Magar — Operations, Product & Technology",
    description:
      "Portfolio of Sandeep Thapa Magar, combining operations leadership, product thinking and software engineering to build practical digital products.",
    type: "website",
    url: "/",
    siteName: "Sandeep Thapa Magar",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandeep Thapa Magar — Operations, Product & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Thapa Magar — Operations, Product & Technology",
    description:
      "Portfolio of Sandeep Thapa Magar, combining operations leadership, product thinking and software engineering to build practical digital products.",
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sandeepthapamagar.com.np/#person",
  name: "Sandeep Thapa Magar",
  url: "https://sandeepthapamagar.com.np",
  image: "https://sandeepthapamagar.com.np/assets/sandeep-portrait.webp",
  description:
    "Operations leader and software engineer focused on product development, team systems, and practical digital platforms.",
  sameAs: [
    "https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/",
    "https://github.com/sandeepThapaMagar520",
    "https://www.instagram.com/sandeep_thapa5/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sandeepthapamagar.com.np/#website",
  name: "Sandeep Thapa Magar",
  url: "https://sandeepthapamagar.com.np",
  description:
    "Portfolio of Sandeep Thapa Magar, combining operations leadership, product thinking and software engineering to build practical digital products.",
  author: { "@id": "https://sandeepthapamagar.com.np/#person" },
  creator: { "@id": "https://sandeepthapamagar.com.np/#person" },
};

const structuredData = JSON.stringify([personSchema, websiteSchema]).replace(/</g, "\\u003c");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <script
          id="portfolio-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <MotionObserver />
        {children}
      </body>
    </html>
  );
}
