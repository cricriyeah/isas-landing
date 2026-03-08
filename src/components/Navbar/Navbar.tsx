"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false);
    };
    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };
    const toggleDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/logo1.png"
                        alt="ISA'S MARKETING DIGITAL"
                        width={110}
                        height={110}
                        className={styles.navbarLogo}
                        priority
                    />
                </Link>

                <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
                    <li><Link href="/" className={styles.navLink} onClick={closeMenu}>INICIO</Link></li>
                    <li className={`${styles.navItemDropdown} ${dropdownOpen ? styles.dropdownActive : ""}`}>
                        <a href="/#servicios" className={styles.navLink} onClick={toggleDropdown} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            SERVICIOS <FiChevronDown className={styles.dropdownIcon} />
                        </a>
                        <ul className={styles.dropdownMenu}>
                            <li><Link href="/paginas-web-ia" onClick={closeMenu}>Desarrollo de Software + IA</Link></li>
                            <li><Link href="/gestion-redes-sociales" onClick={closeMenu}>Gestión de Redes</Link></li>
                            <li><Link href="/consultoria-asesorias" onClick={closeMenu}>Consultoría</Link></li>
                            <li><Link href="/talleres-capacitacion" onClick={closeMenu}>Talleres</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/#clientes" className={styles.navLink} onClick={closeMenu}>CLIENTES</Link></li>
                    <li><Link href="/#conocenos" className={styles.navLink} onClick={closeMenu}>CONÓCENOS</Link></li>
                    <li><Link href="/casos-exito" className={styles.navLink} onClick={closeMenu}>CASOS DE ÉXITO</Link></li>
                </ul>

                <Link href="/contacto" className={styles.ctaButton} onClick={closeMenu}>
                    CONTÁCTANOS
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
                </button>
            </div>
        </nav>
    );
}

