"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ScrollTextRevealProps {
    children: React.ReactNode;
    className?: string;
}

export default function ScrollTextReveal({ children, className = "" }: ScrollTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "start 50%"], // Starts revealing at 90% down, fully revealed by the time the top hits 50% (center)
    });

    // We can't easily parse React nodes into words for a staggered effect without complex recursion,
    // so we'll expect raw string or use a simplified words prop if we wanted word-by-word.
    // However, if we pass a plain string as children, we can parse it easily.

    let content = children;

    if (typeof children === "string") {
        const words = children.split(" ");
        content = words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);

            return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                </Word>
            );
        });
    }

    return (
        <div ref={containerRef} className={className}>
            {content}
        </div>
    );
}

function Word({ children, progress, range }: any) {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative inline-block mr-[0.25em] mt-[0.1em]">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
}
