"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import { Brand } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function updateScrollState() {
      setScrolled(window.scrollY > 24);
    }

    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Brand />
        <nav aria-label="Navegación principal" className="desktop-nav">
          {primaryNavigation.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink className="header-cta" href="/diagnostico" size="small">
          Solicitar diagnóstico
        </ButtonLink>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            aria-label="Navegación móvil"
            className="mobile-nav"
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -8, transition: { duration: 0.14 } }
            }
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            key="mobile-navigation"
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {primaryNavigation.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/diagnostico" onClick={() => setMenuOpen(false)}>
              Solicitar diagnóstico
            </ButtonLink>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
