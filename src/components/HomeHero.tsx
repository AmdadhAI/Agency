"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero({
    headline,
    secondaryHeadline,
    subtext,
    ctaText
}: {
    headline?: string;
    secondaryHeadline?: string;
    subtext?: string;
    ctaText?: string;
}) {
    // Basic formatting for headline - we only want to format it if not passed, or just render passed string directly if provided
    return (
        <section className="relative flex flex-col items-center justify-start md:justify-center overflow-hidden w-full pt-16 pb-12 md:pb-24 lg:pt-0 min-h-[auto] md:min-h-screen">
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
                        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                    }
                }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center space-y-3 md:space-y-6"
            >
                {/* Trust Badge */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-0">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium tracking-wide">Built by Operators. Engineered for Local Scale.</span>
                </motion.div>

                <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(2.8rem,8vw,6rem)] leading-[1.05] tracking-tighter font-bold text-white mb-2 md:mb-0">
                    {headline ? (
                        <span dangerouslySetInnerHTML={{ __html: headline.replace(/\n/g, '<br />') }} />
                    ) : (
                        <div className="flex flex-col items-center gap-0 md:gap-2">
                            <span>Restaurant Marketing</span>
                            <span className="text-gray-400 opacity-90 relative inline-block translate-y-[2px]" style={{ textDecoration: "line-through", textDecorationColor: "#ff3b3b", textDecorationStyle: "wavy" }}>
                                is Dead.
                            </span>
                        </div>
                    )}
                </motion.h1>

                <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(1.6rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white flex flex-wrap items-center justify-center gap-x-2">
                    {secondaryHeadline ? (
                        <>
                            {secondaryHeadline.split('*').map((part, i) => 
                                i % 2 !== 0 
                                ? <span key={i} className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">{part}</span> 
                                : <React.Fragment key={i}>{part}</React.Fragment>
                            )}
                            <svg className="w-5 h-5 md:w-8 md:h-8 text-[#00F0FF] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </>
                    ) : (
                        <>
                            We Build <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Revenue</span> Engines.
                            <svg className="w-5 h-5 md:w-8 md:h-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </>
                    )}
                </motion.h2>

                <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="max-w-2xl mx-auto text-[14px] md:text-lg leading-relaxed text-gray-300 md:text-[#E2E8F0]">
                    {subtext || "Stop burning cash on vanity metrics. We engineer data-driven revenue engines for modern hospitality brands."}
                </motion.p>

                {/* Tech Stack */}
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="pt-2 flex flex-col items-center w-full">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Powered by Infrastructure From:</p>
                    <div className="flex gap-6 opacity-40 justify-center items-center">
                        <span className="font-bold text-lg md:text-xl tracking-tight">Meta</span>
                        <span className="font-bold text-lg md:text-xl tracking-tight font-sans">Google</span>
                        <span className="font-bold text-lg md:text-xl tracking-tighter">TikTok</span>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="pt-4 w-full flex justify-center">
                    <div className="relative p-[1px] rounded-full w-full max-w-[90%] md:w-auto md:min-w-[280px] bg-gradient-to-r from-cyan-500 to-purple-600">
                        <Link href="/contact" className="relative block w-full h-full bg-gray-950 rounded-full py-4 px-8 active:scale-[0.98] transition-all overflow-hidden group">
                            <div className="flex items-center justify-center gap-2">
                                <span className="relative z-10 text-white font-bold text-lg">{ctaText || "Book a Call"}</span>
                                <span className="relative z-10 material-icons-outlined text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                            {/* Shimmer Effect */}
                            <motion.div 
                                animate={{ x: ["-100%", "200%"] }} 
                                transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 0 }}
                                className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0"
                            />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full" style={{ backgroundImage: "linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "linear-gradient(to bottom, #000 0%, #000 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 40%, transparent 100%)" }} />
        </section>
    );
}
