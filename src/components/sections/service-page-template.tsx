import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServicePageContent } from "@/content/service-pages";

export function ServicePageTemplate({
  content,
}: {
  content: ServicePageContent;
}) {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb={content.eyebrow}
        description={content.description}
        eyebrow="Soluciones digitales"
        highlight={content.highlight}
        primaryAction={{ label: "Platicar sobre mi proyecto", href: "/contacto" }}
        secondaryAction={{ label: "Solicitar diagnóstico", href: "/diagnostico" }}
        title={content.title}
      />
      <section className="container section section-border">
        <div className="section-head">
          <SectionHeading
            description={content.sectionDescription}
            eyebrow={content.sectionEyebrow}
            title={content.sectionTitle}
          />
        </div>
        <FeatureGrid items={content.features} />
      </section>
      <section className="container section section-border">
        <div className="service-layout">
          <div className="service-layout-copy">
            <h2>{content.detailTitle}</h2>
            <p>{content.detailDescription}</p>
            <div className="capability-list">
              {content.capabilities.map((capability) => (
                <div className="capability-item" key={capability}>
                  <Check aria-hidden="true" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="service-side-note">
            <span>{content.noteTitle}</span>
            <p>{content.note}</p>
            <Link className="text-link" href="/soluciones">
              Ver todas las soluciones
              <ArrowRight aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
      <section className="section">
        <CtaBand
          description={content.ctaDescription}
          title={content.ctaTitle}
        />
      </section>
    </main>
  );
}
