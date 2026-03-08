"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroParticles.module.css";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    alpha: number;
    targetAlpha: number;
    depth: number;
}

export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const COLORS = [
            "0, 229, 255",   // electric blue
            "255, 0, 60",    // neon red
            "77, 255, 255",  // accent light
            "180, 100, 255", // violet accent
        ];

        let width = 0;
        let height = 0;

        function resize() {
            const parent = canvas!.parentElement;
            if (!parent) return;
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas!.width = width;
            canvas!.height = height;
        }

        function createParticles() {
            const count = Math.min(Math.floor((width * height) / 12000), 120);
            const particles: Particle[] = [];
            for (let i = 0; i < count; i++) {
                const depth = 0.3 + Math.random() * 0.7;
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4 * depth,
                    vy: (Math.random() - 0.5) * 0.3 * depth,
                    radius: (1 + Math.random() * 2) * depth,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    alpha: 0,
                    targetAlpha: 0.15 + Math.random() * 0.5,
                    depth,
                });
            }
            particlesRef.current = particles;
        }

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const particles = particlesRef.current;
            const connectionDist = 140;

            // Draw connections near mouse
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Fade in
                p.alpha += (p.targetAlpha - p.alpha) * 0.02;

                // Mouse repel / attract
                const dxm = p.x - mx;
                const dym = p.y - my;
                const distM = Math.sqrt(dxm * dxm + dym * dym);

                if (distM < 200) {
                    // Connect to mouse
                    const mouseAlpha = (1 - distM / 200) * 0.4 * p.depth;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.strokeStyle = `rgba(${p.color}, ${mouseAlpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();

                    // Gentle attraction toward mouse
                    p.vx += (dxm / distM) * -0.02 * p.depth;
                    p.vy += (dym / distM) * -0.02 * p.depth;
                }

                // Particle-to-particle connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDist) {
                        const lineAlpha = (1 - dist / connectionDist) * 0.12 * Math.min(p.depth, p2.depth);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(${p.color}, ${lineAlpha})`;
                        ctx.lineWidth = 0.4;
                        ctx.stroke();
                    }
                }

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Dampen velocity
                p.vx *= 0.995;
                p.vy *= 0.995;

                // Wrap edges
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
                ctx.fill();

                // Glow effect for larger particles
                if (p.radius > 1.5) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.1})`;
                    ctx.fill();
                }
            }

            animFrameRef.current = requestAnimationFrame(draw);
        }

        function handleMouseMove(e: MouseEvent) {
            const rect = canvas!.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        }

        function handleMouseLeave() {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        }

        resize();
        createParticles();
        draw();

        window.addEventListener("resize", () => {
            resize();
            createParticles();
        });

        const parent = canvas.parentElement;
        if (parent) {
            parent.addEventListener("mousemove", handleMouseMove);
            parent.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
            if (parent) {
                parent.removeEventListener("mousemove", handleMouseMove);
                parent.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}
