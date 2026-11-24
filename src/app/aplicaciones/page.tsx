import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicePages } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Desarrollo de aplicaciones móviles y de escritorio",
  description:
    "Aplicaciones móviles y de escritorio para equipos, tareas y procesos de trabajo específicos.",
  openGraph: {
    title: "Desarrollo de aplicaciones | NODUM",
    description:
      "Herramientas móviles y de escritorio diseñadas para cada contexto de uso.",
  },
};

export default function ApplicationsPage() {
  return <ServicePageTemplate content={servicePages.applications} />;
}
