import { ArrowUpRight } from "lucide-react";
import { operationalProblems } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ProblemSection() {
  return (
    <section aria-labelledby="problems-title" className="home-section home-problems">
      <div className="container">
        <div className="home-section-index">
          <span>02</span>
          <span>PROBLEMAS QUE RESOLVEMOS</span>
          <span>OPERACIÓN → TECNOLOGÍA</span>
        </div>
        <div className="home-section-heading home-problems-heading">
          <Reveal>
            <Eyebrow>Menos fricción. Más control.</Eyebrow>
            <h2 id="problems-title">
              El problema operativo es el punto de partida.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              La solución depende del proceso. Identificamos qué puede
              resolverse con un producto y qué necesita una herramienta propia.
            </p>
          </Reveal>
        </div>
        <div className="problem-list" role="list">
          {operationalProblems.map((item, index) => (
            <Reveal className="problem-row-wrap" delay={index * 0.035} key={item.number}>
              <article className="problem-row" role="listitem">
                <span className="problem-number">{item.number}</span>
                <div className="problem-description">
                  <h3>{item.problem}</h3>
                  <p>{item.impact}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="problem-arrow" />
                <div className="problem-solution">
                  <span>{item.area === "WMS" ? "NODUM WMS" : "DESARROLLO A MEDIDA"}</span>
                  <p>{item.solution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
