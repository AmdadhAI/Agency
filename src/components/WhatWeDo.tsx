"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export interface ServiceBlock {
    title: string;
    description?: string;
    image1?: string;
    image2?: string;
    slug?: string;
}

// Helper component to track when a right-side block is strictly in the center
function TrackedBlock({ index, setActiveIndex, children }: { index: number, setActiveIndex: (idx: number) => void, children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default function WhatWeDo({ 
    blocks,
    title,
    subtext
}: { 
    blocks: ServiceBlock[],
    title?: string,
    subtext?: string
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Provide default fallback texts if props are missing
    const headerTitle = title || "What We Do";
    const headerSubtext = subtext || "We Design *Systems* That *Speak* To Dining Intent.";

    // Safety check just in case blocks isn't loaded yet or is empty
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="relative bg-[#0F0F13] w-full border-t border-white/5 pt-24 pb-32 overflow-clip">

            {/* Background Neon Aura mapped to scroll actively */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7000FF]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            {/* TOP HEADLINE (Detached from the sticky rail) */}
            <div className="max-w-7xl mx-auto px-4 mb-24 relative z-20">
                <div className="inline-block border border-[#00F0FF]/50 rounded-full px-4 py-1 text-[10px] sm:text-xs uppercase tracking-widest font-mono mb-6 bg-[#00F0FF]/5 text-[#00F0FF]">
                    {headerTitle}
                </div>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white max-w-4xl">
                    {headerSubtext.split('*').map((part, i) => 
                        i % 2 !== 0 ? (
                            <i key={i} className="font-serif font-medium opacity-90">{part}</i>
                        ) : (
                            <React.Fragment key={i}>{part}</React.Fragment>
                        )
                    )}
                </h2>
            </div>

            <div className="hidden md:flex max-w-7xl mx-auto px-4 flex-col md:flex-row items-start relative z-10 pb-32">

                {/* LEFT SIDE (Sticky Text Container) */}
                <div className="w-full md:w-5/12 md:sticky md:top-64 md:h-[40vh] flex flex-col justify-start mb-16 md:mb-0 pr-8">
                    <div className="relative h-64 w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white mb-6">
                                    {blocks[activeIndex].title}
                                </h3>
                                <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] max-w-sm">
                                    {blocks[activeIndex].description}
                                </p>
                                <Link href={blocks[activeIndex].slug ? `/services/${typeof blocks[activeIndex].slug === 'string' ? blocks[activeIndex].slug : blocks[activeIndex].slug}` : "/services"} className="mt-8 flex items-center gap-2 text-[#a970ff] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors group w-fit">
                                    See More
                                    <span className="material-icons-outlined text-sm transform group-hover:translate-x-1 transition-transform border border-[#a970ff] rounded-full p-1 group-hover:border-white">arrow_forward</span>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT SIDE (The Scrolling Track with Image Pairs) */}
                <div className="w-full md:w-7/12 flex flex-col gap-32 relative py-32">

                    {/* Active outline trace line */}
                    <div className="absolute left-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#222] to-transparent hidden md:block" />

                    {blocks.map((block, index) => (
                        <TrackedBlock key={index} index={index} setActiveIndex={setActiveIndex}>
                            <div className="w-full flex gap-6 h-[500px]">
                                {/* Image 1 (Left) */}
                                <div className="relative w-1/2 h-[90%] rounded-2xl bg-[#111116] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden group">
                                    {block.image1 ? (
                                        <img src={block.image1} alt={`${block.title} - Image 1`} className="w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/50">No Image provided</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-black/30 pointer-events-none"></div>
                                </div>
                                {/* Image 2 (Right - Staggered) */}
                                <div className="relative w-1/2 h-[90%] mt-[10%] rounded-2xl bg-[#111116] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden group">
                                    {block.image2 ? (
                                        <img src={block.image2} alt={`${block.title} - Image 2`} className="w-full h-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/50">No Image provided</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-black/30 pointer-events-none"></div>
                                </div>
                            </div>
                        </TrackedBlock>
                    ))}

                </div>
            </div>

            {/* ── MOBILE FALLBACK ── */}
            <div className="flex flex-col md:hidden py-16 gap-16 px-4">
                {blocks.map((block, index) => (
                    <div key={index} className="flex flex-col w-full">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {block.title}
                        </h3>
                        <p className="text-base text-[#E2E8F0] leading-relaxed mb-6">
                            {block.description}
                        </p>
                        <div className="flex gap-4 h-[300px]">
                            {/* Image 1 (Left) */}
                            <div className="relative w-1/2 h-[90%] rounded-2xl bg-[#111116] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden">
                                {block.image1 ? (
                                    <img src={block.image1} alt={`${block.title} 1`} className="w-full h-full object-cover opacity-80" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/50 text-xs text-center">No Image</div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-black/30 pointer-events-none"></div>
                            </div>
                            {/* Image 2 (Right - Staggered) */}
                            <div className="relative w-1/2 h-[90%] mt-[10%] rounded-2xl bg-[#111116] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden">
                                {block.image2 ? (
                                    <img src={block.image2} alt={`${block.title} 2`} className="w-full h-full object-cover opacity-80" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#111] text-white/50 text-xs text-center">No Image</div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-black/30 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}
