import styles from "./Marquee.module.css";

const items = [
    "Marketing Digital",
    "Redes Sociales",
    "Inteligencia Artificial",
    "Estrategia",
    "Desarrollo de Software",
    "Consultoría",
    "Capacitación",
];

export default function Marquee() {
    const doubled = [...items, ...items];
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {doubled.map((item, i) => (
                    <span key={i} className={styles.item}>
                        {item}
                        <span className={styles.dot}>●</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
