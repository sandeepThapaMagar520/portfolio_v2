"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Menu, MessageCircle, Moon, Plus, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
] as const;

const MotionLink = motion.create(Link);

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = initialTheme;
    queueMicrotask(() => setTheme(initialTheme));
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!contactOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!contactRef.current?.contains(event.target as Node)) setContactOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [contactOpen]);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Sandeep Thapa Magar — home">
          <Image
            className="brand-signature"
            src="/assets/sandeep-signature.png"
            alt=""
            width={180}
            height={50}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="talk-button" href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></Link>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu"><Menu /></button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ clipPath: "circle(0% at 92% 5%)" }} animate={{ clipPath: "circle(150% at 92% 5%)" }} exit={{ clipPath: "circle(0% at 92% 5%)" }} transition={{ duration: .65, ease: [0.76, 0, 0.24, 1] }}>
            <div className="mobile-menu-top">
              <Image className="brand-signature" src="/assets/sandeep-signature.png" alt="" width={180} height={50} />
              <button onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"><X /></button>
            </div>
            <nav>
              {navigation.map(([label, href], index) => (
                <MotionLink key={href} href={href} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 + index * .07 }}>
                  <span>0{index + 1}</span>{label}<ArrowUpRight />
                </MotionLink>
              ))}
            </nav>
            <div className="mobile-menu-footer"><a href="mailto:sandeepthapa520@gmail.com">sandeepthapa520@gmail.com</a><span>Kathmandu, Nepal</span></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`floating-contact ${contactOpen ? "is-open" : ""}`} ref={contactRef}>
        <AnimatePresence>
          {contactOpen && (
            <motion.div
              className="floating-contact-panel"
              id="contact-options"
              initial={{ opacity: 0, y: 12, scale: .97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: .98 }}
              transition={{ duration: .22 }}
            >
              <div className="floating-contact-heading">
                <span>Start a conversation</span>
                <small>Usually replies within a day</small>
              </div>
              <a className="contact-option whatsapp" href="https://wa.me/9779864057456" target="_blank" rel="noreferrer">
                <MessageCircle /><span><strong>WhatsApp</strong><small>Message me directly</small></span><ArrowUpRight />
              </a>
              <a className="contact-option" href="mailto:sandeepthapa520@gmail.com">
                <Mail /><span><strong>Email</strong><small>For detailed enquiries</small></span><ArrowUpRight />
              </a>
              <div className="contact-socials" aria-label="Social profiles">
                <a href="https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://github.com/sandeepThapaMagar520" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href="https://www.instagram.com/sandeep_thapa5/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="floating-contact-trigger"
          onClick={() => setContactOpen(!contactOpen)}
          aria-expanded={contactOpen}
          aria-controls="contact-options"
          aria-label={contactOpen ? "Close contact options" : "Open contact options"}
        >
          <span>{contactOpen ? "Close" : "Contact"}</span>
          {contactOpen ? <X /> : <Plus />}
        </button>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <span>Designed and built by Sandeep Thapa Magar.</span>
      <span>© {new Date().getFullYear()} · Kathmandu, Nepal</span>
      <div>
        <a href="mailto:sandeepthapa520@gmail.com" aria-label="Email"><Mail /></a>
        <a href="https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/" aria-label="LinkedIn"><Linkedin /></a>
        <a href="https://github.com/sandeepThapaMagar520" aria-label="GitHub"><Github /></a>
        <a href="https://www.instagram.com/sandeep_thapa5/" aria-label="Instagram"><Instagram /></a>
      </div>
    </footer>
  );
}

export function PageIntro({ number, label, title, copy }: { number: string; label: string; title: React.ReactNode; copy: string }) {
  return (
    <section className="page-intro">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <div className="eyebrow"><span>{number}</span>{label}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </motion.div>
    </section>
  );
}
