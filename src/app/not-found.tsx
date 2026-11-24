import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <main className="not-found" id="contenido">
      <div className="not-found-inner">
        <Eyebrow>Página no encontrada</Eyebrow>
        <h1>Este camino no existe.</h1>
        <p>
          La dirección puede haber cambiado o no estar disponible. Puedes
          volver al inicio y continuar desde allí.
        </p>
        <ButtonLink href="/">Volver al inicio</ButtonLink>
      </div>
    </main>
  );
}
