import { ArrowDownRight, ArrowRight, Boxes, Code2 } from "lucide-react";
import Link from "next/link";
import { HomeHeroVisual } from "@/components/sections/home-hero-visual";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

const businessLines = [
  {
    number: "01",
    title: "Control de almacén para manufactura",
    description:
      "Un WMS para organizar inventarios, registrar movimientos y dar trazabilidad a la operación de almacén.",
    label: "WMS para pequeñas fábricas",
    href: "/wms",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Desarrollo tecnológico a medida",
    description:
      "Software, aplicaciones y plataformas digitales diseñadas para resolver necesidades específicas de tu empresa.",
    label: "Software · Web · Aplicaciones",
    href: "/soluciones",
    icon: Code2,
  },
];

const process = [
  {
    number: "01",
    title: "Entendemos el contexto",
    description:
      "Conversamos sobre la operación, las personas y el reto que quieres resolver.",
  },
  {
    number: "02",
    title: "Acordamos el alcance",
    description:
      "Definimos prioridades y una solución alineada con las necesidades del proyecto.",
  },
  {
    number: "03",
    title: "Construimos contigo",
    description:
      "Desarrollamos la tecnología y mantenemos claridad sobre cada siguiente paso.",
  },
];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Tecnología para operar mejor</Eyebrow>
            <h1>
              El orden de tu operación empieza con la{" "}
              <span>tecnología correcta.</span>
            </h1>
            <p className="hero-description">
              Controla lo que ocurre en tu almacén. Construye el software que
              tu empresa necesita para avanzar.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wms">Explorar el WMS</ButtonLink>
              <ButtonLink href="/soluciones" variant="secondary">
                Conocer soluciones
              </ButtonLink>
            </div>
            <div className="hero-note">
              <ArrowDownRight aria-hidden="true" />
              <span>Dos líneas de negocio. Un enfoque: resolver lo importante.</span>
            </div>
          </div>
          <HomeHeroVisual />
        </div>
      </section>

      <section className="section section-border">
        <div className="container">
          <div className="section-head">
            <SectionHeading
              description="Dos caminos para responder a necesidades distintas. Elige el que mejor describe el reto de tu empresa."
              eyebrow="Qué hacemos"
              title="Tecnología conectada con el trabajo real."
            />
            <Link className="text-link" href="/soluciones">
              Explorar soluciones
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="service-grid">
            {businessLines.map(({ description, href, icon: Icon, label, number, title }) => (
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
                  Conocer más
                  <ArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="container split-section">
          <div className="split-copy">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2>Primero entendemos. Después, construimos.</h2>
            <p>
              La tecnología es más útil cuando parte de los retos y las
              condiciones reales de cada empresa. Por eso, cada conversación
              comienza por entender cómo se trabaja hoy.
            </p>
            <ButtonLink href="/nosotros" variant="secondary">
              Conoce nuestro enfoque
            </ButtonLink>
          </div>
          <div className="principles">
            {process.map((item) => (
              <article className="principle" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <CtaBand
          description="Cuéntanos qué necesitas mejorar o desarrollar. Empezaremos por entender el contexto."
          title="La siguiente conversación puede aclarar el camino."
        />
      </section>
    </main>
  );
}
