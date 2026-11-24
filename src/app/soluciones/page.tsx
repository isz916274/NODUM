import type { Metadata } from "next";
import { ArrowRight, Boxes, Code2, Globe2, Smartphone } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceNavigation } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Soluciones tecnológicas para empresas",
  description:
    "Explora el WMS para almacenes manufactureros y los servicios de desarrollo de software, plataformas web y aplicaciones.",
  openGraph: {
    title: "Soluciones tecnológicas para empresas | NODUM",
    description:
      "WMS para manufactura y desarrollo tecnológico a la medida de tu empresa.",
  },
};

const solutionCards = [
  {
    number: "01",
    label: "Gestión de almacén",
    title: "WMS para manufactura",
    description:
      "Control de inventarios, movimientos, trazabilidad, entradas y salidas para pequeñas fábricas manufactureras.",
    href: "/wms",
    icon: Boxes,
  },
  {
    number: "02",
    label: "Desarrollo tecnológico",
    title: "Software a la medida",
    description:
      "Sistemas y automatizaciones diseñados para procesos y necesidades concretas de tu organización.",
    href: "/desarrollo-software",
    icon: Code2,
  },
  {
    number: "03",
    label: "Productos digitales",
    title: "Plataformas web",
    description:
      "Experiencias y herramientas web orientadas a los objetivos de tu empresa y sus usuarios.",
    href: "/desarrollo-web",
    icon: Globe2,
  },
  {
    number: "04",
    label: "Herramientas para equipos",
    title: "Aplicaciones",
    description:
      "Aplicaciones móviles y de escritorio pensadas para tareas y contextos de trabajo específicos.",
    href: "/aplicaciones",
    icon: Smartphone,
  },
];

export default function SolutionsPage() {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb="Soluciones"
        description="Tecnología para ordenar las operaciones de almacén y desarrollar herramientas digitales alineadas con lo que tu empresa necesita."
        eyebrow="Soluciones NODUM"
        highlight="para avanzar."
        primaryAction={{ label: "Solicitar diagnóstico", href: "/diagnostico" }}
        title="Tecnología hecha"
      />
      <section className="container section section-border">
        <div className="section-head">
          <SectionHeading
            description="Elige la línea que se relaciona con tu necesidad o cuéntanos el contexto para encontrar el mejor punto de partida."
            eyebrow="Dos líneas de negocio"
            title="Encuentra el camino adecuado."
          />
        </div>
        <div className="service-grid">
          {solutionCards.map(({ description, href, icon: Icon, label, number, title }) => (
            <Link className="service-card" href={href} key={number}>
              <div className="service-card-top">
                <span className="service-card-index">{number} / {label}</span>
                <span className="service-card-icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-card-link">
                Explorar solución
                <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="container section section-border">
        <div className="split-section">
          <div className="split-copy">
            <SectionHeading
              eyebrow="Servicios de desarrollo"
              title="Una solución técnica desde el contexto."
              description="Aterrizamos el alcance junto a las personas que conocen la operación y utilizarán la herramienta."
            />
          </div>
          <nav aria-label="Servicios de desarrollo" className="principles">
            {serviceNavigation.slice(1).map((service, index) => (
              <Link className="principle" href={service.href} key={service.href}>
                <span className="principle-number">
                  0{index + 1}
                </span>
                <div>
                  <h3>{service.label}</h3>
                  <span className="text-link">
                    Conocer servicio
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="section">
        <CtaBand
          description="Cuéntanos qué quieres resolver para revisar juntos el alcance y las opciones."
          title="¿No sabes qué tipo de solución necesitas?"
        />
      </section>
    </main>
  );
}
