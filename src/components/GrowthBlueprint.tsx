"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardBox { cx: number; top: number; bottom: number; }
interface Paths { split: string[]; converge: string[]; svgW: number; svgH: number; }

// ─── MINI-UI COMPONENTS ───────────────────────────────────────────────────────

// 1. OmniSearch (Mini Google Search)
function MiniOmniSearch() {
    return (
        <div className="w-full h-24 bg-[#111] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative shadow-inner mt-4">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <div className="h-2 w-24 bg-white/10 rounded-full" />
            </div>
            <div className="flex items-center gap-2 p-2 bg-[#1A1A1A] rounded-lg border border-[#00F0FF]/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00F0FF]/5" />
                <span className="material-icons-outlined text-[#00F0FF] text-[10px]">search</span>
                <span className="text-[#00F0FF] text-[9px] font-bold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">Rank #1 Secured</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            </div>
        </div>
    );
}

// 2. System Architecture (Loading Bar)
function MiniArchitecture() {
    return (
        <div className="w-full h-24 bg-[#111] rounded-xl border border-white/10 p-4 flex flex-col justify-center gap-3 overflow-hidden mt-4">
            <div className="flex items-center justify-between px-1">
                <span className="text-[10px] text-gray-400 font-mono">Core.js</span>
                <span className="text-[10px] text-[#39FF14] font-bold">99/100</span>
            </div>
            <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-white/5 relative">
                <div className="absolute top-0 left-0 bottom-0 w-[99%] bg-[#39FF14] rounded-full shadow-[0_0_10px_#39FF14]" />
            </div>
            <div className="flex gap-1 px-1">
                <div className="h-1 w-1/3 bg-white/10 rounded-full" />
                <div className="h-1 w-1/4 bg-white/10 rounded-full" />
            </div>
        </div>
    );
}

// 3. Agentic AI Operations (Chat Bubble)
function MiniAIOps() {
    return (
        <div className="w-full h-24 bg-[#111] rounded-xl border border-white/10 p-3 flex flex-col gap-2 overflow-hidden mt-4">
            <div className="flex gap-2 items-start self-end max-w-[85%]">
                <div className="bg-white/5 border border-white/10 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-2">
                    <div className="flex text-yellow-500 text-[8px] mb-1">★★★★★</div>
                    <div className="h-1.5 w-16 bg-white/20 rounded-full mb-1" />
                    <div className="h-1.5 w-10 bg-white/20 rounded-full" />
                </div>
                <div className="w-5 h-5 rounded-full bg-white/10 shrink-0 mt-1" />
            </div>
            <div className="flex gap-2 items-start self-start max-w-[85%]">
                <div className="w-5 h-5 rounded-full bg-[#7000FF]/20 flex items-center justify-center shrink-0 border border-[#7000FF]/30 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF] animate-pulse" />
                </div>
                <div className="bg-[#7000FF]/15 border border-[#7000FF]/30 rounded-tr-xl rounded-br-xl rounded-bl-xl p-2 relative shadow-[0_0_10px_rgba(112,0,255,0.2)]">
                    <div className="h-1.5 w-14 bg-[#7000FF]/60 rounded-full mb-1" />
                    <div className="h-1.5 w-20 bg-[#7000FF]/60 rounded-full" />
                </div>
            </div>
        </div>
    );
}

// 4. Viral Content Production (TikTok UI)
function MiniViralContent() {
    return (
        <div className="w-full h-32 bg-black rounded-xl border border-white/10 overflow-hidden relative mt-4 flex justify-center bg-gradient-to-br from-[#111] to-black">
            <div className="absolute right-2 bottom-4 flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    <span className="material-icons-outlined text-white text-[12px]">favorite</span>
                </div>
                <span className="text-[8px] font-bold text-white drop-shadow-md">1.2M</span>
                <div className="w-6 h-6 rounded-full bg-[#FF0050]/20 flex items-center justify-center border border-[#FF0050]/50 backdrop-blur-sm shadow-[0_0_10px_rgba(255,0,80,0.5)] mt-1">
                    <span className="material-icons-outlined text-[#FF0050] text-[12px]">visibility</span>
                </div>
                <span className="text-[9px] font-bold text-[#FF0050] drop-shadow-[0_0_5px_#FF0050]">12.4M</span>
            </div>
            <div className="absolute left-3 bottom-4 flex flex-col gap-1.5 w-1/2">
                <div className="h-2 w-16 bg-white/80 rounded border border-white/20" />
                <div className="h-1.5 w-24 bg-white/40 rounded" />
                <div className="h-1.5 w-12 bg-white/40 rounded" />
            </div>
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen" />
        </div>
    );
}

