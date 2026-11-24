import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { developmentServices } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ServiceIdentity } from "@/components/sections/service-identity";

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="home-section home-services">
      <div className="container">
        <div className="home-section-index">
          <span>04</span>
          <span>SERVICIOS DE DESARROLLO</span>
          <span>CAPACIDAD DIGITAL A MEDIDA</span>
        </div>
        <div className="home-section-heading">
          <Reveal>
            <Eyebrow>Ingeniería aplicada</Eyebrow>
            <h2 id="services-title">
              Herramientas digitales que responden al trabajo.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Cada servicio parte de un objetivo y de las personas que usarán
              la solución. No de una plantilla predefinida.
            </p>
          </Reveal>
        </div>
        <div className="development-grid">
          {developmentServices.map((service, index) => (
            <Reveal
              className={`development-service development-service--${service.type}`}
              delay={index * 0.06}
              key={service.number}
            >
              <div className="development-service-head">
                <span>{service.number} / NODUM DIGITAL</span>
                <ServiceIdentity type={service.type} />
              </div>
              <div className="development-service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href}>
                  {service.linkLabel}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
