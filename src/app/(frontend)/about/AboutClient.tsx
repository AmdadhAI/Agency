"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutClient({ data }: { data: any }) {
    const galleryRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start end", "end start"] });
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    const fallbackGalleryRow1 = [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542314831-c5a4d407e202?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    ];

    const fallbackGalleryRow2 = [
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
    ];

    const fallbackTeamMembers = [
        { name: "Amdad", role: "Infrastructure Architect", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "#00F0FF" },
        { name: "Team Member", role: "Growth Engineer", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80", color: "#7000FF" },
        { name: "Team Member", role: "Acquisition Engineer", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80", color: "#4ADE80" }
    ];

    // Split gallery images into two rows if provided, otherwise use fallbacks
    let row1 = fallbackGalleryRow1;
    let row2 = fallbackGalleryRow2;
    if (data?.galleryImages && data.galleryImages.length > 0) {
        const half = Math.ceil(data.galleryImages.length / 2);
        row1 = data.galleryImages.slice(0, half);
        row2 = data.galleryImages.slice(half);
        // If not enough images for second row, repeat row1
        if (row2.length === 0) row2 = row1;
    }

    const teamMembers = data?.teamMembers?.length > 0 ? data.teamMembers : fallbackTeamMembers;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] font-sans selection:bg-[#7000FF]/30 overflow-x-hidden">

            {/* Hero Section (The Manifesto) */}
            <section className="relative px-6 pt-32 md:pt-48 mb-24 text-center max-w-5xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-sm mb-6 max-w-2xl mx-auto whitespace-pre-line">
                        {data?.heroSubtext || "We built RestauReach because we were tired of generic agencies selling vanity metrics to hospitality operators who needed pure revenue."}
                    </p>
                    <h1 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tighter text-white text-center font-black whitespace-pre-line">
                        {data?.heroHeadline || (
                            <>THE DEATH OF THE <span className="text-[#00F0FF] italic">TRADITIONAL</span> AGENCY.</>
                        )}
                    </h1>
                </motion.div>
            </section>

            {/* Kinetic Scroll Gallery */}
            <section ref={galleryRef} className="py-6 overflow-hidden relative z-10">
                {/* Row 1 — scrolls left */}
                <motion.div style={{ x: x1, width: "max-content" }} className="flex gap-5 items-end mb-5">
                    {row1.map((src: string, i: number) => (
                        <div key={i} className={`rounded-2xl flex-shrink-0 overflow-hidden ${i % 2 === 0 ? "w-[220px] h-[280px]" : "w-[420px] h-[240px]"}`}>
                            <img src={src} alt="Gallery image" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 — scrolls right (opposite direction) */}
                <motion.div style={{ x: x2, width: "max-content" }} className="flex gap-5 items-start">
                    {row2.map((src: string, i: number) => (
                        <div key={i} className={`rounded-2xl flex-shrink-0 overflow-hidden ${i % 2 === 0 ? "w-[350px] h-[250px]" : "w-[240px] h-[310px]"}`}>
                            <img src={src} alt="Gallery image" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </motion.div>
            </section>

            <main className="relative z-10">

                {/* The Manifesto Columns (Paradigm Shift) */}
                <section className="px-6 py-32 bg-[#0A0A0C]/50 relative">
                    <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-20 relative items-start">

                        {/* Left (The Old Way) */}
                        <div className="space-y-12 mb-16 md:mb-0">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">The Old Way</h2>
                                <p className="text-gray-500 font-medium">Vanity metrics & hope.</p>
                            </div>
                            <ul className="space-y-8 text-xl md:text-2xl font-black text-red-500/50 uppercase tracking-wide">
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined opacity-50">close</span>
                                    Brand Awareness
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined opacity-50">close</span>
                                    Aesthetic Feeds
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined opacity-50">close</span>
                                    Reach & Impressions
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined opacity-50">close</span>
                                    12-Month Retainers
                                </li>
                            </ul>
                        </div>

                        {/* Right (The RestauReach Way) */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">The RestauReach Way</h2>
                                <p className="text-[#00F0FF] font-medium">Engineered revenue infrastructure.</p>
                            </div>
                            <ul className="space-y-8 text-xl md:text-2xl font-black text-cyan-400 uppercase tracking-wide">
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined text-cyan-400">check</span>
                                    RevPASH Optimization
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined text-cyan-400">check</span>
                                    Agentic Acquisition Funnels
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined text-cyan-400">check</span>
                                    POS Integration
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-icons-outlined text-cyan-400">check</span>
                                    Performance Guaranteed
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* The Data Lab (Leadership Grid) */}
                <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
                    <div className="text-center mb-20">
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">The Data Lab</p>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight text-white font-bold">Behind the Systems.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member: any, idx: number) => {
                            // Extract color or default based on index
                            const themeColor = member.color || (idx % 3 === 0 ? "#00F0FF" : idx % 3 === 1 ? "#7000FF" : "#4ADE80");

                            return (
                                <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#111116] border border-white/10 aspect-[4/5]">
                                    <img src={member.imageUrl} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply"></div>
                                    <div
                                        className="absolute inset-0 mix-blend-color opacity-30 transition-opacity duration-500"
                                        style={{ backgroundColor: themeColor }}
                                    ></div>

                                    {!member.imageUrl && (
                                        <div
                                            className="absolute top-4 right-4 z-20 text-black text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
                                            style={{ backgroundColor: `${themeColor}cc`, color: idx % 3 === 1 ? "white" : "black" }}
                                        >
                                            Add Photo
                                        </div>
                                    )}

                                    <div className="absolute bottom-0 left-0 p-8 z-10 w-full bg-gradient-to-t from-[#0F0F13] to-transparent">
                                        <h3 className="text-3xl font-black text-white mb-2 transition-opacity">{member.name}</h3>
                                        <p style={{ color: themeColor }} className="font-medium tracking-wide">{member.role}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* The Final Pivot (CTA) */}
                <section className="w-full bg-[#0A0A0C] border-t border-white/10 py-32 px-6 text-center mt-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#111116] opacity-50 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white mb-6 leading-tight tracking-tighter">
                            Stop funding agencies <br />to learn your industry.
                        </h2>
                        <form onSubmit={e => { e.preventDefault(); window.location.href = '/contact'; }} className="mt-12">
                            <button type="submit" className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black text-xl hover:scale-105 hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                Book Your Agentic Growth Audit
                                <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </section>

            </main>
        </div>
    );
}
