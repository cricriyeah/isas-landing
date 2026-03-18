import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Talleres y Capacitación | ISA'S Agencia Digital",
    description: "Formación especializada en marketing digital, ventas, estoicismo e inteligencia artificial para equipos y emprendedores.",
};
import { FiMonitor } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const cursos = [
    {
        titulo: "Inteligencia Artificial",
        descripcion:
            "Aprende a integrar herramientas de IA en tu negocio y flujo de trabajo. Desde automatización de tareas hasta generación de contenido con modelos de lenguaje, te enseñamos a usar la inteligencia artificial de forma práctica para ser más productivo y competitivo.",
        temas: [
            "Fundamentos de IA aplicada al negocio",
            "Automatización de procesos con IA",
            "Generación de contenido con IA",
            "Herramientas de productividad potenciadas con IA",
        ],
        imagen: "/14.jpg",
    },
    {
        titulo: "Redes Sociales y Marketing Digital",
        descripcion:
            "Domina las plataformas digitales y aprende estrategias reales de marketing que generan resultados medibles. Desde la creación de contenido hasta la gestión de campañas publicitarias, capacita a tu equipo con las habilidades más demandadas del mercado.",
        temas: [
            "Estrategia de contenido para redes sociales",
            "Publicidad en Meta Ads y Google Ads",
            "Branding y posicionamiento de marca",
            "Análisis de métricas y optimización de campañas",
        ],
        imagen: "/15.jpg",
    },
    {
        titulo: "Estoicismo",
        descripcion:
            "Desarrolla una mentalidad resiliente y enfocada aplicando los principios del estoicismo al liderazgo y la vida empresarial. Un taller único que combina filosofía clásica con herramientas modernas de desarrollo personal y profesional.",
        temas: [
            "Principios estoicos aplicados al liderazgo",
            "Control emocional y toma de decisiones",
            "Resiliencia y manejo del estrés",
            "Filosofía práctica para emprendedores",
        ],
        imagen: "/16.jpg",
    },
    {
        titulo: "Ventas",
        descripcion:
            "Domina las técnicas de venta más efectivas del mercado actual. Desde la prospección hasta el cierre, aprende a construir relaciones con clientes, manejar objeciones y multiplicar tus resultados comerciales con estrategias probadas.",
        temas: [
            "Técnicas de prospección y captación de clientes",
            "Manejo de objeciones y cierre de ventas",
            "Estrategias de venta consultiva",
            "Negociación y seguimiento postventa",
        ],
        imagen: "/19.jpg",
    },
    {
        titulo: "Mujer Frente a la Cámara",
        descripcion:
            "Un taller diseñado para mujeres emprendedoras que desean proyectar confianza y autenticidad frente a la cámara. Aprende a comunicar tu mensaje con impacto, crear contenido audiovisual profesional y posicionarte como referente en tu industria.",
        temas: [
            "Comunicación efectiva y lenguaje corporal",
            "Creación de contenido en video para redes sociales",
            "Marca personal y posicionamiento digital",
            "Técnicas para perder el miedo a la cámara",
        ],
        imagen: "/21.jpeg",
    },
];

export default function TalleresCapacitacion() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.serviceHero}>
                <video className={styles.heroVideo} autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829423/7647627-hd_1920_1080_30fps_es9df7.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}></div>
                <div className={styles.serviceHeroContent}>
                    <div className={styles.serviceIconLarge} data-aos="fade-down"><FiMonitor size={28} /></div>
                    <h1 className={styles.serviceHeroTitle} data-aos="fade-up" data-aos-delay="100">TALLERES + CAPACITACIÓN</h1>
                    <p className={styles.serviceHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Formación especializada en marketing digital, ventas e inteligencia artificial para equipos y emprendedores que buscan resultados reales.
                    </p>
                </div>
            </section>

            {/* Courses Section */}
            <section className={styles.coursesSection}>
                <div className={styles.coursesContainer}>
                    <div className={styles.coursesHeader} data-aos="fade-up">
                        <h2 className={styles.coursesTitle}>NUESTROS CURSOS</h2>
                        <p className={styles.coursesSubtitle}>
                            Cada taller combina teoría con ejercicios prácticos para que puedas aplicar lo aprendido de inmediato en tu negocio.
                        </p>
                    </div>

                    <div className={styles.coursesList}>
                        {cursos.map((curso, index) => (
                            <div
                                key={index}
                                className={styles.courseCard}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={styles.courseCardInner}>
                                    {curso.imagen ? (
                                        <div className={styles.courseImagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                                            <Image src={curso.imagen} alt={curso.titulo} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 280px" />
                                        </div>
                                    ) : (
                                        <div className={styles.courseImagePlaceholder}>
                                            <span className={styles.placeholderText}>IMAGEN</span>
                                        </div>
                                    )}
                                    <div className={styles.courseContent}>
                                        <h3 className={styles.courseTitle}>{curso.titulo}</h3>
                                        <p className={styles.courseDescription}>{curso.descripcion}</p>
                                        <div className={styles.courseTopics}>
                                            {curso.temas.map((tema, i) => (
                                                <div key={i} className={styles.courseTopic}>
                                                    <span className={styles.topicCheck}>✓</span>
                                                    <span>{tema}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.courseAction}>
                                            <Link href="/contacto" className={styles.courseButton}>
                                                SOLICITAR INFO
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.serviceCtaSection}>
                <div className={styles.serviceCtaContainer} data-aos="zoom-in">
                    <h2 className={styles.serviceCtaTitle}>¿LISTO PARA CAPACITAR A TU EQUIPO?</h2>
                    <p className={styles.serviceCtaText}>
                        Solicita información sobre nuestros talleres y programas de capacitación personalizados.
                    </p>
                    <Link href="/contacto" className={styles.serviceCtaButton}>SOLICITAR INFORMACIÓN</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
