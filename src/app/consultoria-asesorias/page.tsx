import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Consultoría y Asesorías | ISA'S Agencia Digital",
    description: "Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes.",
};
import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ConsultoriaAsesorias() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.serviceHero}>
                <video className={styles.serviceHeroVideo} autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772829425/6930835-uhd_3840_2160_25fps_t7i9fl.mp4" type="video/mp4" />
                </video>
                <div className={styles.serviceHeroContent}>
                    <div className={styles.serviceIconLarge} data-aos="fade-down"><FiTrendingUp size={28} /></div>
                    <h1 className={styles.serviceHeroTitle} data-aos="fade-up" data-aos-delay="100">CONSULTORÍA + ASESORÍAS</h1>
                    <p className={styles.serviceHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Estrategias personalizadas, auditorías y planes de crecimiento para llevar tu negocio al siguiente nivel con decisiones inteligentes.
                    </p>
                </div>
            </section>

            {/* Methodology Section */}
            <section className={styles.methodologySection}>
                <div className={styles.methodologyContainer}>
                    <h2 className={styles.sectionTitle} data-aos="fade-up">NUESTRA METODOLOGÍA</h2>
                    <div className={styles.methodologySteps}>
                        <div className={styles.methodologyStep} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.methodologyCircle}>1</div>
                            <h3 className={styles.methodologyTitle}>Diagnóstico</h3>
                            <p>Analizamos tu situación actual, tu mercado y tu competencia para identificar oportunidades.</p>
                        </div>
                        <div className={styles.methodologyStep} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.methodologyCircle}>2</div>
                            <h3 className={styles.methodologyTitle}>Estrategia</h3>
                            <p>Diseñamos un plan personalizado con objetivos claros, tácticas y métricas de éxito.</p>
                        </div>
                        <div className={styles.methodologyStep} data-aos="fade-up" data-aos-delay="300">
                            <div className={styles.methodologyCircle}>3</div>
                            <h3 className={styles.methodologyTitle}>Ejecución</h3>
                            <p>Implementamos las estrategias con tu equipo, asegurando que cada acción genere impacto.</p>
                        </div>
                        <div className={styles.methodologyStep} data-aos="fade-up" data-aos-delay="400">
                            <div className={styles.methodologyCircle}>4</div>
                            <h3 className={styles.methodologyTitle}>Optimización</h3>
                            <p>Medimos resultados y ajustamos la estrategia para maximizar el retorno de inversión.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail Section */}
            <section className={styles.serviceDetailSection}>
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceContentGrid}>
                        <div className={styles.serviceTextContent} data-aos="fade-right">
                            <h2>ESTRATEGIA Y CRECIMIENTO EMPRESARIAL</h2>
                            <p>
                                Ofrecemos consultoría especializada en marketing digital, posicionamiento de marca y estrategia comercial. Nuestro enfoque combina análisis profundo, experiencia práctica y herramientas modernas para que cada decisión impulse resultados reales.
                            </p>
                            <p>
                                Trabajamos contigo de cerca, entendiendo tu mercado, tus metas y los desafíos únicos de tu negocio para diseñar planes de acción concretos y medibles.
                            </p>
                            <p>
                                Nuestras asesorías cubren desde la auditoría de tu presencia digital actual hasta la creación de roadmaps de crecimiento, incluyendo estrategias de branding, posicionamiento SEO, campañas publicitarias y optimización de procesos comerciales.
                            </p>
                        </div>

                        <div className={styles.serviceImageContent} data-aos="fade-left" data-aos-delay="200">
                            <div className={styles.serviceImagePlaceholder} data-label="Estrategia Digital">
                                <Image src="/olympus-gym.jpeg" alt="Estrategia Digital - Olympus Gym" width={400} height={300} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.serviceImagePlaceholder} data-label="Asesoría de Marca">
                                <Image src="/puertas-sanjorge.jpeg" alt="Asesoría de Marca" width={400} height={300} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.serviceCtaSection}>
                <div className={styles.serviceCtaContainer} data-aos="zoom-in">
                    <h2 className={styles.serviceCtaTitle}>¿LISTO PARA TRANSFORMAR TU NEGOCIO?</h2>
                    <p className={styles.serviceCtaText}>
                        Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos comerciales con estrategias probadas.
                    </p>
                    <Link href="/contacto" className={styles.serviceCtaButton}>AGENDAR CONSULTA GRATUITA</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
