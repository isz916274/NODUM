import { ArrowRight, Boxes, Workflow } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function SolutionsSection() {
  return (
    <section aria-labelledby="solutions-title" className="home-section home-solutions">
      <div className="container">
        <div className="home-section-index">
          <span>03</span>
          <span>NUESTRAS SOLUCIONES</span>
          <span>PRODUCTO · SERVICIOS</span>
        </div>
        <div className="home-section-heading">
          <Reveal>
            <Eyebrow>Dos líneas de negocio</Eyebrow>
            <h2 id="solutions-title">La tecnología adecuada para cada reto.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Desde un sistema especializado para almacenes hasta software
              diseñado alrededor de los procesos de tu empresa.
            </p>
          </Reveal>
        </div>
        <div className="solution-pair">
          <Reveal className="solution-panel solution-panel--product">
            <div className="solution-panel-meta">
              <span>01 / PRODUCTOS EMPRESARIALES</span>
              <Boxes aria-hidden="true" />
            </div>
            <div className="solution-product-mark" aria-hidden="true">
              <span className="solution-mark-back" />
              <span className="solution-mark-front" />
              <span className="solution-mark-node" />
            </div>
            <div className="solution-panel-copy">
              <h3>Un producto para ordenar tu almacén.</h3>
              <p>
                NODUM WMS ayuda a pequeñas fábricas manufactureras a controlar
                existencias, movimientos y trazabilidad.
              </p>
              <Link href="/wms">
                Explorar NODUM WMS <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="solution-panel solution-panel--custom" delay={0.1}>
            <div className="solution-panel-meta">
              <span>02 / DESARROLLO TECNOLÓGICO</span>
              <Workflow aria-hidden="true" />
            </div>
            <div className="solution-workflow" aria-hidden="true">
              <span>PROCESO</span>
              <i />
              <span>SISTEMA</span>
              <i />
              <span>PERSONAS</span>
            </div>
            <div className="solution-panel-copy">
              <h3>Una herramienta diseñada para tu operación.</h3>
              <p>
                Desarrollamos software, aplicaciones, plataformas web y
                automatizaciones desde necesidades concretas.
              </p>
              <Link href="/soluciones">
                Ver soluciones de desarrollo <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
