"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero({
    headline,
    subtext,
    ctaText
}: {
    headline?: string;
    subtext?: string;
    ctaText?: string;
}) {
    // Basic formatting for headline - we only want to format it if not passed, or just render passed string directly if provided
    return (
        <section className="relative flex items-center justify-center overflow-hidden w-full" style={{ minHeight: "85vh", paddingBottom: "10vh" }}>
            {/* Floating 3D Elements */}
            <motion.div
                initial={{ opacity: 0, x: -100, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute hidden lg:block left-0 top-1/4 float-3d-left z-20"
            >
                {/* 3D Box or Card */}
                <div className="w-48 h-36 rounded-2xl p-4 glass-card flex flex-col justify-between" style={{ background: "linear-gradient(135deg, rgba(255,48,64,0.15), rgba(0,0,0,0.8))", border: "1px solid rgba(255,48,64,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", transform: "perspective(1000px) rotateY(15deg) rotateX(10deg)" }}>
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-red-500/30" style={{ background: "rgba(239,68,68,0.2)" }}>
                            <span className="material-icons-outlined text-red-500 text-lg">restaurant</span>
                        </div>
                        <span className="text-xs font-bold text-red-400 px-2 py-1 border border-red-500/20 rounded-full" style={{ background: "rgba(239,68,68,0.1)" }}>+30% Ordering</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <div className="w-8 h-12 rounded-t-sm" style={{ background: "rgba(239,68,68,0.4)" }} />
                            <div className="w-8 h-16 rounded-t-sm" style={{ background: "rgba(239,68,68,0.6)" }} />
                            <div className="w-8 h-24 rounded-t-sm" style={{ background: "rgba(248,113,113,1)", boxShadow: "0 0 15px rgba(255,48,64,0.5)" }} />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute hidden lg:block right-0 top-1/3 float-3d-right z-20"
            >
                {/* 3D Graphic */}
                <div className="w-44 h-52 rounded-2xl p-4 glass-card overflow-hidden relative" style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(0,0,0,0.8))", border: "1px solid rgba(0,240,255,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", transform: "perspective(1000px) rotateY(-15deg) rotateX(10deg)" }}>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(6,182,212,0.2), transparent)" }} />
                    <div className="flex flex-col gap-3 h-full justify-between pb-2 relative z-10">
                        <div className="text-left w-full">
                            <p className="text-cyan-300 font-bold text-sm">Revenue Engine</p>
                            <p className="text-xs" style={{ color: "rgba(6,182,212,0.7)" }}>AI Optimized</p>
                        </div>
                        <div className="w-full h-24 relative mt-4">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <path d="M0,50 Q20,20 50,40 T100,10" fill="none" stroke="rgba(0,240,255,0.8)" strokeWidth="3" filter="drop-shadow(0 0 4px rgba(0,240,255,0.8))" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                    }
                }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
            >
                <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-tighter font-bold text-white mb-8">
                    {headline ? (
                        <span dangerouslySetInnerHTML={{ __html: headline.replace(/\n/g, '<br />') }} />
                    ) : (
                        <>
                            Restaurant Marketing <br />
                            <span style={{ color: "transparent", backgroundImage: "linear-gradient(to right, #555, #333)", WebkitBackgroundClip: "text", backgroundClip: "text", textDecoration: "line-through", textDecorationColor: "#ef4444", textDecorationStyle: "wavy", opacity: 0.6 }}>
                                is Dead.
                            </span>
                        </>
                    )}
                </motion.h1>
                <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-glow mb-8 pb-2" style={{ background: "linear-gradient(to right, #00F0FF, #fff, #7000FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    We Build Growth Systems.
                </motion.h2>

                <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#E2E8F0]">
                    {subtext || "Stop burning cash on vanity metrics. We engineer data-driven revenue engines for modern hospitality brands."}
                </motion.p>

                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contact" className="group relative px-8 py-4 text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2" style={{ background: "#fff", fontSize: "1.1rem" }}>
                        {ctaText || "Book a Call"}
                        <span className="material-icons-outlined" style={{ transition: "transform 0.2s" }}>arrow_forward</span>
                    </Link>
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }} />
        </section>
    );
}
