"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedCounter.module.css";

interface CounterProps {
    end: number;
    prefix?: string;
    suffix?: string;
    label: string;
    duration?: number;
}

function Counter({ end, prefix = "", suffix = "", label, duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration]);

    return (
        <div className={styles.counter} ref={ref}>
            <span className={styles.number}>{prefix}{count}{suffix}</span>
            <span className={styles.label}>{label}</span>
        </div>
    );
}

export default function AnimatedCounters() {
    return (
        <div className={styles.countersRow}>
            <Counter end={6} prefix="+" suffix=" años" label="Impulsando marcas" />
            <div className={styles.divider} />
            <Counter end={380} prefix="+" label="Colaboraciones con negocios" />
            <div className={styles.divider} />
            <Counter end={600} prefix="+" label="Alumnos en venta, marketing y IA" />
        </div>
    );
}
