"use client";

import styles from "./HeroTextReveal.module.css";

interface HeroTextRevealProps {
    title: string;
    subtitle: string;
}

export default function HeroTextReveal({ title, subtitle }: HeroTextRevealProps) {
    // Split title to separate "+IA" for special treatment
    const mainTitle = title.replace("+IA", "").trim();
    const words = mainTitle.split(" ");
    const subtitleWords = subtitle.split(" ");

    return (
        <div className={styles.heroTextWrapper}>
            <h1>
                <span className={styles.titleLine}>
                    <span className={styles.shimmerWrap}>
                        {words.map((word, i) => (
                            <span
                                key={i}
                                className={styles.titleWord}
                                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                            >
                                {word}{" "}
                            </span>
                        ))}
                        <span
                            className={`${styles.titleWord} ${styles.iaGlitch}`}
                            style={{ animationDelay: `${0.15 + words.length * 0.1}s` }}
                        >
                            +IA
                        </span>
                    </span>
                </span>
            </h1>
            <p className={styles.subtitleReveal}>
                {subtitleWords.map((word, i) => (
                    <span
                        key={i}
                        style={{ animationDelay: `${1.2 + i * 0.03}s` }}
                    >
                        {word}{" "}
                    </span>
                ))}
            </p>
        </div>
    );
}
