import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { LeadForm } from "@/components/sections/lead-form";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Diagnóstico de necesidades tecnológicas",
  description:
    "Describe tu proceso, reto de almacén o proyecto digital para iniciar una conversación sobre las necesidades de tu empresa.",
  openGraph: {
    title: "Diagnóstico de necesidades tecnológicas | NODUM",
    description:
      "Comparte el contexto de tu operación o proyecto para definir un siguiente paso.",
  },
};

export default function DiagnosticPage() {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb="Diagnóstico"
        description="Describe cómo funciona hoy el proceso y qué te gustaría cambiar. Con ese contexto podremos conversar sobre un primer alcance."
        eyebrow="Empecemos por el contexto"
        highlight="por entender."
        title="Cada solución empieza"
      />
      <section className="container section section-border">
        <div className="contact-grid">
          <aside className="contact-aside">
            <h2>Un punto de partida claro.</h2>
            <p>
              No necesitas tener una solución definida. Ayúdanos a entender el
              proceso, quiénes participan y dónde está la dificultad.
            </p>
            <div className="contact-aside-note">
              <ClipboardCheck aria-hidden="true" />
              <p>
                Describe el proceso con el nivel de detalle que te resulte
                cómodo. No incluyas información confidencial.
              </p>
            </div>
          </aside>
          <LeadForm variant="diagnostic" />
        </div>
      </section>
    </main>
  );
}
