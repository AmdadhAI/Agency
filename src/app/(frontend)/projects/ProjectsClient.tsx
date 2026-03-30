"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SanityProject = {
    _id: string;
    clientName: string;
    slug: string;
    serviceCategories?: string[];
    metricBadge?: string;
    hook?: string;
    heroImage?: string;
    heroVideo?: string;
    heroMediaType?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FILTERS = [
    { id: "all", label: "All Projects" },
    { id: "website-design", label: "Website Design" },
    { id: "facebook-ads", label: "Meta / Facebook Ads" },
    { id: "social-media", label: "Social Media" },
    { id: "local-seo", label: "Local SEO" },
    { id: "content-creation", label: "Content Creation" },
    { id: "brand-identity", label: "Brand Identity" },
];

const getCardLayout = (index: number) => {
    const layouts = [
        { span: "col-span-12 md:col-span-8", height: "h-[500px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-4", height: "h-[500px]", variant: "dashboard" as const },
        { span: "col-span-12 md:col-span-4", height: "h-[460px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-8", height: "h-[460px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-6", height: "h-[400px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-6", height: "h-[400px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-4", height: "h-[380px]", variant: "image" as const },
        { span: "col-span-12 md:col-span-8", height: "h-[380px]", variant: "image" as const },
    ];
    return layouts[index % layouts.length];
};

const getMetricColor = (index: number) => {
    const colors = ["#4ADE80", "#00F0FF", "#7000FF", "#E91E63"];
    return colors[index % colors.length];
}

// ─── Stat ─────────────────────────────────────────────────────────────────────

function StatPill({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white">{value}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">{label}</p>
        </div>
    );
}

// ─── Dashboard Mockup (for OmniSearch card) ──────────────────────────────────

