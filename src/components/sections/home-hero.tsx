import { ArrowDownRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HomeHeroVisual } from "@/components/sections/home-hero-visual";
import { Reveal } from "@/components/motion/reveal";

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero-meta">
          <span>NODUM / INGENIERÍA DE SISTEMAS</span>
          <span>OPERACIONES · PRODUCTO · DESARROLLO</span>
        </div>
        <div className="home-hero-grid">
          <Reveal className="home-hero-copy" delay={0.04}>
            <Eyebrow>Tecnología para problemas reales</Eyebrow>
            <h1>
              Convertimos problemas operativos en{" "}
              <span>soluciones tecnológicas.</span>
            </h1>
            <p className="home-hero-description">
              Desarrollamos sistemas inteligentes para optimizar operaciones,
              controlar procesos y ayudar a las empresas a crecer.
            </p>
            <div className="home-hero-actions">
              <ButtonLink href="/wms">Explorar NODUM WMS</ButtonLink>
              <ButtonLink href="/soluciones" variant="secondary">
                Conocer nuestras soluciones
              </ButtonLink>
            </div>
            <a className="home-hero-scroll" href="#wms">
              <ArrowDownRight aria-hidden="true" />
              <span>Producto principal / NODUM WMS</span>
            </a>
          </Reveal>
          <HomeHeroVisual />
        </div>
        <div className="home-hero-baseline">
          <span>01 — SISTEMAS QUE RESPONDEN A LA OPERACIÓN</span>
          <span>DESDE EL PROCESO. HACIA EL PROGRESO.</span>
        </div>
      </div>
    </section>
  );
}
