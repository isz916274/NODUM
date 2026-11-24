import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { servicePages } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Desarrollo de plataformas web",
  description:
    "Desarrollo de plataformas y aplicaciones web empresariales con foco en experiencia de usuario, rendimiento y necesidades del negocio.",
  openGraph: {
    title: "Desarrollo de plataformas web | NODUM",
    description:
      "Experiencias y plataformas web adaptadas a objetivos empresariales.",
  },
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate content={servicePages.web} />;
}
