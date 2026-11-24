import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function CtaBand({
  eyebrow = "Siguiente paso",
  title,
  description,
  actionLabel = "Solicitar diagnóstico",
  actionHref = "/diagnostico",
}: CtaBandProps) {
  return (
    <div className="container">
      <section aria-labelledby="cta-title" className="cta-band">
        <div className="cta-band-content">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id="cta-title">{title}</h2>
            <p>{description}</p>
          </div>
          <ButtonLink href={actionHref}>{actionLabel}</ButtonLink>
        </div>
      </section>
    </div>
  );
}