// 5. Scale & Dominate (Bar Chart)
function MiniScaleChart() {
    return (
        <div className="w-full h-24 bg-[#111] rounded-xl border border-white/10 p-3 mt-4 flex items-end gap-1.5 justify-between overflow-hidden relative">
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="text-[#39FF14] text-[10px] font-bold tracking-widest uppercase">ROAS</span>
                <span className="material-icons-outlined text-[#39FF14] text-[12px]">trending_up</span>
            </div>
            {[15, 25, 20, 40, 35, 60, 50, 85].map((h, i) => (
                <div
                    key={i}
                    className="w-full rounded-t-sm"
                    style={{
                        height: `${h}%`,
                        background: i === 7 ? "linear-gradient(to top, #0f380f, #39FF14)" : "rgba(255,255,255,0.05)",
                        boxShadow: i === 7 ? "0 0 10px rgba(57,255,20,0.4)" : "none",
                        borderTop: i === 7 ? "1px solid #39FF14" : "none"
                    }}
                />
            ))}
        </div>
    );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function GrowthBlueprint({ 
    blueprintSteps = [],
    title,
    subtext 
}: { 
    blueprintSteps?: any[],
    title?: string,
    subtext?: string 
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // One ref per card outer wrapper
    const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const pathLength1 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const pathLength2 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
    const pathLengthMobile = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    const glowCard1 = useTransform(scrollYProgress, [0.0, 0.2], [0, 0.4]);
    const glowRow2 = useTransform(scrollYProgress, [0.35, 0.5], [0, 0.4]);
    const glowCard5 = useTransform(scrollYProgress, [0.65, 0.8], [0, 0.4]);

    // ── Live path measurement ──────────────────────────────────────────────────
    const [paths, setPaths] = useState<Paths | null>(null);

    const measure = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const refs = cardRefs.current;
        if (refs.some(r => !r)) return;

        const cRect = container.getBoundingClientRect();
        const W = cRect.width;
        const H = container.scrollHeight;

        const box = (el: HTMLDivElement): CardBox => {
            const r = el.getBoundingClientRect();
            return {
                cx: r.left - cRect.left + r.width / 2,
                top: r.top - cRect.top,
                bottom: r.top - cRect.top + r.height,
            };
        };

        const [b1, b2, b3, b4, b5] = refs.map(r => box(r!));

        const curve = (x1: number, y1: number, x2: number, y2: number) => {
            const my = (y1 + y2) / 2;
            const safeX2 = Math.abs(x2 - x1) < 1 ? x2 + 0.5 : x2;
            return `M ${x1} ${y1} C ${x1} ${my}, ${safeX2} ${my}, ${safeX2} ${y2}`;
        };

        setPaths({
            svgW: W,
            svgH: H,
            split: [
                curve(b1.cx, b1.bottom, b2.cx, b2.top),
                curve(b1.cx, b1.bottom, b3.cx, b3.top),
                curve(b1.cx, b1.bottom, b4.cx, b4.top),
            ],
            converge: [
                curve(b2.cx, b2.bottom, b5.cx, b5.top),
                curve(b3.cx, b3.bottom, b5.cx, b5.top),
                curve(b4.cx, b4.bottom, b5.cx, b5.top),
            ],
        });
    }, []);

    useEffect(() => {
        measure();
        const obs = new ResizeObserver(measure);
        if (containerRef.current) obs.observe(containerRef.current);
        window.addEventListener('resize', measure);
        return () => { obs.disconnect(); window.removeEventListener('resize', measure); };
    }, [measure]);
    // ──────────────────────────────────────────────────────────────────────────

    const defaultCards = [
        {
            id: 1,
            title: "OmniSearch Audit",
            desc: "Discovering invisible local revenue gaps across Google, Maps, and AI answer engines.",
            ui: <MiniOmniSearch />,
            color: "#00F0FF", // Cyan
            glowControl: glowCard1,
            size: "md:w-[400px] md:scale-105" // Made larger per request
        },
        {
            id: 2,
            title: "System Architecture",
            desc: "Engineering high-converting, lightning-fast digital assets mapped to dining intent.",
            ui: <MiniArchitecture />,
            color: "#39FF14", // Green
            glowControl: glowRow2,
            size: "md:w-[320px]"
        },
        {
            id: 3,
            title: "Agentic AI Ops",
            desc: "Automating 5-star review responses, booking flows, and customer retention at scale.",
            ui: <MiniAIOps />,
            color: "#7000FF", // Purple
            glowControl: glowRow2,
            size: "md:w-[320px]"
        },
        {
            id: 4,
            title: "Viral Production",
            desc: "Shooting high-fidelity, algorithmic TikTok and Reels content that stops the scroll.",
            ui: <MiniViralContent />,
            color: "#FF0050", // TikTok Pink
            glowControl: glowRow2,
            size: "md:w-[320px]"
        },
        {
            id: 5,
            title: "Scale & Dominate",
            desc: "Deploying high-ROAS localized ad budgets to relentlessly capture market share.",
            ui: <MiniScaleChart />,
            color: "#39FF14", // Green
            glowControl: glowCard5,
            size: "md:w-[350px]"
        }
    ];

    const cards = defaultCards.map((defaultCard, index) => {
        const step = blueprintSteps?.length === 5 ? blueprintSteps[index] : null;
        return {
            ...defaultCard,
            title: step?.title || defaultCard.title,
            desc: step?.description || defaultCard.desc,
        };
    });

    const NodeCard = ({ card, refIdx }: { card: typeof cards[0]; refIdx: number }) => (
        <div
            ref={el => { cardRefs.current[refIdx] = el; }}
            className={`relative group w-full ${card.size} transition-all duration-500 [-webkit-tap-highlight-color:transparent]`}
        >
            {/* Animated Glow Backdrop */}
            <motion.div
                className="absolute -inset-4 rounded-3xl blur-[60px] z-0 transition-opacity duration-700 pointer-events-none hidden md:block"
                style={{ background: card.color, opacity: card.glowControl }}
            />
            {/* Main Card */}
            <div
                className="relative z-10 bg-[#111116] border border-white/10 rounded-3xl p-6 md:p-8 w-full shadow-2xl shadow-black/50 transition-transform duration-300 md:hover:bg-[#15151A] md:hover:-translate-y-1"
                style={{ boxShadow: `0 10px 40px rgba(0,0,0,0.8)` }}
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm" style={{ color: card.color }}>
                        0{card.id}
                    </div>
                    <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] mb-4">{card.desc}</p>
                {card.ui}
            </div>
        </div>
    );

    return (
        <section id="process" className="bg-[#0F0F13] relative py-20 overflow-hidden" ref={sectionRef}>
            {/* Header */}
            <div className="relative text-center z-40 w-full px-4 mb-16 md:mb-24">
                <h3 className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#00F0FF] mb-3 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                    The Growth Blueprint
                </h3>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white mb-2">
                    {title || "How We Engineer Revenue"}
                </h2>
                {subtext && (
                    <p className="text-base md:text-xl leading-relaxed text-[#E2E8F0] max-w-2xl mx-auto opacity-90 mt-4">
                        {subtext}
                    </p>
                )}
            </div>

            {/* 1-3-1 Diamond Layout Container */}
            <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 md:px-0 h-auto">

                {/* ─── SVG ANIMATED PIPELINE (Pixel-perfect, measured from DOM) ─── */}
                {paths && (
                    <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
                        {/* Desktop SVG — coordinates derived from actual card getBoundingClientRect */}
                        <svg
                            className="hidden md:block absolute top-0 left-0"
                            width={paths.svgW}
                            height={paths.svgH}
                            viewBox={`0 0 ${paths.svgW} ${paths.svgH}`}
                            overflow="visible"
                        >
                            <defs>
                                {/* userSpaceOnUse spans the physical SVG height so ALL paths get the full gradient */}
                                <linearGradient
                                    id="branch-grad"
                                    x1={paths.svgW / 2} y1="0"
                                    x2={paths.svgW / 2} y2={paths.svgH}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.95" />
                                    <stop offset="50%" stopColor="#7000FF" stopOpacity="0.95" />
                                    <stop offset="100%" stopColor="#39FF14" stopOpacity="0.95" />
                                </linearGradient>
                                {/*
                                    filterUnits="userSpaceOnUse" is REQUIRED here.
                                    Default objectBoundingBox units make the filter region
                                    0-wide when the path bbox width = 0 (vertical/near-vertical paths),
                                    causing those paths to be completely clipped = invisible.
                                    With userSpaceOnUse we define a fixed generous margin in pixels.
                                */}
                                <filter
                                    id="branch-glow"
                                    filterUnits="userSpaceOnUse"
                                    x={-80} y={-20}
                                    width={paths.svgW + 160}
                                    height={paths.svgH + 40}
                                >
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* SPLIT — Card 1 bottom → Cards 2, 3, 4 top */}
                            {paths.split.map((d, i) => (
                                <motion.path
                                    key={`split-${i}`} d={d}
                                    stroke="url(#branch-grad)" strokeWidth="2.5" fill="none"
                                    filter="url(#branch-glow)"
                                    style={{ pathLength: pathLength1 }}
                                />
                            ))}

                            {/* CONVERGE — Cards 2, 3, 4 bottom → Card 5 top */}
                            {paths.converge.map((d, i) => (
                                <motion.path
                                    key={`conv-${i}`} d={d}
                                    stroke="url(#branch-grad)" strokeWidth="2.5" fill="none"
                                    filter="url(#branch-glow)"
                                    style={{ pathLength: pathLength2 }}
                                />
                            ))}
                        </svg>

                        {/* Mobile — single vertical glowing line */}
                        <svg
                            className="block md:hidden absolute top-0 left-0 w-full h-full"
                            width={paths.svgW} height={paths.svgH}
                            viewBox={`0 0 ${paths.svgW} ${paths.svgH}`}
                            overflow="visible"
                        >
                            <defs>
                                <linearGradient id="mob-grad" x1={paths.svgW / 2} y1="0" x2={paths.svgW / 2} y2={paths.svgH} gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#00F0FF" />
                                    <stop offset="50%" stopColor="#7000FF" />
                                    <stop offset="100%" stopColor="#39FF14" />
                                </linearGradient>
                                <filter id="mob-glow" x="-200%" y="0%" width="500%" height="100%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            <motion.line
                                x1={paths.svgW / 2} y1="0"
                                x2={paths.svgW / 2} y2={paths.svgH}
                                stroke="url(#mob-grad)" strokeWidth="2.5"
                                filter="url(#mob-glow)"
                                style={{ pathLength: pathLengthMobile }}
                            />
                        </svg>
                    </div>
                )}

                {/* ─── 5 NODE CARDS (Diamond Flexbox Flow) ─── */}
                <div className="flex flex-col relative w-full mb-12 z-20">

                    {/* Row 1: The Input */}
                    <div className="flex justify-center w-full pt-4 pb-0">
                        <NodeCard card={cards[0]} refIdx={0} />
                    </div>

                    {/* Row 2: The Engine (3 cards side-by-side, with gap on desktop) */}
                    <div className="flex flex-col md:flex-row md:mt-[120px] mt-12 justify-between items-center gap-12 md:gap-8 w-full z-20">
                        <NodeCard card={cards[1]} refIdx={1} />
                        <NodeCard card={cards[2]} refIdx={2} />
                        <NodeCard card={cards[3]} refIdx={3} />
                    </div>

                    {/* Row 3: The Output */}
                    <div className="flex justify-center w-full md:mt-[120px] mt-12 pb-4">
                        <NodeCard card={cards[4]} refIdx={4} />
                    </div>
                </div>

            </div>
        </section >
    );
}
