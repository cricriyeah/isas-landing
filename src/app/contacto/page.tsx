import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contacto | ISA'S Marketing Digital",
    description: "Contáctanos para impulsar tu negocio con marketing digital, desarrollo web y automatizaciones con IA en La Paz, B.C.S.",
};
import { FiSend, FiUsers, FiStar, FiClock, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaBolt } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Contacto() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.contactHero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge} data-aos="fade-down">
                        <FaBolt size={12} />
                        <span>Respuesta en menos de 1 hora</span>
                    </div>
                    <h1 className={styles.contactHeroTitle} data-aos="fade-up" data-aos-delay="100">HABLEMOS DE TU PROYECTO</h1>
                    <p className={styles.contactHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Estamos listos para transformar tus ideas en resultados reales. Cuéntanos tu visión y te responderemos en menos de 1 hora.
                    </p>
                    <div className={styles.heroCtaGroup} data-aos="fade-up" data-aos-delay="300">
                        <a href="#contactForm" className={styles.heroCta}>
                            <FiSend size={16} />
                            <span>ENVIAR MENSAJE</span>
                        </a>
                        <a href="https://wa.me/526122195577" className={`${styles.heroCta} ${styles.heroCtaSecondary}`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={16} />
                            <span>WHATSAPP DIRECTO</span>
                        </a>
                    </div>
                    <div className={styles.heroFeatures} data-aos="fade-up" data-aos-delay="400">
                        <div className={styles.heroFeature}>
                            <div className={styles.heroFeatureIcon}><FiUsers size={16} /></div>
                            <div className={styles.heroFeatureText}>
                                <div className={styles.heroFeatureTitle}>Clientes satisfechos</div>
                                <div className={styles.heroFeatureValue}>+150</div>
                            </div>
                        </div>
                        <div className={styles.heroFeature}>
                            <div className={styles.heroFeatureIcon}><FiStar size={16} /></div>
                            <div className={styles.heroFeatureText}>
                                <div className={styles.heroFeatureTitle}>Valoración</div>
                                <div className={styles.heroFeatureValue}>5.0/5.0</div>
                            </div>
                        </div>
                        <div className={styles.heroFeature}>
                            <div className={styles.heroFeatureIcon}><FiClock size={16} /></div>
                            <div className={styles.heroFeatureText}>
                                <div className={styles.heroFeatureTitle}>Tiempo respuesta</div>
                                <div className={styles.heroFeatureValue}>&lt; 1h</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className={styles.contactMain}>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactFormContainer} data-aos="fade-right">
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
                            <p className={styles.formDescription}>Completa el formulario y nos pondremos en contacto contigo pronto</p>
                        </div>
                        <ContactForm />
                    </div>

                    <div className={styles.contactSidebar} data-aos="fade-left" data-aos-delay="200">
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoCardTitle}>Información de contacto</h3>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><FiPhone size={16} /></div>
                                <div className={styles.infoContent}>
                                    <h4 className={styles.infoTitle}>Teléfono</h4>
                                    <p className={styles.infoText}><a href="tel:+526122195577">612 219 5577</a></p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><FiMail size={16} /></div>
                                <div className={styles.infoContent}>
                                    <h4 className={styles.infoTitle}>Email</h4>
                                    <p className={styles.infoText}><a href="mailto:info@isasmkt.com">info@isasmkt.com</a></p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><FiMapPin size={16} /></div>
                                <div className={styles.infoContent}>
                                    <h4 className={styles.infoTitle}>Ubicación</h4>
                                    <p className={styles.infoText}>Calle Toronja Esq. Blvd. Colosio<br />Col. Indeco, La Paz<br />Baja California Sur, México</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><FiClock size={16} /></div>
                                <div className={styles.infoContent}>
                                    <h4 className={styles.infoTitle}>Horario</h4>
                                    <p className={styles.infoText}>Lunes - Viernes: 9:00 AM - 6:00 PM<br />Sábados: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.socialCard}>
                            <h3 className={styles.socialCardTitle}>Síguenos en redes</h3>
                            <div className={styles.socialLinks}>
                                <a href="https://facebook.com/MARKETINGDIGITALISAS" className={styles.socialLink} target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebookF size={15} /></a>
                                <a href="https://wa.me/526122195577" className={styles.socialLink} target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp size={15} /></a>
                                <a href="https://instagram.com/ISASMARKETING.DIGITAL" className={styles.socialLink} target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram size={15} /></a>
                                <a href="https://tiktok.com/@isas.marketing.of" className={styles.socialLink} target="_blank" rel="noopener noreferrer" title="TikTok"><FaTiktok size={14} /></a>
                                <a href="#" className={styles.socialLink} title="LinkedIn"><FaLinkedinIn size={15} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
