"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import { Brand } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
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
      {menuOpen ? (
        <nav
          aria-label="Navegación móvil"
          className="mobile-nav"
          id="mobile-navigation"
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
        </nav>
      ) : null}
    </header>
  );
}
