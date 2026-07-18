"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "../content/site";
import { ContactLauncher } from "./ContactLauncher";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Sandeep Thapa Magar — home" aria-current={pathname === "/" ? "page" : undefined}>
          <Image className="brand-signature" src="/assets/sandeep-signature.png" alt="" width={180} height={50} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(1).map(({ label, href }) => (
            <Link key={href} href={href} className="site-nav-link" aria-current={pathname === href ? "page" : undefined}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <Link className="talk-button" href="/contact">Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <MobileNavigation />
        </div>
      </header>
      <ContactLauncher />
    </>
  );
}
