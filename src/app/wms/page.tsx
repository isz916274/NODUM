import type { Metadata } from "next";
import { Boxes, ClipboardList, ScanLine } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { WmsVisual } from "@/components/sections/wms-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceFeature } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "WMS para pequeñas fábricas manufactureras",
  description:
    "Controla inventarios, movimientos, trazabilidad, entradas y salidas con un sistema de gestión de almacén enfocado en pequeñas fábricas manufactureras.",
  openGraph: {
    title: "WMS para pequeñas fábricas manufactureras | NODUM",
    description:
      "Una visión clara de inventarios, movimientos y operaciones de almacén.",
  },
};

const wmsFeatures = [
  {
    icon: "workflow",
    title: "Entradas y salidas",
    description:
      "Registra el movimiento de materiales para mantener un seguimiento ordenado de la operación.",
  },
  {
    icon: "layers",
    title: "Inventario y ubicaciones",
    description:
      "Organiza la información de existencias y ubicaciones que tu equipo necesita consultar.",
  },
  {
    icon: "settings",
    title: "Trazabilidad operativa",
    description:
      "Conserva el contexto de los movimientos para entender el recorrido de los materiales.",
  },
] satisfies ServiceFeature[];

const warehouseActivities = [
  "Registro de entradas y recepciones",
  "Organización de ubicaciones de almacén",
  "Consulta y control de existencias",
  "Seguimiento de movimientos internos",
  "Registro de salidas y despachos",
  "Trazabilidad de las operaciones registradas",
];

export default function WmsPage() {
  return (
    <main id="contenido">
      <PageHero
        breadcrumb="WMS"
        description="Un sistema de gestión de almacén pensado para pequeñas fábricas manufactureras que necesitan controlar inventarios, movimientos y trazabilidad."
        eyebrow="Sistema de gestión de almacén"
        highlight="con más claridad."
        primaryAction={{ label: "Solicitar diagnóstico", href: "/diagnostico" }}
        secondaryAction={{ label: "Hablar con el equipo", href: "/contacto" }}
        title="Cada movimiento cuenta."
      />
      <section className="container section section-border">
        <div className="section-head">
          <SectionHeading
            description="Un esquema para ilustrar cómo se conectan las etapas habituales de un flujo de almacén."
            eyebrow="Una operación conectada"
            title="Del ingreso del material a su salida."
          />
        </div>
        <WmsVisual />
      </section>
      <section className="container section section-border">
        <div className="section-head">
          <SectionHeading
            description="El sistema se enfoca en las tareas esenciales para dar seguimiento al almacén de una operación manufacturera."
            eyebrow="Capacidades"
            title="La información clave, en su contexto."
          />
        </div>
        <FeatureGrid items={wmsFeatures} />
      </section>
      <section className="container section section-border">
        <div className="service-layout">
          <div className="service-layout-copy">
            <h2>Visibilidad en las tareas cotidianas del almacén.</h2>
            <p>
              Organiza la información que acompaña al movimiento de materiales.
              El alcance y la configuración se revisan de acuerdo con las
              características de cada operación.
            </p>
            <div className="capability-list">
              {warehouseActivities.map((activity, index) => {
                const Icon = [ClipboardList, ScanLine, Boxes][index % 3];

                return (
                  <div className="capability-item" key={activity}>
                    <Icon aria-hidden="true" />
                    <span>{activity}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <aside className="service-side-note">
            <span>Para quién</span>
            <p>
              Pequeñas fábricas manufactureras que buscan ordenar el control
              del inventario y los movimientos de su almacén.
            </p>
            <span>Próximo paso</span>
            <p>
              Comparte cómo opera hoy tu almacén para revisar si el sistema se
              adapta a tus necesidades.
            </p>
          </aside>
        </div>
      </section>
      <section className="section">
        <CtaBand
          description="Cada almacén tiene sus propios flujos. Revisemos los tuyos antes de definir el siguiente paso."
          title="¿Quieres ordenar la operación de tu almacén?"
        />
      </section>
    </main>
  );
}
