"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ─── Pure-CSS phone mockup: Fine Dining ───────────────────────────────────
function PhoneFineDining() {
    return (
        <div className="w-[220px] h-[440px] shrink-0 bg-[#111] border-[8px] border-gray-800 rounded-[2.8rem] shadow-2xl overflow-hidden relative rotate-[5deg] flex flex-col">
            <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                <div className="w-20 h-4 bg-black rounded-b-xl" />
            </div>
            <div className="w-full h-full bg-[#1A1A1A] p-4 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#39FF14] bg-[#39FF14]/10 flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.6)]">
                    <span className="material-icons-outlined text-[#39FF14] text-2xl">check</span>
                </div>
                <div className="text-center">
                    <p className="text-white font-bold text-sm mb-1">Table Confirmed</p>
                    <p className="text-[#39FF14] text-xs bg-[#39FF14]/10 px-3 py-0.5 rounded-full border border-[#39FF14]/30">VIP Guest • 8:00 PM</p>
                </div>
                <div className="w-full bg-white/5 rounded-xl p-3">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="w-7 h-7 bg-gray-700 rounded-full shrink-0" />
                        <div className="flex-1 space-y-1.5">
                            <div className="w-full h-1.5 bg-gray-600 rounded" />
                            <div className="w-2/3 h-1.5 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="w-full h-8 bg-[#39FF14]/20 rounded-lg border border-[#39FF14]/50 flex items-center justify-center text-[#39FF14] font-bold text-xs">
                        View Details
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Pure-CSS phone mockup: Map Pack ─────────────────────────────────────
function PhoneMapPack() {
    return (
        <div className="w-[220px] h-[440px] shrink-0 bg-[#111] border-[8px] border-gray-800 rounded-[2.8rem] shadow-2xl overflow-hidden relative -rotate-[5deg] flex flex-col">
            <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                <div className="w-20 h-4 bg-black rounded-b-xl" />
            </div>
            <div
                className="flex-1 bg-[#1A1A1A] relative"
                style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "14px 14px" }}
            >
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-7 h-7">
                        <div className="absolute inset-0 bg-[#00F0FF] rounded-full animate-ping opacity-75" />
                        <div className="relative w-7 h-7 bg-[#00F0FF] rounded-full flex items-center justify-center shadow-[0_0_16px_rgba(0,240,255,1)] z-10">
                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/80 p-4 border-t border-white/10">
                <div className="w-8 h-0.5 bg-gray-600 rounded-full mx-auto mb-2" />
                <p className="text-white font-bold text-sm mb-0.5">Acme Burger</p>
                <p className="text-[#00F0FF] text-[10px] font-bold mb-3 tracking-widest uppercase">★★★★★ Top Rated</p>
                <button className="w-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 font-bold py-2 rounded-xl text-xs">
                    Order Delivery
                </button>
            </div>
        </div>
    );
}

// ─── Pure-CSS dashboard: Social ───────────────────────────────────────────
function DashboardSocial() {
    return (
        <div className="w-[300px] h-[320px] shrink-0 bg-[#0f0b1a] border border-[#7000FF]/30 rounded-[1.8rem] shadow-2xl overflow-hidden relative rotate-[4deg] flex flex-col p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#7000FF]/20 flex items-center justify-center">
                        <span className="material-icons-outlined text-[#7000FF] text-xs">trending_up</span>
                    </div>
                    <span className="text-white font-bold text-xs">Social Analytics</span>
                </div>
                <div className="text-[#7000FF] text-[10px] font-bold bg-[#7000FF]/10 px-2 py-0.5 rounded-full border border-[#7000FF]/20">Live</div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wide">Views</div>
                    <div className="text-base font-bold text-white">12.4M</div>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wide">Engagement</div>
                    <div className="text-base font-bold text-[#7000FF]">+412%</div>
                </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 46" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7000FF" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#7000FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0,46 Q10,44 20,36 T40,26 T60,16 T80,4 T100,0 L100,46 Z" fill="url(#purpleGrad)" />
                    <path d="M0,46 Q10,44 20,36 T40,26 T60,16 T80,4 T100,0" fill="none" stroke="#7000FF" strokeWidth="2" className="drop-shadow-none md:drop-shadow-[0_0_4px_#7000FF]" />
                </svg>
            </div>
        </div>
    );
}

// ─── Pure-CSS dashboard: OmniSearch ──────────────────────────────────────
function DashboardOmniSearch() {
    return (
        <div className="w-[320px] shrink-0 bg-[#07110f] border border-[#00FFFF]/25 rounded-[1.8rem] shadow-2xl overflow-hidden relative -rotate-[3deg] flex flex-col p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#00FFFF]/15 flex items-center justify-center">
                        <span className="material-icons-outlined text-[#00FFFF] text-xs">search</span>
                    </div>
                    <span className="text-white font-bold text-xs">OmniSearch</span>
                </div>
                <div className="text-[#00FFFF] text-[10px] font-bold bg-[#00FFFF]/10 px-2 py-0.5 rounded-full border border-[#00FFFF]/20">AI</div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-3">
                <span className="material-icons-outlined text-gray-500 text-sm">search</span>
                <span className="text-gray-400 text-xs">best restaurants near me…</span>
            </div>
            <div className="space-y-1.5">
                {[
                    { rank: 1, name: "Malone's Steakhouse", tag: "Top Result", hi: true },
                    { rank: 2, name: "The Golden Fork", tag: null, hi: false },
                    { rank: 3, name: "Bistro Noir", tag: null, hi: false },
                ].map((r) => (
                    <div
                        key={r.rank}
                        className="flex items-center gap-2 p-2 rounded-xl"
                        style={{
                            background: r.hi ? "rgba(0,255,255,0.07)" : "rgba(255,255,255,0.03)",
                            border: r.hi ? "1px solid rgba(0,255,255,0.2)" : "1px solid rgba(255,255,255,0.04)",
                        }}
                    >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                            style={{ background: r.hi ? "rgba(0,255,255,0.15)" : "rgba(255,255,255,0.06)", color: r.hi ? "#00FFFF" : "#9ca3af" }}>
                            {r.rank}
                        </div>
                        <p className="text-xs font-medium" style={{ color: r.hi ? "#00FFFF" : "#d1d5db" }}>{r.name}</p>
                        {r.tag && <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#00FFFF]/15 text-[#00FFFF]">{r.tag}</span>}
                    </div>
                ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] animate-pulse" />
                <span className="text-[10px] text-gray-500">Powered by AI Answer Engine</span>
            </div>
        </div>
    );
}

// ─── Shared pill ─────────────────────────────────────────────────────────
function Pill({ label, color }: { label: string; color: string }) {
    return (
        <span className="inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 self-start border"
            style={{ background: `${color}18`, borderColor: `${color}35`, color: "#e5e7eb" }}>
            {label}
        </span>
    );
}

// ─── Shared ghost button ──────────────────────────────────────────────────
function GhostBtn({ label }: { label: string }) {
    return (
        <button className="self-start mt-auto px-5 py-2 rounded-full text-xs text-white font-bold border border-white/20 hover:bg-white/10 transition-all">
            {label}
        </button>
    );
}

// ─── Card peek label (always visible at top edge when stacked) ────────────
function CardPeek({ color, title }: { color: string; title: string }) {
    return (
        <div className="absolute top-0 inset-x-0 h-[8%] min-h-[34px] flex items-center px-6 md:px-10 z-50 pointer-events-none" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2) 60%, transparent)` }}>
            <div className="w-1.5 h-1.5 rounded-full mr-3 shrink-0" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#E2E8F0] truncate">
                {title}
            </span>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectItem {
    title: string;
    clientName?: string;
    slug: { current: string };
    heroImage: string;
    projectDetails?: string;
    cardLabel?: string;
    badgeColor?: string;
    metric1Value?: string;
    metric1Label?: string;
    metric2Value?: string;
    metric2Label?: string;
    clientLocation?: string;
    clientIndustry?: string;
}

export default function ProvenGrowth({ projects = [] }: { projects?: ProjectItem[] }) {
    /**
     * PHASE TIMINGS (on a 450vh scroll track):
     *   0.00 → 0.05   Entry buffer   — section pins, nothing moves yet (~1 scroll)
     *   0.05 → 0.30   Phase 1        — Card 1 tilts back, Card 2 rises
     *   0.30 → 0.55   Phase 2        — Card 2 tilts back, Card 3 rises
     *   0.55 → 0.80   Phase 3        — Card 3 tilts back, Card 4 rises
     *   0.80 → 1.00   Exit buffer    — full deck rests (~2-3 scrolls before unpin)
     */
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // We mix dynamic projects from Sanity with default static ones ensuring 4 slots always exist
    type CardData = {
        title: string; label: string; desc: string; Component: React.FC; badgeColor: string;
        dynamicSlug?: string; dynamicImage?: string;
        m1V: string; m1L: string; m2V: string; m2L: string;
        clientName: string; location: string; industry: string;
    };
    const defaultData: CardData[] = [
        { title: "Scaling High-Ticket Reservations", label: "Fine Dining", desc: "We overhauled their booking funnel and launched targeted Meta ads, turning empty Tuesday nights into fully booked services.", Component: PhoneFineDining, badgeColor: "#39FF14", m1V: "+45%", m1L: "Reservation Volume", m2V: "3.2x", m2L: "Ad ROAS", clientName: "Le Maison Fine Dining", location: "London, UK", industry: "Fine Dining" },
        { title: "Dominating Local Delivery Search", label: "Cloud Kitchen / QSR", desc: "By monopolizing the Google Map Pack and deploying high-fidelity food reels, we drove a massive spike in direct-to-consumer orders.", Component: PhoneMapPack, badgeColor: "#00F0FF", m1V: "#1", m1L: "Map Pack Rank", m2V: "-28%", m2L: "Acquisition Cost", clientName: "Acme Ghost Kitchen", location: "New York, US", industry: "Cloud Kitchen" },
        { title: "Viral Social Footprint", label: "Social Growth", desc: "We engineered a TikTok and Instagram Reel strategy that turned their best dishes into local phenomena, driving unprecedented foot traffic.", Component: DashboardSocial, badgeColor: "#7000FF", m1V: "12M+", m1L: "Views", m2V: "+22%", m2L: "Foot Traffic", clientName: "Sakura Fusion Bistro", location: "Dubai, UAE", industry: "Casual Dining" },
        { title: "OmniSearch Domination", label: "AI-Powered SEO", desc: "We optimized for Google's AI Overview and next-gen answer engines, securing the #1 position across every AI search vertical that matters.", Component: DashboardOmniSearch, badgeColor: "#00FFFF", m1V: "Rank #1", m1L: "Local Pack", m2V: "AI Answers", m2L: "Featured Engine", clientName: "Malone's Steakhouse", location: "Chicago, US", industry: "Fine Dining" },
    ];

    // Only show cards for actual Sanity projects. Fall back to hardcoded
    // data only if Sanity returns zero projects.
    const displayProjects: CardData[] = projects.length > 0
        ? projects.map((dp, i) => ({
            ...defaultData[i % defaultData.length],
            title: dp.title || defaultData[i % defaultData.length].title,
            label: dp.cardLabel || defaultData[i % defaultData.length].label,
            desc: dp.projectDetails ? dp.projectDetails.substring(0, 150) + "..." : defaultData[i % defaultData.length].desc,
            dynamicSlug: dp.slug?.current,
            dynamicImage: dp.heroImage,
            badgeColor: dp.badgeColor || defaultData[i % defaultData.length].badgeColor,
            m1V: dp.metric1Value || defaultData[i % defaultData.length].m1V,
            m1L: dp.metric1Label || defaultData[i % defaultData.length].m1L,
            m2V: dp.metric2Value || defaultData[i % defaultData.length].m2V,
            m2L: dp.metric2Label || defaultData[i % defaultData.length].m2L,
            clientName: dp.clientName || defaultData[i % defaultData.length].clientName,
            location: dp.clientLocation || defaultData[i % defaultData.length].location,
            industry: dp.clientIndustry || defaultData[i % defaultData.length].industry,
        }))
        : defaultData;

    // ── Scale: progressive depth — each buried card is smaller than the next.
    // Card 1 shrinks the most (deepest in the stack), Card 3 the least.
    const scale1 = useTransform(scrollYProgress, [0.02, 0.33], [1, 0.85], { clamp: true });
    const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.90], { clamp: true });
    const scale3 = useTransform(scrollYProgress, [0.66, 0.99], [1, 0.94], { clamp: true });

    // ── Y: Explicitly defined from 0 to 1 to prevent Framer Motion extrapolation bugs.
    const y2 = useTransform(scrollYProgress, [0, 0.02, 0.33, 1], ["400%", "400%", "8%", "8%"]);
    const y3 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["400%", "400%", "16%", "16%"]);
    const y4 = useTransform(scrollYProgress, [0, 0.66, 0.99, 1], ["400%", "400%", "24%", "24%"]);

    // ── Darkening overlay: old card dims as it gets buried ────────────────────
    const overlay1 = useTransform(scrollYProgress, [0.02, 0.33], [0, 0.60], { clamp: true });
    const overlay2 = useTransform(scrollYProgress, [0.33, 0.66], [0, 0.60], { clamp: true });
    const overlay3 = useTransform(scrollYProgress, [0.66, 0.99], [0, 0.60], { clamp: true });

    return (
        // ── 300vh scroll track — NO overflow-hidden here ─────────────────────
        <div ref={targetRef} className="relative h-[300vh] w-full">

            {/* ── Sticky viewport — Extra padding added so header has distance from navbar ── */}
            <div className="sticky top-[72px] h-[calc(100vh-72px)] w-full flex flex-col items-center justify-start overflow-hidden bg-[#0F0F13] pt-12 md:pt-20">

                {/* Section header */}
                <div className="text-center px-4 mb-5 shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-3 border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-[10px] sm:text-xs uppercase tracking-widest font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                        Client Success
                    </div>
                    <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white mb-2">
                        Proven Growth in Hospitality
                    </h2>
                </div>

                {/* ── Card stack ── Reduced height to 470px for tighter layout ─── */}
                <div
                    className="relative w-full max-w-5xl h-[470px] px-4 sm:px-6 lg:px-0"
                    style={{ perspective: "1200px" }}
                >

                    {/* ─── Cards 1 to 4 ─── z-10 (bottom of stack) to z-40 ──────── */}
                    {displayProjects.map((p, index) => {
                        // Progressive z-index
                        const zIndex = (index + 1) * 10;

                        // Map specific scales and Y-offsets per card index
                        let motionStyle: any = { originY: 0 };
                        if (index === 0) motionStyle = { scale: scale1, zIndex };
                        else if (index === 1) motionStyle = { scale: scale2, y: y2, zIndex };
                        else if (index === 2) motionStyle = { scale: scale3, y: y3, zIndex };
                        else if (index === 3) motionStyle = { scale: 1, y: y4, zIndex };

                        // Overlays to dark bottom cards
                        const overlayOpacity = index === 0 ? overlay1 : index === 1 ? overlay2 : index === 2 ? overlay3 : null;

                        return (
                            <motion.div
                                key={index}
                                style={motionStyle}
                                className="absolute inset-0 origin-top"
                            >
                                {/* Ambient Background Glow Effect (Hidden on mobile to save GPU) */}
                                <div className="absolute inset-0 blur-[100px] scale-95 pointer-events-none -z-10 rounded-[3rem] hidden md:block" style={{ backgroundColor: `${p.badgeColor}26` }} />

                                <div className="relative w-full h-full bg-[#111111] md:bg-[#111116] md:backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50" style={{ borderColor: `${p.badgeColor}33`, boxShadow: `0 0 60px ${p.badgeColor}26` }}>
                                    <div className="absolute inset-x-0 top-0 h-px z-40" style={{ background: `linear-gradient(to right, transparent, ${p.badgeColor}66, transparent)` }} />
                                    <CardPeek color={p.badgeColor} title={p.label} />

                                    <div className="absolute inset-0 px-6 pb-5 pt-12 md:px-10 flex flex-col md:flex-row items-center gap-6">
                                        <div className="md:w-1/2 flex flex-col h-full shrink-0 z-20 justify-center">
                                            <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white mb-3">
                                                {p.title}
                                            </h3>
                                            <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] mb-4 max-w-sm">
                                                {p.desc}
                                            </p>

                                            <div className="border-t border-white/10 pt-3 flex gap-8 mb-4">
                                                <div>
                                                    <p className="font-bold text-2xl mb-1" style={{ color: p.badgeColor, textShadow: `0 0 10px ${p.badgeColor}66` }} >{p.m1V}</p>
                                                    <p className="text-[9px] text-[#A0AAB4] uppercase tracking-widest">{p.m1L}</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-2xl mb-1" style={{ color: p.badgeColor, textShadow: `0 0 10px ${p.badgeColor}66` }} >{p.m2V}</p>
                                                    <p className="text-[9px] text-[#A0AAB4] uppercase tracking-widest">{p.m2L}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 mb-3 p-2.5 rounded-xl bg-white/5 border border-white/8 w-fit">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${p.badgeColor}33` }}>
                                                    <span className="text-[10px] font-bold" style={{ color: p.badgeColor }}>★</span>
                                                </div>
                                                <div>
                                                    <p className="text-white text-[11px] font-semibold leading-none mb-0.5">{p.clientName}</p>
                                                    <p className="text-gray-500 text-[10px]">{p.location} • {p.industry}</p>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="md:w-1/2 w-full flex flex-col justify-center items-end relative z-20 gap-4">
                                            <div className="absolute inset-0 blur-[60px] rounded-full pointer-events-none hidden md:block" style={{ backgroundColor: `${p.badgeColor}1a` }} />
                                            {p.dynamicImage ? (
                                                <img src={p.dynamicImage} alt={p.title} className="w-[320px] object-cover border border-white/10 rounded-[1.8rem] shadow-2xl relative -rotate-[3deg]" style={{ maxHeight: '350px' }} />
                                            ) : (
                                                <p.Component />
                                            )}
                                            {/* CTA — bottom-right, prominent */}
                                            {p.dynamicSlug ? (
                                                <Link
                                                    href={`/projects/${p.dynamicSlug}`}
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-[1.03] group"
                                                    style={{
                                                        background: `${p.badgeColor}18`,
                                                        borderColor: `${p.badgeColor}50`,
                                                        color: p.badgeColor,
                                                        boxShadow: `0 0 20px ${p.badgeColor}20`,
                                                    }}
                                                >
                                                    Explore Full Case Study
                                                    <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href="/projects"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] group"
                                                >
                                                    View All Case Studies
                                                    <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Scroll shadow dimming */}
                                    {overlayOpacity && (
                                        <motion.div
                                            className="absolute inset-0 bg-black/80 pointer-events-none z-30"
                                            style={{ opacity: overlayOpacity }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
