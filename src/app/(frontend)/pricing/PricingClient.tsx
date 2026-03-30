"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FU = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function PricingClient({ data }: { data: any }) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const fallbackFaqs = [
        {
            question: "How fast will we see a return on investment?",
            answer: "Most partners see positive ROI within the first 45 days. Our infrastructure is built to capture 'low hanging fruit' like automated review recovery and database reactivation within the first 72 hours of going live."
        },
        {
            question: "Does this require our POS credentials?",
            answer: "We use official API integrations for major POS systems (Toast, Square, etc.) to securely read data. We never require root passwords, and our systems are strictly read-only for analytics and trigger events."
        },
        {
            question: "Is video production included in the plans?",
            answer: "Basic viral content strategy and templates are included. Full on-location cinematic production is available as an add-on or included in custom Enterprise tiers depending on your market."
        }
    ];

    const displayFaqs = data?.faqs?.length > 0 ? data.faqs : fallbackFaqs;

    // Mapping default static tiers
    const fallbackTiers = [
        {
            name: "Starter",
            description: "Essential growth tools for single-location venues.",
            price: "$399",
            isPopular: false,
            features: [
                "Direct POS Integration",
                "Basic AI Automation",
                "Standard Support (24h)"
            ],
            ctaText: "Get Started"
        },
        {
            name: "Growth Engine",
            description: "Optimized for high-volume groups and scaling brands.",
            price: "$999",
            isPopular: true,
            features: [
                "Priority Infrastructure",
                "Full AI & Search Engine Ops",
                "24/7 Priority Concierge",
                "Growth Analytics Dashboard"
            ],
            ctaText: "Start Growing"
        },
        {
            name: "Scale & Dominate",
            description: "The ultimate weapon for multi-unit dominance.",
            price: "$2,999",
            isPopular: false,
            features: [
                "Custom Scale Strategy",
                "Dedicated Growth Engineer",
                "White-glove Onboarding"
            ],
            ctaText: "Contact Sales"
        }
    ];

    const displayTiers = data?.tiers?.length > 0 ? data.tiers : fallbackTiers;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] font-sans selection:bg-[#00F0FF]/30 overflow-x-hidden">

            {/* Background ambient glow */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.05),transparent_50%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_bottom_left,rgba(112,0,255,0.05),transparent_50%)]"></div>
            </div>

            <main className="relative z-10 pt-32 md:pt-40 pb-24">

                {/* Hero Section */}
                <section className="relative px-6 mb-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1 {...FU(0)} className="text-[clamp(3rem,8vw,5.5rem)] font-black tracking-tighter leading-[1.05] mb-6 text-white whitespace-pre-line">
                            {data?.heroHeadline || "CHOOSE YOUR\nREVENUE ENGINE"}
                        </motion.h1>
                        <motion.p {...FU(0.15)} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            {data?.heroSubtext || "Productized growth infrastructure engineered exclusively for modern hospitality brands looking to scale with military precision."}
                        </motion.p>
                    </div>
                </section>

                {/* Core Pricing Cards */}
                <section className="px-6 py-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {displayTiers.map((tier: any, index: number) => {
                            if (tier.isPopular) {
                                return (
                                    <motion.div key={index} {...FU(0.1)} className="relative bg-[#111116] border border-[#00F0FF]/50 p-10 rounded-2xl flex flex-col h-full md:scale-105 z-20 shadow-[0_0_30px_rgba(0,240,255,0.15)] backdrop-blur-xl">
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#00F0FF]/10 to-[#7000FF]/10 blur-xl rounded-2xl"></div>
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00F0FF] text-black px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.5)] whitespace-nowrap">
                                            MOST POPULAR
                                        </div>
                                        <div className="mb-8 mt-2">
                                            <h3 className="text-3xl font-bold mb-2 text-[#00F0FF]">{tier.name}</h3>
                                            <p className="text-[#E2E8F0] text-sm">{tier.description}</p>
                                        </div>
                                        <div className="mb-8 flex items-baseline gap-1">
                                            <span className="text-6xl font-black text-white">{tier.price}</span>
                                            {tier.price.toLowerCase() !== "custom" && <span className="text-gray-400 font-medium">/mo</span>}
                                        </div>
                                        <ul className="space-y-5 mb-10 flex-grow">
                                            {tier.features?.map((feature: string, fIdx: number) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-white">
                                                    {fIdx === 0 ? (
                                                        <span className="material-icons-outlined text-[#00F0FF] text-xl drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">bolt</span>
                                                    ) : (
                                                        <span className="material-icons-outlined text-[#4ADE80] text-xl">check_circle</span>
                                                    )}
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={"/contact?tier=" + tier.name.toLowerCase().replace(" ", "")} className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center inline-block">{tier.ctaText || "Start Growing"}</Link>
                                    </motion.div>
                                );
                            } else {
                                return (
                                    <motion.div key={index} {...FU(index * 0.1)} className="bg-[#111116] border border-white/10 p-8 rounded-2xl flex flex-col h-full backdrop-blur-xl">
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                                            <p className="text-gray-400 text-sm">{tier.description}</p>
                                        </div>
                                        <div className="mb-8 flex items-baseline gap-1">
                                            <span className="text-5xl font-black text-white">{tier.price}</span>
                                            {tier.price.toLowerCase() !== "custom" && <span className="text-gray-400 font-medium">/mo</span>}
                                        </div>
                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {tier.features?.map((feature: string, fIdx: number) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-sm text-[#E2E8F0]">
                                                    <span className="material-icons-outlined text-[#4ADE80] text-xl">check_circle</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={"/contact?tier=" + tier.name.toLowerCase().replace(" ", "")} className="w-full py-4 border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold transition-all text-center inline-block">{tier.ctaText || "Get Started"}</Link>
                                    </motion.div>
                                );
                            }
                        })}
                    </div>

                    {/* Enterprise Banner */}
                    <div className="mt-12 bg-[#111116] border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7000FF]/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="flex items-center gap-6 relative z-10">
                            <div className="size-16 bg-[#7000FF]/10 rounded-xl flex items-center justify-center border border-[#7000FF]/30">
                                <span className="material-icons-outlined text-[#7000FF] text-3xl">hub</span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">Enterprise AI</h4>
                                <p className="text-gray-400 text-base max-w-xl mt-1">Custom solutions for global hospitality groups and massive franchise networks.</p>
                            </div>
                        </div>
                        <Link href="/contact?tier=enterprise" className="w-full md:w-auto px-8 py-4 bg-[#7000FF] hover:bg-[#7000FF]/80 text-white font-bold rounded-xl transition-all whitespace-nowrap relative z-10 shadow-[0_0_20px_rgba(112,0,255,0.3)] text-center inline-block">
                            Get a Custom Quote
                        </Link>
                    </div>
                </section>

                {/* Feature Matrix */}
                <section className="py-32 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-white font-bold">Comprehensive Matrix</h2>
                        <p className="text-gray-400 mt-4 text-lg">Compare exactly what is included in each growth tier.</p>
                    </div>

                    <div className="hidden md:block w-full overflow-x-auto scrollbar-hide">
                        <table className="w-full min-w-[900px] text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 font-medium text-gray-400 w-1/4">Features</th>
                                    <th className="py-6 font-bold text-center text-white text-xl">Starter</th>
                                    <th className="py-6 font-bold text-center text-[#00F0FF] text-xl">Growth Engine</th>
                                    <th className="py-6 font-bold text-center text-white text-xl">Scale & Dominate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Section 1 */}
                                <tr>
                                    <td className="py-8 font-bold text-gray-500 text-xs uppercase tracking-widest bg-[#0F0F13] sticky left-0 z-10" colSpan={4}>Web & Infrastructure</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-base text-[#E2E8F0] font-medium bg-[#0F0F13] sticky left-0 z-10 pl-4">Responsive Booking Engine</td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-base text-[#E2E8F0] font-medium bg-[#0F0F13] sticky left-0 z-10 pl-4">CDN Edge Delivery</td>
                                    <td className="text-center py-4 text-gray-600 font-bold">—</td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                </tr>

                                {/* Section 2 */}
                                <tr>
                                    <td className="py-8 font-bold text-gray-500 text-xs uppercase tracking-widest bg-[#0F0F13] sticky left-0 z-10" colSpan={4}>AI & Search Dominance</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-base text-[#E2E8F0] font-medium bg-[#0F0F13] sticky left-0 z-10 pl-4">Automated Review Replies</td>
                                    <td className="text-center py-4 text-gray-600 font-bold">—</td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-base text-[#E2E8F0] font-medium bg-[#0F0F13] sticky left-0 z-10 pl-4">Hyper-Local SEO Dominance</td>
                                    <td className="text-center py-4 text-gray-600 font-bold">—</td>
                                    <td className="text-center py-4 text-gray-600 font-bold">—</td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 text-base text-[#E2E8F0] font-medium bg-[#0F0F13] sticky left-0 z-10 pl-4">Agentic SMS Reactivation</td>
                                    <td className="text-center py-4 text-gray-600 font-bold">—</td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                    <td className="text-center py-4"><span className="material-icons-outlined text-[#4ADE80] font-bold">check</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Matrix Cards */}
                    <div className="md:hidden flex flex-col gap-6">
                        {[
                            { name: "Responsive Booking Engine", s: "check", g: "check", d: "check" },
                            { name: "CDN Edge Delivery", s: "—", g: "check", d: "check" },
                            { name: "Automated Review Replies", s: "—", g: "check", d: "check" },
                            { name: "Hyper-Local SEO Dominance", s: "—", g: "—", d: "check" },
                            { name: "Agentic SMS Reactivation", s: "—", g: "check", d: "check" },
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#111116] border border-white/10 rounded-xl p-6">
                                <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">{feature.name}</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Starter</span>
                                        {feature.s === "check" ? <span className="material-icons-outlined text-[#4ADE80] font-bold text-lg">check</span> : <span className="text-gray-600 font-bold">—</span>}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#00F0FF]">Growth Engine</span>
                                        {feature.g === "check" ? <span className="material-icons-outlined text-[#4ADE80] font-bold text-lg">check</span> : <span className="text-gray-600 font-bold">—</span>}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white">Scale & Dominate</span>
                                        {feature.d === "check" ? <span className="material-icons-outlined text-[#4ADE80] font-bold text-lg">check</span> : <span className="text-gray-600 font-bold">—</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Growth Guarantees (Bonuses) */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#111116] border border-white/10 p-8 rounded-2xl flex flex-col justify-center text-center items-center hover:bg-white/[0.03] transition-colors">
                            <span className="material-icons-outlined text-[#00F0FF] mb-6 text-5xl">sync_alt</span>
                            <h3 className="text-2xl font-bold mb-3 text-white">Direct POS Integration</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Seamless hookups to Toast, Square, and Aloha to turn raw data into actionable revenue strategies.</p>
                        </div>
                        <div className="bg-[#111116] border border-white/10 p-8 rounded-2xl flex flex-col justify-center text-center items-center hover:bg-white/[0.03] transition-colors">
                            <span className="material-icons-outlined text-[#00F0FF] mb-6 text-5xl">event_available</span>
                            <h3 className="text-2xl font-bold mb-3 text-white">Cancel Anytime</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">No hostage 12-month agency retainers. We earn your business every single month through performance.</p>
                        </div>
                        <div className="bg-[#111116] border border-white/10 p-8 rounded-2xl flex flex-col justify-center text-center items-center hover:bg-white/[0.03] transition-colors">
                            <span className="material-icons-outlined text-[#00F0FF] mb-6 text-5xl">restaurant</span>
                            <h3 className="text-2xl font-bold mb-3 text-white">100% Hospitality Focus</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">We don't work with plumbers or dentists. Just restaurants, bars, and hospitality groups.</p>
                        </div>
                    </div>
                </section>

                {/* Competitor Comparison Matrix */}
                <section className="py-32 px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-white font-bold">RestauReach vs. The Rest</h2>
                        <p className="text-gray-400 mt-4 text-lg">Why specialized infrastructure beats generalist agencies.</p>
                    </div>

                    <div className="hidden lg:block w-full overflow-x-auto scrollbar-hide rounded-2xl border border-white/10">
                        <table className="w-full min-w-[1000px] text-left border-collapse">
                            <thead>
                                <tr className="bg-[#111116] border-b border-white/10 text-xs font-bold uppercase tracking-widest text-[#00F0FF]">
                                    <th className="py-6 pl-6">Provider</th>
                                    <th className="py-6 text-center">Hospitality Focus</th>
                                    <th className="py-6 text-center">AI Automation</th>
                                    <th className="py-6 text-center">Execution Speed</th>
                                    <th className="py-6 text-center">Cost Efficiency</th>
                                    <th className="py-6 pr-6 text-center text-white bg-white/5 border-l border-white/10">Revenue Scaling</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-[#0F0F13]">
                                {/* RestauReach - The Winner */}
                                <tr className="bg-white/[0.04] border-l-4 border-l-[#4ADE80] shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                                    <td className="py-6 pl-5 font-bold text-white text-lg flex items-center gap-2">
                                        <span className="material-icons-outlined text-[#00F0FF]">bolt</span>
                                        RestauReach
                                    </td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-[#4ADE80] font-bold text-2xl">check</span></td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-[#4ADE80] font-bold text-2xl">check</span></td>
                                    <td className="text-center py-6 font-bold text-[#4ADE80]">Fast (2 Weeks)</td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-[#4ADE80] font-bold text-2xl">check</span></td>
                                    <td className="text-center py-6 pr-6 bg-white/[0.02] border-l border-white/5"><span className="material-icons-outlined text-[#4ADE80] font-bold text-3xl drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">check_circle</span></td>
                                </tr>
                                {/* Competitor 1 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6 pl-6 font-medium text-[#E2E8F0]">In-House Marketing</td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-gray-400">check</span></td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">Moderate</td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6 pr-6 border-l border-white/5"><span className="text-gray-500 font-bold">—</span></td>
                                </tr>
                                {/* Competitor 2 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6 pl-6 font-medium text-[#E2E8F0]">Traditional Agencies</td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">Slow (Months)</td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">Very Low</td>
                                    <td className="text-center py-6 pr-6 border-l border-white/5"><span className="material-icons-outlined text-gray-400">check</span></td>
                                </tr>
                                {/* Competitor 3 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6 pl-6 font-medium text-[#E2E8F0]">Freelancers</td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">Varies</td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">Varies</td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-gray-400">check</span></td>
                                    <td className="text-center py-6 pr-6 border-l border-white/5"><span className="text-red-500 font-bold">X</span></td>
                                </tr>
                                {/* Competitor 4 */}
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6 pl-6 font-medium text-[#E2E8F0]">DIY / Templates</td>
                                    <td className="text-center py-6 text-gray-500 text-sm font-medium">N/A</td>
                                    <td className="text-center py-6"><span className="text-red-500 font-bold">X</span></td>
                                    <td className="text-center py-6 font-bold text-[#4ADE80]">Instant</td>
                                    <td className="text-center py-6"><span className="material-icons-outlined text-[#4ADE80] font-bold text-2xl">check</span></td>
                                    <td className="text-center py-6 pr-6 border-l border-white/5"><span className="text-red-500 font-bold">X</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Comparison Cards */}
                    <div className="lg:hidden flex flex-col gap-6">
                        {[
                            { name: "RestauReach", focus: true, auto: true, speed: "Fast (2 Weeks)", speedColor: "text-[#4ADE80]", cost: true, scale: true, isWinner: true },
                            { name: "In-House Marketing", focus: true, auto: false, speed: "Moderate", speedColor: "text-gray-400", cost: false, scale: false },
                            { name: "Traditional Agencies", focus: false, auto: false, speed: "Slow (Months)", speedColor: "text-gray-400", cost: false, scale: true },
                            { name: "Freelancers", focus: "varies", auto: false, speed: "Varies", speedColor: "text-gray-400", cost: true, scale: false },
                            { name: "DIY / Templates", focus: "n/a", auto: false, speed: "Instant", speedColor: "text-[#4ADE80]", cost: true, scale: false },
                        ].map((comp, i) => (
                            <div key={i} className={`bg-[#111116] border ${comp.isWinner ? 'border-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.15)]' : 'border-white/10'} rounded-xl p-6`}>
                                <h4 className={`font-bold mb-4 border-b border-white/10 pb-3 flex items-center gap-2 ${comp.isWinner ? 'text-[#00F0FF] text-xl' : 'text-white'}`}>
                                    {comp.isWinner && <span className="material-icons-outlined">bolt</span>}
                                    {comp.name}
                                </h4>
                                <div className="space-y-4 text-sm mt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Hospitality Focus</span>
                                        <span className="font-bold">
                                            {comp.focus === true ? <span className="material-icons-outlined text-[#4ADE80]">check</span> : comp.focus === false ? <span className="text-red-500">X</span> : <span className="text-gray-500 capitalize">{typeof comp.focus === 'string' ? comp.focus : ''}</span>}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">AI Automation</span>
                                        <span className="font-bold">
                                            {comp.auto ? <span className="material-icons-outlined text-[#4ADE80]">check</span> : <span className="text-red-500">X</span>}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Execution Speed</span>
                                        <span className={`font-bold ${comp.speedColor}`}>{comp.speed}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Cost Efficiency</span>
                                        <span className="font-bold">
                                            {comp.cost ? <span className="material-icons-outlined text-[#4ADE80]">check</span> : <span className="text-red-500">X</span>}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-white/5">
                                        <span className="text-white font-medium">Revenue Scaling</span>
                                        <span className="font-bold">
                                            {comp.scale ? <span className="material-icons-outlined text-[#4ADE80] text-xl">check_circle</span> : <span className="text-gray-500">—</span>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Accordion */}
                <section className="py-24 px-6 max-w-3xl mx-auto">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight text-white font-bold text-center mb-12">Common Inquiries</h2>
                    <div className="space-y-4">
                        {displayFaqs.map((faq: any, index: number) => (
                            <div key={index} className="bg-[#111116] border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <h4 className="font-bold text-white text-lg">{faq.question}</h4>
                                    <span className={`material-icons-outlined text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-400 text-base leading-relaxed border-t border-white/5 pt-4 whitespace-pre-line">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Audit CTA */}
                <section className="py-32 px-6 max-w-7xl mx-auto">
                    <div className="bg-[#111116] border border-white/10 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl backdrop-blur-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 via-transparent to-[#7000FF]/10 opacity-50 z-0"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-[clamp(3rem,8vw,5rem)] font-black mb-6 leading-[1.1] text-white">READY TO SCALE <br />BEYOND LIMITS?</h2>
                            <p className="text-[#E2E8F0] mb-12 text-lg md:text-xl font-light">Claim your complimentary Growth Audit. We'll analyze your current footprint and show you exactly where the revenue leaks are.</p>

                            <Link href="/audit" className="bg-[#00F0FF] text-black px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.4)] inline-block">
                                Request Your Free Growth Audit
                            </Link>

                            <p className="mt-8 text-[10px] md:text-xs text-[#00F0FF] font-bold tracking-widest uppercase">No Commitment Required • Limited Slots Available</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
