import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function CasosExito() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.casesHero}>
                <div className={styles.heroGrid}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge} data-aos="fade-down">Portfolio</div>
                    <h1 className={styles.casesHeroTitle} data-aos="fade-up" data-aos-delay="100">CASOS DE ÉXITO</h1>
                    <p className={styles.casesHeroSubtitle} data-aos="fade-up" data-aos-delay="200">
                        Transformamos desafíos en oportunidades. Descubre cómo hemos ayudado a empresas de diferentes sectores a alcanzar resultados extraordinarios con estrategias de marketing inteligentes y efectivas.
                    </p>
                    <a href="#casos" className={styles.heroCta} data-aos="fade-up" data-aos-delay="300">
                        EXPLORAR CASOS
                        <FiArrowDown size={16} />
                    </a>
                </div>
            </section>

            {/* Cases Section */}
            <section id="casos" className={styles.casesSection}>
                <div className={styles.sectionHeader} data-aos="fade-up">
                    <div className={styles.sectionSubtitle}>NUESTRO TRABAJO</div>
                    <h2 className={styles.sectionMainTitle}>HISTORIAS DE ÉXITO</h2>
                    <div className={styles.comingSoon}>
                        <h3 className={styles.comingSoonTitle}>PRÓXIMAMENTE</h3>
                        <p className={styles.sectionDescription}>
                            Estamos preparando casos de éxito detallados que demostrarán cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos. ¡Vuelve pronto para conocer estas historias inspiradoras!
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
