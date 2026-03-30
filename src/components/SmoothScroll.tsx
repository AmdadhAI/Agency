"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — Apple-style inertia scroll using linear interpolation.
 * No external deps. Uses a rAF loop to lerp the actual scroll position
 * toward a target, creating the "easing" momentum feel.
 *
 * Only runs on desktop (>= 1024px). Preserves native scroll on mobile
 * because native iOS momentum scroll is already perfect.
 */
export default function SmoothScroll() {
    useEffect(() => {
        // Skip on mobile — iOS has native perfect inertia scroll
        if (typeof window === "undefined" || window.innerWidth < 1024) return;

        let currentY = window.scrollY;
        let targetY = window.scrollY;
        let rafId: number;
        let ticking = false;

        const LERP = 0.085; // Lower = more inertia (0.06–0.12 is Apple-like)

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            targetY = Math.max(
                0,
                Math.min(
                    document.documentElement.scrollHeight - window.innerHeight,
                    targetY + e.deltaY * 1.2
                )
            );
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(loop);
            }
        };

        const loop = () => {
            currentY = lerp(currentY, targetY, LERP);
            window.scrollTo(0, currentY);

            const delta = Math.abs(targetY - currentY);
            if (delta > 0.5) {
                rafId = requestAnimationFrame(loop);
            } else {
                currentY = targetY;
                window.scrollTo(0, currentY);
                ticking = false;
            }
        };

        // Sync targetY when user uses keyboard, scrollbar drag, or anchor links
        const onScroll = () => {
            if (!ticking) {
                targetY = window.scrollY;
                currentY = window.scrollY;
            }
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}
