import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
  title: "Sandeep Thapa Magar — Operations, Product & Technology",
  description:
    "Portfolio of Sandeep Thapa Magar, a Chief Operating Officer, product builder, and software engineer based in Nepal.",
  keywords: ["Sandeep Thapa Magar", "Chief Operating Officer", "Software Engineer", "Product Strategy", "Nepal"],
  openGraph: {
    title: "Sandeep Thapa Magar — Operations, Product & Technology",
    description: "I build digital products and the systems behind them.",
    type: "website",
    url: "https://sandeepthapamagar.com.np",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Thapa Magar — Operations, Product & Technology",
    description: "I build digital products and the systems behind them.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
