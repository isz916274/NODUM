import { methodology } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function MethodologySection() {
  return (
    <section aria-labelledby="methodology-title" className="home-section home-methodology">
      <div className="container">
        <div className="home-section-index">
          <span>05</span>
          <span>METODOLOGÍA</span>
          <span>DEL RETO A LA EVOLUCIÓN</span>
        </div>
        <div className="home-section-heading home-methodology-heading">
          <Reveal>
            <Eyebrow>Un proceso claro</Eyebrow>
            <h2 id="methodology-title">
              Buenas soluciones empiezan con buenas preguntas.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Avanzamos contigo desde la comprensión del problema hasta el
              soporte de la solución.
            </p>
          </Reveal>
        </div>
        <ol className="methodology-list">
          {methodology.map((step, index) => (
            <li className="methodology-step-wrap" key={step.number}>
              <Reveal className="methodology-step" delay={index * 0.04}>
                <span className="methodology-step-marker">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
