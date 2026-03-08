"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiCode, FiLayout, FiServer, FiSmartphone, FiMonitor, FiShoppingCart, FiCpu, FiUsers } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function PaginasWebIA() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Start the video 5 seconds ahead
        if (videoRef.current) {
            videoRef.current.currentTime = 5;
            videoRef.current.play().catch(error => {
                console.log("Video autoplay was prevented by the browser:", error);
            });
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className={styles.serviceHero}>
                <video ref={videoRef} className={styles.serviceHeroVideo} muted loop playsInline>
                    <source src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772947770/14519236_3840_2160_60fps_1_-_FPS_-_Videobolt.net_dqtpqx.mp4" type="video/mp4" />
                </video>
                <div className={styles.serviceHeroContent}>
                    <div className={styles.serviceIconLarge} data-aos="fade-down"><FiCode size={28} /></div>
                    <h1 className={styles.serviceHeroTitle} data-aos="fade-up" data-aos-delay="100">DESARROLLO DE SOFTWARE + IA</h1>
                    <p className={styles.serviceHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Desarrollo de soluciones de software moderno y soluciones de automatización con inteligencia artificial para optimizar procesos y mejorar la experiencia del usuario.
                    </p>
                </div>
            </section>

            {/* Service Detail Section */}
            <section className={styles.serviceDetailSection}>
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceTextIntro} data-aos="fade-up">
                        <h2>SOLUCIONES DE SOFTWARE INTELIGENTES</h2>
                        <p>
                            Desarrollamos tecnología de última generación, optimizada para conversión y equipada con herramientas avanzadas. Cada proyecto es una combinación de diseño excepcional, funcionalidad robusta y tecnología de punta.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.modernCardIconWrapper}>
                                <FiLayout size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Páginas Web</h3>
                            <p className={styles.modernCardDesc}>Diseño y desarrollo responsivo, desde corporativos hasta landing pages de alta conversión.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.modernCardIconWrapper}>
                                <FiServer size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Software Empresarial</h3>
                            <p className={styles.modernCardDesc}>Soluciones tecnológicas escalables para digitalizar y optimizar tus operaciones.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="300">
                            <div className={styles.modernCardIconWrapper}>
                                <FiSmartphone size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Apps Móviles</h3>
                            <p className={styles.modernCardDesc}>Desarrollo nativo e híbrido para iOS y Android centrado en la mejor experiencia de usuario.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="400">
                            <div className={styles.modernCardIconWrapper}>
                                <FiCode size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Apps a Medida</h3>
                            <p className={styles.modernCardDesc}>Sistemas personalizados diseñados específicamente para resolver los retos únicos de tu negocio.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="500">
                            <div className={styles.modernCardIconWrapper}>
                                <FiMonitor size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Sistemas POS</h3>
                            <p className={styles.modernCardDesc}>Punto de venta, control de inventario, ventas y facturación para negocios físicos o híbridos.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="600">
                            <div className={styles.modernCardIconWrapper}>
                                <FiShoppingCart size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>E-Commerce</h3>
                            <p className={styles.modernCardDesc}>Tiendas en línea completas con pasarelas de pago seguro y gestión de inventario automatizada.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="700">
                            <div className={styles.modernCardIconWrapper}>
                                <FiCpu size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Automatizaciones IA</h3>
                            <p className={styles.modernCardDesc}>Chatbots 24/7, optimización inteligente y análisis de datos predictivos.</p>
                        </div>

                        <div className={styles.modernCard} data-aos="fade-up" data-aos-delay="800">
                            <div className={styles.modernCardIconWrapper}>
                                <FiUsers size={28} className={styles.modernCardIcon} />
                            </div>
                            <h3 className={styles.modernCardTitle}>Sistemas CRM</h3>
                            <p className={styles.modernCardDesc}>Plataformas personalizadas de gestión de clientes para potenciar ventas y fidelizar a tu audiencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.serviceCtaSection}>
                <div className={styles.serviceCtaContainer} data-aos="zoom-in">
                    <h2 className={styles.serviceCtaTitle}>¿LISTO PARA LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?</h2>
                    <p className={styles.serviceCtaText}>
                        Contáctanos para crear tu página web inteligente con automatizaciones que trabajan por ti las 24 horas.
                    </p>
                    <Link href="/contacto" className={styles.serviceCtaButton}>SOLICITAR COTIZACIÓN</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
