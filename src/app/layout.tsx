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
  title: "ISA'S MARKETING DIGITAL - Agencia de Publicidad + IA",
  description:
    "Agencia de marketing digital especializada en publicidad, redes sociales, páginas web y automatizaciones con IA. Más de 6 años de experiencia.",
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
