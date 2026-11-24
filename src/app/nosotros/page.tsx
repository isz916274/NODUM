import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce el enfoque de NODUM: tecnología cercana a los procesos, necesidades y personas de cada empresa.",
  openGraph: {
    title: "Nosotros | NODUM",
    description:
      "Un enfoque de desarrollo que parte de entender el contexto y construir con propósito.",
  },
};

const principles = [
  {
    number: "01",
    title: "Entender antes de proponer",
    description:
      "Escuchamos cómo funciona el proceso, qué necesita el equipo y qué condiciones debe considerar la solución.",
  },
  {
    number: "02",
    title: "Elegir tecnología con intención",
    description:
      "Cada decisión técnica debe responder a los objetivos, usuarios y contexto de la empresa.",
  },
  {
    number: "03",
    title: "Construir con claridad",
    description:
      "Acordamos alcance, prioridades y próximos pasos para mantener el proyecto enfocado.",
  },
];

export default function AboutPage() {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb="Nosotros"
        description="NODUM conecta conocimiento operativo con desarrollo tecnológico para ayudar a las empresas a ordenar procesos y crear herramientas útiles."
        eyebrow="Sobre NODUM"
        highlight="con propósito."
        primaryAction={{ label: "Platicar con nosotros", href: "/contacto" }}
        secondaryAction={{ label: "Ver soluciones", href: "/soluciones" }}
        title="Tecnología cercana,"
      />
      <section className="container section section-border">
        <div className="split-section">
          <div className="split-copy">
            <Eyebrow>Nuestra forma de pensar</Eyebrow>
            <h2>La herramienta debe responder a la realidad del trabajo.</h2>
            <p>
              Cada empresa tiene procesos, equipos y prioridades distintas. Por
              eso, comenzamos por comprender el reto antes de definir cómo
              abordarlo con tecnología.
            </p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section section-border">
        <div className="section-head">
          <SectionHeading
            description="El trabajo combina conocimiento de procesos con decisiones de diseño e ingeniería."
            eyebrow="Dos capacidades"
            title="Operación y tecnología, en la misma conversación."
          />
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-card-top">
              <span className="service-card-index">01 / OPERACIÓN</span>
            </div>
            <h3>Procesos que se entienden</h3>
            <p>
              Aterrizamos necesidades de almacén, equipos y flujos de trabajo
              antes de traducirlas a una herramienta digital.
            </p>
          </article>
          <article className="service-card">
            <div className="service-card-top">
              <span className="service-card-index">02 / INGENIERÍA</span>
            </div>
            <h3>Soluciones que se construyen</h3>
            <p>
              Diseñamos y desarrollamos sistemas, plataformas y aplicaciones
              alineados con el problema que deben resolver.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <CtaBand
          description="Comparte el contexto de tu operación o proyecto. La conversación empieza por entender lo que necesitas."
          title="Conversemos sobre lo que quieres mejorar."
          actionLabel="Contactar a NODUM"
          actionHref="/contacto"
        />
      </section>
    </main>
  );
}
