import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Top: Brand + Nav + Social */}
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <Image
                            src="/logo1.png"
                            alt="ISA'S MARKETING DIGITAL"
                            width={120}
                            height={120}
                            className={styles.footerLogo}
                        />
                        <p className={styles.brandDescription}>
                            Agencia de marketing digital especializada en impulsar marcas con estrategia, creatividad e inteligencia artificial.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerHeading}>Servicios</h4>
                        <Link href="/gestion-redes-sociales">Redes Sociales</Link>
                        <Link href="/talleres-capacitacion">Talleres + Capacitación</Link>
                        <Link href="/paginas-web-ia">Desarrollo de Software + IA</Link>
                        <Link href="/consultoria-asesorias">Consultoría + Asesorías</Link>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerHeading}>Empresa</h4>
                        <Link href="/#conocenos">Conócenos</Link>
                        <Link href="/#clientes">Clientes</Link>
                        <Link href="/casos-exito">Casos de Éxito</Link>
                        <Link href="/contacto">Contacto</Link>
                    </div>

                    <div className={styles.footerContact}>
                        <h4 className={styles.footerHeading}>Contacto</h4>
                        <div className={styles.contactItem}>
                            <FiPhone size={16} />
                            <span>612 117 70 02</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FiMapPin size={16} />
                            <span>Calle Toronja esq. Blvd. Colosio, La Paz, B.C.S.</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FiClock size={16} />
                            <span>Lun - Vie: 9:00 AM - 7:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Bottom: Social + Copyright */}
                <div className={styles.footerBottom}>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/profile.php?id=61573283512221" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebookF size={15} /></a>
                        <a href="https://wa.me/526122195577" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaWhatsapp size={15} /></a>
                        <a href="https://instagram.com/ISASMARKETING.DIGITAL" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram size={15} /></a>
                        <a href="https://www.tiktok.com/@isas.marketing.of" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTiktok size={14} /></a>
                        <a href="#" className={styles.socialIcon}><FaLinkedinIn size={15} /></a>
                    </div>
                    <p className={styles.copyright}>© {new Date().getFullYear()} Isa&apos;s Marketing Digital. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