function DashboardMockup() {
    return (
        <div className="p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md space-y-4">
            <div className="flex items-end gap-1.5 h-24">
                <div className="flex-1 bg-[#4ADE80]/20 rounded-t h-[30%]" />
                <div className="flex-1 bg-[#4ADE80]/40 rounded-t h-[50%]" />
                <div className="flex-1 bg-[#4ADE80]/60 rounded-t h-[75%]" />
                <div className="flex-1 bg-[#4ADE80] rounded-t h-[100%] drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Live Traffic</span>
                </div>
                <span className="text-[#4ADE80] text-lg font-bold font-mono">14.2k</span>
            </div>
        </div>
    );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: SanityProject; index: number }) {
    const layout = getCardLayout(index);
    const metricColor = getMetricColor(index);
    const isDashboard = layout.variant === "dashboard";

    // Create a generic fallback image if none provided
    const displayImage = project.heroMediaType === 'video' ? undefined : (project.heroImage || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80");
    const displayLabel = project.serviceCategories?.[0]?.replace(/-/g, ' ') || "Case Study";

    return (
        <Link href={`/projects/${project.slug}`} className={`block ${layout.span} ${layout.height}`}>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`w-full h-full group relative rounded-2xl overflow-hidden bg-[#111116] border border-white/10 cursor-pointer`}
            >
                {/* Background */}
                {isDashboard ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-[#0F0F13]/20 to-transparent z-0" />
                ) : (
                    <>
                        {project.heroMediaType === 'video' && project.heroVideo ? (
                            <div className="absolute inset-0 z-0">
                                <video
                                    src={project.heroVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ) : (
                            displayImage && <img src={displayImage} alt={project.clientName} className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 z-0" />
                    </>
                )}

                {/* Metric badge */}
                {project.metricBadge && (
                    <div
                        className="absolute top-5 left-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur-sm"
                        style={{ backgroundColor: `${metricColor}18`, color: metricColor, borderColor: `${metricColor}35` }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: metricColor }} />
                        {project.metricBadge}
                    </div>
                )}

                {/* Dashboard variant inner layout */}
                {isDashboard && (
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                        <div className="pt-10">
                            <DashboardMockup />
                        </div>
                        <div>
                            <p className="text-[#00F0FF] text-[10px] font-bold uppercase tracking-widest mb-1">{displayLabel}</p>
                            <h3 className="text-2xl font-black text-white mb-1">{project.clientName}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.hook || "Read the full case study breakdown."}</p>
                        </div>
                    </div>
                )}

                {/* Image variant bottom content */}
                {!isDashboard && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <p className="text-[#00F0FF] text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">{displayLabel}</p>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">
                            {project.clientName}
                        </h3>
                        {project.hook && (
                            <p className="text-sm text-gray-400 font-medium mb-2 line-clamp-1">{project.hook}</p>
                        )}
                        <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">Full Breakdown</span>
                            <span className="material-icons-outlined text-[#00F0FF] text-sm">arrow_forward</span>
                        </div>
                    </div>
                )}
            </motion.div>
        </Link>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsClient({ initialProjects }: { initialProjects: SanityProject[] }) {
    const [activeFilter, setActiveFilter] = useState("all");
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const filtered = activeFilter === "all"
        ? initialProjects
        : initialProjects.filter(p => p.serviceCategories?.includes(activeFilter));

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] overflow-x-hidden">

            {/* Background ambient blobs */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-40" style={{ background: "rgba(112,0,255,0.2)", filter: "blur(128px)" }} />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: "rgba(0,240,255,0.15)", filter: "blur(128px)" }} />
            </div>

            <main className="relative z-10">

                {/* ── Hero ── */}
                <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                            className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-6"
                        >
                            The Revenue Ledger
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-tighter font-black text-white mb-8"
                        >
                            $12M+<br />
                            <span className="text-[#4ADE80]">TRACKED REVENUE</span><br />
                            GENERATED.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            We don't build portfolios for other designers to look at. We build growth systems that dominate local markets.
                        </motion.p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/5 w-full max-w-3xl"
                    >
                        <StatPill value="$12M+" label="Revenue Generated" />
                        <StatPill value="47" label="Brands Scaled" />
                        <StatPill value="3.8x" label="Average ROAS" />
                        <StatPill value="90d" label="Avg Time to Results" />
                    </motion.div>
                </section>

                {/* ── Sticky Filter Bar ── */}
                <div className="sticky top-[72px] z-30 py-4 px-6" style={{ background: "rgba(15,15,19,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
                        {FILTERS.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === f.id
                                    ? "bg-[#7000FF] text-white border-[#7000FF] font-bold shadow-[0_0_20px_rgba(112,0,255,0.3)]"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/30"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Bento Grid ── */}
                <section className="px-6 py-16 max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="grid grid-cols-12 gap-6 relative">
                            {filtered.map((p, i) => <ProjectCard key={p._id} project={p} index={i} />)}
                        </motion.div>
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <div className="text-center py-32 text-gray-600">
                            <span className="material-icons-outlined text-6xl mb-4 block">search_off</span>
                            <p className="text-xl font-bold">No projects found in this category.</p>
                        </div>
                    )}
                </section>

                {/* ── Mid-page Disruptor Quote ── */}
                <section className="w-full py-28 bg-white/[0.02] border-y border-white/5 overflow-hidden relative my-8">
                    <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-[#7000FF]/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-[#00F0FF]/8 blur-[120px] rounded-full pointer-events-none" />
                    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                            We don't track <span className="text-gray-600">likes</span>, <span className="text-gray-600">impressions</span> or <span className="text-gray-600">awards</span>.<br />
                            We track <span className="text-[#4ADE80]">seated covers</span>, average order value, and <span className="text-[#00F0FF]">POS swipes</span>.
                        </h2>
                    </div>
                </section>

                {/* ── Inline Lead Capture CTA ── */}
                <section className="max-w-4xl mx-auto px-6 py-24">
                    <div className="p-8 md:p-16 rounded-[2rem] bg-[#111116] border border-white/10 relative overflow-hidden text-center">
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7000FF]/20 blur-[100px] rounded-full" />
                        <div className="relative z-10">
                            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white mb-4 tracking-tight leading-tight">
                                Ready for your own case study?
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                We're looking for ambitious hospitality brands this quarter to scale using our validated growth engine.
                            </p>
                            <form
                                className="space-y-4 max-w-2xl mx-auto"
                                onSubmit={(e) => { e.preventDefault(); window.location.href = "/audit"; }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input required className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-[#7000FF] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="Full Name" type="text" />
                                    <input required className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-[#7000FF] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="Business Email" type="email" />
                                </div>
                                <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-[#7000FF] focus:border-transparent outline-none transition-all placeholder:text-gray-600" placeholder="Restaurant / Group Name" type="text" />
                                <button type="submit" className="w-full bg-[#7000FF] hover:bg-[#7000FF]/80 hover:shadow-[0_0_40px_rgba(112,0,255,0.4)] text-white font-black text-lg py-5 rounded-xl transition-all uppercase tracking-widest mt-4">
                                    Run Revenue Audit Now
                                </button>
                            </form>
                            <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-widest">Limited availability. We only work with brands we can guarantee results for.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
