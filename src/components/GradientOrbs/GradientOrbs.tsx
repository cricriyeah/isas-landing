import styles from "./GradientOrbs.module.css";

export default function GradientOrbs() {
    return (
        <div className={styles.orbContainer} aria-hidden="true">
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
        </div>
    );
}
