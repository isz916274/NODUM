import Link from "next/link";
import { footerServiceNavigation } from "@/content/navigation";
import { Brand } from "@/components/ui/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p className="footer-brand-copy">
            Soluciones tecnológicas para operaciones empresariales que buscan
            claridad, control y nuevas capacidades.
          </p>
        </div>
        <div className="footer-column">
          <h2>Producto</h2>
          <nav aria-label="Producto principal" className="footer-links">
            <Link href="/wms">NODUM WMS</Link>
            <Link href="/soluciones">Productos empresariales</Link>
          </nav>
        </div>
        <div className="footer-column">
          <h2>Servicios</h2>
          <nav aria-label="Servicios tecnológicos" className="footer-links">
            {footerServiceNavigation.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-column">
          <h2>Empresa</h2>
          <nav aria-label="Información corporativa" className="footer-links">
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/soluciones">Soluciones</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
        <div className="footer-column footer-contact">
          <h2>Hablemos</h2>
          <p>Revisemos el proceso que quieres mejorar.</p>
          <Link className="footer-diagnostic" href="/diagnostico">
            Solicitar diagnóstico <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© NODUM</span>
        <span>Ingeniería para operaciones reales.</span>
      </div>
    </footer>
  );
}
