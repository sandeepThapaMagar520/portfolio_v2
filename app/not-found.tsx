import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className="not-found-page">
        <p>404 · Page not found</p>
        <h1>This page has moved or does not exist.</h1>
        <Link href="/">
          <ArrowLeft aria-hidden="true" />
          Return home
        </Link>
        <Link href="/work">View selected work</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
