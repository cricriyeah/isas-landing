import Image from "next/image";
import Link from "next/link";
import { FiSmartphone, FiMonitor, FiCode, FiTrendingUp, FiArrowRight, FiActivity, FiBook, FiShield, FiEye, FiTarget, FiStar, FiLayers, FiCpu } from "react-icons/fi";
import Footer from "@/components/Footer/Footer";
import AnimatedCounters from "@/components/AnimatedCounter/AnimatedCounter";
import Marquee from "@/components/Marquee/Marquee";
import GradientOrbs from "@/components/GradientOrbs/GradientOrbs";
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
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} data-aos="fade-down" data-aos-duration="900">AGENCIA DE PUBLICIDAD +IA</h1>
          <p className={styles.heroSubtitle} data-aos="fade-up" data-aos-delay="100">
            Expertos en Marketing Digital, Automatización con Inteligencia Artificial, y Estrategias Comerciales para potenciar el crecimiento de tu negocio.
          </p>
          <div className={styles.logoCentral} data-aos="zoom-in" data-aos-delay="200">
            <div className={styles.logoCentralContainer}>
              <Image src="/logo1.png" alt="ISA'S MARKETING DIGITAL" width={250} height={250} className={styles.heroLogo} priority />
            </div>
          </div>
          <Link href="/contacto" className={styles.btnImpulsa} data-aos="fade-up" data-aos-delay="400">IMPULSA TU MARCA</Link>
        </div>
      </section>

      {/* Animated Counters */}
      <AnimatedCounters />

      {/* Marquee Strip */}
      <Marquee />

      {/* Sección Conócenos */}
      <section id="conocenos" className={styles.aboutSection}>
        <h2 className={styles.sectionTitle} data-aos="fade-up">CONÓCENOS</h2>

        {/* Parte 1 */}
        <div className={`${styles.aboutPart} ${styles.partOne}`} data-aos="fade-right">
          <div className={styles.aboutImage}>
            <Image src="/isabel.png" alt="Abogada Isabel de la Rosa" width={400} height={400} className={styles.imagePlaceholder} />
          </div>
          <div className={styles.aboutText}>
            <h3 className={styles.personTitle}>Abogada Isabel de la Rosa</h3>
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
            <Image src="/isaias2.png" alt="Maestro Isaias Osuna Barrera" width={400} height={400} className={styles.imagePlaceholder} />
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

      {/* Sección Filosofía (Anteriormente Parte 3 de Conócenos) */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer} data-aos="fade-up">
          <h2 className={styles.philosophyTitle}>Somos Isa&apos;s Marketing Digital</h2>

          <p className={styles.philosophyDescription}>
            En Isa&apos;s Marketing Digital somos más que una agencia: somos un equipo de estrategas, diseñadores y mentes creativas comprometidas con el crecimiento de cada marca que confía en nosotros. Nuestra filosofía se basa en:
          </p>

          <div className={styles.philosophyGrid}>
            <div className={styles.philCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.philIconWrapper}><FiActivity className={styles.philIcon} /></div>
              <h3 className={styles.philCardTitle}>La constancia</h3>
            </div>
            <div className={styles.philCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.philIconWrapper}><FiBook className={styles.philIcon} /></div>
              <h3 className={styles.philCardTitle}>El pensamiento estoico</h3>
            </div>
            <div className={styles.philCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.philIconWrapper}><FiShield className={styles.philIcon} /></div>
              <h3 className={styles.philCardTitle}>El control de las emociones</h3>
            </div>
            <div className={styles.philCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.philIconWrapper}><FiEye className={styles.philIcon} /></div>
              <h3 className={styles.philCardTitle}>La claridad en las decisiones</h3>
            </div>
            <div className={styles.philCard} data-aos="fade-up" data-aos-delay="500">
              <div className={styles.philIconWrapper}><FiTarget className={styles.philIcon} /></div>
              <h3 className={styles.philCardTitle}>La acción enfocada</h3>
            </div>
          </div>

          <div className={styles.philosophyFooterBox} data-aos="zoom-in" data-aos-delay="600">
            <p className={styles.philosophyFooter}>
              Entendemos que el éxito no llega por suerte, sino como resultado de un trabajo constante y disciplinado.
            </p>
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
              {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((num, i) => {
                const ext = num === 1 ? 'png' : (num <= 3 ? 'jpg' : 'png');
                return (
                  <div className={styles.clientLogo} key={i}>
                    <Image src={`/c${num}.${ext}`} alt={`Cliente ${num}`} width={200} height={150} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
