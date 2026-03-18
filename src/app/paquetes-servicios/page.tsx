"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiPackage, FiCheck, FiStar, FiZap, FiAward, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function PaquetesServicios() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay was prevented by the browser:", error);
            });
        }
    }, []);

    const webPackages = [
        {
            title: "Landing + Bot IA",
            price: "$6,500",
            subtitle: "Implementación inicial",
            icon: <FiZap size={28} />,
            features: [
                "Creación de Página Web Básica",
                "Desarrollo y Setup de Bot IA",
                "Mantenimiento Bot: $1,600/mes",
                "Dominio gratis (1er año)",
                "Hosting e infraestructura",
                "Correos profesionales"
            ],
            highlight: false,
            delay: "100"
        },
        {
            title: "Página Web Completa",
            price: "$8,500",
            subtitle: "Un solo pago",
            icon: <FiStar size={28} />,
            features: [
                "Diseño adaptado a necesidades",
                "Sistema de agendado de citas",
                "Formulario de contacto dinámico",
                "Galería de imágenes profesional",
                "Sección de servicios detallada",
                "Dominio y Hosting incluidos",
                "Correos profesionales"
            ],
            highlight: true,
            delay: "200"
        },
        {
            title: "Bot de IA",
            price: "$1,800/mes",
            subtitle: "Solo suscripción",
            icon: <FiZap size={28} />,
            features: [
                "Atención 24/7 sin interrupciones",
                "Integración con WhatsApp Business",
                "Entrenamiento personalizado",
                "Calificación automática de leads",
                "Transferencia a humanos",
                "Soporte técnico continuo",
                "Optimización mensual"
            ],
            highlight: false,
            delay: "300"
        }
    ];

    const businessPackages = [
        {
            title: "Digitaliza y Automatiza",
            price: "$80,000+",
            subtitle: "Inversión mínima",
            icon: <FiZap size={28} />,
            features: [
                "Digitaliza 1 - 6+ Sucursales",
                "Punto de Venta e Inventario",
                "CRM y Gestión de Franquicias",
                "Página Web + Chatbot IA",
                "Control desde una plataforma",
                "Embudos de Venta Automatizados",
                "Ideal para negocios en expansión"
            ],
            highlight: true,
            delay: "100"
        },
        {
            title: "Ventas Empresarial",
            price: "$97,000",
            subtitle: "+ $19,400/mes (Seguimiento)",
            icon: <FiAward size={28} />,
            features: [
                "Sistema de Ventas Empresarial",
                "Automatización WhatsApp CRM",
                "Publicidad en FB, IG y TikTok",
                "Seguimiento Automático de Leads",
                "Dashboard de Resultados en vivo",
                "Máxima Conversión y Control",
                "Acompañamiento Estratégico"
            ],
            highlight: false,
            delay: "200"
        }
    ];

    const socialMediaPackages = [
        {
            title: "Paquete Básico",
            price: "$1,800",
            subtitle: "Manejo Mensual",
            icon: <FiZap size={28} />,
            features: [
                "4 Publicaciones Orgánicas",
                "1 Anuncio Publicitario Efectivo",
                "Vinculación con WhatsApp Business",
                "Asesoría de Marketing Inicial"
            ],
            highlight: false,
            variant: "basic",
            delay: "100"
        },
        {
            title: "Paquete Oro",
            price: "$4,300",
            subtitle: "Manejo Mensual",
            icon: <FiStar size={28} />,
            features: [
                "3 Anuncios Publicitarios Efectivos",
                "Asesoría de Marketing",
                "4 Ediciones Especiales",
                "Branding para Contenido Redes",
                "Presentación de Resultados",
                "Vinculación con WhatsApp Business"
            ],
            highlight: false,
            variant: "gold",
            delay: "200"
        },
        {
            title: "Paquete Diamante",
            price: "$6,300",
            subtitle: "Manejo Mensual",
            icon: <FiAward size={28} />,
            features: [
                "10 Publicaciones Orgánicas",
                "4 Anuncios Publicitarios Efectivos",
                "Vinculación con WhatsApp Business",
                "Asesorías de Marketing",
                "Edición Especial",
                "Branding para Contenido Redes",
                "Presentación de Resultados"
            ],
            highlight: true,
            variant: "diamond",
            platforms: true,
            delay: "300"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className={styles.serviceHero}>
                <video ref={videoRef} className={styles.serviceHeroVideo} muted loop playsInline autoPlay>
                    <source src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1773788560/7552421-hd_1920_1080_25fps_cnwyv9.mp4" type="video/mp4" />
                </video>
                <div className={styles.serviceHeroContent}>
                    <div className={styles.serviceIconLarge} data-aos="fade-down"><FiPackage size={28} /></div>
                    <h1 className={styles.serviceHeroTitle} data-aos="fade-up" data-aos-delay="100">PAQUETES DE SERVICIOS</h1>
                    <p className={styles.serviceHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Soluciones diseñadas para escalar tu presencia digital. Elige el plan que mejor se adapte a tus necesidades y objetivos de negocio.
                    </p>
                </div>
            </section>

            {/* Web & IA Section */}
            <section className={styles.serviceDetailSection}>
                <div className={styles.serviceContainer}>
                    <div className={styles.categoryHeader} data-aos="fade-up">
                        <h2 className={styles.categoryTitle}>PÁGINAS WEB Y SOLUCIONES IA</h2>
                        <div className={styles.titleUnderline}></div>
                    </div>

                    <div className={styles.packagesGrid}>
                        {webPackages.map((pkg, index) => (
                            <div 
                                key={index} 
                                className={`${styles.pricingCard} ${pkg.highlight ? styles.highlightCard : ""}`}
                                data-aos="fade-up" 
                                data-aos-delay={pkg.delay}
                            >
                                {pkg.highlight && <div className={styles.popularBadge}>MÁS POPULAR</div>}
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIconWrapper}>
                                        {pkg.icon}
                                    </div>
                                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                    <div className={styles.priceTag}>{pkg.price}</div>
                                    {pkg.subtitle && <p className={styles.monthlyFee}>{pkg.subtitle}</p>}
                                </div>
                                <ul className={styles.featureList}>
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={styles.featureItem}>
                                            <FiCheck className={styles.checkIcon} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className={styles.cardButton}>
                                    SOLICITAR INFORMACIÓN
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Systems Section */}
            <section className={`${styles.serviceDetailSection} ${styles.blueBgSection}`}>
                <div className={styles.serviceContainer}>
                    <div className={styles.categoryHeader} data-aos="fade-up">
                        <h2 className={styles.categoryTitle}>SISTEMAS EMPRESARIALES</h2>
                        <div className={styles.titleUnderline}></div>
                    </div>

                    <div className={styles.packagesGrid}>
                        {businessPackages.map((pkg, index) => (
                            <div 
                                key={index} 
                                className={`${styles.pricingCard} ${pkg.highlight ? styles.highlightCard : ""}`}
                                data-aos="fade-up" 
                                data-aos-delay={pkg.delay}
                            >
                                {pkg.highlight && <div className={styles.popularBadge}>MÁS POPULAR</div>}
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIconWrapper}>
                                        {pkg.icon}
                                    </div>
                                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                    <div className={styles.priceTag}>{pkg.price}</div>
                                    {pkg.subtitle && <p className={styles.monthlyFee}>{pkg.subtitle}</p>}
                                </div>
                                <ul className={styles.featureList}>
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={styles.featureItem}>
                                            <FiCheck className={styles.checkIcon} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className={styles.cardButton}>
                                    SOLICITAR INFORMACIÓN
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className={styles.serviceDetailSection}>
                <div className={styles.serviceContainer}>
                    <div className={styles.categoryHeader} data-aos="fade-up">
                        <h2 className={styles.categoryTitle}>MANEJO DE REDES SOCIALES</h2>
                        <div className={styles.titleUnderline}></div>
                    </div>

                    <div className={styles.packagesGrid}>
                        {socialMediaPackages.map((pkg, index) => (
                            <div 
                                key={index} 
                                className={`${styles.pricingCard} ${pkg.highlight ? styles.highlightCard : ""} ${pkg.variant === "diamond" ? styles.diamondCard : ""} ${pkg.variant === "gold" ? styles.goldCard : ""}`}
                                data-aos="fade-up" 
                                data-aos-delay={pkg.delay}
                            >
                                {pkg.highlight && (
                                    <div className={pkg.variant === "diamond" ? styles.diamondBadge : (pkg.variant === "gold" ? styles.goldBadge : styles.popularBadge)}>
                                        PREMIUM
                                    </div>
                                )}
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.cardIconWrapper} ${pkg.variant === "diamond" ? styles.diamondIcon : (pkg.variant === "gold" ? styles.goldIcon : "")}`}>
                                        {pkg.icon}
                                    </div>
                                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                                    {pkg.platforms && (
                                        <div className={styles.platformIcons}>
                                            <FiFacebook />
                                            <FiInstagram />
                                            <FaTiktok />
                                        </div>
                                    )}
                                    <div className={styles.priceTag}>{pkg.price}</div>
                                    {pkg.subtitle && <p className={styles.monthlyFee}>{pkg.subtitle}</p>}
                                </div>
                                <ul className={styles.featureList}>
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className={styles.featureItem}>
                                            <FiCheck className={`${styles.checkIcon} ${pkg.variant === "diamond" ? styles.diamondCheck : (pkg.variant === "gold" ? styles.goldCheck : "")}`} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className={styles.cardButton}>
                                    SOLICITAR INFORMACIÓN
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className={styles.serviceCtaSection}>
                <div className={styles.serviceCtaContainer} data-aos="zoom-in">
                    <h2 className={styles.serviceCtaTitle}>¿NECESITAS UN PLAN A MEDIDA?</h2>
                    <p className={styles.serviceCtaText}>
                        Si ninguno de nuestros paquetes estándar se ajusta a lo que buscas, podemos crear una propuesta personalizada para tu empresa.
                    </p>
                    <Link href="/contacto" className={styles.serviceCtaButton}>CONTÁCTANOS AHORA</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
