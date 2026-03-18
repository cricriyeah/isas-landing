import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ISA'S Agencia Digital",
  description: "Bienvenido a ISA'S Agencia Digital. Transformamos marcas con estrategias digitales, desarrollo web de alto impacto y automatizaciones inteligentes.",
};
import Link from "next/link";
import { FiSmartphone, FiMonitor, FiCode, FiTrendingUp, FiArrowRight, FiActivity, FiBook, FiShield, FiEye, FiTarget, FiStar, FiLayers, FiCpu } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import AnimatedCounters from "@/components/AnimatedCounter/AnimatedCounter";
import Marquee from "@/components/Marquee/Marquee";
import GradientOrbs from "@/components/GradientOrbs/GradientOrbs";
import HeroParticles from "@/components/HeroParticles/HeroParticles";
import HeroTextReveal from "@/components/HeroTextReveal/HeroTextReveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dkofkzzc5/video/upload/v1772738106/6561561-uhd_3840_2160_25fps_b8pp0i.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <HeroParticles />

        {/* Floating holographic icons */}
        <div className={styles.floatingIcons} aria-hidden="true">
          <div className={`${styles.floatingIcon} ${styles.floatIcon1}`}><FiSmartphone /></div>
          <div className={`${styles.floatingIcon} ${styles.floatIcon2}`}><FiCode /></div>
          <div className={`${styles.floatingIcon} ${styles.floatIcon3}`}><FiTrendingUp /></div>
          <div className={`${styles.floatingIcon} ${styles.floatIcon4}`}><FiMonitor /></div>
          <div className={`${styles.floatingIcon} ${styles.floatIcon5}`}><FiCpu /></div>
          <div className={`${styles.floatingIcon} ${styles.floatIcon6}`}><FiActivity /></div>
        </div>

        <div className={styles.heroContent}>
          <HeroTextReveal
            title="AGENCIA DIGITAL +IA"
            subtitle="Expertos en Marketing Digital, Desarrollo de Software, Automatización con Inteligencia Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio."
          />


          <Link href="/paquetes-servicios" className={styles.btnImpulsa}>
            <span className={styles.btnText}>IMPULSA TU MARCA</span>
            <span className={styles.btnShimmer}></span>
          </Link>

          {/* Animated Counters Moved Inside Hero */}
          <div className={styles.heroCountersWrapper}>
            <AnimatedCounters />
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <Marquee />

      {/* Sección Conócenos */}
      <section id="conocenos" className={styles.aboutSection}>
        <h2 className={styles.sectionTitle} data-aos="fade-up">CONÓCENOS</h2>

        {/* Parte 1 */}
        <div className={`${styles.aboutPart} ${styles.partOne}`} data-aos="fade-right">
          <div className={styles.aboutImage}>
            <Image src="/isabelfoto.png" alt="Licenciada Isabel de la Rosa" width={400} height={400} className={styles.imagePlaceholder} />
          </div>
          <div className={styles.aboutText}>
            <h3 className={styles.personTitle}>Licenciada Isabel de la Rosa</h3>
            <span className={styles.personSubtitle}>Fundadora de Isa&apos;s Marketing</span>
            <p className={styles.personDescription}>
              Creo firmemente en el poder de la estrategia y la legalidad. Este espacio es para ti: emprendedora, líder o dueña de negocio que quiere crecer con bases sólidas y visión clara.
            </p>
            <div className={styles.aboutFeatureList}>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiShield /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Protección Legal</h4>
                  <p>Asesoría clara para proteger tu marca y patrimonio empresarial de forma preventiva.</p>
                </div>
              </div>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiTrendingUp /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Estrategias de Ventas</h4>
                  <p>Sistemas de marketing probados que generan crecimiento real y sostenible en el tiempo.</p>
                </div>
              </div>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiStar /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Liderazgo Femenino</h4>
                  <p>Inspiración y guía para empoderar a mujeres empresarias en la toma de decisiones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parte 2 */}
        <div className={`${styles.aboutPart} ${styles.partTwo}`} data-aos="fade-left">
          <div className={styles.aboutImage}>
            <Image src="/isaiasfoto2.png" alt="Maestro Isaias Osuna Barrera" width={400} height={400} className={styles.imagePlaceholder} />
          </div>
          <div className={styles.aboutText}>
            <h3 className={styles.personTitle}>Maestro Isaias Osuna Barrera</h3>
            <span className={styles.personSubtitle}>Líder Estratégico</span>
            <p className={styles.personDescription}>
              Inspirado en los principios del estoicismo, he convertido cada desafío en una oportunidad. Dirijo con una filosofía clara: la disciplina siempre vence al talento sin dirección.
            </p>
            <div className={styles.aboutFeatureList}>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiLayers /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Marcas Sólidas</h4>
                  <p>Construcción de negocios escalables mediante estrategia y procesos operativos claros.</p>
                </div>
              </div>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiActivity /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Mentalidad Resiliente</h4>
                  <p>Forjando emprendedores con control emocional y acción enfocada para superar retos.</p>
                </div>
              </div>
              <div className={styles.aboutFeatureItem}>
                <div className={styles.aboutFeatureIcon}><FiCpu /></div>
                <div className={styles.aboutFeatureText}>
                  <h4>Transformación Tecnológica</h4>
                  <p>Implementación de la última tecnología como herramienta principal para alcanzar objetivos rápido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>




      {/* Sección Servicios */}
      <section id="servicios" className={styles.servicesServices}>
        <GradientOrbs />
        <div className={styles.servicesSection}>
          <h2 className={styles.servicesTitle} data-aos="fade-up">SERVICIOS</h2>
          <div className={styles.servicesGrid}>
            <Link href="/gestion-redes-sociales" className={styles.modernCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.modernCardIconWrapper}>
                <FiSmartphone size={28} className={styles.modernCardIcon} />
              </div>
              <h3 className={styles.modernCardTitle}>Redes Sociales</h3>
              <p className={styles.modernCardDesc}>Estrategia, contenido y gestión para conectar con tu audiencia.</p>
              <div className={styles.modernCardAction}>
                <span>Ver más</span>
                <FiArrowRight className={styles.actionIcon} />
              </div>
            </Link>

            <Link href="/talleres-capacitacion" className={styles.modernCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.modernCardIconWrapper}>
                <FiMonitor size={28} className={styles.modernCardIcon} />
              </div>
              <h3 className={styles.modernCardTitle}>Talleres + Capacitación</h3>
              <p className={styles.modernCardDesc}>Formación especializada para potenciar las habilidades de tu equipo.</p>
              <div className={styles.modernCardAction}>
                <span>Ver más</span>
                <FiArrowRight className={styles.actionIcon} />
              </div>
            </Link>

            <Link href="/paginas-web-ia" className={styles.modernCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.modernCardIconWrapper}>
                <FiCode size={28} className={styles.modernCardIcon} />
              </div>
              <h3 className={styles.modernCardTitle}>Desarrollo de Software + IA</h3>
              <p className={styles.modernCardDesc}>Desarrollo web moderno con automatizaciones inteligentes.</p>
              <div className={styles.modernCardAction}>
                <span>Ver más</span>
                <FiArrowRight className={styles.actionIcon} />
              </div>
            </Link>

            <Link href="/consultoria-asesorias" className={styles.modernCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.modernCardIconWrapper}>
                <FiTrendingUp size={28} className={styles.modernCardIcon} />
              </div>
              <h3 className={styles.modernCardTitle}>Consultoría + Asesorías</h3>
              <p className={styles.modernCardDesc}>Estrategias personalizadas para el crecimiento de tu marca.</p>
              <div className={styles.modernCardAction}>
                <span>Ver más</span>
                <FiArrowRight className={styles.actionIcon} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Clientes */}
      <section id="clientes" className={styles.clientsServices}>
        <div className={styles.clientsSection}>
          <h2 className={styles.clientsTitle} data-aos="fade-up">NUESTROS CLIENTES</h2>
          <div className={styles.carouselContainer}>
            <div className={styles.clientsLogos}>
              {
                [
                  { src: '/c1.png', alt: 'Cliente 1' },
                  { src: '/c2.jpg', alt: 'Cliente 2' },
                  { src: '/c4.png', alt: 'Cliente 4' },
                  { src: '/c5.png', alt: 'Cliente 5' },
                  { src: '/c6.png', alt: 'Cliente 6' },
                  { src: '/puertas-sanjorge.jpeg', alt: 'Puertas San Jorge' },
                  { src: '/olympus-gym.jpeg', alt: 'Olympus Gym' },
                  { src: '/chevrolet.jpg', alt: 'Chevrolet' },
                  { src: '/ford.png', alt: 'Ford' },
                  { src: '/mazda.jpg', alt: 'Mazda' },
                  { src: '/toyota.png', alt: 'Toyota' },


                ].map((client, i) => (
                  <div className={styles.clientLogo} key={`first-${i}`}>
                    <Image src={client.src} alt={client.alt} width={200} height={150} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                ))
              }
              {
                [
                  { src: '/c1.png', alt: 'Cliente 1' },
                  { src: '/c2.jpg', alt: 'Cliente 2' },
                  { src: '/c4.png', alt: 'Cliente 4' },
                  { src: '/c5.png', alt: 'Cliente 5' },
                  { src: '/c6.png', alt: 'Cliente 6' },
                  { src: '/c7.png', alt: 'Cliente 7' },
                  { src: '/puertas-sanjorge.png', alt: 'Puertas San Jorge' },
                  { src: '/olympus-gym.png', alt: 'Olympus Gym' },
                  { src: '/chevrolet.jpg', alt: 'Chevrolet' },
                  { src: '/ford.png', alt: 'Ford' },
                  { src: '/mazda.jpg', alt: 'Mazda' },
                  { src: '/toyota.png', alt: 'Toyota' },
                ].map((client, i) => (
                  <div className={styles.clientLogo} key={`second-${i}`}>
                    <Image src={client.src} alt={client.alt} width={200} height={150} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
