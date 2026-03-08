import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Páginas Web e IA | ISA'S Marketing Digital",
    description: "Soluciones de desarrollo de software, creación de páginas web y aplicaciones móviles equipadas con automatizaciones de inteligencia artificial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
