"use client";

import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle, Plus, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profile } from "../content/site";

export function ContactLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (pathname === "/contact") return null;

  return (
    <div className={`floating-contact ${open ? "is-open" : ""}`} ref={rootRef}>
      {open && (
        <div className="floating-contact-panel" id="contact-options">
          <div className="floating-contact-heading"><span>Start a conversation</span><small>Usually replies within a day</small></div>
          <a className="contact-option whatsapp" href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span><strong>WhatsApp</strong><small>Message me directly</small></span><ArrowUpRight aria-hidden="true" /></a>
          <a className="contact-option" href={`mailto:${profile.email}`}><Mail aria-hidden="true" /><span><strong>Email</strong><small>For detailed enquiries</small></span><ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-socials" aria-label="Social profiles">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin aria-hidden="true" /></a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github aria-hidden="true" /></a>
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)"><Instagram aria-hidden="true" /></a>
          </div>
        </div>
      )}
      <button className="floating-contact-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="contact-options" aria-label={open ? "Close contact options" : "Open contact options"}>
        <span>{open ? "Close" : "Contact"}</span>{open ? <X aria-hidden="true" /> : <Plus aria-hidden="true" />}
      </button>
    </div>
  );
}
