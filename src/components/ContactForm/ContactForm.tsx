"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import styles from "@/app/contacto/page.module.css";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Se envía la petición POST al script PHP estático que subiremos junto al HTML
            const response = await fetch("/enviar-correo.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.status === "success") {
                setStatus("success");
                setMessage(result.message);
                (e.target as HTMLFormElement).reset(); // Lipmiar el formulario
            } else {
                setStatus("error");
                setMessage(result.message || "Error al enviar el mensaje.");
            }
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            setStatus("error");
            setMessage("Error de conexión. Por favor, intenta de nuevo o escríbenos por WhatsApp.");
        }
    };

    return (
        <form id="contactForm" onSubmit={handleSubmit} className={styles.contactFormWrapper}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">Nombre completo *</label>
                <input type="text" id="name" name="nombre" className={styles.formInput} placeholder="Ej: María González" required disabled={status === "loading"} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">Correo electrónico *</label>
                <input type="email" id="email" name="email" className={styles.formInput} placeholder="tu@empresa.com" required disabled={status === "loading"} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="telefono" className={styles.formInput} placeholder="+52 612 123 4567" disabled={status === "loading"} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="service">Servicio de interés *</label>
                <select id="service" name="servicio_interes" className={styles.formSelect} required disabled={status === "loading"}>
                    <option value="">Selecciona un servicio</option>
                    <option value="redes-sociales">Gestión de Redes Sociales</option>
                    <option value="talleres">Talleres y Capacitación</option>
                    <option value="paginas-web">Desarrollo de Software + IA</option>
                    <option value="consultoria">Consultoría y Asesorías</option>
                    <option value="publicidad">Publicidad Física</option>
                    <option value="multiple">Múltiples servicios</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">Cuéntanos sobre tu proyecto *</label>
                <textarea id="message" name="mensaje" className={styles.formTextarea} placeholder="Describe brevemente tu proyecto, objetivos y cómo podemos ayudarte..." required disabled={status === "loading"}></textarea>
            </div>

            {status === "success" && (
                <div className={`${styles.statusMessage} ${styles.successMessage}`}>
                    {message}
                </div>
            )}

            {status === "error" && (
                <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
                    {message}
                </div>
            )}

            <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
                {status === "loading" ? (
                    <span>Enviando...</span>
                ) : (
                    <>
                        <FiSend size={16} style={{ marginRight: '8px' }} />
                        ENVIAR MENSAJE
                    </>
                )}
            </button>
        </form>
    );
}
