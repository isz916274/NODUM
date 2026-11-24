import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicePages } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Desarrollo de software a la medida",
  description:
    "Diseño y desarrollo de software a medida para digitalizar procesos, integrar sistemas y atender necesidades concretas de tu empresa.",
  openGraph: {
    title: "Desarrollo de software a la medida | NODUM",
    description:
      "Software creado desde las necesidades y procesos reales de tu organización.",
  },
};

export default function SoftwareDevelopmentPage() {
  return <ServicePageTemplate content={servicePages.software} />;
}
