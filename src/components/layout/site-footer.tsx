import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceNavigation } from "@/content/navigation";
import { Brand } from "@/components/ui/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p className="footer-brand-copy">
            Tecnología para ordenar operaciones y construir nuevas capacidades
            digitales.
          </p>
        </div>
        <div className="footer-column">
          <h2>Explora</h2>
          <nav aria-label="Servicios" className="footer-links">
            {serviceNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-column">
          <h2>NODUM</h2>
          <nav aria-label="Empresa" className="footer-links">
            <Link href="/soluciones">Soluciones</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
        <div className="footer-column footer-contact">
          <h2>Hablemos</h2>
          <nav aria-label="Contacto" className="footer-links">
            <Link href="/diagnostico">
              Solicitar diagnóstico
              <ArrowUpRight aria-hidden="true" size={13} />
            </Link>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© NODUM</span>
        <span>Tecnología con propósito operativo.</span>
      </div>
    </footer>
  );
}
