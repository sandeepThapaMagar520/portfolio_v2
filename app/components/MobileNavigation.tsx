"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navigation, profile } from "../content/site";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);
  const close = useCallback(() => {
    restoreFocus.current = true;
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const menuTrigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const siblings = Array.from(document.querySelectorAll<HTMLElement>("main > *"))
      .filter((element) => !element.classList.contains("mobile-menu"));
    const inertStates = siblings.map((element) => ({ element, hadInert: element.hasAttribute("inert") }));
    document.body.style.overflow = "hidden";
    siblings.forEach((element) => element.setAttribute("inert", ""));
    const frame = requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return event.preventDefault();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      inertStates.forEach(({ element, hadInert }) => {
        if (!hadInert) element.removeAttribute("inert");
      });
      if (restoreFocus.current) {
        restoreFocus.current = false;
        requestAnimationFrame(() => menuTrigger?.focus());
      }
    };
  }, [close, open]);

  return (
    <>
      <button ref={triggerRef} className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation-dialog">
        <Menu aria-hidden="true" />
      </button>
      {open && createPortal(
        <div ref={dialogRef} className="mobile-menu" id="mobile-navigation-dialog" role="dialog" aria-modal="true" aria-label="Primary navigation menu">
          <div className="mobile-menu-top">
            <Image className="brand-signature" src="/assets/sandeep-signature.png" alt="" width={180} height={50} />
            <button ref={closeRef} onClick={close} aria-label="Close navigation menu"><X aria-hidden="true" /></button>
          </div>
          <nav>
            {navigation.map(({ number, label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                aria-current={pathname === href ? "page" : undefined}
              >
                <span>{number}</span>
                <strong>{label}</strong>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer"><a href={`mailto:${profile.email}`}>{profile.email}</a><span>{profile.location}</span></div>
        </div>,
        document.body,
      )}
    </>
  );
}
