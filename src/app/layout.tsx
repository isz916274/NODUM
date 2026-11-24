import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tecnología que ordena y hace avanzar | NODUM",
    template: "%s | NODUM",
  },
  description:
    "Un WMS para operaciones manufactureras y desarrollo de software para empresas que necesitan tecnología a su medida.",
  applicationName: "NODUM",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "NODUM",
    title: "Tecnología que ordena y hace avanzar | NODUM",
    description:
      "Un WMS para operaciones manufactureras y desarrollo de software para empresas que necesitan tecnología a su medida.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
