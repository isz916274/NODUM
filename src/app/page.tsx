import type { Metadata } from "next";
import { HomeCta } from "@/components/sections/home-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { MethodologySection } from "@/components/sections/methodology-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WmsShowcase } from "@/components/sections/wms-showcase";

export const metadata: Metadata = {
  title: {
    absolute: "NODUM — Soluciones tecnológicas para operaciones empresariales",
  },
  description:
    "Convertimos problemas operativos en soluciones tecnológicas. Conoce NODUM WMS y nuestros servicios de software, aplicaciones, desarrollo web y automatización.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "NODUM",
    title: "NODUM — Soluciones tecnológicas para operaciones empresariales",
    description:
      "Desarrollamos sistemas para optimizar operaciones, controlar procesos y ayudar a las empresas a crecer.",
  },
};

export default function Home() {
  return (
    <main id="contenido">
      <HomeHero />
      <WmsShowcase />
      <ProblemSection />
      <SolutionsSection />
      <ServicesSection />
      <MethodologySection />
      <HomeCta />
    </main>
  );
}
