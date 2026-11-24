import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HomeCta() {
  return (
    <section aria-labelledby="home-cta-title" className="home-cta">
      <div className="container home-cta-inner">
        <div className="home-cta-index">
          <span>06</span>
          <span>SIGUIENTE PASO</span>
        </div>
        <div className="home-cta-content">
          <div>
            <Eyebrow>Diagnóstico de procesos</Eyebrow>
            <h2 id="home-cta-title">
              La tecnología empieza por entender tu operación.
            </h2>
            <p>
              Cuéntanos qué proceso quieres mejorar. Juntos podemos definir un
              punto de partida claro para tu empresa.
            </p>
          </div>
          <Link className="home-cta-link" href="/diagnostico">
            Solicitar diagnóstico
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div aria-hidden="true" className="home-cta-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
