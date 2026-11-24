import type { Metadata } from "next";
import { MessageSquareText } from "lucide-react";
import { LeadForm } from "@/components/sections/lead-form";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a NODUM sobre el WMS para manufactura o servicios de desarrollo de software, web y aplicaciones.",
  openGraph: {
    title: "Contacto | NODUM",
    description:
      "Cuéntanos qué necesitas resolver o desarrollar en tu empresa.",
  },
};

export default function ContactPage() {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb="Contacto"
        description="Cuéntanos brevemente qué necesita tu empresa. Te pediremos solo la información necesaria para entender tu solicitud."
        eyebrow="Hablemos"
        highlight="en marcha."
        title="Una buena conversación pone las ideas"
      />
      <section className="container section section-border">
        <div className="contact-grid">
          <aside className="contact-aside">
            <h2>¿Qué tienes en mente?</h2>
            <p>
              Puede ser una necesidad de almacén, un proceso que quieras
              digitalizar o una aplicación que necesites desarrollar.
            </p>
            <div className="contact-aside-note">
              <MessageSquareText aria-hidden="true" />
              <p>
                Comparte solo la información necesaria para describir tu
                solicitud. Evita enviar contraseñas o datos confidenciales.
              </p>
            </div>
          </aside>
          <LeadForm variant="contact" />
        </div>
      </section>
    </main>
  );
}
