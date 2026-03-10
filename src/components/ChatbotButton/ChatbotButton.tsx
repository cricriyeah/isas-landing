"use client";

import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import styles from "./ChatbotButton.module.css";

export default function ChatbotButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}>
            {/* Tooltip */}
            <div className={`${styles.tooltip} ${isHovered ? styles.tooltipVisible : ""}`}>
                ¡Asistente IA 24/7!
            </div>

            {/* Botón */}
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert("Chatbot IA próximamente...")}
                className={styles.button}
                aria-label="Abrir Asistente IA 24/7"
            >
                <div className={styles.glow}></div>
                <FaRobot size={26} className={styles.icon} />
                <span className={styles.badge}></span>
            </button>
        </div>
    );
}
