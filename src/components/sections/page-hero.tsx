import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  breadcrumb?: string;
};

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>
          {title}
          {highlight ? (
            <>
              {" "}
              <span>{highlight}</span>
            </>
          ) : null}
        </h1>
        <p className="page-hero-description">{description}</p>
        {primaryAction || secondaryAction ? (
          <div className="page-hero-actions">
            {primaryAction ? (
              <ButtonLink href={primaryAction.href}>
                {primaryAction.label}
              </ButtonLink>
            ) : null}
            {secondaryAction ? (
              <ButtonLink href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
        {breadcrumb ? (
          <nav aria-label="Ruta de navegación" className="breadcrumb">
            <Link href="/">Inicio</Link>
            <ChevronRight aria-hidden="true" />
            <span aria-current="page">{breadcrumb}</span>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
