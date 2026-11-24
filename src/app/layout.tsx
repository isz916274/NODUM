import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";
import "@/styles/homepage.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    <html className={`${geist.variable} ${geistMono.variable}`} lang="es-MX">
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
