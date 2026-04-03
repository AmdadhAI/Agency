"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation helpers ─────────────────────────────────────────────────────────

const FU = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const FL = (delay = 0) => ({
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const FR = (delay = 0) => ({
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {

    const safeServicesData = (servicesData || []).map((s: any) => ({
        ...s,
        features: s.features || []
    }));

    const s1 = safeServicesData[0] || {
        title: "Facebook & Instagram Ad Management",
        shortDescription: "Deploying high-fidelity creative that converts casual scrollers into consistent diners at a positive ROAS.",
        features: ["Algorithmic A/B Testing", "Omni-Channel Retargeting", "High-Ticket Funnels", "POS Revenue Matching"],
        image1Url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    };

    const s2 = safeServicesData[1] || {
        title: "Web Design & Development",
        shortDescription: "Frictionless booking systems designed for the modern diner. We build digital front-doors that convert casual browsers into guaranteed reservations.",
        features: ["Mobile-First Menu UI", "POS Integration"],
        image1Url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    };

    const s3 = safeServicesData[2] || {
        title: "OmniSearch & AI Visibility",
        shortDescription: "Dominate Google Maps and AI answer engines. When someone asks GPT-4 for the 'best omakase near me,' we ensure your brand is the only answer.",
        features: ["Search Dominance", "AI Recommendation Engine"],
        image1Url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    };

    const s4 = safeServicesData[3] || {
        title: "Agentic AI Operations",
        shortDescription: "Automate reviews and guest retention with intelligent agents. Our AI agents don't just reply; they resolve guest issues and re-engage lost customers.",
        features: ["24/7 AI Concierge for Booking Inquiries", "Automated Review Management & Response", "Predictive Guest Loyalty Workflows"]
    };

    const s5 = safeServicesData[4] || {
        title: "Viral Content Production",
        shortDescription: "We capture the soul of your kitchen. High-fidelity TikTok and Reels production featuring aesthetic, professionally shot food b-roll that stops the scroll and fills the seats.",
        features: [],
        image1Url: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        image2Url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    };

    const extraServices = safeServicesData.slice(5);

    const fallbackTestimonials = [
        { name: "Marco Rossi", role: "Executive Chef, L'Anima", quote: "\"The AI infrastructure they deployed saved us 40 hours a week in manual admin. The ROI was visible in 14 days.\"", metric: "+45%", color: "#4ADE80" },
        { name: "Sarah Jenkins", role: "Owner, The Hearth", quote: "\"We went from invisible to #1 on Google Maps in Soho within two months. Our direct bookings are at an all-time high.\"", metric: "+112%", color: "#00F0FF" },
        { name: "Leo Zhang", role: "Marketing Dir, Silk Road", quote: "\"The content quality is cinema-grade. Our Reels are consistently hitting over 500k views without any ad spend.\"", metric: "+2.1M", color: "#7000FF" },
    ];
    const testimonials = pageData?.testimonials?.length > 0 ? pageData.testimonials : fallbackTestimonials;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] overflow-x-clip">
            {/* Background blobs */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-40" style={{ background: "rgba(112,0,255,0.2)", filter: "blur(128px)", animation: "blob 7s infinite" }} />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: "rgba(0,240,255,0.2)", filter: "blur(128px)", animation: "blob 7s infinite" }} />
            </div>

            <main className="relative z-10 pt-24 md:pt-40">

                {/* ── Hero ── */}
                <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                    <div className="text-center max-w-5xl mx-auto">
                        <motion.h1 {...FU(0)} className="text-[clamp(3rem,8vw,6rem)] font-black leading-[1.05] tracking-tighter mb-8 text-white whitespace-pre-line">
                            {pageData?.heroHeadline || (
                                <>Systems That Speak To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Dining Intent</span></>
                            )}
                        </motion.h1>
                        <motion.p {...FU(0.15)} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 whitespace-pre-line">
                            {pageData?.heroSubtext || "We don't sell hours. We deploy productized, AI-driven infrastructure designed to turn local search volume into guaranteed seated diners."}
                        </motion.p>
                        <motion.div {...FU(0.3)}>
                            <Link href="/audit" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF]/20 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-1">
                                Get Your Free Audit
                                <span className="material-icons-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ── Services Loop ── */}
                {safeServicesData.map((s: any, index: number) => {
                    const idx = index + 1;
                    const isEven = idx % 2 === 0;
                    
                    // We'll alternate accent colors for visual variety
                    const colors = ["#7000FF", "#00F0FF", "#4ADE80", "#FACC15"];
                    const accent = colors[index % colors.length];

                    return (
                        <section key={idx} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
                            {/* Ambient glow based on accent color */}
                            <div className="absolute inset-0 blur-[120px] rounded-full z-0 opacity-10 pointer-events-none" style={{ backgroundColor: accent, top: isEven ? '20%' : '10%', left: isEven ? '10%' : 'auto', right: isEven ? 'auto' : '10%', width: '30%', height: '50%' }} />
                            
                            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                                <motion.div {...FL(0)} className={isEven ? "order-2 lg:order-1" : ""}>
                                    <span className="font-mono text-sm tracking-widest uppercase mb-4 block" style={{ color: accent }}>0{idx}. Service</span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s.title}</h2>
                                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                        {s.shortDescription}
                                    </p>
                                    {s.features && s.features.length > 0 && (
                                        <ul className="space-y-4">
                                            {s.features.map((item: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-[#E2E8F0]">
                                                    <span className="material-icons-outlined" style={{ color: accent }}>check_circle</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                                <motion.div {...FR(0.15)} className={`relative group flex justify-center items-center w-full min-h-[400px] ${isEven ? "order-1 lg:order-2" : ""}`}>
                                    {s.image1Url && s.image2Url ? (
                                        // Staggered two-image design (from viral content style)
                                        <div className="flex justify-center gap-4 relative w-full items-center">
                                            <div className="relative w-32 md:w-40 h-72 md:h-80 bg-black rounded-[2rem] border-[4px] border-gray-800 shadow-2xl overflow-hidden mt-6 rotate-[-5deg] opacity-70">
                                                <img src={s.image1Url} alt={s.title} className="w-full h-full object-cover opacity-60" />
                                            </div>
                                            <div className="relative w-40 md:w-48 h-80 md:h-96 bg-black rounded-[2.5rem] border-[4px] border-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 ring-2 ring-opacity-30" style={{ '--tw-ring-color': accent } as React.CSSProperties}>
                                                <img src={s.image2Url} alt={`${s.title} main`} className="w-full h-full object-cover" />
                                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    ) : (
                                        // Single image design
                                        <div className="relative w-full max-w-md h-80 md:h-[450px] bg-[#111116] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden z-10 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all">
                                            {s.image1Url ? (
                                                <img src={s.image1Url} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            ) : (
                                                <div className="w-full h-full bg-[#1A1A22] flex flex-col items-center justify-center text-gray-500 gap-4">
                                                    <span className="material-icons-outlined text-5xl opacity-50">image</span>
                                                    <span className="text-xs uppercase tracking-widest opacity-50 font-mono">Image required</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </section>
                    );
                })}

                {/* ── Disruption Statement ── */}
                <section className="py-32 my-12 bg-black flex items-center justify-center text-center px-6">
                    <motion.h2 {...FU(0)} className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-gray-800">
                        We Don't Work With <br />
                        <span className="text-white">Dentists or Plumbers.</span>
                    </motion.h2>
                </section>

                {/* ── Proof ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <motion.h3 {...FU(0)} className="text-3xl font-black mb-16 text-center text-white tracking-tight">Engineered for Results</motion.h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t: any, i: number) => (
                            <motion.div key={i} {...FU(i * 0.1)} className="bg-[#111116] border border-white/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-xl" style={{ borderColor: `${t.color || '#4ADE80'}20` }}>
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="font-bold" style={{ color: t.color || '#4ADE80' }}>{t.metric}</span>
                                </div>
                                <p className="text-[#E2E8F0] italic mb-8 leading-relaxed whitespace-pre-line">{t.quote}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-800" />
                                    <div>
                                        <h5 className="font-bold text-white">{t.name}</h5>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Audit CTA ── */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto bg-[#111116] border border-white/10 rounded-[2rem] p-12 relative overflow-hidden backdrop-blur-xl text-center shadow-2xl">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7000FF]/20 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00F0FF]/10 blur-[100px] rounded-full" />
                        <div className="relative z-10">
                            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight mb-4 text-white leading-tight">
                                Enhance Your Brand Potential. <br /><span className="text-[#7000FF]">At No Cost!</span>
                            </h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Request a free infrastructure audit. We'll show you exactly where your digital leaks are and how to plug them with AI.</p>
                            <form className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = "/contact"; }}>
                                <input required className="bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:border-[#7000FF] outline-none transition-all text-white placeholder:text-gray-600" placeholder="Business Name" type="text" />
                                <input required className="bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:border-[#7000FF] outline-none transition-all text-white placeholder:text-gray-600" placeholder="Work Email" type="email" />
                                <button type="submit" className="sm:col-span-2 bg-[#7000FF] hover:bg-[#7000FF]/80 text-white font-black py-5 rounded-xl shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all uppercase tracking-widest text-sm mt-2">
                                    Request System Audit
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 mt-6 tracking-widest uppercase">Limited to 3 new infrastructure deployments per month.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
