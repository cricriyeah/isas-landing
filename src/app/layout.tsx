import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AOSProvider from "@/components/AOSProvider/AOSProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
  description: "Agencia de marketing digital en La Paz B.C.S. especializada en redes sociales, páginas web, desarrollo de software, y automatizaciones con IA. Impulsa tu marca con estrategias que generan resultados.",
  keywords: ["Agencia de marketing", "Marketing Digital", "La Paz BCS", "Desarrollo Web", "Páginas Web", "Inteligencia Artificial", "Gestión de Redes Sociales", "Consultoría", "Software", "Automatización"],
  authors: [{ name: "ISA'S Agencia Digital" }],
  creator: "ISA'S Agencia Digital",
  publisher: "ISA'S Agencia Digital",
  openGraph: {
    title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    description: "Expertos en Marketing Digital, Automatización con Inteligencia Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio.",
    url: "https://isasmarketing.com",
    siteName: "ISA'S Agencia Digital",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISA'S AGENCIA DIGITAL - Agencia de Publicidad + IA",
    description: "Lleva tu negocio al siguiente nivel con marketing digital avanzado e inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head></head>
      <body className={montserrat.variable}>
        <AOSProvider>
          <Navbar />
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
