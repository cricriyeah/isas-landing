import Link from "next/link";
import { FiSmartphone, FiVideo, FiTrendingUp, FiArrowRight, FiUsers, FiMonitor } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function GestionRedesSociales() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.serviceHero}>
                <video className={styles.heroVideo} autoPlay muted loop playsInline>
                    <source src="/redes.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}></div>
                <div className={styles.serviceHeroContent}>
                    <h1 className={styles.serviceHeroTitle} data-aos="fade-down">GESTIÓN DE REDES SOCIALES</h1>
                    <p className={styles.serviceHeroSubtitle} data-aos="fade-up" data-aos-delay="150">
                        Potenciamos tu presencia digital, con nuestra metodología, estrategia de
                        contenido, que permiten conectar con tu cliente potencial y acercarte a más
                        cierres de venta.
                    </p>
                </div>
            </section>

            {/* Service Detail Section */}
            <section className={styles.serviceDetailSection}>
                <div className={styles.serviceContainer}>
                    <div className={styles.introText} data-aos="fade-up">
                        <h2>Transformamos tu presencia digital</h2>
                        <p>
                            Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles.
                            Nuestro equipo trabaja cada detalle para que tu marca destaque en el competitivo mundo digital.
                        </p>
                    </div>

                    <div className={styles.minimalGrid}>
                        <div className={styles.minimalItem} data-aos="fade-up" data-aos-delay="100">
                            <FiSmartphone className={styles.minimalIcon} />
                            <div className={styles.minimalContent}>
                                <h3>Redes Sociales Profesionales</h3>
                                <p>Manejo experto de redes sociales incluyendo Facebook, Instagram y WhatsApp Business, optimizados para tu modelo de negocio.</p>
                            </div>
                        </div>
                        <div className={styles.minimalItem} data-aos="fade-up" data-aos-delay="200">
                            <FiUsers className={styles.minimalIcon} />
                            <div className={styles.minimalContent}>
                                <h3>Community Manager Dedicado</h3>
                                <p>Interacción profesional y moderación activa con tu comunidad para fortalecer las relaciones con tus clientes en tiempo real.</p>
                            </div>
                        </div>
                        <div className={styles.minimalItem} data-aos="fade-up" data-aos-delay="300">
                            <FiTrendingUp className={styles.minimalIcon} />
                            <div className={styles.minimalContent}>
                                <h3>Post Digitales Estratégicos</h3>
                                <p>Paquetes de contenido visualmente atractivos y diseñados específicamente para generar alto engagement y conversión.</p>
                            </div>
                        </div>
                        <div className={styles.minimalItem} data-aos="fade-up" data-aos-delay="400">
                            <FiVideo className={styles.minimalIcon} />
                            <div className={styles.minimalContent}>
                                <h3>Producción de Video</h3>
                                <p>Videos digitales y reels de alta calidad que capturan la atención de tu audiencia en los primeros segundos.</p>
                            </div>
                        </div>
                        <div className={styles.minimalItem} data-aos="fade-up" data-aos-delay="500">
                            <FiMonitor className={styles.minimalIcon} />
                            <div className={styles.minimalContent}>
                                <h3>Soluciones Digitales Adicionales</h3>
                                <p>También ofrecemos tarjetas digitales inteligentes y minipáginas de aterrizaje altamente convertidoras. <Link href="/contacto" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>¿Te interesa? Contáctanos <FiArrowRight style={{ verticalAlign: 'middle' }} /></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.serviceCtaSection}>
                <div className={styles.serviceCtaContainer} data-aos="zoom-in">
                    <h2 className={styles.serviceCtaTitle}>¿Listo para transformar tus redes sociales?</h2>
                    <p className={styles.serviceCtaText}>
                        Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudar a tu negocio
                        a destacar en el mundo digital.
                    </p>
                    <Link href="/contacto" className={styles.serviceCtaButton}>SOLICITAR CONSULTA GRATUITA</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
